function WhatsAppIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.53 0 .22 5.3.22 11.83c0 2.08.54 4.11 1.56 5.9L.12 24l6.41-1.68a11.8 11.8 0 0 0 5.53 1.4h.01c6.52 0 11.83-5.3 11.83-11.83 0-3.16-1.23-6.13-3.38-8.41ZM12.07 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.82 9.82 0 0 1-1.5-5.2C2.17 6.42 6.6 2 12.06 2a9.78 9.78 0 0 1 6.97 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.44 9.81-9.86 9.81Zm5.38-7.35c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.65.15-.19.29-.75.94-.92 1.13-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.77.36-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/244953246371?text=Olá%20MIZALAQUETECH,%20gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a MIZALAQUETECH no WhatsApp"
      title="Falar com a MIZALAQUETECH"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  )
}
