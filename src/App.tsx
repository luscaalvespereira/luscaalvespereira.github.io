import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowDown, ArrowUpRight, ArrowRight, BookOpen, Code2, Scale, Sun, Moon, Menu, X, MapPin, Mail, Github, Linkedin, Copy, Check } from 'lucide-react'
import { portfolioData as data } from './data/portfolio'

type Theme = 'light' | 'dark'
const navigation = [
  ['sobre', 'Sobre'], ['experiencia', 'Experiência'], ['tecnologia', 'Tecnologia'],
  ['formacao', 'Formação'], ['pesquisa-e-extensao', 'Pesquisa'], ['contato', 'Contato'],
]

function External({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} aria-hidden="true" /></a>
}

function Heading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {label}</p><h2>{title}</h2></div>{children && <p className="section-description">{children}</p>}</div>
}

function Email({ email, label }: { email: string; label: string }) {
  const [status, setStatus] = useState('')
  useEffect(() => {
    if (!status) return
    const timer = window.setTimeout(() => setStatus(''), 2500)
    return () => window.clearTimeout(timer)
  }, [status])
  async function copy() {
    try { await navigator.clipboard.writeText(email); setStatus('E-mail copiado') }
    catch { setStatus('Não foi possível copiar. Selecione o endereço ou use o link de e-mail.') }
  }
  return <div className="email-row"><span className="small-label">{label}</span><div><a href={`mailto:${email}`}>{email}</a><button className="icon-button" onClick={copy} aria-label={`Copiar ${label.toLowerCase()}`}>{status === 'E-mail copiado' ? <Check size={18} /> : <Copy size={18} />}</button></div><span className="copy-status" role="status">{status}</span></div>
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('inicio')
  const [filter, setFilter] = useState('Todas')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111b1c' : '#f6f5f0')
  }, [theme])
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    function followSystem() {
      let saved: string | null = null
      try { saved = localStorage.getItem('portfolio-theme') } catch { /* Browser storage can be disabled. */ }
      if (saved !== 'light' && saved !== 'dark') setTheme(media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', followSystem)
    return () => media.removeEventListener('change', followSystem)
  }, [])
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'))
    function update() {
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= 180)
      setActive(current?.id ?? 'inicio')
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    if (!menu) return
    function close(event: KeyboardEvent) { if (event.key === 'Escape') setMenu(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menu])
  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    try { localStorage.setItem('portfolio-theme', next) } catch { /* Theme still works without persistence. */ }
  }
  const experience = data.experiences.filter(item => filter === 'Todas' || (filter === 'Jurídica' ? item.badgeType === 'Estagiário' && item.id !== 'lab-oceanografia' : item.badgeType !== 'Estagiário' || item.id === 'lab-oceanografia'))
  return <>
    <a className="access-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header"><div className="header-inner">
      <a className="name" href="#inicio" onClick={() => setMenu(false)}>Lucas Alves Pereira<span>Direito · Pesquisa · Tecnologia</span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
      <div className="header-actions"><button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Ativar modo ${theme === 'light' ? 'escuro' : 'claro'}`} title={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}>{theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}</button><button className="icon-button menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-nav" aria-label={menu ? 'Fechar menu' : 'Abrir menu'}>{menu ? <X /> : <Menu />}</button></div>
    </div>{menu && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação móvel">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} aria-current={active === id ? 'location' : undefined}>{label}<ArrowRight size={16} /></a>)}</nav>}</header>
    <main id="conteudo">
      <section id="inicio" className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-main"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Portfólio profissional</p><h1 id="hero-title">Lucas Alves<br /><em>Pereira.</em></h1><p className="hero-subtitle">Direito, pesquisa<br /> e novas possibilidades.</p><p className="hero-description">{data.hero.presentation}</p><div className="hero-actions"><a className="button primary" href="#experiencia">Conheça minha trajetória <ArrowDown size={18} /></a><a className="text-link" href="#contato">Vamos conversar <ArrowUpRight size={18} /></a></div></div>
        <aside className="hero-aside" aria-label="Áreas da trajetória profissional"><p className="small-label">Um olhar interdisciplinar</p><div className="discipline"><span className="discipline-number">01</span><Scale aria-hidden="true" /><div><h2>Direito</h2><p>Experiência jurídica em instituições públicas.</p></div></div><div className="discipline"><span className="discipline-number">02</span><BookOpen aria-hidden="true" /><div><h2>Pesquisa</h2><p>Formação acadêmica, extensão e acesso à informação.</p></div></div><div className="discipline"><span className="discipline-number">03</span><Code2 aria-hidden="true" /><div><h2>Tecnologia</h2><p>Ferramentas digitais a serviço do trabalho e do conhecimento.</p></div></div><div className="aside-footer"><span>Formação em Direito</span><strong>FDR / UFPE <ArrowUpRight size={16} /></strong></div></aside></div>
        <div className="hero-bottom"><span><MapPin size={15} />Recife, Pernambuco</span><span>Bacharel em Direito · UFPE, 2026</span><a href="#sobre">Explore o portfólio <ArrowDown size={15} /></a></div>
      </section>
      <section id="sobre" className="section wrap"><Heading number="01" label="Apresentação" title="Conhecimento que conecta." /><div className="about-grid"><p className="about-lead">Uma trajetória na interseção entre <em>formação jurídica</em>, pesquisa e ferramentas digitais.</p><div><p>{data.about}</p><div className="about-tags"><span>Pesquisa jurídica</span><span>Acessibilidade</span><span>Organização da informação</span></div></div></div></section>
      <section id="experiencia" className="section wrap"><Heading number="02" label="Trajetória profissional" title="Experiência na prática.">Instituições públicas, ambiente universitário e trabalho com informação.</Heading><div className="filter-row" role="group" aria-label="Filtrar experiências">{['Todas', 'Jurídica', 'Acadêmica e técnica'].map(label => <button key={label} onClick={() => setFilter(label)} aria-pressed={filter === label}>{label}</button>)}</div><div className="timeline">{experience.map(item => <article key={item.id} className="experience-row"><div className="experience-date"><span>{item.period}</span><span className="role-tag">{item.role}</span></div><div><h3>{item.institution}</h3><ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></section>
      <section id="tecnologia" className="section technical-band"><div className="wrap"><Heading number="03" label="Competências & ferramentas" title="O digital como aliado.">Sistemas, ferramentas e competências que acompanham minha atuação.</Heading><div className="skills-grid">{data.techCategories.map((category, index) => <article key={category.title} className="skill-card"><span className="small-label">0{index + 1}</span><h3>{category.title}</h3><ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div><div className="projects-heading"><div><p className="eyebrow">Explorações em tecnologia</p><h3>Projetos no GitHub</h3></div><External href={data.hero.githubUrl} className="text-link">Ver perfil</External></div><div className="projects-grid">{data.githubRepositories.map((repo, index) => <article className="project-card" key={repo.name}><div className="project-top"><Code2 size={22} /><span>0{index + 1}</span></div><h4>{repo.name}</h4><p>{repo.description}</p><External href={repo.url} className="text-link">Explorar repositório</External></article>)}</div></div></section>
      <section id="formacao" className="section wrap"><Heading number="04" label="Formação acadêmica" title="Uma base para seguir aprendendo." /><div className="education-grid"><div>{data.education.primary.map((item, index) => <article className={`education-item ${index === 0 ? 'featured' : ''}`} key={item.degree}><span className="small-label">{item.period}</span><h3>{item.degree}</h3><p>{item.institution}</p></article>)}<details className="study-details"><summary>Outros percursos acadêmicos <span>Não concluídos</span></summary>{data.education.nonCompleted.map(item => <p key={item.course}><strong>{item.course}</strong> — {item.institution}</p>)}</details></div><div className="complementary"><p className="eyebrow">Aprendizado contínuo</p><h3>Formação complementar</h3><ul>{data.education.complementary.map(item => <li key={item}>{item}</li>)}</ul></div></div><div className="languages"><span className="small-label">Idiomas</span>{data.languages.map(item => <div key={item.language}><h4>{item.language}</h4><p>{item.description}</p></div>)}</div></section>
      <section id="pesquisa-e-extensao" className="section wrap"><Heading number="05" label="Pesquisa & extensão" title="Além da sala de aula.">Monitoria, extensão universitária e experiências de diálogo com a sociedade.</Heading><div className="research-grid">{data.researchAndExtension.map(item => <article key={item.id} className="research-card"><p className="small-label">{item.period ?? 'Participação institucional'}</p><h3>{item.title}</h3>{item.bullets && <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}{item.note && <p className="research-note">{item.note}</p>}</article>)}</div></section>
      <section id="contato" className="section contact-section"><div className="wrap"><Heading number="06" label="Contato" title="Vamos iniciar uma conversa.">Canais diretos para contato profissional, institucional e acadêmico.</Heading><div className="contact-grid"><div><a href={`mailto:${data.contact.personalEmail}`} className="button primary">Enviar e-mail <Mail size={18} /></a><div className="contact-location"><MapPin size={17} />{data.contact.location}</div><Email email={data.contact.institutionalEmail} label="E-mail institucional" /><Email email={data.contact.personalEmail} label="E-mail pessoal" /></div><div className="profile-links"><External href={data.contact.linkedinUrl}><span><Linkedin size={20} />LinkedIn</span></External><External href={data.contact.githubUrl}><span><Github size={20} />GitHub</span></External><External href={data.contact.lattesUrl}><span><BookOpen size={20} />Currículo Lattes</span></External><p className="citation">Citação bibliográfica: <strong>{data.contact.citationName}</strong><br />Lattes: {data.contact.lattesId}</p></div></div></div></section>
    </main>
    <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Lucas Alves Pereira</span><span>Direito · Pesquisa · Tecnologia</span><a href="#inicio">Voltar ao início <ArrowUpRight size={16} /></a></footer>
  </>
}
