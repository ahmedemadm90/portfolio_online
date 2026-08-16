import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Briefcase,
  Check,
  CircleDot,
  Download,
  ExternalLink,
  FileText,
  Filter,
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

const GITHUB_ROOT = "https://github.com/ahmedemadm90";
const CONTACT_EMAIL = "ahmedemadm90@gmail.com";
const CONTACT_PHONE = "+201019030515";
const WHATSAPP_URL = "https://wa.me/201019030515";
const BRAND_MARK = "/manus-storage/ahmed-mark_bba7fd9c.png";
const PDF_RESUME = "/AhmedEmad.pdf";

const copy = {
  en: {
    nav: { projects: "Projects", method: "Method", experience: "Experience", skills: "Skills", cv: "CV", github: "GitHub" },
    menu: "Menu",
    close: "Close",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    language: "العربية",
    downloadPdf: "Download PDF CV",
    eyebrow: "AHMED EMAD / 10+ YEARS BACKEND & AUTOMATION",
    heroTitle: <>I turn repetitive work into <em>dependable systems.</em></>,
    heroIntro: "Senior Backend Developer & Automation Engineer specializing in scalable Laravel architectures, PHP, Flutter mobile solutions, and n8n workflows.",
    explore: "Explore the builds",
    printCv: "Print CV",
    currentSignal: "CURRENT SIGNAL",
    currentSignalText: "21 public repositories · enterprise experience across CEMEX, Ibnsina Pharma, TE Data, and Exception Tech Group.",
    fig01: "FIG. 01",
    fig01Caption: "FROM PROCESS TO PLATFORM",
    stamp: <>BUILD<br /><span>↗</span><br />REPEAT</>,
    heroLine: "01 — BACKEND / AUTOMATION / SYSTEMS",
    heroBased: "Based in Cairo, Egypt",
    shortVersion: "THE SHORT VERSION",
    whatMake: "What I make",
    statementLead: <>Not just screens. <span>Working loops.</span></>,
    statementText: "Backend systems processing 10K-30K requests daily, enterprise ERP modules, mobile applications with Flutter, and automated pipelines that cut manual effort by 40-60%. Code is the structured record of robust engineering.",
    statementNote: "Scalable architecture and maintainable code outlast temporary demos.",
    selectedBuilds: "Selected builds",
    projectsTitle: <>Projects with a <em>job</em> to do.</>,
    projectsNote: "An expanded GitHub-grounded selection. Filter by technology or inspect each repository directly.",
    filterAll: "All",
    inspectRepo: "Inspect repo",
    moreArchive: "MORE IN THE ARCHIVE",
    browseAll: "Browse all public repositories",
    careerTitle: "Professional Experience",
    careerSubtitle: <>A proven track record of <em>engineering leadership.</em></>,
    careerNote: "Detailed timeline based on official resume record across enterprise systems and automation workflows.",
    career: [
      {
        role: { en: "Senior Backend Developer", ar: "مطور خلفيات رئيسي" },
        company: { en: "CEMEX Egypt", ar: "سيمكس مصر" },
        period: "Oct 2017 – Present",
        description: {
          en: "Engineered enterprise Laravel applications serving 1,000+ users, architected APIs processing 10K-30K daily requests, optimized database execution by 25-35%, and maintained Linux production environments with 99%+ uptime.",
          ar: "هندسة تطبيقات Laravel مؤسسية تخدم أكثر من 1000 مستخدم، وتصميم واجهات برمجة تعالج 10-30 ألف طلب يومياً، وتحسين أداء قواعد البيانات بنسبة 25-35%."
        },
        stack: ["Laravel", "PHP", "MySQL", "REST APIs", "Linux", "RBAC"]
      },
      {
        role: { en: "Mobile Developer (Flutter)", ar: "مطور تطبيقات موبايل (Flutter)" },
        company: { en: "Exception Tech Group", ar: "إكسبشن تك جروب" },
        period: "Jan 2017 – Present",
        description: {
          en: "Built Flutter mobile applications connected to Laravel REST APIs, serving 500+ active users with Firebase push notifications and secure authentication workflows.",
          ar: "بناء تطبيقات موبايل باستخدام Flutter مرتبطة بخلفيات Laravel، وخدمة أكثر من 500 مستخدم نشط مع تكامل إشعارات Firebase ومصادقة آمنة."
        },
        stack: ["Flutter", "Dart", "Firebase", "REST APIs"]
      },
      {
        role: { en: "Automation & Integration Engineer (n8n)", ar: "مهندس أتمتة وتكامل (n8n)" },
        company: { en: "Contract / Internal Projects", ar: "مشروعات تعاقدية / داخلية" },
        period: "2019 – Present",
        description: {
          en: "Orchestrated n8n workflow automations for HR processes and notifications, cutting repetitive operational tasks by 40-60% through automated data pipelines.",
          ar: "تنسيق سير عمل الأتمتة عبر n8n لعمليات الموارد البشرية والإشعارات، وخفض المهام التشغيلية المتكررة بنسبة 40-60%."
        },
        stack: ["n8n", "Webhooks", "Workflow Automation", "API Integration"]
      },
      {
        role: { en: "Backend Developer", ar: "مطور خلفيات" },
        company: { en: "Ibnsina Pharma", ar: "ابن سينا فارما" },
        period: "Nov 2015 – Dec 2016",
        description: {
          en: "Created backend services and internal APIs using PHP and MySQL, structuring schemas and strengthening core logic for daily business operational tools.",
          ar: "إنشاء خدمات خلفية واجهات برمجة داخلية باستخدام PHP وMySQL، وهيكلة مخططات البيانات لدعم أدوات العمل اليومية."
        },
        stack: ["PHP", "MySQL", "Internal APIs", "Database Design"]
      },
      {
        role: { en: "Backend Developer", ar: "مطور خلفيات" },
        company: { en: "TE Data", ar: "تي إي داتا" },
        period: "Oct 2014 – Oct 2015",
        description: {
          en: "Contributed backend components for internal platforms and service modules, assisting with database operations, debugging, and system reliability.",
          ar: "المساهمة في بناء مكونات الخلفية للأنظمة الداخلية، والمساعدة في عمليات قواعد البيانات وتصحيح الأخطاء لرفع كفاءة النظام."
        },
        stack: ["PHP", "Debugging", "Database Operations"]
      }
    ],
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
    profileText: "Ahmed Emad is a Senior Backend Developer working across Laravel and PHP backends, Flutter and Dart directions, responsive interfaces, and automation-minded operational systems.",
    profileNote: "The CV is grounded in public GitHub evidence and 10+ years of professional enterprise engineering.",
    printSave: "Print / Save CV",
    githubProfile: "GitHub profile",
    workbench: "FIG. 02 / THE WORKBENCH",
    openChannel: "Open channel",
    contactTitle: <>Let’s build the <em>next useful thing.</em></>,
    contactText: "Send a short brief, a project question, or a collaboration idea via form, mobile, or WhatsApp.",
    contactFootnote: "[ Direct channels / fast response. ]",
    form: { name: "Your name", email: "Your email", subject: "Subject", message: "Tell me what you are building…", send: "Open email draft", opened: "Your email draft is ready. Finish sending it from your email app.", direct: `Messages route to ${CONTACT_EMAIL}.` },
    footer: "Built as a visual index of public work and engineering career.",
    footerTop: "Back to top",
    languageLabel: "العربية",
    altHero: "A workbench with a laptop visualising connected automation flows",
    altMap: "Editorial illustration of connected automation cards and workflow nodes",
    altDesk: "Hands working at a software engineer's desk",
  },
  ar: {
    nav: { projects: "المشروعات", method: "المنهج", experience: "الخبرات", skills: "المهارات", cv: "السيرة الذاتية", github: "جيت هاب" },
    menu: "القائمة",
    close: "إغلاق",
    themeToDark: "التبديل إلى الوضع الليلي",
    themeToLight: "التبديل إلى الوضع النهاري",
    language: "English",
    downloadPdf: "تحميل السيرة PDF",
    eyebrow: "أحمد عماد / خبرة 10+ سنوات في الخلفيات والأتمتة",
    heroTitle: <>أحوّل العمل المتكرر إلى <em>أنظمة يمكن الاعتماد عليها.</em></>,
    heroIntro: "مطور خلفيات رئيسي ومهندس أتمتة متخصص في هندسة Laravel المتقدمة، PHP، حلول Flutter للموبايل، ومسارات n8n.",
    explore: "استكشف المشروعات",
    printCv: "طباعة السيرة",
    currentSignal: "الإشارة الحالية",
    currentSignalText: "21 مستودعاً عاماً · خبرة مؤسسية لدى سيمكس مصر، ابن سينا فارما، تي إي داتا، وإكسبشن تك.",
    fig01: "الشكل 01",
    fig01Caption: "من العملية إلى المنصة",
    stamp: <>ابنِ<br /><span>↗</span><br />وكرّر</>,
    heroLine: "01 — خلفيات / أتمتة / أنظمة",
    heroBased: "مقيم في القاهرة، مصر",
    shortVersion: "الخلاصة",
    whatMake: "ما أبنيه",
    statementLead: <>ليست شاشات فقط. <span>إنها حلقات عمل.</span></>,
    statementText: "أنظمة خلفية تعالج 10-30 ألف طلب يومياً، وحدات ERP مؤسسية، تطبيقات موبايل بـ Flutter، ومسارات أتمتة تخفض الجهد اليدوي بنسبة 40-60%. الكود هو السجل المنظم لهندسة قوية.",
    statementNote: "الهندسة القابلة للتوسع والكود النظيف يعمران أطول من العروض المؤقتة.",
    selectedBuilds: "مشروعات مختارة",
    projectsTitle: <>مشروعات لها <em>وظيفة</em> واضحة.</>,
    projectsNote: "مجموعة موسعة مبنية على GitHub. قم بالتصفية حسب التقنية أو افحص كل مستودع مباشرة.",
    filterAll: "الكل",
    inspectRepo: "افحص المستودع",
    moreArchive: "المزيد في الأرشيف",
    browseAll: "تصفح كل المستودعات العامة",
    careerTitle: "الخبرات المهنية",
    careerSubtitle: <>سجل حافل من <em>الريادة الهندسية.</em></>,
    careerNote: "جدول زمني تفصيلي مستمد من السيرة الذاتية الرسمية عبر الأنظمة المؤسسية ومسارات الأتمتة.",
    career: [
      {
        role: { en: "Senior Backend Developer", ar: "مطور خلفيات رئيسي" },
        company: { en: "CEMEX Egypt", ar: "سيمكس مصر" },
        period: "Oct 2017 – Present",
        description: {
          en: "Engineered enterprise Laravel applications serving 1,000+ users, architected APIs processing 10K-30K daily requests, optimized database execution by 25-35%, and maintained Linux production environments with 99%+ uptime.",
          ar: "هندسة تطبيقات Laravel مؤسسية تخدم أكثر من 1000 مستخدم، وتصميم واجهات برمجة تعالج 10-30 ألف طلب يومياً، وتحسين أداء قواعد البيانات بنسبة 25-35%."
        },
        stack: ["Laravel", "PHP", "MySQL", "REST APIs", "Linux", "RBAC"]
      },
      {
        role: { en: "Mobile Developer (Flutter)", ar: "مطور تطبيقات موبايل (Flutter)" },
        company: { en: "Exception Tech Group", ar: "إكسبشن تك جروب" },
        period: "Jan 2017 – Present",
        description: {
          en: "Built Flutter mobile applications connected to Laravel REST APIs, serving 500+ active users with Firebase push notifications and secure authentication workflows.",
          ar: "بناء تطبيقات موبايل باستخدام Flutter مرتبطة بخلفيات Laravel، وخدمة أكثر من 500 مستخدم نشط مع تكامل إشعارات Firebase ومصادقة آمنة."
        },
        stack: ["Flutter", "Dart", "Firebase", "REST APIs"]
      },
      {
        role: { en: "Automation & Integration Engineer (n8n)", ar: "مهندس أتمتة وتكامل (n8n)" },
        company: { en: "Contract / Internal Projects", ar: "مشروعات تعاقدية / داخلية" },
        period: "2019 – Present",
        description: {
          en: "Orchestrated n8n workflow automations for HR processes and notifications, cutting repetitive operational tasks by 40-60% through automated data pipelines.",
          ar: "تنسيق سير عمل الأتمتة عبر n8n لعمليات الموارد البشرية والإشعارات، وخفض المهام التشغيلية المتكررة بنسبة 40-60%."
        },
        stack: ["n8n", "Webhooks", "Workflow Automation", "API Integration"]
      },
      {
        role: { en: "Backend Developer", ar: "مطور خلفيات" },
        company: { en: "Ibnsina Pharma", ar: "ابن سينا فارما" },
        period: "Nov 2015 – Dec 2016",
        description: {
          en: "Created backend services and internal APIs using PHP and MySQL, structuring schemas and strengthening core logic for daily business operational tools.",
          ar: "إنشاء خدمات خلفية واجهات برمجة داخلية باستخدام PHP وMySQL، وهيكلة مخططات البيانات لدعم أدوات العمل اليومية."
        },
        stack: ["PHP", "MySQL", "Internal APIs", "Database Design"]
      },
      {
        role: { en: "Backend Developer", ar: "مطور خلفيات" },
        company: { en: "TE Data", ar: "تي إي داتا" },
        period: "Oct 2014 – Oct 2015",
        description: {
          en: "Contributed backend components for internal platforms and service modules, assisting with database operations, debugging, and system reliability.",
          ar: "المساهمة في بناء مكونات الخلفية للأنظمة الداخلية، والمساعدة في عمليات قواعد البيانات وتصحيح الأخطاء لرفع كفاءة النظام."
        },
        stack: ["PHP", "Debugging", "Database Operations"]
      }
    ],
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
    profileText: "أحمد عماد مطور خلفيات رئيسي يعمل على خلفيات Laravel وPHP، واتجاهات Flutter وDart، والواجهات المتجاوبة، والأنظمة التشغيلية التي تفكر في الأتمتة.",
    profileNote: "السيرة مبنية على أدلة GitHub العامة وخبرة تزيد عن 10 سنوات في هندسة الأنظمة المؤسسية.",
    printSave: "طباعة / حفظ السيرة",
    githubProfile: "حساب GitHub",
    workbench: "الشكل 02 / طاولة العمل",
    openChannel: "قناة مفتوحة",
    contactTitle: <>لنبنِ <em>الشيء المفيد التالي.</em></>,
    contactText: "أرسل نبذة مختصرة أو سؤالاً عن مشروع أو فكرة تعاون عبر النموذج أو الهاتف أو واتساب.",
    contactFootnote: "[ قنوات مباشرة / استجابة سريعة. ]",
    form: { name: "اسمك", email: "بريدك الإلكتروني", subject: "الموضوع", message: "اكتب ما الذي تبنيه…", send: "فتح مسودة بريد", opened: "تم تجهيز مسودة البريد. أكمل الإرسال من تطبيق البريد لديك.", direct: `الرسائل ستصل إلى ${CONTACT_EMAIL}.` },
    footer: "بُني كفهرس بصري للأعمال العامة والمسار المهني.",
    footerTop: "العودة للأعلى",
    languageLabel: "English",
    altHero: "طاولة عمل عليها حاسوب يعرض مسارات أتمتة مترابطة",
    altMap: "رسم تحريري لبطاقات أتمتة وعقد سير عمل مترابطة",
    altDesk: "يدان تعملان على مكتب مهندس برمجيات",
  },
} as const;

