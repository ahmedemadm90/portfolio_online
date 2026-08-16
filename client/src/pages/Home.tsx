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
  MessageCircle,
  Menu,
  Moon,
  Phone,
  Sun,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

type Locale = "en" | "ar";
type Theme = "light" | "dark";

/**
 * Style reminder — Technical Editorial Ledger:
 * This page behaves like an annotated engineering record: asymmetrical
 * compositions, paper/ink contrast, mono metadata, a coral execution mark,
 * and motion reserved for revealing relationships between systems.
 * New controls keep the same language: compact, explicit, and easy to inspect.
 */

const GITHUB_ROOT = "https://github.com/ahmedemadm90";
const CONTACT_EMAIL = "ahmedemadm90@gmail.com";
const CONTACT_PHONE = "+201019030515";
const WHATSAPP_URL = "https://wa.me/201019030515";
const BRAND_MARK = "/manus-storage/ahmed-mark_bba7fd9c.png";

const copy = {
  en: {
    nav: { projects: "Projects", method: "Method", skills: "Skills", cv: "CV", github: "GitHub" },
    menu: "Menu",
    close: "Close",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    language: "العربية",
    eyebrow: "AHMED EMAD / PUBLIC BUILD LOG",
    heroTitle: <>I turn repetitive work into <em>dependable systems.</em></>,
    heroIntro: "Software engineer focused on Laravel, PHP, Flutter, and automation-minded product workflows — building from the friction up.",
    explore: "Explore the builds",
    printCv: "Print CV",
    currentSignal: "CURRENT SIGNAL",
    currentSignalText: "21 public repositories · a practical record across web systems, mobile experiments, operations, and automation exploration.",
    fig01: "FIG. 01",
    fig01Caption: "FROM PROCESS TO PLATFORM",
    stamp: <>BUILD<br /><span>↗</span><br />REPEAT</>,
    heroLine: "01 — SOFTWARE / AUTOMATION / SYSTEMS",
    heroBased: "Based in the public record",
    shortVersion: "THE SHORT VERSION",
    whatMake: "What I make",
    statementLead: <>Not just screens. <span>Working loops.</span></>,
    statementText: "The public work points to a consistent instinct: take a messy operational process, give it structure, and make the next action obvious. From support tickets and reservations to dashboards and ERP records, the code is the record of the thinking.",
    statementNote: "Readable systems beat impressive demos when the work has to live past launch.",
    selectedBuilds: "Selected builds",
    projectsTitle: <>Projects with a <em>job</em> to do.</>,
    projectsNote: "An expanded GitHub-grounded selection. Open each repository to inspect the source, history, and current scope.",
    inspectRepo: "Inspect repo",
    moreArchive: "MORE IN THE ARCHIVE",
    browseAll: "Browse all public repositories",
    workingMethod: "Working method",
    methodTitle: <>Automation is a <em>design decision.</em></>,
    methodIntro: "Good automation is not a shortcut pasted on top of a process. It is the process made visible, testable, and easier to trust.",
    methodCode: "workflow.run",
    methodFriction: "(friction)",
    methodReady: "system.ready",
    method: [
      { title: "Map the friction", copy: "Find the repeated handoffs, hidden delays, and decisions that make a process expensive to operate." },
      { title: "Make the rules visible", copy: "Shape the workflow into clear states, permissions, records, and boundaries the team can trust." },
      { title: "Ship the loop", copy: "Deliver a working system, then leave enough structure for the next person to understand and extend it." },
    ],
    capabilityMap: "Capability map",
    skillsTitle: <>The tools behind the <em>loop.</em></>,
    skillsNote: "The languages, frameworks, and automation tools that define the current working toolkit.",
    skills: [
      { label: "Backend systems", title: "Laravel / PHP", copy: "Application architecture, migrations, business logic, secure routes, and maintainable MVC foundations." },
      { label: "Mobile builds", title: "Flutter / Dart", copy: "Cross-platform mobile direction, Dart repositories, and product ideas that extend beyond the browser." },
      { label: "Workflow orchestration", title: "n8n / Automation", copy: "Connecting triggers, decisions, APIs, and repeatable actions into workflows that reduce manual effort." },
      { label: "Interface layer", title: "JavaScript / UI", copy: "Responsive interfaces with Blade, JavaScript, CSS, SCSS, and focused admin experiences." },
      { label: "Delivery toolkit", title: "Git / Docker", copy: "Versioned code, repeatable setup, and a delivery practice that keeps systems easy to revisit." },
    ],
    skillMix: "LANGUAGE MIX / PHP · DART · JAVASCRIPT · PYTHON",
    skillClosing: "Architecture first. Tools second.",
    profile: "Profile / CV",
    profileTitle: <>Make the next step <em>obvious.</em></>,
    profileText: "Ahmed Emad is a software engineer working across Laravel and PHP backends, Flutter and Dart directions, responsive interfaces, and automation-minded operational systems.",
    profileNote: "The CV is grounded in public GitHub evidence. Add verified role history, education, and contact details before using it for a formal application.",
    printSave: "Print / Save CV",
    githubProfile: "GitHub profile",
    workbench: "FIG. 02 / THE WORKBENCH",
    openChannel: "Open channel",
    contactTitle: <>Let’s build the <em>next useful thing.</em></>,
    contactText: "Send a short brief, a project question, or a collaboration idea. The form opens your email client with the message addressed directly to Ahmed.",
    contactFootnote: "[ Direct mail / no middle layer. ]",
    form: { name: "Your name", email: "Your email", subject: "Subject", message: "Tell me what you are building…", send: "Open email draft", opened: "Your email draft is ready. Finish sending it from your email app.", direct: `Messages route to ${CONTACT_EMAIL}.` },
    footer: "Built as a visual index of public work.",
    footerTop: "Back to top",
    languageLabel: "العربية",
    altHero: "A workbench with a laptop visualising connected automation flows",
    altMap: "Editorial illustration of connected automation cards and workflow nodes",
    altDesk: "Hands working at a software engineer's desk",
  },
  ar: {
    nav: { projects: "المشروعات", method: "المنهج", skills: "المهارات", cv: "السيرة الذاتية", github: "جيت هاب" },
    menu: "القائمة",
    close: "إغلاق",
    themeToDark: "التبديل إلى الوضع الليلي",
    themeToLight: "التبديل إلى الوضع النهاري",
    language: "English",
    eyebrow: "أحمد عماد / سجل الأعمال العام",
    heroTitle: <>أحوّل العمل المتكرر إلى <em>أنظمة يمكن الاعتماد عليها.</em></>,
    heroIntro: "مهندس برمجيات أعمل على Laravel وPHP وFlutter، وأصمم مسارات منتجات تفكر في الأتمتة من البداية.",
    explore: "استكشف المشروعات",
    printCv: "طباعة السيرة",
    currentSignal: "الإشارة الحالية",
    currentSignalText: "21 مستودعاً عاماً · سجل عملي يغطي أنظمة الويب وتجارب الموبايل والعمليات والأتمتة.",
    fig01: "الشكل 01",
    fig01Caption: "من العملية إلى المنصة",
    stamp: <>ابنِ<br /><span>↗</span><br />وكرّر</>,
    heroLine: "01 — برمجة / أتمتة / أنظمة",
    heroBased: "استناداً إلى السجل العام",
    shortVersion: "الخلاصة",
    whatMake: "ما أبنيه",
    statementLead: <>ليست شاشات فقط. <span>إنها حلقات عمل.</span></>,
    statementText: "تظهر المشروعات العامة غريزة ثابتة: أخذ عملية تشغيلية معقدة، وإعطاؤها هيكلاً يجعل الخطوة التالية واضحة. من تذاكر الدعم والحجوزات إلى لوحات التحكم وسجلات ERP، الكود هو سجل التفكير.",
    statementNote: "الأنظمة الواضحة تتفوق على العروض المبهرة عندما يستمر العمل بعد الإطلاق.",
    selectedBuilds: "مشروعات مختارة",
    projectsTitle: <>مشروعات لها <em>وظيفة</em> واضحة.</>,
    projectsNote: "مجموعة موسعة مبنية على GitHub. افتح كل مستودع لمراجعة المصدر والتاريخ والنطاق الحالي.",
    inspectRepo: "افحص المستودع",
    moreArchive: "المزيد في الأرشيف",
    browseAll: "تصفح كل المستودعات العامة",
    workingMethod: "منهج العمل",
    methodTitle: <>الأتمتة هي <em>قرار تصميم.</em></>,
    methodIntro: "الأتمتة الجيدة ليست اختصاراً يوضع فوق عملية متعبة، بل هي جعل العملية مرئية وقابلة للاختبار وأسهل في الثقة.",
    methodCode: "workflow.run",
    methodFriction: "(الاحتكاك)",
    methodReady: "system.ready",
    method: [
      { title: "حدد نقاط الاحتكاك", copy: "ابحث عن التسليمات المتكررة والتأخيرات والقرارات التي تجعل تشغيل العملية مكلفاً." },
      { title: "اجعل القواعد مرئية", copy: "حوّل مسار العمل إلى حالات وصلاحيات وسجلات وحدود واضحة يمكن للفريق الوثوق بها." },
      { title: "أطلق الحلقة", copy: "سلّم نظاماً يعمل، واترك بنية كافية كي يفهمه الشخص التالي ويطوره." },
    ],
    capabilityMap: "خريطة القدرات",
    skillsTitle: <>الأدوات خلف <em>الحلقة.</em></>,
    skillsNote: "اللغات والأطر وأدوات الأتمتة التي تشكل مجموعة العمل الحالية.",
    skills: [
      { label: "أنظمة الخلفية", title: "Laravel / PHP", copy: "هندسة التطبيقات، الترحيلات، منطق الأعمال، المسارات الآمنة، وبنية MVC قابلة للصيانة." },
      { label: "بناء تطبيقات الموبايل", title: "Flutter / Dart", copy: "اتجاه التطبيقات متعددة المنصات، ومستودعات Dart، وأفكار المنتجات خارج المتصفح." },
      { label: "تنسيق سير العمل", title: "n8n / Automation", copy: "ربط المحفزات والقرارات وواجهات API والإجراءات المتكررة لتقليل العمل اليدوي." },
      { label: "طبقة الواجهة", title: "JavaScript / UI", copy: "واجهات متجاوبة باستخدام Blade وJavaScript وCSS وSCSS وتجارب لوحات التحكم." },
      { label: "أدوات التسليم", title: "Git / Docker", copy: "كود بإصدارات واضحة، إعداد قابل للتكرار، وممارسة تسليم تجعل الأنظمة سهلة المراجعة." },
    ],
    skillMix: "مزيج اللغات / PHP · DART · JAVASCRIPT · PYTHON",
    skillClosing: "الهندسة أولاً. الأدوات ثانياً.",
    profile: "الملف / السيرة الذاتية",
    profileTitle: <>اجعل الخطوة التالية <em>واضحة.</em></>,
    profileText: "أحمد عماد مهندس برمجيات يعمل على خلفيات Laravel وPHP، واتجاهات Flutter وDart، والواجهات المتجاوبة، والأنظمة التشغيلية التي تفكر في الأتمتة.",
    profileNote: "السيرة مبنية على أدلة GitHub العامة. أضف تاريخك الوظيفي وتعليمك وبيانات التواصل المؤكدة قبل استخدامها في تقديم رسمي.",
    printSave: "طباعة / حفظ السيرة",
    githubProfile: "حساب GitHub",
    workbench: "الشكل 02 / طاولة العمل",
    openChannel: "قناة مفتوحة",
    contactTitle: <>لنبنِ <em>الشيء المفيد التالي.</em></>,
    contactText: "أرسل نبذة مختصرة أو سؤالاً عن مشروع أو فكرة تعاون. النموذج يفتح تطبيق البريد لديك والرسالة موجهة مباشرة إلى أحمد.",
    contactFootnote: "[ بريد مباشر / بلا وسيط. ]",
    form: { name: "اسمك", email: "بريدك الإلكتروني", subject: "الموضوع", message: "اكتب ما الذي تبنيه…", send: "فتح مسودة بريد", opened: "تم تجهيز مسودة البريد. أكمل الإرسال من تطبيق البريد لديك.", direct: `الرسائل ستصل إلى ${CONTACT_EMAIL}.` },
    footer: "بُني كفهرس بصري للأعمال العامة.",
    footerTop: "العودة للأعلى",
    languageLabel: "English",
    altHero: "طاولة عمل عليها حاسوب يعرض مسارات أتمتة مترابطة",
    altMap: "رسم تحريري لبطاقات أتمتة وعقد سير عمل مترابطة",
    altDesk: "يدان تعملان على مكتب مهندس برمجيات",
  },
} as const;

