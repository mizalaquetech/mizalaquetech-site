import { services } from '../data/services'
import Icon from './Icon'
export default function Services() {
  return <section id="servicos" className="section-space">
    <div className="container-page"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-300">Serviços</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Soluções digitais para diferentes necessidades.</h2><p className="mt-4 leading-7 text-slate-400">Do desenvolvimento à presença digital, construímos soluções alinhadas ao contexto de cada projeto.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(service => <article key={service.title} className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"><div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"><Icon name={service.icon}/></div><h3 className="text-lg font-semibold text-white">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{service.text}</p></article>)}</div>
    </div>
  </section>
}
