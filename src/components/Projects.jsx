import { useMemo, useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'Software',
    category: 'Gestão territorial',
    title: 'MizaMaps Platform',
    status: 'Planeamento e arquitectura',
    statusTone: 'blue',
    description:
      'Plataforma de mapas digitais, geolocalização e gestão territorial para centralidades, bairros, condomínios e municípios.',
    details: [
      'Mapa digital interactivo com pesquisa, filtros e geolocalização.',
      'Cadastro de pontos de interesse e serviços.',
      'Gestão de utilizadores, organizações, categorias e permissões.',
      'Painel administrativo para gestores territoriais.',
    ],
    tags: ['React', 'NestJS', 'PostgreSQL', 'PostGIS'],
  },
  {
    number: '02',
    type: 'Software',
    category: 'Gestão académica',
    title: 'SGFDA',
    status: 'Implementação',
    statusTone: 'green',
    description:
      'Sistema de Gestão de Fluxos de Dados Académicos para organizar documentos, estudantes, administração e relações com empresas.',
    details: [
      'Autenticação e controlo de acesso.',
      'Dashboard e gestão de documentos.',
      'Administração e gestão de utilizadores.',
      'Organização por área de formação, curso, turma e ano lectivo.',
    ],
    tags: ['React 18', 'Vite', 'Supabase', 'PostgreSQL'],
  },
  {
    number: '03',
    type: 'Software',
    category: 'Estágios e carreira',
    title: 'SGEIP',
    status: 'Concepção e requisitos',
    statusTone: 'amber',
    description:
      'Sistema de Gestão de Estágios e Inserção Profissional para acompanhar estudantes durante os estágios e na transição para o mercado de trabalho.',
    details: [
      'Cadastro e acompanhamento de estudantes.',
      'Gestão de estágios, entidades de acolhimento e documentação.',
      'Registo da situação profissional após a formação.',
      'Perfis, permissões, histórico e notificações previstas.',
    ],
    tags: ['PHP 8.x', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    number: '04',
    type: 'Produto',
    category: 'Experiência digital',
    title: 'QUIZZ',
    status: 'Concepção visual',
    statusTone: 'purple',
    description:
      'Projecto de produto digital associado a uma experiência de perguntas e respostas e a uma identidade visual tecnológica.',
    details: [
      'Conceito de experiência baseada em perguntas e respostas.',
      'Direcção visual moderna e tecnológica.',
      'Identidade visual orientada para uma experiência atractiva.',
    ],
    tags: ['UI/UX', 'Identidade visual', 'Produto digital'],
  },
  {
    number: '05',
    type: 'Web',
    category: 'Website institucional',
    title: 'Angelina Salomé',
    status: 'Concluído',
    statusTone: 'green',
    description:
      'Website institucional desenvolvido para apresentação de serviços, valorização da marca e geração de contactos através do WhatsApp.',
    details: [
      'Página responsiva orientada para conversão.',
      'Apresentação de serviços e identidade da marca.',
      'Integração de contacto via WhatsApp.',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
  },
  {
    number: '06',
    type: 'Web',
    category: 'Website institucional',
    title: 'Clínica Alfa Vida',
    status: 'Em desenvolvimento',
    statusTone: 'blue',
    description:
      'Website institucional para apresentar serviços de saúde, informação da clínica, contactos e presença digital.',
    details: [
      'Estrutura de landing page institucional.',
      'Apresentação organizada dos serviços.',
      'Design responsivo para dispositivos móveis e desktop.',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
  },
]

const filters = ['Todos', 'Software', 'Web', 'Produto']


function ProjectVisual({ project }) {
  const visuals = {
    'MizaMaps Platform': (
      <div className="project-visual project-visual-map">
        <div className="visual-topbar"><span className="visual-brand">MizaMaps</span><span className="visual-dot" /></div>
        <div className="visual-map-area">
          <span className="map-road road-a" /><span className="map-road road-b" /><span className="map-road road-c" />
          <span className="map-pin pin-a">●</span><span className="map-pin pin-b">●</span><span className="map-pin pin-c">●</span>
          <div className="map-card"><strong>Mapa digital</strong><span>Pesquisa · filtros · geolocalização</span></div>
        </div>
      </div>
    ),
    SFGDA: (
      <div className="project-visual project-visual-dashboard">
        <div className="visual-sidebar"><span /><span /><span /><span /></div>
        <div className="visual-dashboard-main">
          <div className="visual-dashboard-head"><strong>SGFDA</strong><i /></div>
          <div className="visual-kpis"><span /><span /><span /></div>
          <div className="visual-chart"><i /><i /><i /><i /><i /><i /></div>
          <div className="visual-table"><span /><span /><span /><span /></div>
        </div>
      </div>
    ),
    SGEIP: (
      <div className="project-visual project-visual-career">
        <div className="career-head"><strong>SGEIP</strong><span>Estágios</span></div>
        <div className="career-progress"><span>Inserção profissional</span><i><b /></i></div>
        <div className="career-cards"><div><b>Estudantes</b><span>••••••</span></div><div><b>Estágios</b><span>••••</span></div></div>
        <div className="career-list"><span /><span /><span /></div>
      </div>
    ),
    QUIZZ: (
      <div className="project-visual project-visual-quizz">
        <div className="quizz-orb">?</div>
        <div className="quizz-label">QUIZZ</div>
        <div className="quizz-question">Qual é a resposta?</div>
        <div className="quizz-options"><span /><span /><span /><span /></div>
      </div>
    ),
    'Angelina Salomé': (
      <div className="project-visual project-visual-web">
        <div className="web-browser"><span /><span /><span /></div>
        <div className="web-hero"><div><b>Angelina Salomé</b><small>Limpeza de estofados</small><i /></div><div className="web-image-placeholder" /></div>
        <div className="web-services"><span /><span /><span /></div>
      </div>
    ),
    'Clínica Alfa Vida': (
      <div className="project-visual project-visual-clinic">
        <div className="clinic-head"><strong>Alfa Vida</strong><span>Saúde</span></div>
        <div className="clinic-hero"><div><b>Cuidados de saúde</b><small>Serviços especializados</small></div><i>+</i></div>
        <div className="clinic-services"><span /><span /><span /><span /></div>
      </div>
    ),
  }

  return visuals[project.title]
}

function Status({ tone, children }) {
  const tones = {
    green: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
    blue: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300',
    amber: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
    purple: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
  }

  return (
    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[.12em] ${tones[tone]}`}>
      {children}
    </span>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)

  const visibleProjects = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((project) => project.type === filter)),
    [filter],
  )

  return (
    <section id="projetos" className="section-space border-t border-white/5">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-300">
              Portfólio MIZALAQUETECH
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Soluções que estamos a construir, implementar e evoluir.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Uma selecção de projectos de software, produtos digitais e websites trabalhados pela MIZALAQUETECH. Cada estado indica o nível de desenvolvimento registado no projecto.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`project-filter rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  filter === item
                    ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-200'
                    : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.number}
              className="project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-slate-900/80 md:p-7"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

              <div className="relative mb-5">
                <ProjectVisual project={project} />
              </div>

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tracking-[.18em] text-slate-600">{project.number}</span>
                  <span className="text-xs font-semibold uppercase tracking-[.16em] text-cyan-300">{project.category}</span>
                </div>
                <Status tone={project.statusTone}>{project.status}</Status>
              </div>

              <div className="relative mt-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[.18em] text-slate-500">{project.type}</p>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
                  </div>
                  <div className="project-icon hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-cyan-300 md:flex">
                    ↗
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.details.map((detail) => (
                    <div key={detail} className="project-detail rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-xs leading-5 text-slate-400">
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-6 text-sm font-semibold text-white transition hover:text-cyan-200"
                >
                  Ver detalhes <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="project-bottom-cta mt-8 rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.03] p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-sm font-semibold text-white">Também desenvolvemos soluções à medida.</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">Se a sua necessidade não aparece aqui, podemos analisar o projecto e definir uma solução adequada.</p>
          </div>
          <a href="#contactos" className="mt-4 inline-flex shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:mt-0">
            Solicitar orçamento
          </a>
        </div>

        {selected && (
          <div className="project-modal fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-5 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <div className="project-modal-content w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">{selected.category}</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{selected.title}</h3>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="project-close rounded-full border border-white/10 px-3 py-2 text-slate-400 hover:text-white" aria-label="Fechar detalhes">
                  ×
                </button>
              </div>
              <p className="mt-5 leading-7 text-slate-400">{selected.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="project-tag rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
