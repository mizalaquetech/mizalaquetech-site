# MIZALAQUETECH — Site institucional

## Formulário de contactos com EmailJS

O formulário usa EmailJS para enviar pedidos para `mizalaquetech@gmail.com`.

### Configuração local

1. Confirme o `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=MIZALAQUETECH Gmail
VITE_EMAILJS_TEMPLATE_ID=template_qshssnd
VITE_EMAILJS_PUBLIC_KEY=oj14NMn8RkPzDYb3m
```

2. Se o servidor Vite já estava aberto antes de criar/alterar `.env.local`, pare-o com `Ctrl+C` e inicie novamente:

```powershell
npm install
npm run dev
```

3. O template do EmailJS deve usar exatamente estas variáveis:

```text
{{name}}
{{email}}
{{subject}}
{{message}}
```

4. No EmailJS, confirme que o serviço Gmail com Service ID `MIZALAQUETECH Gmail` está guardado e conectado a `mizalaquetech@gmail.com`.

### Diagnóstico

O formulário agora mostra o código/mensagem retornados pelo EmailJS em caso de falha, em vez de esconder o erro. Isso facilita identificar problemas de Service ID, Template ID, Public Key ou configuração do serviço.
