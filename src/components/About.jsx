const values = ['Inovação com propósito', 'Soluções orientadas ao negócio', 'Qualidade e organização', 'Acompanhamento próximo']
export default function About() {
  return <section id="sobre" className="section-space border-t border-white/5">
    <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-300">Sobre nós</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Tecnologia aplicada a desafios reais.</h2></div>
      <div><p className="text-lg leading-8 text-slate-400">A MIZALAQUETECH é uma empresa de tecnologia especializada no desenvolvimento, manutenção e comercialização de soluções digitais para empresas, instituições e empreendedores.</p><p className="mt-5 leading-7 text-slate-500">O nosso trabalho combina desenvolvimento web, software de gestão, aplicações móveis e presença digital para apoiar diferentes necessidades de negócio.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">{values.map(v => <div key={v} className="glass rounded-xl p-4 text-sm text-slate-300">{v}</div>)}</div>
      </div>
    </div>
  </section>
}
