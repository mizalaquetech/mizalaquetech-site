import logo from '../assets/logo-mizalaquetech.jpg'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page grid gap-8 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <img src={logo} alt="MIZALAQUETECH" className="h-12 w-44 object-contain object-center" />
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            Desenvolvimento, manutenção e comercialização de soluções digitais para empresas, instituições e empreendedores.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navegação</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-500">
            <a href="#sobre" className="transition hover:text-white">Sobre nós</a>
            <a href="#servicos" className="transition hover:text-white">Serviços</a>
            <a href="#solucoes" className="transition hover:text-white">Soluções</a>
            <a href="#contactos" className="transition hover:text-white">Contactos</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contactos</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-500">
            <a href="mailto:mizalaquetech@gmail.com" className="break-all transition hover:text-cyan-300">mizalaquetech@gmail.com</a>
            <a href="https://wa.me/244953246371" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">+244 953 246 371</a>
          </div>
        </div>
      </div>

      <div className="container-page mt-8 border-t border-white/5 pt-6 text-sm text-slate-600">
        © {new Date().getFullYear()} MIZALAQUETECH. Todos os direitos reservados.
      </div>
    </footer>
  )
}
