import { useEffect, useState } from 'react'
import Icon from './Icon'
import logoDark from '../assets/logo-mizalaquetech.jpg'
import logoLight from '../assets/logo-mizalaquetech-light.png'

const links = [
  ['Início', '#inicio'],
  ['Sobre nós', '#sobre'],
  ['Serviços', '#servicos'],
  ['Soluções', '#solucoes'],
  ['Projetos', '#projetos'],
  ['Contactos', '#contactos'],
]

function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('mizalaquetech-theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved ? saved === 'dark' : systemDark
    setDark(isDark)
    document.documentElement.classList.toggle('light', !isDark)
  }, [])

  function toggleTheme() {
    const nextDark = !dark
    setDark(nextDark)
    localStorage.setItem('mizalaquetech-theme', nextDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('light', !nextDark)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-200"
      aria-label={dark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      title={dark ? 'Modo claro' : 'Modo escuro'}
    >
      <Icon name={dark ? 'sun' : 'moon'} size={18} />
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050816]/85 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="MIZALAQUETECH — início">
          <img src={logoDark} alt="MIZALAQUETECH" className="logo-dark h-12 w-44 object-contain object-center" />
          <img src={logoLight} alt="MIZALAQUETECH" className="logo-light h-12 w-44 object-contain object-center" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contactos"
            className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15 lg:inline-flex"
          >
            Solicitar orçamento
          </a>

          <button
            className="inline-flex rounded-lg border border-white/10 p-2 text-slate-200 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu border-t border-white/5 bg-[#050816] px-4 py-4 lg:hidden">
          <div className="container-page flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">
                {label}
              </a>
            ))}
            <a href="#contactos" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950">
              Solicitar orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
