import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  CircleDot,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  Menu,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";

/**
 * Style reminder — Technical Editorial Ledger:
 * This page behaves like an annotated engineering record: asymmetrical
 * compositions, paper/ink contrast, mono metadata, a coral execution mark,
 * and motion reserved for revealing relationships between systems.
 */

const GITHUB_ROOT = "https://github.com/ahmedemadm90";
const BRAND_MARK = "/manus-storage/ahmed-mark_bba7fd9c.png";

const projects = [
  {
    number: "01",
    title: "Support Ticketing System",
    slug: "tickets",
    category: "Operations / Laravel",
    description:
      "A professional support platform built around ticket lifecycle management, secure backend architecture, database migrations, and real-time status updates.",
    stack: ["PHP", "Laravel", "Blade", "JavaScript"],
    url: `${GITHUB_ROOT}/tickets`,
    signal: "2 stars · public repository",
  },
  {
    number: "02",
    title: "Hotel Reservation System",
    slug: "hotel",
    category: "Hospitality / Workflow",
    description:
      "An advanced reservation and property management system for organizing bookings, availability, and the operational flow behind a hospitality business.",
    stack: ["PHP", "Laravel", "SCSS", "MySQL"],
    url: `${GITHUB_ROOT}/hotel`,
    signal: "reservation workflow",
  },
  {
    number: "03",
    title: "School Management ERP",
    slug: "school-management-system",
    category: "Education / ERP",
    description:
      "A comprehensive enterprise resource planning platform for educational institutions, structured around records, schedules, administration, and reporting.",
    stack: ["PHP", "Laravel", "Blade", "ERP"],
    url: `${GITHUB_ROOT}/school-management-system`,
    signal: "enterprise process map",
  },
  {
    number: "04",
    title: "Soft UI Admin Dashboard",
    slug: "soft-ui-laravel-8",
    category: "Foundations / Access",
    description:
      "A Laravel 8 admin foundation combining a Soft UI system with Spatie role management for secure, role-aware internal applications.",
    stack: ["Laravel 8", "Blade", "Spatie", "RBAC"],
    url: `${GITHUB_ROOT}/soft-ui-laravel-8`,
    signal: "dashboard foundation",
  },
  {
    number: "05",
    title: "Yume4u Commerce Platform",
    slug: "yume4u",
    category: "Commerce / Product",
    description:
      "An e-commerce platform focused on user experience, scalable product management, catalog navigation, and a dependable application core.",
    stack: ["Laravel", "PHP", "Docker", "Vue"],
    url: `${GITHUB_ROOT}/yume4u`,
    signal: "catalog workflow",
  },
];

const skills = [
  {
    icon: Terminal,
    label: "Backend systems",
    title: "Laravel / PHP",
    copy: "Application architecture, migrations, business logic, secure routes, and maintainable MVC foundations.",
  },
  {
    icon: Workflow,
    label: "Automation thinking",
    title: "Process → system",
    copy: "Turning repeated operational steps into ticketing, reservation, archive, attendance, and control workflows.",
  },
  {
    icon: Braces,
    label: "Interface layer",
    title: "JavaScript / UI",
    copy: "Responsive interfaces with Blade, JavaScript, CSS, SCSS, and focused admin experiences.",
  },
  {
    icon: Layers3,
    label: "Delivery toolkit",
    title: "Git / Composer / Docker",
    copy: "A practical toolchain for versioned code, repeatable setup, and shipping work that can be revisited.",
  },
];

