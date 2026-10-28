/* =======================================================================
   INTERACTIVE PORTFOLIO — SCRIPT.JS
   كل الوظائف في ملف واحد ومن دون Framework؛ يعمل محليًا وعند النشر.
   ★ ابدأ من CONFIG لتعديل الاسم والصورة والروابط الحقيقية الخاصة بك.
   ★ بعض البيانات أمثلة تصميمية فقط وليست خبرات موثَّقة.
======================================================================== */

(() => {
  "use strict";

  /* ================== 1) بياناتك: عدِّل هذه القيم ================== */
  const CONFIG = {
    name: "Ahmed Shaban Hassan",  // الاسم الذي يُكتب بعد Hello, I'm حرفًا حرفًا
    brandName: "Ahmed",           // الاسم المختصر بجوار شعار الموقع
    initials: "AS",               // الحروف التي تظهر إذا لم تحدد صورة شخصية
    photo: "my.jpg",                    // مثال: "profile.jpg" بعد وضع الصورة بجوار الملفات الثلاثة
    cvUrl: "Ahmed_CV.pdf",                    // مثال: "CV.pdf" بعد إضافة ملف السيرة بجوار الملفات
    phone: "01062272149",                    // مثال: "+201001234567" بصيغة دولية
    whatsapp: "01062272149",                 // إذا تُرك فارغًا يُستخدم رقم phone
    email: "enga7medshaban0@gmail.com",                    // مثال: "me@example.com"
    linkedin: "https://www.linkedin.com/in/ahmed-shaban-19054032b?utm_source=share_via&utm_content=profile&utm_medium=member_android",                 // مثال: "https://www.linkedin.com/in/your-name/"
    github: "",                   // مثال: "https://github.com/your-name"
    instagram: "https://www.instagram.com/techt_ales0?obrf=MXNmZ2hrM3U5ejUwNA==",                // مثال: "https://www.instagram.com/your-name/"
    formEndpoint: ""              // رابط Formspree الفعلي مثال https://formspree.io/f/xxxxxxxx
  };

  /* ================== سرعات الكتابة والتحكم بها ==================
     كل قيمة بالمللي ثانية؛ الرقم الأقل = كتابة أسرع.
     pauseBefore: انتظار قبل أول حرف / pauseAfterName: انتظار قبل الوظيفة
  ================================================================= */
  const TYPE_SPEED = {
    pauseBefore: 300,
    greeting: 95,
    pauseBetween: 200,
    name: 90,
    pauseAfterName: 400,
    role: 70,
    holdRole: 1800,
    erase: 40,
    pauseBetweenRoles: 350
  };

  /* ================== 2) ترجمة كل نصوص الواجهة ================== */
  const I18N = {
    en: {
      "a11y.skip": "Skip to content", "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.journey": "Journey", "nav.contact": "Contact", "nav.hire": "Let's talk",
      "hero.available": "Open to exciting opportunities", "hero.eyebrow": "WELCOME TO MY DIGITAL SPACE ✳", "hero.greeting": "Hello, I'm", "hero.prefix": "I build the web as a", "hero.role1": "Front-End Developer", "hero.role2": "React Specialist", "hero.role3": "UI/UX Enthusiast", "hero.description": "I design and develop thoughtful, high-performing interfaces that feel beautiful, work effortlessly, and leave a lasting impression.", "hero.download": "Download CV", "hero.contact": "Contact me", "hero.trait1": "Clean code", "hero.trait2": "Thoughtful UI", "hero.trait3": "Real impact", "hero.photoLabel": "CREATIVE MIND / DEVELOPER", "hero.photoBottom": "CRAFTED WITH PURPOSE", "hero.floatTop": "Web experiences", "hero.floatTopSub": "Made with intention", "hero.floatBottom": "Pixel by pixel", "hero.floatBottomSub": "Always evolving", "hero.scroll": "SCROLL TO EXPLORE",
      "about.kicker": "A LITTLE ABOUT ME", "about.title": "Beyond the code, <span class=\"accent-text\">there's a purpose.</span>", "about.lead": "I'm a front-end developer who cares about the details — from the first wireframe to the final interaction.", "about.description": "My focus is turning complex ideas into intuitive, accessible and responsive digital products. I enjoy combining thoughtful design, solid engineering and continuous learning to create experiences that people love using.", "about.fact1Label": "MY FOCUS", "about.fact1Value": "UI engineering", "about.fact2Label": "MY APPROACH", "about.fact2Value": "User-first thinking", "about.fact3Label": "OPEN TO", "about.fact3Value": "Great opportunities",
      "skills.kicker": "WHAT I WORK WITH", "skills.title": "Tools of my <span class=\"accent-text\">craft.</span>", "skills.subtitle": "A growing toolkit for building polished web experiences.", "skills.html": "Semantic, accessible structure.", "skills.css": "Responsive layout and motion.", "skills.js": "Useful, fluid interactions.", "skills.react": "Component-driven interfaces.", "skills.tailwind": "Consistent, scalable styling.", "skills.git": "Organized collaboration.", "skills.softTitle": "Beyond technical skills", "skills.soft1": "Problem solving", "skills.soft2": "Communication", "skills.soft3": "Attention to detail", "skills.soft4": "Adaptability",
      "projects.kicker": "SELECTED WORK", "projects.title": "Work that <span class=\"accent-text\">speaks.</span>", "projects.subtitle": "Sample projects — replace these entries with your real work before publishing.", "projects.aside": "EXPLORE MY PROCESS ↗", "projects.all": "All work", "projects.interactive": "Interactive", "projects.demo": "Live demo", "projects.code": "Source code", "projects.sample": "CONCEPT PREVIEW", "projects.sampleCategory": "Sample project", "projects.configure": "Add this project's URL in script.js to activate the link.", "projects.previewAlt": "Illustrative preview, not a real screenshot", "projects.filterLabel": "Filter projects",
      "journey.kicker": "MY LEARNING JOURNEY", "journey.title": "Experience grows with <span class=\"accent-text\">passion.</span>", "journey.subtitle": "From Information Systems studies to Front-End development, technical training and community initiatives.", "journey.education": "Academic Education", "journey.training": "Technical Courses & Certifications", "journey.degreeDate": "2025", "journey.degreeTitle": "Bachelor’s Degree in Information Systems — MET", "journey.degreeDesc": "Graduated in 2025, specializing in Information Systems.", "journey.projectDate": "2025", "journey.projectTitle": "Graduation Project — Excellent", "journey.projectDesc": "My graduation project received an Excellent grade.", "journey.mansouraDate": "24 Jun – 14 Aug 2024", "journey.mansouraTitle": "Web Design (Front-End) — Mansoura University", "journey.mansouraDesc": "48 training hours at the Faculty of Science’s Center for Studies and Scientific Consultations, in cooperation with ITC. Grade: Excellent.", "journey.maharaDate": "Specialized online courses", "journey.maharaTitle": "Front-End Development Certificates — MaharaTech", "journey.maharaDesc": "Front-End courses and certificates from MaharaTech. Specific course titles and dates can be added later.", "journey.galleryTitle": "Certificates & Community Participation", "journey.gallerySubtitle": "Technical training and community participation are listed separately for clarity.", "journey.certMansoura": "Mansoura University · Front-End", "journey.certMansouraDesc": "48 training hours · Excellent.", "journey.certLeadership": "Bahary Youth · Youth of Today, Future of Tomorrow", "journey.certLeadershipDesc": "2024 · 80 hours of training and a graduation project.", "journey.certWorkshop": "Bahary Youth · Know Me Before Hiring Me", "journey.certWorkshopDesc": "Three days · 16 training hours.", "journey.certParticipation": "Bahary Youth · Certificate of Appreciation", "journey.certParticipationDesc": "Recognition for distinguished youth and organizational participation.", "journey.openCertificate": "View certificate", "journey.certMansouraAlt": "Front-End training certificate from Mansoura University", "journey.certLeadershipAlt": "Bahary Youth 80-hour training certificate", "journey.certWorkshopAlt": "Bahary Youth 16-hour workshop certificate", "journey.certParticipationAlt": "Bahary Youth participation award",
      "contact.kicker": "LET'S CONNECT", "contact.title": "Have an idea? <span class=\"accent-text\">Let's build it.</span>", "contact.subtitle": "Whether you have a project, an opportunity or just want to say hello — I'd love to hear from you.", "contact.phone": "Phone number", "contact.email": "Email address", "contact.call": "Call", "contact.whatsapp": "WhatsApp", "contact.addPhone": "Add your phone number", "contact.addEmail": "Add your email address", "contact.addLinkedin": "Add your LinkedIn profile", "contact.addGithub": "Add your GitHub profile", "contact.addInstagram": "Add your Instagram profile", "contact.noLink": "Add this contact link in script.js to activate it.",
      "form.title": "Send a message", "form.name": "Your name", "form.email": "Your email", "form.message": "Your message", "form.namePlaceholder": "What should I call you?", "form.emailPlaceholder": "you@example.com", "form.messagePlaceholder": "Tell me about your project...", "form.send": "Send message", "form.sending": "Sending...", "form.note": "To enable direct sending, add your Formspree endpoint in script.js. Otherwise a configured email will open your mail app.", "form.nameError": "Enter a name with at least 2 characters.", "form.emailError": "Enter a valid email address.", "form.messageError": "Your message must contain at least 12 characters.", "form.success": "Message sent successfully. Thank you!", "form.failure": "Could not send your message. Please try again.", "form.mailto": "Your email application opened. Please press Send there to finish.", "form.notConfigured": "Your form is valid, but sending is not configured. Add your email or a Formspree endpoint in script.js.",
      "cv.notConfigured": "Add your CV file and set CONFIG.cvUrl in script.js first.", "footer.brand": "Designed with intention.", "footer.rights": "All rights reserved.", "footer.top": "Back to top", "a11y.theme": "Toggle light and dark mode", "a11y.language": "Choose language", "a11y.menu": "Toggle navigation menu", "a11y.top": "Back to top", "a11y.nav": "Main navigation", "page.title": "Ahmed Shaban Hassan | Front-End Developer"
    },
    ar: {
      "a11y.skip": "تخطَّ إلى المحتوى", "nav.home": "الرئيسية", "nav.about": "عني", "nav.skills": "المهارات", "nav.projects": "المشاريع", "nav.journey": "مسيرتي", "nav.contact": "تواصل", "nav.hire": "لنتحدث",
      "hero.available": "متاح لفرص عمل مميزة", "hero.eyebrow": "أهلًا بك في مساحتي الرقمية ✳", "hero.greeting": "مرحبًا، أنا", "hero.prefix": "أصنع تجارب ويب بصفتي", "hero.role1": "مطور واجهات أمامية", "hero.role2": "متخصص React", "hero.role3": "شغوف بتجربة المستخدم", "hero.description": "أصمم وأطوّر واجهات سريعة ومتجاوبة ومدروسة بعناية، تجمع بين جمال التصميم وسهولة الاستخدام وتترك انطباعًا مميزًا.", "hero.download": "تحميل السيرة الذاتية", "hero.contact": "تواصل معي", "hero.trait1": "كود نظيف", "hero.trait2": "تصميم مدروس", "hero.trait3": "أثر حقيقي", "hero.photoLabel": "إبداع / تطوير", "hero.photoBottom": "صُنِع بعناية", "hero.floatTop": "تجارب ويب", "hero.floatTopSub": "بتفاصيل مدروسة", "hero.floatBottom": "بكسل بعد بكسل", "hero.floatBottomSub": "تطور مستمر", "hero.scroll": "مرر لاكتشاف المزيد",
      "about.kicker": "نبذة مختصرة", "about.title": "وراء كل سطر كود، <span class=\"accent-text\">هدف واضح.</span>", "about.lead": "أنا مطور واجهات أمامية أهتم بالتفاصيل، من أول تصور للتصميم حتى آخر حركة تفاعلية.", "about.description": "أركز على تحويل الأفكار المعقدة إلى منتجات رقمية بديهية وسهلة الوصول ومتوافقة مع مختلف الأجهزة. أستمتع بالجمع بين التصميم المدروس والهندسة المتقنة والتعلم المستمر.", "about.fact1Label": "مجال التركيز", "about.fact1Value": "هندسة الواجهات", "about.fact2Label": "منهجي", "about.fact2Value": "المستخدم أولًا", "about.fact3Label": "متاح لـ", "about.fact3Value": "الفرص المميزة",
      "skills.kicker": "التقنيات التي أستخدمها", "skills.title": "أدوات <span class=\"accent-text\">الإبداع.</span>", "skills.subtitle": "مجموعة متطورة من التقنيات لبناء تجارب ويب احترافية.", "skills.html": "هيكلة دلالية تدعم الوصول.", "skills.css": "تجاوب وتصميم وحركة.", "skills.js": "تفاعلات ديناميكية سلسة.", "skills.react": "واجهات مبنية على المكونات.", "skills.tailwind": "تنسيق منظم وقابل للتوسع.", "skills.git": "إدارة نسخ وتعاون منظم.", "skills.softTitle": "مهارات شخصية", "skills.soft1": "حل المشكلات", "skills.soft2": "التواصل", "skills.soft3": "الاهتمام بالتفاصيل", "skills.soft4": "المرونة والتكيف",
      "projects.kicker": "أعمال مختارة", "projects.title": "أعمال <span class=\"accent-text\">تحكي عني.</span>", "projects.subtitle": "مشاريع توضيحية؛ استبدلها بمشاريعك الفعلية قبل النشر.", "projects.aside": "اكتشف طريقة عملي ↗", "projects.all": "جميع المشاريع", "projects.interactive": "تفاعلي", "projects.demo": "معاينة مباشرة", "projects.code": "الكود المصدري", "projects.sample": "معاينة توضيحية", "projects.sampleCategory": "مشروع تجريبي", "projects.configure": "أضف رابط هذا المشروع في ملف script.js لتفعيله.", "projects.previewAlt": "رسم توضيحي وليس لقطة شاشة فعلية", "projects.filterLabel": "تصفية المشاريع",
      "journey.kicker": "رحلتي التعليمية", "journey.title": "خبرة تتطور <span class=\"accent-text\">بالشغف.</span>", "journey.subtitle": "من دراسة نظم المعلومات إلى تطوير الواجهات الأمامية، مرورًا بالتدريب المتخصص والمبادرات المجتمعية.", "journey.education": "التعليم الأكاديمي", "journey.training": "الدورات والشهادات التقنية", "journey.degreeDate": "2025", "journey.degreeTitle": "بكالوريوس نظم المعلومات — MET", "journey.degreeDesc": "تخرجت عام 2025 في تخصص نظم المعلومات.", "journey.projectDate": "2025", "journey.projectTitle": "مشروع التخرج — تقدير امتياز", "journey.projectDesc": "حصل مشروع التخرج على تقدير امتياز (Excellent).", "journey.mansouraDate": "24 يونيو – 14 أغسطس 2024", "journey.mansouraTitle": "تصميم مواقع الويب (Front-End) — جامعة المنصورة", "journey.mansouraDesc": "برنامج تدريبي مدته 48 ساعة بمركز الدراسات والاستشارات العلمية بكلية العلوم، بالتعاون مع ITC، بتقدير ممتاز.", "journey.maharaDate": "دورات متخصصة عبر الإنترنت", "journey.maharaTitle": "شهادات تطوير الواجهات الأمامية — مهارة تك", "journey.maharaDesc": "حصلت على شهادات ودورات في مجال تطوير الواجهات الأمامية عبر منصة MaharaTech. يمكن إضافة أسماء الدورات وتواريخها لاحقًا.", "journey.galleryTitle": "الشهادات والمشاركات المجتمعية", "journey.gallerySubtitle": "الشهادات التقنية منفصلة عن شهادات الأنشطة والمبادرات المجتمعية لتوضيح طبيعة كل إنجاز.", "journey.certMansoura": "جامعة المنصورة · Front-End", "journey.certMansouraDesc": "48 ساعة تدريبية · تقدير ممتاز.", "journey.certLeadership": "كيان شباب بحري · فريق اليوم مستقبل الغد", "journey.certLeadershipDesc": "2024 · 80 ساعة تدريبية واجتياز مشروع التخرج.", "journey.certWorkshop": "كيان شباب بحري · قبل أن توظفني اعرفني", "journey.certWorkshopDesc": "3 أيام · 16 ساعة تدريبية.", "journey.certParticipation": "كيان شباب بحري · شهادة شكر وتقدير", "journey.certParticipationDesc": "تقدير المشاركة المتميزة في العمل الشبابي والتنظيمي.", "journey.openCertificate": "عرض الشهادة", "journey.certMansouraAlt": "شهادة دورة فرونت إند من جامعة المنصورة", "journey.certLeadershipAlt": "شهادة برنامج كيان شباب بحري لمدة 80 ساعة", "journey.certWorkshopAlt": "شهادة ورشة كيان شباب بحري لمدة 16 ساعة", "journey.certParticipationAlt": "شهادة تقدير من كيان شباب بحري",
      "contact.kicker": "لنتواصل", "contact.title": "عندك فكرة؟ <span class=\"accent-text\">خلينا ننفذها.</span>", "contact.subtitle": "سواء كان لديك مشروع أو فرصة عمل أو أردت إلقاء التحية، يسعدني سماعك.", "contact.phone": "رقم الهاتف", "contact.email": "البريد الإلكتروني", "contact.call": "اتصال", "contact.whatsapp": "واتساب", "contact.addPhone": "أضف رقم هاتفك", "contact.addEmail": "أضف بريدك الإلكتروني", "contact.addLinkedin": "أضف رابط لينكدإن", "contact.addGithub": "أضف رابط جيت هب", "contact.addInstagram": "أضف رابط إنستجرام", "contact.noLink": "أضف رابط التواصل في script.js لتفعيله.",
      "form.title": "إرسال رسالة", "form.name": "الاسم", "form.email": "البريد الإلكتروني", "form.message": "الرسالة", "form.namePlaceholder": "بماذا أناديك؟", "form.emailPlaceholder": "you@example.com", "form.messagePlaceholder": "حدثني عن مشروعك...", "form.send": "إرسال الرسالة", "form.sending": "جارٍ الإرسال...", "form.note": "للإرسال المباشر أضف رابط Formspree في script.js. أو ضع بريدك لفتح تطبيق البريد.", "form.nameError": "أدخل اسمًا مكونًا من حرفين على الأقل.", "form.emailError": "أدخل بريدًا إلكترونيًا صحيحًا.", "form.messageError": "يجب ألا تقل الرسالة عن 12 حرفًا.", "form.success": "تم إرسال رسالتك بنجاح. شكرًا لك!", "form.failure": "تعذر إرسال الرسالة، حاول مرة أخرى.", "form.mailto": "تم فتح تطبيق البريد. اضغط إرسال هناك لإتمام العملية.", "form.notConfigured": "البيانات صحيحة، لكن الإرسال غير مُعد. أضف بريدك أو رابط Formspree في script.js.",
      "cv.notConfigured": "أضف ملف سيرتك الذاتية وحدد CONFIG.cvUrl في script.js أولًا.", "footer.brand": "صُمم بعناية.", "footer.rights": "جميع الحقوق محفوظة.", "footer.top": "العودة للأعلى", "a11y.theme": "التبديل بين الوضع الفاتح والداكن", "a11y.language": "اختيار اللغة", "a11y.menu": "فتح أو إغلاق قائمة التنقل", "a11y.top": "العودة لأعلى الصفحة", "a11y.nav": "القائمة الرئيسية", "page.title": "أحمد شعبان حسن | مطور واجهات أمامية"
    },
    fr: {
      "a11y.skip": "Aller au contenu", "nav.home": "Accueil", "nav.about": "À propos", "nav.skills": "Compétences", "nav.projects": "Projets", "nav.journey": "Parcours", "nav.contact": "Contact", "nav.hire": "Parlons-en",
      "hero.available": "Ouvert aux nouvelles opportunités", "hero.eyebrow": "BIENVENUE DANS MON UNIVERS NUMÉRIQUE ✳", "hero.greeting": "Bonjour, je suis", "hero.prefix": "Je crée pour le web en tant que", "hero.role1": "Développeur Front-End", "hero.role2": "Spécialiste React", "hero.role3": "Passionné d'UI/UX", "hero.description": "Je conçois et développe des interfaces performantes, intuitives et adaptatives qui allient esthétique, fluidité et utilité.", "hero.download": "Télécharger le CV", "hero.contact": "Me contacter", "hero.trait1": "Code propre", "hero.trait2": "UI soignée", "hero.trait3": "Impact réel", "hero.photoLabel": "CRÉATIVITÉ / DÉVELOPPEMENT", "hero.photoBottom": "CRÉÉ AVEC INTENTION", "hero.floatTop": "Expériences web", "hero.floatTopSub": "Pensées dans le détail", "hero.floatBottom": "Pixel par pixel", "hero.floatBottomSub": "Toujours en progrès", "hero.scroll": "DÉFILER POUR EXPLORER",
      "about.kicker": "QUELQUES MOTS SUR MOI", "about.title": "Au-delà du code, <span class=\"accent-text\">une vraie intention.</span>", "about.lead": "Je suis développeur front-end, attentif aux détails, de la première maquette à la dernière interaction.", "about.description": "Je transforme des idées complexes en produits numériques intuitifs, accessibles et adaptatifs. J'aime associer design réfléchi, ingénierie rigoureuse et apprentissage continu.", "about.fact1Label": "MON DOMAINE", "about.fact1Value": "Ingénierie UI", "about.fact2Label": "MON APPROCHE", "about.fact2Value": "L'utilisateur d'abord", "about.fact3Label": "OUVERT AUX", "about.fact3Value": "Belles opportunités",
      "skills.kicker": "MES OUTILS", "skills.title": "Les outils de mon <span class=\"accent-text\">métier.</span>", "skills.subtitle": "Un ensemble d'outils en évolution pour créer des expériences web abouties.", "skills.html": "Structure sémantique et accessible.", "skills.css": "Mises en page adaptatives et animations.", "skills.js": "Interactions fluides et utiles.", "skills.react": "Interfaces à base de composants.", "skills.tailwind": "Styles cohérents et évolutifs.", "skills.git": "Collaboration et versions organisées.", "skills.softTitle": "Au-delà de la technique", "skills.soft1": "Résolution de problèmes", "skills.soft2": "Communication", "skills.soft3": "Sens du détail", "skills.soft4": "Adaptabilité",
      "projects.kicker": "PROJETS SÉLECTIONNÉS", "projects.title": "Un travail qui <span class=\"accent-text\">parle.</span>", "projects.subtitle": "Projets de démonstration : remplacez-les par vos réalisations avant publication.", "projects.aside": "DÉCOUVRIR MON PROCESSUS ↗", "projects.all": "Tous", "projects.interactive": "Interactif", "projects.demo": "Démo", "projects.code": "Code source", "projects.sample": "APERÇU CONCEPTUEL", "projects.sampleCategory": "Projet exemple", "projects.configure": "Ajoutez le lien de ce projet dans script.js pour l'activer.", "projects.previewAlt": "Illustration, pas une vraie capture d'écran", "projects.filterLabel": "Filtrer les projets",
      "journey.kicker": "MON PARCOURS DE FORMATION", "journey.title": "Une expérience nourrie par <span class=\"accent-text\">la passion.</span>", "journey.subtitle": "Des études en systèmes d’information au développement Front-End, en passant par les formations et les initiatives communautaires.", "journey.education": "Parcours universitaire", "journey.training": "Formations et certifications techniques", "journey.degreeDate": "2025", "journey.degreeTitle": "Licence en systèmes d’information — MET", "journey.degreeDesc": "Diplômé en 2025, spécialité systèmes d’information.", "journey.projectDate": "2025", "journey.projectTitle": "Projet de fin d’études — Excellent", "journey.projectDesc": "Le projet de fin d’études a obtenu la mention Excellent.", "journey.mansouraDate": "24 juin – 14 août 2024", "journey.mansouraTitle": "Web Design (Front-End) — Université de Mansoura", "journey.mansouraDesc": "48 heures de formation au Centre d’études et de consultations scientifiques de la Faculté des sciences, en partenariat avec ITC. Mention Excellent.", "journey.maharaDate": "Formations spécialisées en ligne", "journey.maharaTitle": "Certificats de développement Front-End — MaharaTech", "journey.maharaDesc": "Formations et certificats Front-End obtenus sur MaharaTech. Les intitulés et les dates peuvent être complétés ultérieurement.", "journey.galleryTitle": "Certificats et engagement associatif", "journey.gallerySubtitle": "Les formations techniques et les engagements associatifs sont présentés séparément.", "journey.certMansoura": "Université de Mansoura · Front-End", "journey.certMansouraDesc": "48 heures de formation · Excellent.", "journey.certLeadership": "Bahary Youth · Jeunesse d’aujourd’hui, avenir de demain", "journey.certLeadershipDesc": "2024 · 80 heures de formation et projet de fin de programme.", "journey.certWorkshop": "Bahary Youth · Apprenez à me connaître avant de m’embaucher", "journey.certWorkshopDesc": "Trois jours · 16 heures de formation.", "journey.certParticipation": "Bahary Youth · Certificat de reconnaissance", "journey.certParticipationDesc": "Reconnaissance pour participation active aux initiatives et à leur organisation.", "journey.openCertificate": "Voir le certificat", "journey.certMansouraAlt": "Certificat de formation Front-End de l’Université de Mansoura", "journey.certLeadershipAlt": "Certificat Bahary Youth de 80 heures", "journey.certWorkshopAlt": "Certificat d’atelier Bahary Youth de 16 heures", "journey.certParticipationAlt": "Certificat de reconnaissance Bahary Youth",
      "contact.kicker": "RESTONS EN CONTACT", "contact.title": "Une idée ? <span class=\"accent-text\">Réalisons-la.</span>", "contact.subtitle": "Un projet, une opportunité ou simplement envie d'échanger ? Je serais ravi de vous lire.", "contact.phone": "Téléphone", "contact.email": "Adresse e-mail", "contact.call": "Appeler", "contact.whatsapp": "WhatsApp", "contact.addPhone": "Ajoutez votre numéro", "contact.addEmail": "Ajoutez votre adresse e-mail", "contact.addLinkedin": "Ajoutez votre profil LinkedIn", "contact.addGithub": "Ajoutez votre profil GitHub", "contact.addInstagram": "Ajoutez votre profil Instagram", "contact.noLink": "Ajoutez ce lien dans script.js pour l'activer.",
      "form.title": "Envoyer un message", "form.name": "Votre nom", "form.email": "Votre e-mail", "form.message": "Votre message", "form.namePlaceholder": "Comment vous appeler ?", "form.emailPlaceholder": "vous@example.com", "form.messagePlaceholder": "Parlez-moi de votre projet...", "form.send": "Envoyer", "form.sending": "Envoi en cours...", "form.note": "Ajoutez votre lien Formspree dans script.js pour un envoi direct, ou un e-mail pour ouvrir votre messagerie.", "form.nameError": "Saisissez au moins 2 caractères pour votre nom.", "form.emailError": "Saisissez une adresse e-mail valide.", "form.messageError": "Le message doit contenir au moins 12 caractères.", "form.success": "Message envoyé avec succès. Merci !", "form.failure": "Échec de l'envoi. Veuillez réessayer.", "form.mailto": "Votre messagerie est ouverte. Cliquez sur Envoyer pour terminer.", "form.notConfigured": "Le formulaire est valide, mais l'envoi n'est pas configuré. Ajoutez un e-mail ou Formspree dans script.js.",
      "cv.notConfigured": "Ajoutez votre fichier CV et renseignez CONFIG.cvUrl dans script.js.", "footer.brand": "Conçu avec intention.", "footer.rights": "Tous droits réservés.", "footer.top": "Retour en haut", "a11y.theme": "Changer le thème clair ou sombre", "a11y.language": "Choisir la langue", "a11y.menu": "Ouvrir ou fermer le menu", "a11y.top": "Retour en haut", "a11y.nav": "Navigation principale", "page.title": "Ahmed Shaban Hassan | Développeur Front-End"
    },
    es: {
      "a11y.skip": "Saltar al contenido", "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.skills": "Habilidades", "nav.projects": "Proyectos", "nav.journey": "Trayectoria", "nav.contact": "Contacto", "nav.hire": "Hablemos",
      "hero.available": "Disponible para nuevas oportunidades", "hero.eyebrow": "BIENVENIDO A MI ESPACIO DIGITAL ✳", "hero.greeting": "Hola, soy", "hero.prefix": "Creo para la web como", "hero.role1": "Desarrollador Front-End", "hero.role2": "Especialista en React", "hero.role3": "Entusiasta de UI/UX", "hero.description": "Diseño y desarrollo interfaces intuitivas, rápidas y adaptables que combinan estética, facilidad de uso y un impacto duradero.", "hero.download": "Descargar CV", "hero.contact": "Contáctame", "hero.trait1": "Código limpio", "hero.trait2": "UI cuidada", "hero.trait3": "Impacto real", "hero.photoLabel": "CREATIVIDAD / DESARROLLO", "hero.photoBottom": "HECHO CON PROPÓSITO", "hero.floatTop": "Experiencias web", "hero.floatTopSub": "Creadas con intención", "hero.floatBottom": "Píxel a píxel", "hero.floatBottomSub": "Siempre mejorando", "hero.scroll": "DESLIZA PARA EXPLORAR",
      "about.kicker": "UN POCO SOBRE MÍ", "about.title": "Más allá del código, <span class=\"accent-text\">hay un propósito.</span>", "about.lead": "Soy desarrollador front-end y cuido cada detalle, desde el primer boceto hasta la última interacción.", "about.description": "Transformo ideas complejas en productos digitales intuitivos, accesibles y adaptables. Me gusta unir buen diseño, ingeniería sólida y aprendizaje continuo.", "about.fact1Label": "MI ENFOQUE", "about.fact1Value": "Ingeniería UI", "about.fact2Label": "MI MÉTODO", "about.fact2Value": "Primero el usuario", "about.fact3Label": "ABIERTO A", "about.fact3Value": "Grandes oportunidades",
      "skills.kicker": "MIS HERRAMIENTAS", "skills.title": "Herramientas de mi <span class=\"accent-text\">oficio.</span>", "skills.subtitle": "Tecnologías en constante evolución para crear experiencias web pulidas.", "skills.html": "Estructura semántica y accesible.", "skills.css": "Diseño adaptable y animación.", "skills.js": "Interacciones fluidas y útiles.", "skills.react": "Interfaces basadas en componentes.", "skills.tailwind": "Estilos consistentes y escalables.", "skills.git": "Colaboración y control de versiones.", "skills.softTitle": "Más allá de lo técnico", "skills.soft1": "Resolución de problemas", "skills.soft2": "Comunicación", "skills.soft3": "Atención al detalle", "skills.soft4": "Adaptabilidad",
      "projects.kicker": "TRABAJOS DESTACADOS", "projects.title": "Proyectos que <span class=\"accent-text\">hablan.</span>", "projects.subtitle": "Proyectos de ejemplo: reemplázalos por trabajos reales antes de publicar.", "projects.aside": "EXPLORA MI PROCESO ↗", "projects.all": "Todos", "projects.interactive": "Interactivos", "projects.demo": "Demo", "projects.code": "Código fuente", "projects.sample": "VISTA CONCEPTUAL", "projects.sampleCategory": "Proyecto de muestra", "projects.configure": "Agrega el enlace del proyecto en script.js para activarlo.", "projects.previewAlt": "Vista ilustrativa, no una captura real", "projects.filterLabel": "Filtrar proyectos",
      "journey.kicker": "MI TRAYECTORIA FORMATIVA", "journey.title": "Experiencia impulsada por <span class=\"accent-text\">la pasión.</span>", "journey.subtitle": "Desde los estudios de sistemas de información hasta el desarrollo Front-End, la formación técnica y la participación comunitaria.", "journey.education": "Formación académica", "journey.training": "Cursos y certificaciones técnicas", "journey.degreeDate": "2025", "journey.degreeTitle": "Licenciatura en Sistemas de Información — MET", "journey.degreeDesc": "Graduado en 2025, especialidad en Sistemas de Información.", "journey.projectDate": "2025", "journey.projectTitle": "Proyecto de graduación — Excelente", "journey.projectDesc": "El proyecto final obtuvo la calificación Excelente.", "journey.mansouraDate": "24 jun – 14 ago 2024", "journey.mansouraTitle": "Diseño Web (Front-End) — Universidad de Mansoura", "journey.mansouraDesc": "48 horas de formación en el Centro de Estudios y Consultoría Científica de la Facultad de Ciencias, en colaboración con ITC. Calificación: Excelente.", "journey.maharaDate": "Cursos especializados en línea", "journey.maharaTitle": "Certificaciones de desarrollo Front-End — MaharaTech", "journey.maharaDesc": "Cursos y certificados de Front-End obtenidos en MaharaTech. Puedes añadir los nombres y las fechas exactas después.", "journey.galleryTitle": "Certificados y participación comunitaria", "journey.gallerySubtitle": "La formación técnica se presenta por separado de las iniciativas comunitarias.", "journey.certMansoura": "Universidad de Mansoura · Front-End", "journey.certMansouraDesc": "48 horas de formación · Excelente.", "journey.certLeadership": "Bahary Youth · Juventud de hoy, futuro de mañana", "journey.certLeadershipDesc": "2024 · 80 horas de formación y proyecto final.", "journey.certWorkshop": "Bahary Youth · Conóceme antes de contratarme", "journey.certWorkshopDesc": "Tres días · 16 horas de formación.", "journey.certParticipation": "Bahary Youth · Certificado de reconocimiento", "journey.certParticipationDesc": "Reconocimiento por una participación destacada en iniciativas y organización juvenil.", "journey.openCertificate": "Ver certificado", "journey.certMansouraAlt": "Certificado Front-End de la Universidad de Mansoura", "journey.certLeadershipAlt": "Certificado Bahary Youth de 80 horas", "journey.certWorkshopAlt": "Certificado del taller Bahary Youth de 16 horas", "journey.certParticipationAlt": "Certificado de reconocimiento de Bahary Youth",
      "contact.kicker": "HABLEMOS", "contact.title": "¿Tienes una idea? <span class=\"accent-text\">Hagámosla realidad.</span>", "contact.subtitle": "¿Tienes un proyecto, una oportunidad o solo quieres saludar? Me encantará escucharte.", "contact.phone": "Teléfono", "contact.email": "Correo electrónico", "contact.call": "Llamar", "contact.whatsapp": "WhatsApp", "contact.addPhone": "Añade tu teléfono", "contact.addEmail": "Añade tu correo", "contact.addLinkedin": "Añade tu perfil de LinkedIn", "contact.addGithub": "Añade tu perfil de GitHub", "contact.addInstagram": "Añade tu perfil de Instagram", "contact.noLink": "Agrega este enlace en script.js para activarlo.",
      "form.title": "Enviar mensaje", "form.name": "Tu nombre", "form.email": "Tu correo", "form.message": "Tu mensaje", "form.namePlaceholder": "¿Cómo te llamas?", "form.emailPlaceholder": "tu@example.com", "form.messagePlaceholder": "Cuéntame sobre tu proyecto...", "form.send": "Enviar mensaje", "form.sending": "Enviando...", "form.note": "Para enviar directamente, añade Formspree en script.js; o configura tu correo para abrir la app de email.", "form.nameError": "Escribe un nombre con al menos 2 caracteres.", "form.emailError": "Escribe un correo válido.", "form.messageError": "El mensaje debe tener al menos 12 caracteres.", "form.success": "Mensaje enviado correctamente. ¡Gracias!", "form.failure": "No se pudo enviar el mensaje. Inténtalo de nuevo.", "form.mailto": "Se abrió tu aplicación de correo. Pulsa Enviar allí para terminar.", "form.notConfigured": "El formulario es válido, pero el envío no está configurado. Añade tu email o Formspree en script.js.",
      "cv.notConfigured": "Añade tu archivo CV y configura CONFIG.cvUrl en script.js.", "footer.brand": "Diseñado con intención.", "footer.rights": "Todos los derechos reservados.", "footer.top": "Volver arriba", "a11y.theme": "Cambiar entre tema claro y oscuro", "a11y.language": "Elegir idioma", "a11y.menu": "Abrir o cerrar la navegación", "a11y.top": "Volver arriba", "a11y.nav": "Navegación principal", "page.title": "Ahmed Shaban Hassan | Desarrollador Front-End"
    }
  };

  /* ================== 3) بيانات المشاريع التجريبية ==================
     بدِّل العنوان والوصف والروابط والصورة لكل مشروع بعملك الحقيقي.
     image: "projects/your-image.webp" (صور مؤقتة داخل مجلد projects)
     demo / code: روابط HTTPS فعلية؛ الفراغ يعني أن الرابط غير مُهيَّأ.
  =================================================================== */
  const PROJECTS = [
    { id: "dashboard", categories: ["react", "interactive"], tags: ["React", "JavaScript", "CSS"], image: "projects/dashboard.webp", demo: "", code: "", title: { en: "Analytics Dashboard", ar: "لوحة تحليلات تفاعلية", fr: "Tableau de bord analytique", es: "Panel de analítica" }, desc: { en: "A responsive dashboard concept with charts, filters and clean data visualization.", ar: "فكرة لوحة تحكم متجاوبة تضم رسومًا بيانية وفلاتر لعرض البيانات.", fr: "Concept de tableau de bord adaptatif avec graphiques, filtres et données claires.", es: "Concepto adaptable con gráficos, filtros y visualización clara de datos." } },
    { id: "commerce", categories: ["react", "javascript"], tags: ["React", "JavaScript", "UI"], image: "projects/commerce.webp", demo: "", code: "", title: { en: "Modern E-Commerce", ar: "متجر إلكتروني حديث", fr: "E-commerce moderne", es: "E-commerce moderno" }, desc: { en: "A polished shopping experience concept with product cards and cart interactions.", ar: "تصور لمتجر عصري ببطاقات منتجات وسلة مشتريات تفاعلية.", fr: "Une expérience d'achat moderne avec produits et panier interactif.", es: "Experiencia de compra moderna con productos y carrito interactivo." } },
    { id: "tasks", categories: ["interactive", "javascript"], tags: ["JavaScript", "HTML5", "CSS3"], image: "projects/tasks.webp", demo: "", code: "", title: { en: "Task Flow Manager", ar: "مدير المهام الذكي", fr: "Gestionnaire de tâches", es: "Gestor de tareas" }, desc: { en: "A focused productivity interface concept with task organization and statuses.", ar: "تصميم لتطبيق إنتاجية ينظم المهام وحالاتها بواجهة بسيطة.", fr: "Interface de productivité pour organiser tâches et statuts.", es: "Interfaz de productividad para organizar tareas y estados." } },
    { id: "travel", categories: ["css", "interactive"], tags: ["HTML5", "CSS3", "JavaScript"], image: "projects/travel.webp", demo: "", code: "", title: { en: "Travel Landing Page", ar: "صفحة هبوط للسفر", fr: "Page de voyage", es: "Página de viajes" }, desc: { en: "An immersive travel landing page concept with subtle animations and responsive layout.", ar: "واجهة لصفحة سفر جذابة بحركات ناعمة وتصميم متجاوب.", fr: "Page immersive dédiée aux voyages, animations discrètes et design adaptatif.", es: "Página inmersiva de viajes con animaciones sutiles y diseño adaptable." } },
    { id: "weather", categories: ["javascript", "interactive"], tags: ["JavaScript", "API", "CSS3"], image: "projects/weather.webp", demo: "", code: "", title: { en: "Weather UI Concept", ar: "واجهة تطبيق طقس", fr: "Concept météo", es: "Concepto del clima" }, desc: { en: "A weather application interface concept designed for quick, readable forecasts.", ar: "تصور لواجهة تعرض توقعات الطقس بوضوح وسهولة.", fr: "Une interface météo pensée pour des prévisions claires et rapides.", es: "Interfaz del tiempo diseñada para pronósticos claros y rápidos." } },
    { id: "portfolio", categories: ["css", "interactive"], tags: ["HTML5", "CSS3", "JavaScript"], image: "projects/portfolio.webp", demo: "", code: "", title: { en: "Creative Portfolio", ar: "معرض أعمال إبداعي", fr: "Portfolio créatif", es: "Portfolio creativo" }, desc: { en: "A personal portfolio concept that brings together identity, accessibility and motion.", ar: "تصور لموقع شخصي يجمع بين الهوية البصرية وسهولة الوصول والحركة.", fr: "Portfolio personnel alliant identité, accessibilité et animation.", es: "Portfolio personal que une identidad, accesibilidad y animación." } }
  ];

  /* ================== 4) متغيرات وعناصر الصفحة ================== */
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const root = document.documentElement;
  const languageButton = $("#languageButton");
  const languageMenu = $("#languageMenu");
  const mainNav = $("#mainNav");
  const menuToggle = $("#menuToggle");
  const form = $("#contactForm");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let lang = "en";
  let filter = "all";
  let typewriterToken = 0;
  let toastTimer;
  let revealObserver;

  // عند منع المتصفح التخزين، لا تتوقف بقية وظائف الموقع.
  function stored(key, fallback = "") { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
  function store(key, value) { try { localStorage.setItem(key, value); } catch { /* التخزين اختياري */ } }
  function t(key) { return I18N[lang][key] ?? I18N.en[key] ?? key; }
  function httpUrl(value) {
    try { const u = new URL(value); return ["https:", "http:"].includes(u.protocol) ? u.href : ""; }
    catch { return ""; }
  }
  function safeEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? value : ""; }

  /* ================== 5) الثيم Dark / Light ================== */
  function setTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    root.dataset.theme = next;
    store("portfolio.theme", next);
    $("#themeToggle").setAttribute("aria-pressed", String(next === "light"));
    $('meta[name="theme-color"]').content = next === "light" ? "#f7f9fa" : "#0b1017";
  }
  const themePreference = stored("portfolio.theme", "dark"); // الوضع الداكن افتراضيًا، ويُحفظ اختيار الزائر
  setTheme(themePreference);
  $("#themeToggle").addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

  /* ================== 6) ترجمة العناصر واتجاه الصفحة ================== */
  function translatePage() {
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("page.title");
    $$('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      const translated = t(key);
      // عناوين محدودة تحتوي تنسيق span مسبقًا من قاموس موثوق داخل هذا الملف.
      if (["about.title", "skills.title", "projects.title", "journey.title", "contact.title"].includes(key)) element.innerHTML = translated;
      else element.textContent = translated;
    });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    // ترجمة الوصف البديل لصور الشهادات لدعم اللغات الأربع.
    $$('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    $("#currentLanguage").textContent = lang.toUpperCase();
    $("#languageButton").setAttribute("aria-label", t("a11y.language"));
    $("#themeToggle").setAttribute("aria-label", t("a11y.theme"));
    $("#menuToggle").setAttribute("aria-label", t("a11y.menu"));
    $("#backToTop").setAttribute("aria-label", t("a11y.top"));
    mainNav.setAttribute("aria-label", t("a11y.nav"));
    $("#projectFilters").setAttribute("aria-label", t("projects.filterLabel"));
    $$('#languageMenu [data-lang]').forEach(button => button.setAttribute("aria-checked", String(button.dataset.lang === lang)));
    renderProjects();
    renderContact();
    $("#formStatus").textContent = "";
    $("#formStatus").className = "form-status";
    $$(".field-error").forEach(el => { el.textContent = ""; });
    $$("#contactForm [aria-invalid]").forEach(el => el.removeAttribute("aria-invalid"));
  }
  function setLanguage(next, { initial = false } = {}) {
    if (!I18N[next]) next = "en";
    lang = next;
    store("portfolio.language", lang);
    translatePage();
    closeLanguageMenu();
    runHeroTyping(initial);
  }
  function openLanguageMenu() {
    languageMenu.hidden = false;
    languageButton.setAttribute("aria-expanded", "true");
  }
  function closeLanguageMenu() {
    languageMenu.hidden = true;
    languageButton.setAttribute("aria-expanded", "false");
  }
  languageButton.addEventListener("click", () => languageMenu.hidden ? openLanguageMenu() : closeLanguageMenu());
  $$('#languageMenu [data-lang]').forEach(button => button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    languageButton.focus();
  }));
  // التنقل بالقائمة بلوحة المفاتيح: Escape و ArrowDown و ArrowUp
  languageButton.addEventListener("keydown", event => {
    if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault(); openLanguageMenu();
      const list = $$("[data-lang]", languageMenu);
      list[event.key === "ArrowDown" ? 0 : list.length - 1].focus();
    }
  });
  languageMenu.addEventListener("keydown", event => {
    const list = $$("[data-lang]", languageMenu);
    const index = list.indexOf(document.activeElement);
    if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault(); list[(index + (event.key === "ArrowDown" ? 1 : -1) + list.length) % list.length].focus();
    }
    if (event.key === "Escape") { closeLanguageMenu(); languageButton.focus(); }
  });
  document.addEventListener("click", event => {
    if (!$("#languageSwitcher").contains(event.target)) closeLanguageMenu();
    if (!$("#siteHeader").contains(event.target)) closeMobileMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeLanguageMenu(); closeMobileMenu(); }
  });

  /* ================== 7) اسمك + المسمى الوظيفي حرفًا حرفًا ==================
     لا حاجة إلى مكتبة Typed.js؛ الحركة مكتوبة هنا بحيث تعمل حتى بدون إنترنت.
     يبدأ تأثير التحية ثم الاسم عند أول فتح، ثم تتغير 3 مسميات باستمرار بكل لغة.
  ========================================================================== */
  const wait = (ms) => new Promise(resolve => window.setTimeout(resolve, ms));
  async function typeText(element, text, speed, token) {
    element.textContent = "";
    for (const character of Array.from(text)) {
      if (token !== typewriterToken) return false;
      element.textContent += character;
      await wait(speed);
    }
    return token === typewriterToken;
  }
  async function eraseText(element, speed, token) {
    const characters = Array.from(element.textContent);
    while (characters.length) {
      if (token !== typewriterToken) return false;
      characters.pop();
      element.textContent = characters.join("");
      await wait(speed);
    }
    return true;
  }
  async function runHeroTyping(initial) {
    // إلغاء أي عملية كتابة قديمة، خصوصًا عند تغيير اللغة.
    const token = ++typewriterToken;
    const greetingEl = $("#heroGreeting");
    const nameEl = $("#heroName");
    const roleEl = $("#typedRole");

    const greeting = t("hero.greeting");
    const roles = [t("hero.role1"), t("hero.role2"), t("hero.role3")];

    // إظهار التحية ثم الاسم حرفًا حرفًا عند أول فتح للموقع.
    // نفّذ الحركة حتى عندما يكون خيار تقليل الحركة مفعلاً، وفق طلب المستخدم.
    if (initial) {
      greetingEl.textContent = "";
      nameEl.textContent = "";
      roleEl.textContent = "";

      await wait(TYPE_SPEED.pauseBefore);
      if (!await typeText(greetingEl, greeting, TYPE_SPEED.greeting, token)) return;
      await wait(TYPE_SPEED.pauseBetween);
      if (!await typeText(nameEl, CONFIG.name, TYPE_SPEED.name, token)) return;
      await wait(TYPE_SPEED.pauseAfterName);
    } else {
      // عند تغيير اللغة لا نعيد كتابة الاسم، ونحدث التحية فورًا.
      greetingEl.textContent = greeting;
      nameEl.textContent = CONFIG.name;
    }

    // كتابة المسميات بالتتابع وحذفها وإعادة كتابتها باستمرار.
    let index = 0;
    while (token === typewriterToken) {
      if (!await typeText(roleEl, roles[index], TYPE_SPEED.role, token)) return;
      await wait(TYPE_SPEED.holdRole);
      if (!await eraseText(roleEl, TYPE_SPEED.erase, token)) return;
      await wait(TYPE_SPEED.pauseBetweenRoles);
      index = (index + 1) % roles.length;
    }
  }

  /* ================== 8) الصورة الشخصية وملف CV ================== */
  $("#heroName").textContent = CONFIG.name;
  $("#brandName").firstChild.textContent = CONFIG.brandName;
  $("#portraitInitials").textContent = CONFIG.initials;
  $("#footerName").textContent = CONFIG.name;
  $("#currentYear").textContent = String(new Date().getFullYear());
  $("#brandLink").setAttribute("aria-label", `${CONFIG.name} — Home`);
  if (CONFIG.photo.trim()) {
    const image = $("#profileImage");
    image.onload = () => { image.hidden = false; $("#portraitFallback").hidden = true; };
    image.onerror = () => { image.hidden = true; $("#portraitFallback").hidden = false; };
    image.alt = CONFIG.name;
    image.src = CONFIG.photo;
  }
  // ضبط الرابط عند التشغيل، وليس أثناء الضغط؛ حتى يعمل التحميل من أول محاولة.
  if (CONFIG.cvUrl.trim() && !/^javascript:/i.test(CONFIG.cvUrl.trim())) {
    $("#downloadCv").href = CONFIG.cvUrl.trim();
    $("#downloadCv").setAttribute("download", "");
  }
  $("#downloadCv").addEventListener("click", event => {
    if (!CONFIG.cvUrl.trim() || /^javascript:/i.test(CONFIG.cvUrl.trim())) {
      event.preventDefault(); showToast(t("cv.notConfigured"));
    }
  });

  /* ================== 9) روابط التواصل الشخصية ================== */
  function assignLink(selector, value, fallbackKey, { external = false } = {}) {
    const link = $(selector);
    const valid = value || "";
    link.textContent = valid ? (external ? valid.replace(/^https?:\/\//, "").replace(/\/$/, "") : valid) : t(fallbackKey);
    link.href = valid || "#";
    if (external && valid) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
    else { link.removeAttribute("target"); link.removeAttribute("rel"); }
    if (!valid) link.setAttribute("aria-disabled", "true");
    else link.removeAttribute("aria-disabled");
  }
  function renderContact() {
    const phone = CONFIG.phone.trim();
    $("#phoneDisplay").textContent = phone || t("contact.addPhone");
    const digits = (CONFIG.whatsapp || phone).replace(/[^\d]/g, "");
    assignLink("#callLink", phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "", "contact.call");
    $("#callLink").textContent = t("contact.call");
    assignLink("#whatsappLink", digits ? `https://wa.me/${digits}` : "", "contact.whatsapp", { external: true });
    $("#whatsappLink").textContent = t("contact.whatsapp");
    const email = safeEmail(CONFIG.email.trim());
    assignLink("#emailLink", email ? `mailto:${email}` : "", "contact.addEmail");
    if (email) $("#emailLink").textContent = email;
    assignLink("#linkedinLink", httpUrl(CONFIG.linkedin), "contact.addLinkedin", { external: true });
    assignLink("#githubLink", httpUrl(CONFIG.github), "contact.addGithub", { external: true });
    assignLink("#instagramLink", httpUrl(CONFIG.instagram), "contact.addInstagram", { external: true });
  }
  $$(".contact-details a").forEach(link => link.addEventListener("click", event => {
    if (link.getAttribute("aria-disabled") === "true") { event.preventDefault(); showToast(t("contact.noLink")); }
  }));

  /* ================== 10) عرض المشاريع والفلترة ================== */
  function projectLink(value, label, icon, tooltip) {
    const url = httpUrl(value);
    const el = document.createElement(url ? "a" : "button");
    if (url) { el.href = url; el.target = "_blank"; el.rel = "noopener noreferrer"; }
    else { el.type = "button"; el.className = "unconfigured"; el.addEventListener("click", () => showToast(tooltip)); }
    const i = document.createElement("i"); i.className = icon; i.setAttribute("aria-hidden", "true");
    el.append(document.createTextNode(label + " "), i);
    return el;
  }
  function createProjectCard(project, index) {
    const article = document.createElement("article");
    article.className = "project-card filter-enter";
    article.dataset.categories = project.categories.join(" ");
    // لا تُدرج أي بيانات من المستخدم داخل innerHTML؛ المعاينة التالية ثابتة تمامًا.
    article.innerHTML = `
      <div class="project-preview project-preview--${project.id}">
        <span class="project-preview-label"></span>
        <div class="mock-browser" aria-hidden="true"><div class="mock-toolbar"><i></i><i></i><i></i></div><div class="mock-content"><div class="mock-sidebar"><span></span><span></span><span></span><span></span></div><div class="mock-body"><div class="mock-heading"></div><div class="mock-panels"><span></span><span></span><span></span></div><div class="mock-graph"></div></div></div></div>
      </div>
      <div class="project-info"><div class="project-info-top"><span class="project-number"></span><span class="project-category"></span></div><h3></h3><p></p><div class="tech-tags"></div><div class="project-actions"></div></div>`;
    $(".project-preview-label", article).textContent = t("projects.sample");
    $(".project-number", article).textContent = String(index + 1).padStart(2, "0") + " / 06";
    $(".project-category", article).textContent = t("projects.sampleCategory");
    $("h3", article).textContent = project.title[lang] || project.title.en;
    $(".project-info p", article).textContent = project.desc[lang] || project.desc.en;
    const preview = $(".project-preview", article);
    if (project.image.trim()) {
      const img = document.createElement("img");
      img.src = project.image; img.loading = "lazy"; img.decoding = "async"; img.width = 1200; img.height = 720; img.alt = `${project.title[lang] || project.title.en} — ${t("projects.previewAlt")}`;
      img.onerror = () => { img.remove(); $(".mock-browser", preview).hidden = false; };
      $(".mock-browser", preview).hidden = true;
      preview.append(img);
    }
    project.tags.forEach(tag => { const span = document.createElement("span"); span.className = "tech-tag"; span.textContent = tag; $(".tech-tags", article).append(span); });
    const actions = $(".project-actions", article);
    actions.append(projectLink(project.demo, t("projects.demo"), "fa-solid fa-arrow-up-right-from-square", t("projects.configure")));
    actions.append(projectLink(project.code, t("projects.code"), "fa-brands fa-github", t("projects.configure")));
    return article;
  }
  function renderProjects() {
    const grid = $("#projectsGrid");
    grid.replaceChildren(...PROJECTS.map(createProjectCard));
    applyFilter(false);
  }
  function applyFilter(animate = true) {
    $$("#projectFilters .filter-button").forEach(button => { const active = button.dataset.filter === filter; button.classList.toggle("active", active); button.setAttribute("aria-pressed", String(active)); });
    $$("#projectsGrid .project-card").forEach(card => {
      const matches = filter === "all" || card.dataset.categories.split(" ").includes(filter);
      card.classList.remove("filter-enter");
      card.hidden = !matches;
      if (animate && matches && !reducedMotion.matches) {
        // إعادة تفعيل الحركة حتى عند اختيار فلتر جديد سريعًا.
        void card.offsetWidth;
        card.classList.add("filter-enter");
      }
    });
  }
  $("#projectFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button || !$("#projectFilters").contains(button)) return;
    filter = button.dataset.filter;
    applyFilter();
  });

  /* ================== 11) نموذج الاتصال والتحقق من المدخلات ================== */
  function setFieldError(field, key) {
    // الربط الصريح بين الحقول ورسائل الخطأ أكثر أمانًا عند تعديل أسماء الحقول.
    const mapped = { contactName: "#nameError", contactEmail: "#emailError", contactMessage: "#messageError" };
    const target = $(mapped[field.id]);
    if (target) target.textContent = key ? t(key) : "";
    if (key) field.setAttribute("aria-invalid", "true"); else field.removeAttribute("aria-invalid");
  }
  function validateField(field) {
    const val = field.value.trim();
    let error = "";
    if (field.id === "contactName" && val.length < 2) error = "form.nameError";
    else if (field.id === "contactEmail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = "form.emailError";
    else if (field.id === "contactMessage" && val.length < 12) error = "form.messageError";
    setFieldError(field, error);
    return !error;
  }
  const fields = [$("#contactName"), $("#contactEmail"), $("#contactMessage")];
  fields.forEach(field => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => { if (field.hasAttribute("aria-invalid")) validateField(field); });
  });
  function setFormStatus(text, type = "info") { const node = $("#formStatus"); node.className = `form-status ${type}`; node.textContent = text; }
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const valid = fields.map(validateField).every(Boolean);
    if (!valid) { fields.find(field => field.hasAttribute("aria-invalid"))?.focus(); return; }
    // مصيدة حقل مخفي للبوتات؛ لا نرسل بيانات مشبوهة.
    if ($("#contactWebsite").value.trim()) return;
    const data = { name: fields[0].value.trim(), email: fields[1].value.trim(), message: fields[2].value.trim() };
    const endpoint = httpUrl(CONFIG.formEndpoint);
    if (endpoint) {
      const btn = $("#submitButton"); const label = $("#submitButton span");
      btn.disabled = true; label.textContent = t("form.sending");
      setFormStatus("");
      try {
        const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        form.reset(); fields.forEach(field => setFieldError(field, ""));
        setFormStatus(t("form.success"), "success"); showToast(t("form.success"));
      } catch (error) { console.error("Contact form:", error); setFormStatus(t("form.failure"), "error"); }
      finally { btn.disabled = false; label.textContent = t("form.send"); }
    } else if (safeEmail(CONFIG.email)) {
      // mailto لا يرسل الرسالة تلقائيًا؛ يحتاج المستخدم للضغط على Send في تطبيق البريد.
      const subject = encodeURIComponent(`Portfolio contact: ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name}\nEmail: ${data.email}`);
      window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
      setFormStatus(t("form.mailto"), "info");
    } else {
      // لا نعرض نجاح إرسال وهمي إذا لم توجد خدمة إرسال أو بريد مضبوط.
      setFormStatus(t("form.notConfigured"), "info");
    }
  });

  /* ================== 12) Navbar + Scroll Progress + Back To Top ================== */
  function closeMobileMenu() { mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }
  menuToggle.addEventListener("click", () => {
    const open = !mainNav.classList.contains("open");
    mainNav.classList.toggle("open", open); menuToggle.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 920) closeMobileMenu(); });
  // روابط الأقسام: Smooth Scroll وتحديث عنوان URL وإغلاق القائمة عند التنقل.
  $$("a[href^='#']").forEach(link => link.addEventListener("click", event => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;
    const target = $(hash);
    if (!target) return;
    event.preventDefault(); closeMobileMenu(); closeLanguageMenu();
    target.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", hash);
  }));
  let scrollScheduled = false;
  function updateScroll() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const percent = Math.min(100, Math.max(0, window.scrollY / maxScroll * 100));
    $("#scrollProgress").style.width = `${percent}%`;
    $("#siteHeader").classList.toggle("scrolled", window.scrollY > 15);
    $("#backToTop").classList.toggle("visible", window.scrollY > 450);
    const threshold = window.scrollY + $("#siteHeader").offsetHeight + window.innerHeight * .23;
    let active = "home";
    $$('main section[id]').forEach(section => { if (section.offsetTop <= threshold) active = section.id; });
    $$(".nav-link").forEach(link => {
      const on = link.getAttribute("href") === `#${active}`;
      link.classList.toggle("active", on);
      if (on) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
    });
    scrollScheduled = false;
  }
  window.addEventListener("scroll", () => {
    if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  $("#backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" }));

  /* ================== 13) Reveal animations و Skill 3D hover ================== */
  function initReveals() {
    if (!("IntersectionObserver" in window) || reducedMotion.matches) {
      $$(".reveal").forEach(el => el.classList.add("is-visible"));
      return;
    }
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: .08, rootMargin: "0px 0px -25px 0px" });
    $$(".reveal").forEach(el => revealObserver.observe(el));
  }
  function initSkillHover() {
    if (reducedMotion.matches || window.matchMedia("(hover: none)").matches) return;
    $$(".skill-card").forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.setProperty("--ry", `${x * 7}deg`);
        card.style.setProperty("--rx", `${-y * 7}deg`);
      });
      card.addEventListener("pointerleave", () => { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); });
    });
  }

  /* ================== 14) تنبيهات بسيطة ================== */
  function showToast(message) {
    const toast = $("#toast");
    window.clearTimeout(toastTimer);
    toast.textContent = message; toast.classList.add("show");
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
  }

  /* ================== 15) بدء تشغيل الموقع ================== */
  // وجود defer في index.html يضمن أن DOM أصبح جاهزًا عند الوصول إلى هنا.
  root.classList.add("js-ready");
  setLanguage(stored("portfolio.language", "en"), { initial: true });
  initReveals();
  initSkillHover();
  updateScroll();
})();
