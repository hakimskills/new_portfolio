export const translations = {
  en: {
    dir: "ltr",
    nav: {
      work: "Work",
      about: "About",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      line1: "I build",
      highlight: "experiences",
      line2: "that work.",
      sub: "A full-stack developer with a focus on web and mobile — building clean interfaces, solid backends, and fast, working products for people to use.",
      cta: "Let's build something",
    },
    projects: {
      heading: "Projects",
      viewGithub: "View on GitHub",
      readMore: "Read more",
      featuresLabel: "Key features",
      categories: {
        "Mobile App": "Mobile App",
        "Landing Page": "Landing Page",
        "Desktop App": "Desktop App",
        "Chat App": "Chat App",
      },
      details: {
        HealthLink: {
          description:
            "A healthcare procurement platform for Algeria, built across web and mobile. Developed the Laravel backend and REST APIs powering both a Flutter mobile app and a React web frontend, with a focus on an intuitive UI for users with varying digital literacy levels.",
          features: [
            "Laravel backend & REST APIs for web + mobile",
            "Flutter mobile app frontend",
            "Pharmacy inventory management",
            "Supplier ratings & digital sales tools",
            "Collaborated on the React frontend, ensuring API compatibility",
            "Built iteratively in Agile Scrum (sprint planning & stand-ups)",
          ],
        },
        "Chat app": {
          description:
            "A real-time chat application built with Flutter and Laravel, using WebSockets for instant messaging between users.",
          features: [
            "Real-time messaging via WebSockets",
            "Flutter mobile client",
            "Laravel backend & authentication",
            "Message history & delivery status",
          ],
        },
        ScholarDesk: {
          description:
            "A Windows desktop ERP built with Python and PySide6 (Qt) for managing private school operations — student records, classes, payments, attendance, and SMS notifications — with a fully RTL Arabic interface and a custom-built modern UI design system.",
          features: [
            "Student records & class management",
            "Payments & attendance tracking",
            "SMS notifications",
            "Fully RTL Arabic interface",
            "Custom-built modern UI design system",
            "Built with Python & PySide6 (Qt)",
          ],
        },
        Rantlhub: {
          description:
            "A mobile rental marketplace app connecting property owners with renters — browse listings, message owners, and manage bookings.",
          features: [
            "Property listings with photos & filters",
            "In-app messaging between renter & owner",
            "Booking & availability calendar",
            "User authentication & profiles",
            "Laravel REST API backend",
          ],
        },
      },
    },
    about: {
      heading: "About me",
      bio: "I'm Abdelhakim Rebbouh, a full-stack developer with a focus on web and mobile who likes turning messy problems into clean, working products — one component at a time.",
      more: "More about me",
    },
    education: {
      heading: "Education",
      items: [
        {
          degree: "Bachelor's Degree in Information Technology (LMD System)",
          school: "University of Constantine 2",
          description:
            "Comprehensive foundation in computer science, programming fundamentals, database systems, and software development principles.",
        },
        {
          degree:
            "Master's Degree in Information and Communication Systems and Technologies (STIC)",
          school: "University of Constantine 2",
          description:
            "Advanced studies in information systems, communication technologies, and software engineering. Focused on modern development methodologies and system architecture.",
        },
      ],
    },
    skills: { heading: "Skills" },
    contact: {
      heading: "Let's connect",
      quote: "Code is not just what it does. Code is how it ",
      quoteHighlight: "feels to use.",
      location: "Touggourt, Algeria",
      sayHello: "Say hello",
      downloadResume: "Download resume",
    },
    footer: { built: "Built with React & Tailwind" },
  },

  ar: {
    dir: "rtl",
    nav: {
      work: "الأعمال",
      about: "نبذة",
      education: "التعليم",
      skills: "المهارات",
      contact: "تواصل",
    },
    hero: {
      line1: "أبني",
      highlight: "تجارب رقمية",
      line2: "تعمل بكفاءة.",
      sub: "مطوّر متكامل (Full-Stack) أركّز على الويب والجوال — أبني واجهات نظيفة وأنظمة خلفية قوية ومنتجات جاهزة للعمل.",
      cta: "لنبنِ شيئًا معًا",
    },
    projects: {
      heading: "المشاريع",
      viewGithub: "عرض على GitHub",
      readMore: "اقرأ المزيد",
      featuresLabel: "أبرز الميزات",
      categories: {
        "Mobile App": "تطبيق جوال",
        "Landing Page": "صفحة هبوط",
        "Desktop App": "تطبيق سطح مكتب",
        "Chat App": "تطبيق محادثة",
      },
      details: {
        HealthLink: {
          description:
            "منصة لشراء المستلزمات الصحية في الجزائر عبر الويب والجوال. طوّرت الواجهة الخلفية وواجهات REST API باستخدام Laravel لتشغيل تطبيق Flutter للجوال وواجهة React للويب، مع التركيز على تصميم بديهي يناسب مستخدمين بمستويات مختلفة من الإلمام الرقمي.",
          features: [
            "واجهة خلفية وREST API بلغة Laravel لدعم الويب والجوال",
            "واجهة تطبيق الجوال بلغة Flutter",
            "إدارة مخزون الصيدليات",
            "تقييمات الموردين وأدوات بيع رقمية",
            "التعاون في واجهة React وضمان توافق الـ API",
            "تطوير تكراري ضمن منهجية Agile Scrum (تخطيط السبرنت والاجتماعات اليومية)",
          ],
        },
        "Chat app": {
          description:
            "تطبيق محادثة فورية مبني بـ Flutter وLaravel، يستخدم WebSockets للمراسلة الفورية بين المستخدمين.",
          features: [
            "مراسلة فورية عبر WebSockets",
            "تطبيق جوال بـ Flutter",
            "واجهة خلفية ومصادقة بـ Laravel",
            "سجل الرسائل وحالة التسليم",
          ],
        },
        ScholarDesk: {
          description:
            "نظام تخطيط موارد (ERP) لسطح المكتب لإدارة المدارس الخاصة، مبني بلغة Python ومكتبة PySide6 (Qt) — يدير سجلات الطلاب، والفصول، والمدفوعات، والحضور، وإشعارات الرسائل النصية (SMS) — بواجهة عربية كاملة باتجاه من اليمين لليسار (RTL) ونظام تصميم واجهة مستخدم حديث مصمم بالكامل من الصفر.",
          features: [
            "إدارة سجلات الطلاب والفصول",
            "تتبع المدفوعات والحضور",
            "إشعارات الرسائل النصية (SMS)",
            "واجهة عربية كاملة باتجاه RTL",
            "نظام تصميم واجهة مستخدم حديث ومخصص",
            "مبني بلغة Python ومكتبة PySide6 (Qt)",
          ],
        },
        Rantlhub: {
          description:
            "تطبيق جوال لسوق الإيجارات يربط الملّاك بالمستأجرين — تصفح الإعلانات وتواصل مع الملاك وأدر حجوزاتك.",
          features: [
            "عرض العقارات مع صور وفلاتر",
            "محادثة داخل التطبيق بين المستأجر والمالك",
            "تقويم الحجز والتوفر",
            "تسجيل الدخول والملفات الشخصية",
            "واجهة خلفية REST بـ Laravel",
          ],
        },
      },
    },
    about: {
      heading: "نبذة عني",
      bio: "أنا عبد الحكيم ربوح، مطوّر متكامل (Full-Stack) أركّز على الويب والجوال، أحب تحويل المشكلات المعقدة إلى منتجات نظيفة وفعّالة — عنصرًا تلو الآخر.",
      more: "المزيد عني",
    },
    education: {
      heading: "التعليم",
      items: [
        {
          degree: "ليسانس في تكنولوجيا المعلومات (نظام LMD)",
          school: "جامعة قسنطينة 2",
          description:
            "أساس شامل في علوم الحاسوب، وأساسيات البرمجة، وأنظمة قواعد البيانات، ومبادئ تطوير البرمجيات.",
        },
        {
          degree: "ماستر في أنظمة وتقنيات المعلومات والاتصال (STIC)",
          school: "جامعة قسنطينة 2",
          description:
            "دراسات متقدمة في أنظمة المعلومات وتقنيات الاتصال وهندسة البرمجيات، مع التركيز على منهجيات التطوير الحديثة وهندسة الأنظمة.",
        },
      ],
    },
    skills: { heading: "المهارات" },
    contact: {
      heading: "لنتواصل",
      quote: "الكود ليس فقط ما يقوم به. الكود هو كيف ",
      quoteHighlight: "يشعر المستخدم أثناء استخدامه.",
      location: "تقرت، الجزائر",
      sayHello: "راسلني",
      downloadResume: "تحميل السيرة الذاتية",
    },
    footer: { built: "تم البناء باستخدام React و Tailwind" },
  },
};