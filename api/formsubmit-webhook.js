function json(res, status, body) {
  res.status(status).json(body)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { ok: false, message: 'Method not allowed' })
  }

  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const recipient = process.env.WHATSAPP_RECIPIENT
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME
  const templateLanguage = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'pt_PT'

  if (!token || !phoneNumberId || !recipient || !templateName) {
    return json(res, 503, {
      ok: false,
      message: 'WhatsApp Cloud API ainda não está configurada.'
    })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
  const data = body.form_data || body
  const nome = String(data.nome || data.name || 'Não informado').slice(0, 120)
  const email = String(data.email || 'Não informado').slice(0, 160)
  const assunto = String(data.assunto || data.subject || 'Novo pedido').slice(0, 160)
  const mensagem = String(data.mensagem || data.message || 'Sem mensagem').slice(0, 700)

  const graphVersion = process.env.WHATSAPP_GRAPH_VERSION || 'v24.0'
  const url = `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`
  const payload = {
    messaging_product: 'whatsapp',
    to: recipient,
    type: 'template',
    template: {
      name: templateName,
      language: { code: templateLanguage },
      components: [
        {
          type: 'body',
          parameters: [
            { type: 'text', text: nome },
            { type: 'text', text: email },
            { type: 'text', text: assunto },
            { type: 'text', text: mensagem }
          ]
        }
      ]
    }
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
      console.error('WhatsApp Cloud API error:', result)
      return json(res, 502, { ok: false, message: 'Falha ao enviar a notificação WhatsApp.' })
    }

    return json(res, 200, { ok: true, messageId: result.messages?.[0]?.id || null })
  } catch (error) {
    console.error('WhatsApp webhook error:', error)
    return json(res, 500, { ok: false, message: 'Erro interno ao enviar a notificação WhatsApp.' })
  }
}