const projects = [
  {
    number: "01",
    slug: "portfolio_online",
    title: { en: "portfolio_online", ar: "portfolio_online" },
    category: { en: "TypeScript / Public Repository", ar: "TypeScript / مستودع عام" },
    filterTag: "JavaScript",
    description: { en: "موقع بورتفوليو احترافي يعرض خبرة أحمد عماد في البرمجة والأتمتة ومشروعاته مفتوحة المصدر على GitHub، مع قسم سيرة ذاتية وتواصل. · Built with Manus", ar: "موقع بورتفوليو احترافي يعرض خبرة أحمد عماد في البرمجة والأتمتة ومشروعاته مفتوحة المصدر على GitHub، مع قسم سيرة ذاتية وتواصل. · Built with Manus" },
    stack: ["TypeScript", "JavaScript"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/portfolio_online",
  },
  {
    number: "02",
    slug: "car-rental-marketplace-saas",
    title: { en: "car-rental-marketplace-saas", ar: "car-rental-marketplace-saas" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "Enterprise multi-tenant car rental marketplace SaaS platform", ar: "Enterprise multi-tenant car rental marketplace SaaS platform" },
    stack: ["PHP", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/car-rental-marketplace-saas",
  },
  {
    number: "03",
    slug: "car-rental-fleet-management",
    title: { en: "car-rental-fleet-management", ar: "car-rental-fleet-management" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository car-rental-fleet-management focused on software engineering and systems.", ar: "Public GitHub repository car-rental-fleet-management focused on software engineering and systems." },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/car-rental-fleet-management",
  },
  {
    number: "04",
    slug: "hotel",
    title: { en: "hotel", ar: "hotel" },
    category: { en: "CSS / Public Repository", ar: "CSS / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "Advanced Hotel Reservation and Property Management System.", ar: "Advanced Hotel Reservation and Property Management System." },
    stack: ["CSS", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/hotel",
  },
  {
    number: "05",
    slug: "soft-ui-laravel-8",
    title: { en: "soft-ui-laravel-8", ar: "soft-ui-laravel-8" },
    category: { en: "Blade / Public Repository", ar: "Blade / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "Admin Dashboard boilerplate featuring Soft UI design and Spatie role management.", ar: "Admin Dashboard boilerplate featuring Soft UI design and Spatie role management." },
    stack: ["Blade", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/soft-ui-laravel-8",
  },
  {
    number: "06",
    slug: "school-management-system",
    title: { en: "school-management-system", ar: "school-management-system" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Comprehensive Enterprise Resource Planning (ERP) for educational institutions.", ar: "Comprehensive Enterprise Resource Planning (ERP) for educational institutions." },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/school-management-system",
  },
  {
    number: "07",
    slug: "newsmes",
    title: { en: "newsmes", ar: "newsmes" },
    category: { en: "HTML / Public Repository", ar: "HTML / مستودع عام" },
    filterTag: "JavaScript",
    description: { en: "Modern News & Content Management System with dynamic categorization.", ar: "Modern News & Content Management System with dynamic categorization." },
    stack: ["HTML", "JavaScript"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/newsmes",
  },
  {
    number: "08",
    slug: "yume4u",
    title: { en: "yume4u", ar: "yume4u" },
    category: { en: "Blade / Public Repository", ar: "Blade / مستودع عام" },
    filterTag: "PHP",
    description: { en: "E-commerce platform with a focus on user experience and scalable product management.", ar: "E-commerce platform with a focus on user experience and scalable product management." },
    stack: ["Blade", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/yume4u",
  },
  {
    number: "09",
    slug: "ahmedemadm90",
    title: { en: "ahmedemadm90", ar: "ahmedemadm90" },
    category: { en: "Code / Public Repository", ar: "Code / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository ahmedemadm90 focused on software engineering and systems.", ar: "Public GitHub repository ahmedemadm90 focused on software engineering and systems." },
    stack: ["Code", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/ahmedemadm90",
  },
  {
    number: "10",
    slug: "oscarpark",
    title: { en: "oscarpark", ar: "oscarpark" },
    category: { en: "Dart / Public Repository", ar: "Dart / مستودع عام" },
    filterTag: "Flutter",
    description: { en: "Public GitHub repository oscarpark focused on software engineering and systems.", ar: "Public GitHub repository oscarpark focused on software engineering and systems." },
    stack: ["Dart", "Flutter"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/oscarpark",
  },
  {
    number: "11",
    slug: "hr-automation-payroll-saas",
    title: { en: "hr-automation-payroll-saas", ar: "hr-automation-payroll-saas" },
    category: { en: "Blade / Public Repository", ar: "Blade / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "HR Automation & Payroll SaaS - Automated HR and payroll system (Laravel + Flutter + n8n)", ar: "HR Automation & Payroll SaaS - Automated HR and payroll system (Laravel + Flutter + n8n)" },
    stack: ["Blade", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/hr-automation-payroll-saas",
  },
  {
    number: "12",
    slug: "Violations",
    title: { en: "Violations", ar: "Violations" },
    category: { en: "HTML / Public Repository", ar: "HTML / مستودع عام" },
    filterTag: "JavaScript",
    description: { en: "CEMEX Violation Control Center", ar: "CEMEX Violation Control Center" },
    stack: ["HTML", "JavaScript"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/Violations",
  },
  {
    number: "13",
    slug: "meza",
    title: { en: "meza", ar: "meza" },
    category: { en: "Dart / Public Repository", ar: "Dart / مستودع عام" },
    filterTag: "Flutter",
    description: { en: "Meza Single Seller E-Commerce - Backend Laravel", ar: "Meza Single Seller E-Commerce - Backend Laravel" },
    stack: ["Dart", "Flutter"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/meza",
  },
  {
    number: "14",
    slug: "esoctest",
    title: { en: "esoctest", ar: "esoctest" },
    category: { en: "Code / Public Repository", ar: "Code / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository esoctest focused on software engineering and systems.", ar: "Public GitHub repository esoctest focused on software engineering and systems." },
    stack: ["Code", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/esoctest",
  },
  {
    number: "15",
    slug: "cemexpythongpt",
    title: { en: "cemexpythongpt", ar: "cemexpythongpt" },
    category: { en: "Python / Public Repository", ar: "Python / مستودع عام" },
    filterTag: "Automation",
    description: { en: "Public GitHub repository cemexpythongpt focused on software engineering and systems.", ar: "Public GitHub repository cemexpythongpt focused on software engineering and systems." },
    stack: ["Python", "Automation"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/cemexpythongpt",
  },
  {
    number: "16",
    slug: "mat3my",
    title: { en: "mat3my", ar: "mat3my" },
    category: { en: "Code / Public Repository", ar: "Code / مستودع عام" },
    filterTag: "PHP",
    description: { en: "multivendor restaurants manam", ar: "multivendor restaurants manam" },
    stack: ["Code", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/mat3my",
  },
  {
    number: "17",
    slug: "takmool-ui",
    title: { en: "takmool-ui", ar: "takmool-ui" },
    category: { en: "Dart / Public Repository", ar: "Dart / مستودع عام" },
    filterTag: "Flutter",
    description: { en: "Public GitHub repository takmool-ui focused on software engineering and systems.", ar: "Public GitHub repository takmool-ui focused on software engineering and systems." },
    stack: ["Dart", "Flutter"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/takmool-ui",
  },
  {
    number: "18",
    slug: "logistics",
    title: { en: "logistics", ar: "logistics" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Cemex Logistics Archive", ar: "Cemex Logistics Archive" },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/logistics",
  },
  {
    number: "19",
    slug: "qr",
    title: { en: "qr", ar: "qr" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository qr focused on software engineering and systems.", ar: "Public GitHub repository qr focused on software engineering and systems." },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/qr",
  },
  {
    number: "20",
    slug: "iraqna",
    title: { en: "iraqna", ar: "iraqna" },
    category: { en: "CSS / Public Repository", ar: "CSS / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Iraqna", ar: "Iraqna" },
    stack: ["CSS", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/iraqna",
  },
  {
    number: "21",
    slug: "tickets",
    title: { en: "tickets", ar: "tickets" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "Professional Support Ticketing System with Laravel and Real-time updates.", ar: "Professional Support Ticketing System with Laravel and Real-time updates." },
    stack: ["PHP", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/tickets",
  },
  {
    number: "22",
    slug: "desktopapp",
    title: { en: "desktopapp", ar: "desktopapp" },
    category: { en: "JavaScript / Public Repository", ar: "JavaScript / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Desktop Personal Multimedia App", ar: "Desktop Personal Multimedia App" },
    stack: ["JavaScript", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/desktopapp",
  },
  {
    number: "23",
    slug: "hrms",
    title: { en: "hrms", ar: "hrms" },
    category: { en: "HTML / Public Repository", ar: "HTML / مستودع عام" },
    filterTag: "JavaScript",
    description: { en: "Public GitHub repository hrms focused on software engineering and systems.", ar: "Public GitHub repository hrms focused on software engineering and systems." },
    stack: ["HTML", "JavaScript"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/hrms",
  },
  {
    number: "24",
    slug: "attendance_cards",
    title: { en: "attendance_cards", ar: "attendance_cards" },
    category: { en: "JavaScript / Public Repository", ar: "JavaScript / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository attendance_cards focused on software engineering and systems.", ar: "Public GitHub repository attendance_cards focused on software engineering and systems." },
    stack: ["JavaScript", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/attendance_cards",
  },
  {
    number: "25",
    slug: "eagleye",
    title: { en: "eagleye", ar: "eagleye" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository eagleye focused on software engineering and systems.", ar: "Public GitHub repository eagleye focused on software engineering and systems." },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/eagleye",
  },
  {
    number: "26",
    slug: "iphone_unlocking",
    title: { en: "iphone_unlocking", ar: "iphone_unlocking" },
    category: { en: "JavaScript / Public Repository", ar: "JavaScript / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository iphone_unlocking focused on software engineering and systems.", ar: "Public GitHub repository iphone_unlocking focused on software engineering and systems." },
    stack: ["JavaScript", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/iphone_unlocking",
  },
  {
    number: "27",
    slug: "janubi",
    title: { en: "janubi", ar: "janubi" },
    category: { en: "JavaScript / Public Repository", ar: "JavaScript / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository janubi focused on software engineering and systems.", ar: "Public GitHub repository janubi focused on software engineering and systems." },
    stack: ["JavaScript", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/janubi",
  },
  {
    number: "28",
    slug: "agenticSeekFork",
    title: { en: "agenticSeekFork", ar: "agenticSeekFork" },
    category: { en: "Python / Public Repository", ar: "Python / مستودع عام" },
    filterTag: "Automation",
    description: { en: "Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent that thinks, browses the web, and code for the sole cost of electricity. 🔔 Official updates only via twitter @Martin993886460 (Beware of fake account)", ar: "Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent that thinks, browses the web, and code for the sole cost of electricity. 🔔 Official updates only via twitter @Martin993886460 (Beware of fake account)" },
    stack: ["Python", "Automation"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/agenticSeekFork",
  },
  {
    number: "29",
    slug: "saydone-app",
    title: { en: "saydone-app", ar: "saydone-app" },
    category: { en: "Blade / Public Repository", ar: "Blade / مستودع عام" },
    filterTag: "PHP",
    description: { en: "SayDone - Voice-to-Task AI Assistant (Laravel + Flutter)", ar: "SayDone - Voice-to-Task AI Assistant (Laravel + Flutter)" },
    stack: ["Blade", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/saydone-app",
  },
  {
    number: "30",
    slug: "autoops-n8n-hub",
    title: { en: "autoops-n8n-hub", ar: "autoops-n8n-hub" },
    category: { en: "Code / Public Repository", ar: "Code / مستودع عام" },
    filterTag: "Automation",
    description: { en: "Enterprise-grade n8n automation workflows for business operations and CRM sync.", ar: "Enterprise-grade n8n automation workflows for business operations and CRM sync." },
    stack: ["Code", "Automation"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/autoops-n8n-hub",
  },
  {
    number: "31",
    slug: "connectreal-realtime-chat",
    title: { en: "connectreal-realtime-chat", ar: "connectreal-realtime-chat" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Real-time chat platform powered by Laravel WebSockets and Flutter mobile client.", ar: "Real-time chat platform powered by Laravel WebSockets and Flutter mobile client." },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/connectreal-realtime-chat",
  },
  {
    number: "32",
    slug: "smart-inventory-pos-saas",
    title: { en: "smart-inventory-pos-saas", ar: "smart-inventory-pos-saas" },
    category: { en: "Code / Public Repository", ar: "Code / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "Smart Inventory & POS SaaS - Intelligent retail management (Laravel + Flutter + n8n)", ar: "Smart Inventory & POS SaaS - Intelligent retail management (Laravel + Flutter + n8n)" },
    stack: ["Code", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/smart-inventory-pos-saas",
  },
  {
    number: "33",
    slug: "omnichannel-support-saas",
    title: { en: "omnichannel-support-saas", ar: "omnichannel-support-saas" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "OmniChannel Support SaaS - Unified customer support platform (Laravel + Flutter + n8n)", ar: "OmniChannel Support SaaS - Unified customer support platform (Laravel + Flutter + n8n)" },
    stack: ["PHP", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/omnichannel-support-saas",
  },
  {
    number: "34",
    slug: "content-marketing-orchestrator-saas",
    title: { en: "content-marketing-orchestrator-saas", ar: "content-marketing-orchestrator-saas" },
    category: { en: "Blade / Public Repository", ar: "Blade / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "Content Marketing Orchestrator SaaS - AI-powered social media management (Laravel + Flutter + n8n)", ar: "Content Marketing Orchestrator SaaS - AI-powered social media management (Laravel + Flutter + n8n)" },
    stack: ["Blade", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/content-marketing-orchestrator-saas",
  },
  {
    number: "35",
    slug: "nexusops-smart-bridge",
    title: { en: "nexusops-smart-bridge", ar: "nexusops-smart-bridge" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Advanced enterprise bridge connecting Laravel control center with complex n8n automation pipelines.", ar: "Advanced enterprise bridge connecting Laravel control center with complex n8n automation pipelines." },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/nexusops-smart-bridge",
  },
  {
    number: "36",
    slug: "taskflow-flutter",
    title: { en: "taskflow-flutter", ar: "taskflow-flutter" },
    category: { en: "Dart / Public Repository", ar: "Dart / مستودع عام" },
    filterTag: "Flutter",
    description: { en: "A professional Flutter task management app with Clean Architecture and Provider.", ar: "A professional Flutter task management app with Clean Architecture and Provider." },
    stack: ["Dart", "Flutter"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/taskflow-flutter",
  },
  {
    number: "37",
    slug: "laracommerce-api",
    title: { en: "laracommerce-api", ar: "laracommerce-api" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "PHP",
    description: { en: "A robust Laravel 11 REST API for e-commerce with Sanctum auth and advanced architecture.", ar: "A robust Laravel 11 REST API for e-commerce with Sanctum auth and advanced architecture." },
    stack: ["PHP", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/laracommerce-api",
  },
  {
    number: "38",
    slug: "saydone-offline",
    title: { en: "saydone-offline", ar: "saydone-offline" },
    category: { en: "Dart / Public Repository", ar: "Dart / مستودع عام" },
    filterTag: "Flutter",
    description: { en: "Privacy-focused offline voice-to-task AI assistant with local SQLite database, Arabic/English support, and daily limits.", ar: "Privacy-focused offline voice-to-task AI assistant with local SQLite database, Arabic/English support, and daily limits." },
    stack: ["Dart", "Flutter"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/saydone-offline",
  },
  {
    number: "39",
    slug: "autoscan-pro",
    title: { en: "autoscan-pro", ar: "autoscan-pro" },
    category: { en: "Dart / Public Repository", ar: "Dart / مستودع عام" },
    filterTag: "Flutter",
    description: { en: "Professional OBD-II car diagnostic app with ELM327 Bluetooth integration, real-time telemetry gauges, and simulator mode.", ar: "Professional OBD-II car diagnostic app with ELM327 Bluetooth integration, real-time telemetry gauges, and simulator mode." },
    stack: ["Dart", "Flutter"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/autoscan-pro",
  },
  {
    number: "40",
    slug: "ghost-assist-ai",
    title: { en: "ghost-assist-ai", ar: "ghost-assist-ai" },
    category: { en: "Dart / Public Repository", ar: "Dart / مستودع عام" },
    filterTag: "Flutter",
    description: { en: "Real-time AI-powered assistant with live voice listening and stealth UI for interviews and meetings (Smog AI clone).", ar: "Real-time AI-powered assistant with live voice listening and stealth UI for interviews and meetings (Smog AI clone)." },
    stack: ["Dart", "Flutter"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/ghost-assist-ai",
  },
  {
    number: "41",
    slug: "Ultra-Palestine",
    title: { en: "Ultra-Palestine", ar: "Ultra-Palestine" },
    category: { en: "JavaScript / Public Repository", ar: "JavaScript / مستودع عام" },
    filterTag: "PHP",
    description: { en: "Public GitHub repository Ultra-Palestine focused on software engineering and systems.", ar: "Public GitHub repository Ultra-Palestine focused on software engineering and systems." },
    stack: ["JavaScript", "PHP"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/Ultra-Palestine",
  },
  {
    number: "42",
    slug: "AuthLaravel8",
    title: { en: "AuthLaravel8", ar: "AuthLaravel8" },
    category: { en: "PHP / Public Repository", ar: "PHP / مستودع عام" },
    filterTag: "Laravel",
    description: { en: "Public GitHub repository AuthLaravel8 focused on software engineering and systems.", ar: "Public GitHub repository AuthLaravel8 focused on software engineering and systems." },
    stack: ["PHP", "Laravel"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/AuthLaravel8",
  },
  {
    number: "43",
    slug: "ahmedemadm90.github.io",
    title: { en: "ahmedemadm90.github.io", ar: "ahmedemadm90.github.io" },
    category: { en: "HTML / Public Repository", ar: "HTML / مستودع عام" },
    filterTag: "JavaScript",
    description: { en: "Ahmed Emad - Web & Mobile Full Stack Developer", ar: "Ahmed Emad - Web & Mobile Full Stack Developer" },
    stack: ["HTML", "JavaScript"],
    signal: { en: "public repository", ar: "مستودع عام" },
    url: "https://github.com/ahmedemadm90/ahmedemadm90.github.io",
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
          <div className="stack-list" aria-label={`${project.title[locale]} technologies`}>{project.stack.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
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
      <div className="print-sheet__topline">AHMED EMAD / SENIOR BACKEND DEVELOPER & AUTOMATION ENGINEER</div>
      <h1>Ahmed Emad</h1>
      <p className="print-sheet__lead">{labels.profileText}</p>
      <div className="print-sheet__grid">
        <section><h2>{locale === "ar" ? "الملف" : "Profile"}</h2><p>{labels.profileNote}</p></section>
        <section><h2>{locale === "ar" ? "المهارات" : "Core skills"}</h2><p>Laravel · Flutter · PHP · Dart · n8n · MySQL · REST APIs · Git · Docker · Linux</p></section>
      </div>
      <section>
        <h2>{locale === "ar" ? "الخبرات المهنية" : "Professional Experience"}</h2>
        <div className="print-projects">{labels.career.map((item, idx) => <div key={idx}><strong>{item.role[locale]} @ {item.company[locale]} ({item.period})</strong><span>{item.description[locale]}</span></div>)}</div>
      </section>
      <div className="print-sheet__bottomline"><span>github.com/ahmedemadm90</span><span>{locale === "ar" ? "السيرة الذاتية الرسمية" : "Official resume profile"}</span></div>
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
  const [activeFilter, setActiveFilter] = useState<string>("All");
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

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.filterTag === activeFilter || p.stack.some((s) => s.toLowerCase().includes(activeFilter.toLowerCase())));

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
            <a href="#work" onClick={closeMenu}>{labels.nav.projects}</a>
            <a href="#career" onClick={closeMenu}>{labels.nav.experience}</a>
            <a href="#method" onClick={closeMenu}>{labels.nav.method}</a>
            <a href="#skills" onClick={closeMenu}>{labels.nav.skills}</a>
            <a href="#resume" onClick={closeMenu}>{labels.nav.cv}</a>
            <div className="header-tools">
              <a className="header-tool header-tool--pdf" href={PDF_RESUME} target="_blank" rel="noreferrer" title={labels.downloadPdf}><FileText size={15} /><span>PDF CV</span></a>
              <button className="header-tool" type="button" onClick={toggleTheme} aria-label={theme === "light" ? labels.themeToDark : labels.themeToLight}>{theme === "light" ? <Moon size={15} /> : <Sun size={15} />}<span>{theme === "light" ? "Dark" : "Light"}</span></button>
              <button className="header-tool header-tool--language" type="button" onClick={toggleLocale} aria-label={`Switch language: ${labels.language}`}><span className="language-mark">{locale === "en" ? "ع" : "EN"}</span><span>{labels.language}</span></button>
            </div>
            <a className="nav-cta" href={GITHUB_ROOT} target="_blank" rel="noreferrer" onClick={closeMenu}>{labels.nav.github} <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top"><div className="hero-grid"><div className="hero-copy"><div className="eyebrow"><CircleDot size={12} fill="currentColor" /> {labels.eyebrow}</div><h1>{labels.heroTitle}</h1><p className="hero-intro">{labels.heroIntro}</p><div className="hero-actions"><a className="button button--coral" href="#work">{labels.explore} <ArrowDown size={17} /></a><a className="button button--quiet" href={PDF_RESUME} target="_blank" rel="noreferrer"><FileText size={17} /> {labels.downloadPdf}</a><button className="button button--quiet" type="button" onClick={printResume}><Download size={17} /> {labels.printCv}</button></div><div className="hero-aside"><span className="mono-label">{labels.currentSignal}</span><p>{labels.currentSignalText}</p></div></div><div className="hero-visual"><div className="hero-visual__frame"><img src="/manus-storage/ahmed-hero_45371eec.jpg" alt={labels.altHero} /><div className="hero-visual__caption"><span>{labels.fig01}</span><span>{labels.fig01Caption}</span></div></div><div className="hero-stamp" aria-hidden="true">{labels.stamp}</div></div></div><div className="hero-bottomline"><span>{labels.heroLine}</span><span>{labels.heroBased}</span><a href="#work" aria-label={labels.explore}><ArrowDown size={17} /></a></div></section>

        <section className="statement-section section-paper"><div className="vertical-rail" aria-hidden="true"><span>{labels.shortVersion}</span></div><div className="statement-grid page-pad"><div className="statement-kicker"><span>{labels.whatMake}</span><strong>→</strong></div><div className="statement-copy"><p className="statement-lead">{labels.statementLead}</p><p>{labels.statementText}</p></div><div className="statement-note"><span>[ 02 ]</span><p>{labels.statementNote}</p></div></div></section>

        <section className="work-section page-pad" id="work">
          <div className="section-heading">
            <div>
              <SectionLabel index="02">{labels.selectedBuilds}</SectionLabel>
              <h2>{labels.projectsTitle}</h2>
            </div>
            <p className="section-heading__note">{labels.projectsNote}</p>
          </div>

          <div className="project-filters" aria-label="Project technology filters">
            <span className="filter-label"><Filter size={14} /> {locale === "ar" ? "فلترة حسب التقنية:" : "Filter by:"}</span>
            {["All", "Laravel", "Flutter", "PHP", "Automation"].map((tag) => (
              <button
                key={tag}
                type="button"
                className={`filter-btn ${activeFilter === tag ? "is-active" : ""}`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag === "All" ? labels.filterAll : tag}
              </button>
            ))}
          </div>

          <div className="project-list">
            {filteredProjects.map((project) => (
              <ProjectRow project={project} locale={locale} labels={labels} key={project.slug} />
            ))}
          </div>

          <div className="work-endcap">
            <span>{labels.moreArchive}</span>
            <a className="text-link text-link--large" href={GITHUB_ROOT} target="_blank" rel="noreferrer">
              {labels.browseAll} <Github size={17} />
            </a>
          </div>
        </section>

        <section className="career-section section-paper" id="career">
          <div className="page-pad career-grid">
            <div className="career-heading">
              <SectionLabel index="03">{labels.careerTitle}</SectionLabel>
              <h2>{labels.careerSubtitle}</h2>
              <p className="section-heading__note">{labels.careerNote}</p>
            </div>
            <div className="timeline">
              {labels.career.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-marker" aria-hidden="true"><Briefcase size={16} /></div>
                  <div className="timeline-content">
                    <div className="timeline-meta">
                      <span className="timeline-period">{item.period}</span>
                      <span className="timeline-company">{item.company[locale]}</span>
                    </div>
                    <h3>{item.role[locale]}</h3>
                    <p>{item.description[locale]}</p>
                    <div className="stack-list" style={{ marginTop: "1rem" }}>
                      {item.stack.map((tech, index) => <span key={`${tech}-${index}`}>{tech}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="method-section section-dark" id="method"><div className="page-pad method-grid"><div className="method-intro"><SectionLabel index="04">{labels.workingMethod}</SectionLabel><h2>{labels.methodTitle}</h2><p>{labels.methodIntro}</p><div className="method-code"><span>{labels.methodCode}</span><i>{labels.methodFriction}</i><b>→</b><span>{labels.methodReady}</span></div></div><div className="method-art"><img src="/manus-storage/automation-map_58bd152d.jpg" alt={labels.altMap} /><div className="method-art__label">FIELD NOTE / 04—A</div></div><div className="method-list">{labels.method.map((method, index) => <div className="method-row" key={method.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{method.title}</h3><p>{method.copy}</p></div><Check size={17} /></div>)}</div></div></section>

        <section className="skills-section page-pad" id="skills"><div className="section-heading section-heading--skills"><div><SectionLabel index="05">{labels.capabilityMap}</SectionLabel><h2>{labels.skillsTitle}</h2></div><p className="section-heading__note">{labels.skillsNote}</p></div><div className="skills-grid">{labels.skills.map((skill, index) => { const Icon = skillIcons[index]; return <article className="skill-card" key={skill.title}><div className="skill-card__top"><Icon size={20} strokeWidth={1.6} /><span>{skill.label}</span></div><h3>{skill.title}</h3><p>{skill.copy}</p></article>; })}</div><div className="skills-bottomline"><span className="mono-label">{labels.skillMix}</span><span>{labels.skillClosing}</span></div></section>

        <section className="profile-section section-paper"><div className="page-pad profile-grid"><div className="profile-image"><img src="/manus-storage/engineer-desk_7396362b.jpg" alt={labels.altDesk} /><span>{labels.workbench}</span></div><div className="profile-copy"><SectionLabel index="06">{labels.profile}</SectionLabel><h2>{labels.profileTitle}</h2><p>{labels.profileText}</p><p className="profile-copy__small">{labels.profileNote}</p><div className="profile-actions"><a className="button button--coral" href={PDF_RESUME} target="_blank" rel="noreferrer"><FileText size={16} /> {labels.downloadPdf}</a><button className="button button--quiet" type="button" onClick={printResume}>{labels.printSave} <Download size={16} /></button><a className="button button--outline" href={GITHUB_ROOT} target="_blank" rel="noreferrer">{labels.githubProfile} <ExternalLink size={16} /></a></div></div></div></section>

        <section className="contact-section section-coral" id="resume"><div className="page-pad contact-grid"><div><SectionLabel index="07">{labels.openChannel}</SectionLabel><h2>{labels.contactTitle}</h2><div className="contact-copy"><p>{labels.contactText}</p><div className="contact-details"><a className="contact-detail" href={`tel:${CONTACT_PHONE}`}><Phone size={18} /><span><small>{locale === "ar" ? "الهاتف" : "Mobile"}</small><strong dir="ltr">+20 101 903 0515</strong></span></a><a className="contact-detail" href={`${WHATSAPP_URL}?text=${encodeURIComponent(locale === "ar" ? "مرحباً أحمد، أريد مناقشة مشروع." : "Hi Ahmed, I would like to discuss a project.")}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small><strong dir="ltr">+20 101 903 0515</strong></span><ArrowUpRight size={16} /></a></div><span className="contact-footnote">{labels.contactFootnote}</span></div></div><form className="contact-form" onSubmit={handleContactSubmit}><div className="contact-form__row"><label><span>{labels.form.name}</span><input name="name" required autoComplete="name" /></label><label><span>{labels.form.email}</span><input name="email" type="email" required autoComplete="email" /></label></div><label><span>{labels.form.subject}</span><input name="subject" required /></label><label><span>{labels.form.message}</span><textarea name="message" rows={5} required /></label><div className="contact-form__submit"><button className="button button--ink" type="submit"><Mail size={17} /> {labels.form.send}</button><span>{labels.form.direct}</span></div>{submitted && <p className="form-success" role="status">{labels.form.opened}</p>}</form></div></section>
      </main>

      <footer className="site-footer"><div className="page-pad footer-inner"><div className="footer-brand"><img src={BRAND_MARK} alt="" /><span>Ahmed Emad / Portfolio</span></div><span className="footer-note">{labels.footer}</span><a href="#top" className="footer-top">{labels.footerTop} <ArrowDown size={15} /></a></div></footer>
      <ResumePrintSheet locale={locale} />
    </div>
  );
}
