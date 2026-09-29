import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Icon from './Icon'

const WHATSAPP_NUMBER = '244953246371'
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function submit(event) {
    event.preventDefault()
    setErrorMessage('')

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      setErrorMessage('A configuração do EmailJS não foi carregada. Reinicie o servidor Vite depois de confirmar o ficheiro .env.local.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const templateParams = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      to_email: 'mizalaquetech@gmail.com',
      form_title: 'Novo pedido de orçamento — MIZALAQUETECH',
    }

    setStatus('sending')

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      )

      console.info('EmailJS enviado:', response.status, response.text)
      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('EmailJS erro completo:', error)
      const status = error?.status ? `Código ${error.status}. ` : ''
      const text = error?.text || error?.message || 'Erro desconhecido no EmailJS.'
      setStatus('error')
      setErrorMessage(`${status}${text}`)
    }
  }

  function sendWhatsApp() {
    const form = document.getElementById('contact-form')
    const data = new FormData(form)
    const message = encodeURIComponent(
      `Olá MIZALAQUETECH, gostaria de solicitar um orçamento através do site.\n\nNome: ${data.get('name')}\nEmail: ${data.get('email')}\nAssunto: ${data.get('subject')}\nMensagem: ${data.get('message')}`,
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contactos" className="section-space">
      <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-300">Contactos</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Vamos conversar sobre o seu projeto.</h2>
          <p className="mt-5 leading-7 text-slate-400">
            Conte-nos o que pretende desenvolver, melhorar ou divulgar. A nossa equipa poderá analisar a necessidade e orientar os próximos passos.
          </p>

          <div className="mt-8 space-y-3">
            <a href="mailto:mizalaquetech@gmail.com" className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[.02] p-4 text-slate-300 transition hover:border-cyan-300/20 hover:bg-white/[.04]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300"><Icon name="mail" size={19} /></span>
              <span><small className="block text-xs uppercase tracking-wider text-slate-500">Email</small>mizalaquetech@gmail.com</span>
            </a>

            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[.02] p-4 text-slate-300 transition hover:border-cyan-300/20 hover:bg-white/[.04]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300"><Icon name="phone" size={19} /></span>
              <span><small className="block text-xs uppercase tracking-wider text-slate-500">WhatsApp</small>+244 953 246 371</span>
            </a>
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-600">
            O pedido é enviado através do serviço de email configurado para a MIZALAQUETECH. O WhatsApp continua disponível como alternativa imediata.
          </p>
        </div>

        <form
          id="contact-form"
          onSubmit={submit}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <input type="hidden" name="to_email" value="mizalaquetech@gmail.com" />
          <input type="hidden" name="form_title" value="Novo pedido de orçamento — MIZALAQUETECH" />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-400">
              Nome
              <input required name="name" autoComplete="name" placeholder="O seu nome" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40" />
            </label>
            <label className="text-sm text-slate-400">
              Email
              <input required type="email" name="email" autoComplete="email" placeholder="seu@email.com" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40" />
            </label>
          </div>

          <label className="mt-5 block text-sm text-slate-400">
            Assunto
            <input required name="subject" placeholder="Ex.: Website institucional" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40" />
          </label>

          <label className="mt-5 block text-sm text-slate-400">
            Mensagem
            <textarea required name="message" rows="5" placeholder="Descreva brevemente o que pretende desenvolver..." className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40" />
          </label>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
            <button type="submit" disabled={status === 'sending'} className="rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60">
              {status === 'sending' ? 'A enviar pedido...' : 'Enviar pedido'}
            </button>

            <button type="button" onClick={sendWhatsApp} className="rounded-xl border border-white/10 px-5 py-3.5 font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[.04]">
              Enviar pelo WhatsApp
            </button>
          </div>

          {status === 'success' && (
            <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-300" role="status">
              <strong className="block">Pedido enviado com sucesso.</strong>
              <span className="mt-1 block text-emerald-200/80">A mensagem foi entregue ao serviço de email configurado para a MIZALAQUETECH.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300" role="alert">
              <strong className="block">Não foi possível enviar agora.</strong>
              <span className="mt-1 block text-red-200/80">{errorMessage}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