const methods = [
  {
    marker: "01",
    title: "Map the friction",
    copy: "Find the repeated handoffs, hidden delays, and decisions that make a process expensive to operate.",
  },
  {
    marker: "02",
    title: "Make the rules visible",
    copy: "Shape the workflow into clear states, permissions, records, and boundaries the team can trust.",
  },
  {
    marker: "03",
    title: "Ship the loop",
    copy: "Deliver a working system, then leave enough structure for the next person to understand and extend it.",
  },
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-row">
      <div className="project-row__number" aria-hidden="true">
        {project.number}
      </div>
      <div className="project-row__main">
        <div className="project-row__meta">
          <span>{project.category}</span>
          <span className="project-row__signal">{project.signal}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-row__footer">
          <div className="stack-list" aria-label={`${project.title} technologies`}>
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a
            className="text-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} on GitHub`}
          >
            Inspect repo <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ResumePrintSheet() {
  return (
    <div id="resume-print-sheet" className="resume-print-sheet">
      <div className="print-sheet__topline">AHMED EMAD / SOFTWARE ENGINEER & AUTOMATION SPECIALIST</div>
      <h1>Ahmed Emad</h1>
      <p className="print-sheet__lead">
        Software Engineer focused on Laravel and PHP systems, automation-minded workflows, and maintainable web applications.
      </p>
      <div className="print-sheet__grid">
        <section>
          <h2>Profile</h2>
          <p>
            Public GitHub work spans backend architecture, role-managed dashboards, reservation and ticketing workflows, content platforms, and operational tools.
          </p>
        </section>
        <section>
          <h2>Core skills</h2>
          <p>PHP · Laravel · Blade · JavaScript · MySQL · REST APIs · Git · Composer · Docker · Python · CSS / SCSS</p>
        </section>
      </div>
      <section>
        <h2>Selected projects</h2>
        <div className="print-projects">
          {projects.map((project) => (
            <div key={project.slug}>
              <strong>{project.title}</strong>
              <span>{project.description}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="print-sheet__bottomline">
        <span>github.com/ahmedemadm90</span>
        <span>Public portfolio / GitHub-grounded profile</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const printResume = () => {
    window.print();
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" onClick={closeMenu} aria-label="Ahmed Emad portfolio home">
            <img src={BRAND_MARK} alt="Ahmed Emad mark" className="brand-lockup__mark" />
            <span className="brand-lockup__name">Ahmed Emad</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
          <nav id="primary-nav" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>Projects</a>
            <a href="#method" onClick={closeMenu}>Method</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#resume" onClick={closeMenu}>CV</a>
            <a className="nav-cta" href={GITHUB_ROOT} target="_blank" rel="noreferrer" onClick={closeMenu}>
              GitHub <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><CircleDot size={12} fill="currentColor" /> AHMED EMAD / PUBLIC BUILD LOG</div>
              <h1>I turn repetitive work into <em>dependable systems.</em></h1>
              <p className="hero-intro">
                Software engineer focused on Laravel, PHP, and automation-minded product workflows — building from the friction up.
              </p>
              <div className="hero-actions">
                <a className="button button--coral" href="#work">Explore the builds <ArrowDown size={17} /></a>
                <button className="button button--quiet" type="button" onClick={printResume}><Download size={17} /> Print CV</button>
              </div>
              <div className="hero-aside">
                <span className="mono-label">CURRENT SIGNAL</span>
                <p>21 public repositories · a practical record across web systems, operations, and automation exploration.</p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-visual__frame">
                <img src="/manus-storage/ahmed-hero_45371eec.jpg" alt="A workbench with a laptop visualising connected automation flows" />
                <div className="hero-visual__caption"><span>FIG. 01</span><span>FROM PROCESS TO PLATFORM</span></div>
              </div>
              <div className="hero-stamp" aria-hidden="true">BUILD<br /><span>↗</span><br />REPEAT</div>
            </div>
          </div>
          <div className="hero-bottomline">
            <span>01 — SOFTWARE / AUTOMATION / SYSTEMS</span>
            <span>Based in the public record</span>
            <a href="#work" aria-label="Scroll to selected projects"><ArrowDown size={17} /></a>
          </div>
        </section>

        <section className="statement-section section-paper">
          <div className="vertical-rail" aria-hidden="true"><span>THE SHORT VERSION</span></div>
          <div className="statement-grid page-pad">
            <div className="statement-kicker"><span>What I make</span><strong>→</strong></div>
            <div className="statement-copy">
              <p className="statement-lead">Not just screens. <span>Working loops.</span></p>
              <p>
                The public work points to a consistent instinct: take a messy operational process, give it structure, and make the next action obvious. From support tickets and reservations to dashboards and ERP records, the code is the record of the thinking.
              </p>
            </div>
            <div className="statement-note"><span>[ 02 ]</span><p>Readable systems beat impressive demos when the work has to live past launch.</p></div>
          </div>
        </section>

        <section className="work-section page-pad" id="work">
          <div className="section-heading">
            <div><SectionLabel index="02" >Selected builds</SectionLabel><h2>Projects with a <em>job</em> to do.</h2></div>
            <p className="section-heading__note">A GitHub-grounded selection from the public portfolio. Open the repository to inspect the source and context.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => <ProjectRow project={project} key={project.slug} />)}
          </div>
          <div className="work-endcap">
            <span>MORE IN THE ARCHIVE</span>
            <a className="text-link text-link--large" href={GITHUB_ROOT} target="_blank" rel="noreferrer">Browse all public repositories <Github size={17} /></a>
          </div>
        </section>

        <section className="method-section section-dark" id="method">
          <div className="page-pad method-grid">
            <div className="method-intro">
              <SectionLabel index="03">Working method</SectionLabel>
              <h2>Automation is a <em>design decision.</em></h2>
              <p>Good automation is not a shortcut pasted on top of a process. It is the process made visible, testable, and easier to trust.</p>
              <div className="method-code"><span>workflow.run</span><i>(friction)</i><b>→</b><span>system.ready</span></div>
            </div>
            <div className="method-art">
              <img src="/manus-storage/automation-map_58bd152d.jpg" alt="Editorial illustration of connected automation cards and workflow nodes" />
              <div className="method-art__label">FIELD NOTE / 03—A</div>
            </div>
            <div className="method-list">
              {methods.map((method) => (
                <div className="method-row" key={method.marker}>
                  <span>{method.marker}</span>
                  <div><h3>{method.title}</h3><p>{method.copy}</p></div>
                  <Check size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section page-pad" id="skills">
          <div className="section-heading section-heading--skills">
            <div><SectionLabel index="04">Capability map</SectionLabel><h2>The tools behind the <em>loop.</em></h2></div>
            <p className="section-heading__note">A concise readout of the technologies and engineering instincts visible across the repositories.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return <article className="skill-card" key={skill.title}><div className="skill-card__top"><Icon size={20} strokeWidth={1.6} /><span>{skill.label}</span></div><h3>{skill.title}</h3><p>{skill.copy}</p></article>;
            })}
          </div>
          <div className="skills-bottomline"><span className="mono-label">LANGUAGE MIX / PHP · JAVASCRIPT · CSS · PYTHON</span><span>Architecture first. Tools second.</span></div>
        </section>

        <section className="profile-section section-paper">
          <div className="page-pad profile-grid">
            <div className="profile-image"><img src="/manus-storage/engineer-desk_7396362b.jpg" alt="Hands working at a software engineer's desk" /><span>FIG. 02 / THE WORKBENCH</span></div>
            <div className="profile-copy">
              <SectionLabel index="05">Profile / CV</SectionLabel>
              <h2>Make the next step <em>obvious.</em></h2>
              <p>Ahmed Emad is a software engineer working across Laravel and PHP backends, responsive interfaces, and automation-minded operational systems.</p>
              <p className="profile-copy__small">The CV is intentionally grounded in public GitHub evidence. Add verified contact details, role history, and education before using it for a formal application.</p>
              <div className="profile-actions"><button className="button button--coral" type="button" onClick={printResume}>Print / Save CV <Download size={16} /></button><a className="button button--outline" href={GITHUB_ROOT} target="_blank" rel="noreferrer">GitHub profile <ExternalLink size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-coral" id="resume">
          <div className="page-pad contact-grid">
            <div><SectionLabel index="06">Open channel</SectionLabel><h2>Let’s build the <em>next useful thing.</em></h2></div>
            <div className="contact-copy"><p>For collaborations, product work, or a deeper look at a repository, start with the public profile.</p><a className="contact-link" href={GITHUB_ROOT} target="_blank" rel="noreferrer"><Github size={22} /> github.com/ahmedemadm90 <ArrowUpRight size={18} /></a><span className="contact-footnote">[ Public code is the first conversation. ]</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-pad footer-inner"><div className="footer-brand"><img src={BRAND_MARK} alt="" /><span>Ahmed Emad / Portfolio</span></div><span className="footer-note">Built as a visual index of public work.</span><a href="#top" className="footer-top">Back to top <ArrowDown size={15} /></a></div>
      </footer>

      <ResumePrintSheet />
    </div>
  );
}
