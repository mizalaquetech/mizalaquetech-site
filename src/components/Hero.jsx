import Icon from './Icon'
import mark from '../assets/mizalaquetech-mark.png'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(14,210,230,.10),transparent_28%),radial-gradient(circle_at_60%_75%,rgba(93,70,255,.10),transparent_24%)]" />
      <div className="container-page grid min-h-[680px] items-center gap-14 pb-20 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-200">
            MIZALAQUETECH • SOFTWARE SOLUTIONS
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Tecnologia que transforma <span className="text-gradient">ideias em soluções digitais.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Desenvolvemos websites, sistemas de gestão, aplicações móveis e soluções digitais para empresas, instituições e empreendedores.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contactos" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Solicitar orçamento <Icon name="arrow" size={18} />
            </a>
            <a href="#servicos" className="rounded-xl border border-white/10 px-5 py-3.5 font-semibold text-slate-200 transition hover:bg-white/5">
              Conhecer serviços
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            <span>Web & sistemas</span><span>Aplicações móveis</span><span>Presença digital</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="grid-tech absolute inset-5 rounded-[2rem] border border-white/5" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 shadow-2xl shadow-cyan-950/20">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs tracking-[.22em] text-slate-500">DIGITAL SYSTEMS</span>
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
            </div>
            <div className="flex min-h-[330px] items-center justify-center">
              <img src={mark} alt="Símbolo MIZALAQUETECH" className="w-[72%] object-contain drop-shadow-[0_0_30px_rgba(0,190,255,.16)]" />
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center text-xs text-slate-500">
              <span>WEB</span><span>APP</span><span>SOFTWARE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