const projects = [
  {
    number: "01", slug: "tickets", title: { en: "Support Ticketing System", ar: "نظام تذاكر الدعم" }, category: { en: "Operations / Laravel", ar: "عمليات / Laravel" }, description: { en: "A professional support platform built around ticket lifecycle management, secure backend architecture, database migrations, and real-time status updates.", ar: "منصة دعم احترافية لإدارة دورة حياة التذاكر، وبنية خلفية آمنة، وترحيلات قاعدة البيانات، وتحديثات الحالة." }, stack: ["PHP", "Laravel", "Blade", "JavaScript"], signal: { en: "2 stars · public repository", ar: "نجمتان · مستودع عام" }, url: `${GITHUB_ROOT}/tickets`,
  },
  {
    number: "02", slug: "hotel", title: { en: "Hotel Reservation System", ar: "نظام حجوزات الفنادق" }, category: { en: "Hospitality / Workflow", ar: "ضيافة / سير عمل" }, description: { en: "An advanced reservation and property management system for organizing bookings, availability, and the operational flow behind a hospitality business.", ar: "نظام متقدم للحجوزات وإدارة العقارات لتنظيم الحجوزات والتوافر ومسار التشغيل خلف نشاط الضيافة." }, stack: ["PHP", "Laravel", "SCSS", "MySQL"], signal: { en: "reservation workflow", ar: "سير عمل الحجوزات" }, url: `${GITHUB_ROOT}/hotel`,
  },
  {
    number: "03", slug: "school-management-system", title: { en: "School Management ERP", ar: "نظام ERP لإدارة المدارس" }, category: { en: "Education / ERP", ar: "تعليم / ERP" }, description: { en: "An enterprise resource planning platform for educational institutions, structured around records, schedules, administration, and reporting.", ar: "منصة تخطيط موارد للمؤسسات التعليمية، منظمة حول السجلات والجداول والإدارة والتقارير." }, stack: ["PHP", "Laravel", "Blade", "ERP"], signal: { en: "enterprise process map", ar: "خريطة عمليات مؤسسية" }, url: `${GITHUB_ROOT}/school-management-system`,
  },
  {
    number: "04", slug: "soft-ui-laravel-8", title: { en: "Soft UI Admin Dashboard", ar: "لوحة تحكم Soft UI" }, category: { en: "Foundations / Access", ar: "أساسيات / صلاحيات" }, description: { en: "A Laravel 8 admin foundation combining a Soft UI system with Spatie role management for secure, role-aware internal applications.", ar: "أساس إداري بـ Laravel 8 يجمع نظام Soft UI مع إدارة الصلاحيات عبر Spatie لتطبيقات داخلية آمنة." }, stack: ["Laravel 8", "Blade", "Spatie", "RBAC"], signal: { en: "dashboard foundation", ar: "أساس لوحة تحكم" }, url: `${GITHUB_ROOT}/soft-ui-laravel-8`,
  },
  {
    number: "05", slug: "yume4u", title: { en: "Yume4u Commerce Platform", ar: "منصة Yume4u للتجارة" }, category: { en: "Commerce / Product", ar: "تجارة / منتج" }, description: { en: "An e-commerce platform focused on user experience, scalable product management, catalog navigation, and a dependable application core.", ar: "منصة تجارة إلكترونية تركز على تجربة المستخدم وإدارة المنتجات والتنقل داخل الكتالوج ونواة تطبيق موثوقة." }, stack: ["Laravel", "PHP", "Docker", "Vue"], signal: { en: "catalog workflow", ar: "سير عمل الكتالوج" }, url: `${GITHUB_ROOT}/yume4u`,
  },
  {
    number: "06", slug: "newsmes", title: { en: "Newsmes Content System", ar: "نظام Newsmes للمحتوى" }, category: { en: "Content / CMS", ar: "محتوى / CMS" }, description: { en: "A modern news and content management system with dynamic categorization, representing the publishing side of the public portfolio.", ar: "نظام حديث لإدارة الأخبار والمحتوى مع تصنيف ديناميكي، يمثل جانب النشر في الأعمال العامة." }, stack: ["PHP", "HTML", "JavaScript", "CMS"], signal: { en: "content operations", ar: "عمليات المحتوى" }, url: `${GITHUB_ROOT}/newsmes`,
  },
  {
    number: "07", slug: "logistics", title: { en: "Cemex Logistics Archive", ar: "أرشيف Cemex اللوجستي" }, category: { en: "Archive / Operations", ar: "أرشيف / عمليات" }, description: { en: "A public logistics archive project that points to an operational focus: structuring records so teams can find and act on them faster.", ar: "مشروع أرشيف لوجستي عام يوضح التركيز التشغيلي على تنظيم السجلات لتسهيل الوصول واتخاذ القرار." }, stack: ["PHP", "Laravel", "Archive"], signal: { en: "records workflow", ar: "سير عمل السجلات" }, url: `${GITHUB_ROOT}/logistics`,
  },
  {
    number: "08", slug: "oscarpark", title: { en: "Oscarpark / Dart Repository", ar: "Oscarpark / مستودع Dart" }, category: { en: "Mobile direction / Dart", ar: "اتجاه موبايل / Dart" }, description: { en: "A public Dart repository that broadens the portfolio beyond browser applications. Inspect the source for the current product scope.", ar: "مستودع Dart عام يوسع المسار خارج تطبيقات المتصفح. يمكن فحص المصدر لمعرفة نطاق المنتج الحالي." }, stack: ["Dart", "Flutter direction"], signal: { en: "public Dart project", ar: "مشروع Dart عام" }, url: `${GITHUB_ROOT}/oscarpark`,
  },
  {
    number: "09", slug: "meza", title: { en: "Meza / Single-Seller Commerce", ar: "Meza / تجارة البائع الواحد" }, category: { en: "Commerce / Dart", ar: "تجارة / Dart" }, description: { en: "A public Dart repository connected to a single-seller commerce direction, extending the product portfolio into mobile-oriented work.", ar: "مستودع Dart عام مرتبط باتجاه تجارة البائع الواحد، ويمد محفظة المنتجات نحو العمل الموجه للموبايل." }, stack: ["Dart", "Flutter direction", "Commerce"], signal: { en: "mobile commerce direction", ar: "اتجاه تجارة موبايل" }, url: `${GITHUB_ROOT}/meza`,
  },
  {
    number: "10", slug: "agenticSeekFork", title: { en: "AgenticSeek Fork / Local Agents", ar: "AgenticSeek Fork / وكلاء محليون" }, category: { en: "Exploration / Python", ar: "استكشاف / Python" }, description: { en: "A public fork explored as a local-agent reference. It is labeled as a fork and not presented as original product ownership.", ar: "نسخة عامة تمت دراستها كمرجع للوكلاء المحليين. تم وسمها بوضوح كـ fork وليست منتجاً أصلياً منسوباً إليك." }, stack: ["Python", "JavaScript", "Shell"], signal: { en: "fork / exploration", ar: "نسخة / استكشاف" }, url: `${GITHUB_ROOT}/agenticSeekFork`,
  },
] as const;

const skillIcons = [Terminal, Workflow, Workflow, Braces, Layers3];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function ProjectRow({ project, locale, labels }: { project: (typeof projects)[number]; locale: Locale; labels: (typeof copy)[Locale] }) {
  return (
    <article className="project-row">
      <div className="project-row__number" aria-hidden="true">{project.number}</div>
      <div className="project-row__main">
        <div className="project-row__meta"><span>{project.category[locale]}</span><span className="project-row__signal">{project.signal[locale]}</span></div>
        <h3>{project.title[locale]}</h3>
        <p>{project.description[locale]}</p>
        <div className="project-row__footer">
          <div className="stack-list" aria-label={`${project.title[locale]} technologies`}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <a className="text-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`${labels.inspectRepo}: ${project.title[locale]}`}>
            {labels.inspectRepo} <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ResumePrintSheet({ locale }: { locale: Locale }) {
  const labels = copy[locale];
  return (
    <div id="resume-print-sheet" className="resume-print-sheet">
      <div className="print-sheet__topline">AHMED EMAD / SOFTWARE ENGINEER & AUTOMATION SPECIALIST</div>
      <h1>Ahmed Emad</h1>
      <p className="print-sheet__lead">{labels.profileText}</p>
      <div className="print-sheet__grid">
        <section><h2>{locale === "ar" ? "الملف" : "Profile"}</h2><p>{labels.profileNote}</p></section>
        <section><h2>{locale === "ar" ? "المهارات" : "Core skills"}</h2><p>Laravel · Flutter · PHP · Dart · n8n · JavaScript · MySQL · Git · Docker · Python</p></section>
      </div>
      <section>
        <h2>{locale === "ar" ? "مشروعات مختارة" : "Selected projects"}</h2>
        <div className="print-projects">{projects.slice(0, 7).map((project) => <div key={project.slug}><strong>{project.title[locale]}</strong><span>{project.description[locale]}</span></div>)}</div>
      </section>
      <div className="print-sheet__bottomline"><span>github.com/ahmedemadm90</span><span>{locale === "ar" ? "ملف مهني مبني على GitHub العام" : "Public portfolio / GitHub-grounded profile"}</span></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>(() => {
    try { return window.localStorage.getItem("ahmed-locale") === "ar" ? "ar" : "en"; } catch { return "en"; }
  });
  const [theme, setTheme] = useState<Theme>(() => {
    try { return window.localStorage.getItem("ahmed-theme") === "dark" ? "dark" : "light"; } catch { return "light"; }
  });
  const [submitted, setSubmitted] = useState(false);
  const labels = copy[locale];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    try { window.localStorage.setItem("ahmed-theme", theme); } catch { /* storage is optional */ }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    try { window.localStorage.setItem("ahmed-locale", locale); } catch { /* storage is optional */ }
  }, [locale]);

  const closeMenu = () => setMenuOpen(false);
  const printResume = () => window.print();
  const toggleLocale = () => { setLocale((current) => current === "en" ? "ar" : "en"); closeMenu(); };
  const toggleTheme = () => setTheme((current) => current === "light" ? "dark" : "light");

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const message = String(form.get("message") ?? "");
    const body = `${locale === "ar" ? "الاسم" : "Name"}: ${name}\n${locale === "ar" ? "البريد" : "Email"}: ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || (locale === "ar" ? "رسالة من البورتفوليو" : "Portfolio enquiry"))}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" onClick={closeMenu} aria-label="Ahmed Emad portfolio home"><img src={BRAND_MARK} alt="Ahmed Emad mark" className="brand-lockup__mark" /><span className="brand-lockup__name">Ahmed Emad</span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}<span>{menuOpen ? labels.close : labels.menu}</span></button>
          <nav id="primary-nav" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>{labels.nav.projects}</a><a href="#method" onClick={closeMenu}>{labels.nav.method}</a><a href="#skills" onClick={closeMenu}>{labels.nav.skills}</a><a href="#resume" onClick={closeMenu}>{labels.nav.cv}</a>
            <div className="header-tools">
              <button className="header-tool" type="button" onClick={toggleTheme} aria-label={theme === "light" ? labels.themeToDark : labels.themeToLight}>{theme === "light" ? <Moon size={15} /> : <Sun size={15} />}<span>{theme === "light" ? "Dark" : "Light"}</span></button>
              <button className="header-tool header-tool--language" type="button" onClick={toggleLocale} aria-label={`Switch language: ${labels.language}`}><span className="language-mark">{locale === "en" ? "ع" : "EN"}</span><span>{labels.language}</span></button>
            </div>
            <a className="nav-cta" href={GITHUB_ROOT} target="_blank" rel="noreferrer" onClick={closeMenu}>{labels.nav.github} <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top"><div className="hero-grid"><div className="hero-copy"><div className="eyebrow"><CircleDot size={12} fill="currentColor" /> {labels.eyebrow}</div><h1>{labels.heroTitle}</h1><p className="hero-intro">{labels.heroIntro}</p><div className="hero-actions"><a className="button button--coral" href="#work">{labels.explore} <ArrowDown size={17} /></a><button className="button button--quiet" type="button" onClick={printResume}><Download size={17} /> {labels.printCv}</button></div><div className="hero-aside"><span className="mono-label">{labels.currentSignal}</span><p>{labels.currentSignalText}</p></div></div><div className="hero-visual"><div className="hero-visual__frame"><img src="/manus-storage/ahmed-hero_45371eec.jpg" alt={labels.altHero} /><div className="hero-visual__caption"><span>{labels.fig01}</span><span>{labels.fig01Caption}</span></div></div><div className="hero-stamp" aria-hidden="true">{labels.stamp}</div></div></div><div className="hero-bottomline"><span>{labels.heroLine}</span><span>{labels.heroBased}</span><a href="#work" aria-label={labels.explore}><ArrowDown size={17} /></a></div></section>

        <section className="statement-section section-paper"><div className="vertical-rail" aria-hidden="true"><span>{labels.shortVersion}</span></div><div className="statement-grid page-pad"><div className="statement-kicker"><span>{labels.whatMake}</span><strong>→</strong></div><div className="statement-copy"><p className="statement-lead">{labels.statementLead}</p><p>{labels.statementText}</p></div><div className="statement-note"><span>[ 02 ]</span><p>{labels.statementNote}</p></div></div></section>

        <section className="work-section page-pad" id="work"><div className="section-heading"><div><SectionLabel index="02">{labels.selectedBuilds}</SectionLabel><h2>{labels.projectsTitle}</h2></div><p className="section-heading__note">{labels.projectsNote}</p></div><div className="project-list">{projects.map((project) => <ProjectRow project={project} locale={locale} labels={labels} key={project.slug} />)}</div><div className="work-endcap"><span>{labels.moreArchive}</span><a className="text-link text-link--large" href={GITHUB_ROOT} target="_blank" rel="noreferrer">{labels.browseAll} <Github size={17} /></a></div></section>

        <section className="method-section section-dark" id="method"><div className="page-pad method-grid"><div className="method-intro"><SectionLabel index="03">{labels.workingMethod}</SectionLabel><h2>{labels.methodTitle}</h2><p>{labels.methodIntro}</p><div className="method-code"><span>{labels.methodCode}</span><i>{labels.methodFriction}</i><b>→</b><span>{labels.methodReady}</span></div></div><div className="method-art"><img src="/manus-storage/automation-map_58bd152d.jpg" alt={labels.altMap} /><div className="method-art__label">FIELD NOTE / 03—A</div></div><div className="method-list">{labels.method.map((method, index) => <div className="method-row" key={method.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{method.title}</h3><p>{method.copy}</p></div><Check size={17} /></div>)}</div></div></section>

        <section className="skills-section page-pad" id="skills"><div className="section-heading section-heading--skills"><div><SectionLabel index="04">{labels.capabilityMap}</SectionLabel><h2>{labels.skillsTitle}</h2></div><p className="section-heading__note">{labels.skillsNote}</p></div><div className="skills-grid">{labels.skills.map((skill, index) => { const Icon = skillIcons[index]; return <article className="skill-card" key={skill.title}><div className="skill-card__top"><Icon size={20} strokeWidth={1.6} /><span>{skill.label}</span></div><h3>{skill.title}</h3><p>{skill.copy}</p></article>; })}</div><div className="skills-bottomline"><span className="mono-label">{labels.skillMix}</span><span>{labels.skillClosing}</span></div></section>

        <section className="profile-section section-paper"><div className="page-pad profile-grid"><div className="profile-image"><img src="/manus-storage/engineer-desk_7396362b.jpg" alt={labels.altDesk} /><span>{labels.workbench}</span></div><div className="profile-copy"><SectionLabel index="05">{labels.profile}</SectionLabel><h2>{labels.profileTitle}</h2><p>{labels.profileText}</p><p className="profile-copy__small">{labels.profileNote}</p><div className="profile-actions"><button className="button button--coral" type="button" onClick={printResume}>{labels.printSave} <Download size={16} /></button><a className="button button--outline" href={GITHUB_ROOT} target="_blank" rel="noreferrer">{labels.githubProfile} <ExternalLink size={16} /></a></div></div></div></section>

        <section className="contact-section section-coral" id="resume"><div className="page-pad contact-grid"><div><SectionLabel index="06">{labels.openChannel}</SectionLabel><h2>{labels.contactTitle}</h2><div className="contact-copy"><p>{labels.contactText}</p><div className="contact-details"><a className="contact-detail" href={`tel:${CONTACT_PHONE}`}><Phone size={18} /><span><small>{locale === "ar" ? "الهاتف" : "Mobile"}</small><strong dir="ltr">+20 101 903 0515</strong></span></a><a className="contact-detail" href={`${WHATSAPP_URL}?text=${encodeURIComponent(locale === "ar" ? "مرحباً أحمد، أريد مناقشة مشروع." : "Hi Ahmed, I would like to discuss a project.")}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small><strong dir="ltr">+20 101 903 0515</strong></span><ArrowUpRight size={16} /></a></div><span className="contact-footnote">{labels.contactFootnote}</span></div></div><form className="contact-form" onSubmit={handleContactSubmit}><div className="contact-form__row"><label><span>{labels.form.name}</span><input name="name" required autoComplete="name" /></label><label><span>{labels.form.email}</span><input name="email" type="email" required autoComplete="email" /></label></div><label><span>{labels.form.subject}</span><input name="subject" required /></label><label><span>{labels.form.message}</span><textarea name="message" rows={5} required /></label><div className="contact-form__submit"><button className="button button--ink" type="submit"><Mail size={17} /> {labels.form.send}</button><span>{labels.form.direct}</span></div>{submitted && <p className="form-success" role="status">{labels.form.opened}</p>}</form></div></section>
      </main>

      <footer className="site-footer"><div className="page-pad footer-inner"><div className="footer-brand"><img src={BRAND_MARK} alt="" /><span>Ahmed Emad / Portfolio</span></div><span className="footer-note">{labels.footer}</span><a href="#top" className="footer-top">{labels.footerTop} <ArrowDown size={15} /></a></div></footer>
      <ResumePrintSheet locale={locale} />
    </div>
  );
}
