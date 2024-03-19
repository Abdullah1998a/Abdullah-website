import {
  frontend,
  hero,
  cup,
  darkCup,
  previewDesktopHuddle,
  previewDesktopEasybank,
  previewDesktopBlogr,
  previewDesktopInsure,
  previewMobileHuddle,
  previewMobileEasybank,
  previewMobileBlogr,
  previewMobileInsure,
  svuLogo,
  damascusLogo,
  metaLogo,
  icdlLogo,
  michiganLogo,
  johnsHopkinsLogo,
} from "../assets";

export const links = {
  english: [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 4,
      name: "Education",
      path: "/education",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ],
  arabic: [
    {
      id: 1,
      name: "الصَفحةُ الرئِيسيَّة",
      path: "/",
    },
    {
      id: 2,
      name: "مَنْ أَنا",
      path: "/about",
    },
    {
      id: 3,
      name: "أَعمَالي",
      path: "/portfolio",
    },
    {
      id: 4,
      name: "التَعلِيم",
      path: "/education",
    },
    {
      id: 5,
      name: "تَواصَل مَعي",
      path: "/contact",
    },
  ],
};
export const content = {
  english: {
    home: {
      name: ["Hi, I'm", "Abdullah"],
      goal: ["I beautifuly design websites,", "and I love what I do."],
      say_hi: "Say Hi",
      img_hero: hero,
      img_desc: "hero image",
      meta: frontend,
    },
    about: {
      header_about: "About Me",
      about:
        "I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript also I've been learning ReactJS for more than a year from Meta company courses. I'm based in Damascus, Syria, but I'm happy working remotely. When I'm not coding, you'll find me outdoors I love being out in nature whether that's going for a walk, run or cycling I'd love you to check out my work.",
      works: "Go to Portfolio",
      header_quotation: "Quotation I liked",
      quotation:
        "“We aren’t obliged to correct the thinking of others, but we’re  obliged to take into account the scale of their mentalities.”",
      img_cup: cup,
      img_dark_cup: darkCup,
      img_desc: "cup-of-tea img",
    },
    portfolio: {
      header_portfolio: [
        "My Latest Works",
        "Perfect solution for digital experience.",
      ],
      return_portfolio: "Back to Portfolio",
      project_header: "Project Background",
      previews_header: "Responsive Desing",
      links: ["Live Site", "Code"],
      details_btn: "More Details",
      slider: ["Previous Project", "Next Project"],
      projects: [
        {
          id: "1",
          project_name: "Huddle",
          project_preview: previewDesktopHuddle,
          project_summary:
            "The Huddle project is about building out a landing page, which cares about generating meaningful discussions with your audience and build a strong, loyal community, and get it looking as close to the design as possible.",
          preview_desc: "huddle project",
          project_details: {
            project_desc: [
              "The project is to build out this landing page and get it looking as close to the design as possible.",
              "I used to complete this project sucessfully ReactJS, which is a javascript library, so I divided the project into small stateless components, and there is no functionality in this project. In addition, I used pure CSS to style it perfectly.",
              "Users should be able to view the optimal layout for the site depending on their device's screen size and see hover states for all interactive elements on the page.",
            ],
            previews: {
              desktop: previewDesktopHuddle,
              mobile: previewMobileHuddle,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
        {
          id: "2",
          project_name: "Easybank",
          project_preview: previewDesktopEasybank,
          project_summary:
            "The Easybank project is about building out a landing page, which cares about taking and controling your financial life online, and get it looking as close to the design as possible.",
          preview_desc: "easybank project",
          project_details: {
            project_desc: [
              "The project is to build out this landing page and get it looking as close to the design as possible.",
              "I used to complete this project sucessfully ReactJS, which is a javascript library, so I divided the project into small components, and there is functionality in this project for mobile menu. In addition, I used pure CSS to style it perfectly.",
              "Users should be able to view the optimal layout for the site depending on their device's screen size and see hover states for all interactive elements on the page.",
            ],
            previews: {
              desktop: previewDesktopEasybank,
              mobile: previewMobileEasybank,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
        {
          id: "3",
          project_name: "Blogr",
          project_preview: previewDesktopBlogr,
          project_summary:
            "The Blogr project is about building out a landing page, which cares about providing easy ways to add functionality or change the looks of a blog, and get it looking as close to the design as possible.",
          preview_desc: "blogr project",
          project_details: {
            project_desc: [
              "The project is to build out this landing page and get it looking as close to the design as possible.",
              "I used to complete this project sucessfully ReactJS, which is a javascript library, so I divided the project into small components, and there is functionality in this project for mobile menu. In addition, I used pure CSS to style it perfectly.",
              "Users should be able to view the optimal layout for the site depending on their device's screen size and see hover states for all interactive elements on the page.",
            ],
            previews: {
              desktop: previewDesktopBlogr,
              mobile: previewMobileBlogr,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
        {
          id: "4",
          project_name: "Insure",
          project_preview: previewDesktopInsure,
          project_summary:
            "The Insure project is about building out a landing page, which cares about getting your life insurance coverage easier and faster, and get it looking as close to the design as possible.",
          preview_desc: "insure project",
          project_details: {
            project_desc: [
              "The project is to build out this landing page and get it looking as close to the design as possible.",
              "I used to complete this project sucessfully ReactJS, which is a javascript library, so I divided the project into small components, and there is functionality in this project for mobile menu. In addition, I used pure CSS to style it perfectly.",
              "Users should be able to view the optimal layout for the site depending on their device's screen size and see hover states for all interactive elements on the page.",
            ],
            previews: {
              desktop: previewDesktopInsure,
              mobile: previewMobileInsure,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
      ],
    },
    education: {
      header_education: [
        "Education Background",
        "Here is all my learning journey.",
      ],
      university: {
        header_university: "Academic Education",
        labels: {
          skills: "Skills I've earned",
          grade: "Grade",
        },
        degrees: [
          {
            id: 1,
            name: "Master in computer science",
            logo: svuLogo,
            organization: "SVU university",
            date: ["Started at", "Feb 15, 2024"],
          },
          {
            id: 2,
            name: "Communications & Electronics engineering",
            logo: damascusLogo,
            organization: "Damascus university",
            skills: [
              "Communication systems",
              "Wireless technologies",
              "Electronics",
              "Visual communication",
              "Algorithms",
              "Programming",
            ],
            date: ["Graduated at", "Oct 15, 2023"],
            grade: "73.75%",
          },
        ],
      },
      platform: {
        header_platform: "Courses I've Done",
        labels: {
          skills: "Skills I've earned",
          grade: "Grade",
        },
        credentials: [
          {
            id: 1,
            name: "Frontend developer specialization",
            logo: metaLogo,
            organization: ["by Meta", "on Coursera platform"],
            skills: [
              "HTML",
              "CSS",
              "JavaScript",
              "Github",
              "Git",
              "UI & UX design",
              "ReactJS",
            ],
            link: {
              text: "Show credential",
              url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NDM299PYGG9M",
            },
            date: ["Certificate earned at", "May 19, 2023"],
            grade: "97.66%",
          },
          {
            id: 2,
            name: "International computer driving License",
            logo: icdlLogo,
            organization: "by ICDL foundation",
            skills: [
              "documents",
              "presentations",
              "spreadsheets",
              "using database",
              "online essentials",
              "Computer essentials",
              "IT security",
            ],
            link: {
              text: "Show credential",
              url: "https://drive.google.com/file/d/10dFNN7qgEciTe4WTDGw3-oroQArMTqbU/view?usp=drivesdk",
            },
            date: ["Certificate earned at", "Nov 5, 2022"],
            grade: "92.43%",
          },
          {
            id: 3,
            name: "Web design for everybod: Basics of web development & coding specialization",
            logo: michiganLogo,
            organization: ["by University of Michigan", "on Coursera platform"],
            skills: [
              "HTML",
              "CSS",
              "JavaScript",
              "Web develpment",
              "Responsive web design",
            ],
            link: {
              text: "Show credential",
              url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q922T6XY5BCH",
            },
            date: ["Certificate earned at", "Sep 5, 2021"],
            grade: "96.88%",
          },
          {
            id: 4,
            name: "HTML, CSS and JavaScript for web developers",
            logo: johnsHopkinsLogo,
            organization: [
              "by John Hopkins University",
              "on Coursera platform",
            ],
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            link: {
              text: "Show credential",
              url: "https://www.coursera.org/account/accomplishments/specialization/certificate/3JYRL4RJEFUJ",
            },
            date: ["Certificate earned at", "Jul 24, 2021"],
            grade: "98.95%",
          },
        ],
      },
    },
    contact: {
      header_contact: [
        "Let's make something amazing together",
        "Start by saying hi, and tell me whatever you want.",
      ],
      form_labels: {
        name: "Full Name",
        email: "Email Address",
        message: "Message",
        sendBtn: "Send the Message",
      },
      success_message: [
        "Thank you",
        "Your message has been sent successfully.",
      ],
      form_errors: {
        error_name_text:
          "It should contain between 2 and 30 alphabetical letters.",
        error_email_text: "It should match email format.",
        error_message_text: "It should contain between 2 and 200 letters.",
      },
    },
    not_found: {
      backHomeBtn: "Back to Homepage",
      name: ["404", "Sorry, This page is not found!"],
    },
    coming_soon: {
      backHomeBtn: "Back to Homepage",
      name: ["Coming Soon", "This page is currently under development!"],
    },
  },
  arabic: {
    home: {
      name: ["مَرحَباً، أَنـا", "عَـــبدُ الـلّـه"],
      goal: ["أُصمم مَواقع الويب بِشكل جَميل،", "وأُحِبُ ما أفعَله."],
      say_hi: "أَلــقي تَــحيَّة",
      img_hero: hero,
      img_desc: "صورة معبرة",
      meta: frontend,
    },
    about: {
      header_about: "مَنْ أَنا",
      about:
        "أَنا مُطوّر واجِهَات أَمَاميَّة مُبتدِئ أَسعَى لِلحُصولِ عَلى وَظيفَة جَديدَة فِي شَرِكـة مَرموقَة. أُركزُ عَلى كِتابة رَمز HTML وبِاستخدامِ القَواعِد المثاليَّة لِلـ CSS الحَديثَة بالإِضافَة إِلى الـ JavaScript، وَما زلت أَتعلم مَكتَبة ReactJS منذُ أَكثَر مِن سَنة بِمساعَدة دَورَات أَقامَتهَا شَركَـة ميتا الغَنيَّّة عَن التَعريف. أُقيمُ حَالياً فِي دِمشق، سوريا، لَكنني سَعيد بالعَمل عَن بُعد. فِي أوقَات الفَراغ، سَتَجِدُني بالخَارج فِي أَحضانِ الطَبيعَة حيثُ أَنني أُحِبُ المَشي والرَكض وقِيادَة الدَراجة الهوائِيَّة، سَأكون مُمتناً إذا ما إِطلَعت عَلى آخِر أَعمالي.",
      works: "انتَقِل إلى آخر أَعمــالي",
      header_quotation: "إقتِباسٌ أَعجَبَتنِي",
      quotation:
        "”نَحنُ غير مُلزَميـن بِتَصحيح تَفكير الآخرين، لَكننا مُلزَمون بِمراعَاة مُستَوى عَقلياتِهم.“",
      img_cup: cup,
      img_dark_cup: darkCup,
      img_desc: "صورة كأس شاي",
    },
    portfolio: {
      header_portfolio: [
        "آخر أعمَــالي",
        "الحَل الأَمثَل لِلتَجربة الرَّقمــيَّة",
      ],
      return_portfolio: "الرُجوع لمحفَضة الأَعمال",
      project_header: "خَلفيّة المَشروع",
      previews_header: "تَصـمـيمٌ مُـتَجاوب",
      details_btn: "تَفاصيل أَكثر",
      links: ["شَاهِد المَوقِع", "الرَمز البَرمجيّ"],
      slider: ["المَشروع السَابِق", "المَشروع التَالي"],
      projects: [
        {
          id: "1",
          project_name: "Huddle",
          project_preview: previewDesktopHuddle,
          project_summary:
            "يَدورُ مَشروع Huddle حَولَ بِناء صَفحَة أَقرب ما يمكِن للتَصميم حَيثُ تَجذِب المُهتَمين بِخوض نِقَاشات ذات معنى مَع الجَمهور وَبِناء مُجتَمع قوي وَمُخلص.",
          preview_desc: "مَشروع huddle",
          project_details: {
            project_desc: [
              "المَشروع عِبارَة عن بِناء صَفحَة أَقرب ما يُمكن للتَصميم المُعطى.",
              "استَخدمتُ لأُكملَ هذا المَشروع بنجَاح ReactJS المَعروفة كمَكتبة Javascript, لِذلك قمتُ بتَقسيم المَشروع لمُكونَات أَصغر, طبعاً هذا المَشروع لا يحتَوي على أَي وظائِف. بالإضافة إلى استخدامي CSS لتنسيق المَشروع بِشكل مِثالي.",
              "يجبُ أَن يَكون المُستخدِم قَادِراً على أَن يَرى الشَكل البَصري للمَوقِع بناءاً على حَجم شاشَة وأَن يَرى التَأثيرات عَلى العَناصِر المتفاعِلة في الصَفحة.",
            ],
            previews: {
              desktop: previewDesktopHuddle,
              mobile: previewMobileHuddle,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
        {
          id: "2",
          project_name: "Easybank",
          project_preview: previewDesktopEasybank,
          project_summary:
            "يَدورُ مَشروع Easybank حَولَ بِناء صَفحَة أَقرب ما يمكِن للتَصميم حَيثُ تَهتمُ بتَحويل حَياتك الماليَّة عَبر الإنتَرنت بالإضَافة للتَحكُم الكَامِل بِحِسابك.",
          preview_desc: "مَشروع easybank",
          project_details: {
            project_desc: [
              "المَشروع عِبارَة عن بِناء صَفحَة أَقرب ما يُمكن للتَصميم المُعطى.",
              "استَخدمتُ لأُكملَ هذا المَشروع بنجَاح ReactJS المَعروفة كمَكتبة Javascript, لِذلك قمتُ بتَقسيم المَشروع لمُكونَات أَصغر, طبعاً هذا المَشروع يحتَوي على وظيفة لِقائِمَة الهاتف. بالإضافة إلى استخدامي CSS لتنسيق المَشروع بِشكل مِثالي.",
              "يجبُ أَن يَكون المُستخدِم قَادِراً على أَن يَرى الشَكل البَصري للمَوقِع بناءاً على حَجم شاشَة وأَن يَرى التَأثيرات عَلى العَناصِر المتفاعِلة في الصَفحة.",
            ],
            previews: {
              desktop: previewDesktopEasybank,
              mobile: previewMobileEasybank,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
        {
          id: "3",
          project_name: "Blogr",
          project_preview: previewDesktopBlogr,
          project_summary:
            "يَدورُ مَشروع Blogr حَولَ بِناء صَفحَة أَقرب ما يمكِن للتَصميم حَيثُ تَهتمُ بِتَزويدك بطُرق سَهلَة لِإضَافة بَعض الوضائِف أَو تَغيير مَضهر مُدَونة.",
          preview_desc: "مَشروع blogr",
          project_details: {
            project_desc: [
              "المَشروع عِبارَة عن بِناء صَفحَة أَقرب ما يُمكن للتَصميم المُعطى.",
              "استَخدمتُ لأُكملَ هذا المَشروع بنجَاح ReactJS المَعروفة كمَكتبة Javascript, لِذلك قمتُ بتَقسيم المَشروع لمُكونَات أَصغر, طبعاً هذا المَشروع يحتَوي على وظيفة لِقائِمَة الهاتف. بالإضافة إلى استخدامي CSS لتنسيق المَشروع بِشكل مِثالي.",
              "يجبُ أَن يَكون المُستخدِم قَادِراً على أَن يَرى الشَكل البَصري للمَوقِع بناءاً على حَجم شاشَة وأَن يَرى التَأثيرات عَلى العَناصِر المتفاعِلة في الصَفحة.",
            ],
            previews: {
              desktop: previewDesktopBlogr,
              mobile: previewMobileBlogr,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
        {
          id: "4",
          project_name: "Insure",
          project_preview: previewDesktopInsure,
          project_summary:
            "يَدورُ مَشروع Insure حَولَ بِناء صَفحَة أَقرب ما يمكِن للتَصميم حَيثُ تَهتَمُ بتَأمين تَغطية ضَمَان الحَياة خاصتك بِشكل سَريع وَسَهل.",
          preview_desc: "مَشروع insure",
          project_details: {
            project_desc: [
              "المَشروع عِبارَة عن بِناء صَفحَة أَقرب ما يُمكن للتَصميم المُعطى.",
              "استَخدمتُ لأُكملَ هذا المَشروع بنجَاح ReactJS المَعروفة كمَكتبة Javascript, لِذلك قمتُ بتَقسيم المَشروع لمُكونَات أَصغر, طبعاً هذا المَشروع يحتَوي على وظيفة لِقائِمَة الهاتف. بالإضافة إلى استخدامي CSS لتنسيق المَشروع بِشكل مِثالي.",
              "يجبُ أَن يَكون المُستخدِم قَادِراً على أَن يَرى الشَكل البَصري للمَوقِع بناءاً على حَجم شاشَة وأَن يَرى التَأثيرات عَلى العَناصِر المتفاعِلة في الصَفحة.",
            ],
            previews: {
              desktop: previewDesktopInsure,
              mobile: previewMobileInsure,
            },
            technologies: ["ReactJS", "CSS"],
          },
        },
      ],
    },
    education: {
      header_education: [
        "الخَلفيَّة التَعليميَّة",
        "هُنا سَتَجِدُ كُل مَا يَخصُّ رِحلَة التَعلُّم خاصَّتي.",
      ],
      university: {
        header_university: "التَعليم الأكَاديميّ",
        labels: {
          skills: "المَهارات التي اكتَسَابتُها",
          grade: "التَقدِير",
        },
        degrees: [
          {
            id: 1,
            name: "مَاجِستير في عُلوم الحَاسُوب",
            logo: svuLogo,
            organization: "الجَامِعَة الافتِراضيَّة السوريَّة",
            date: ["بَدأتُ في", "١٥ شباط، ٢٠٢٤ "],
          },
          {
            id: 2,
            name: "هَندَسة الاتِصَالات والإلكِترونيَّات",
            logo: damascusLogo,
            organization: "جَامِعَة دِمَشق",
            skills: [
              "أَنظِمَة الاتِصَال",
              "تِقَنيات الاتِصَال اللاسِلكي",
              "الإلكِترونيَّات",
              "الاتِصَالات المرئِيَّة",
              "الخَوارزميّات",
              "البَرمجَة",
            ],
            date: ["تَخرَّجتُ في", "١٥ تشرين الأول، ٢٠٢٣"],
            grade: "٧٣.٧٥%",
          },
        ],
      },
      platform: {
        header_platform: "الدَّورات المُنجَزة",
        labels: {
          skills: "المَهارات التي اكتَسَابتُها",
          grade: "التَقدِير",
        },
        credentials: [
          {
            id: 1,
            name: "اختِصاص بَرمَجة الواجِهات الأَماميَّة",
            logo: metaLogo,
            organization: ["مِن ميتا", "عَلى مَنصة كورسيرا"],
            skills: [
              "HTML",
              "CSS",
              "JavaScript",
              "Github",
              "Git",
              "UI & UX design",
              "ReactJS",
            ],
            link: {
              text: "إظهَار بَيانَات الاعتِمَاد",
              url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NDM299PYGG9M",
            },
            date: ["تَمَّت في", "١٩ أيار، ٢٠٢٣"],
            grade: "٩٧.٦٦%",
          },
          {
            id: 2,
            name: "رُخصَة قِيادة الحَاسُوب الدوليَّة",
            logo: icdlLogo,
            organization: "مِن مؤسسة أيسيديل",
            skills: [
              "documents",
              "presentations",
              "spreadsheets",
              "using database",
              "online essentials",
              "Computer essentials",
              "IT security",
            ],
            link: {
              text: "إظهَار بَيانَات الاعتِمَاد",
              url: "https://drive.google.com/file/d/10dFNN7qgEciTe4WTDGw3-oroQArMTqbU/view?usp=drivesdk",
            },
            date: ["تَمَّت في ", "٥ تشرين الثاني، ٢٠٢٢"],
            grade: "٩٢.٤٣%",
          },
          {
            id: 3,
            name: "اختِصَاص تَصميم الويب للجَميع: أَساسيَّات تَطوير الويب والتَرميز",
            logo: michiganLogo,
            organization: ["مِن جامِعَة ميشيغان", "على مَنصة كورسيرا"],
            skills: [
              "HTML",
              "CSS",
              "JavaScript",
              "Web develpment",
              "Responsive web design",
            ],
            link: {
              text: "إظهَار بَيانَات الاعتِمَاد",
              url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Q922T6XY5BCH",
            },
            date: ["تَمَّت في", "٥ أيلول، ٢٠٢١"],
            grade: "٩٦.٨٨%",
          },
          {
            id: 4,
            name: "HTML, CSS وَ JavaScript لِمُطوّرين الويب",
            logo: johnsHopkinsLogo,
            organization: ["مِن جَامِعَة جونس هوبكينز", "عَلى مَنصَة كورسيرا"],
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            link: {
              text: "إظهَار بَيانَات الاعتِمَاد",
              url: "https://www.coursera.org/account/accomplishments/specialization/certificate/3JYRL4RJEFUJ",
            },
            date: ["تَمَّت في", "٢٤ تمّوز، ٢٠٢١"],
            grade: "٩٨.٩٥%",
          },
        ],
      },
    },
    contact: {
      header_contact: [
        "لِنُنشِئ شَيئاً مُمَيَّز مَعاً.",
        "ابدأ بِإلقَاء التَحيّة، وَأَخبِرني بِمَا يَجول في خَاطِرك.",
      ],
      form_labels: {
        name: "الاسم الكَامِل",
        email: "البَريد الإلكِترونيّ",
        message: "رِسَالتك",
        sendBtn: "ارسِل الرِسَالة",
      },
      success_message: ["شُكراً لَك", "لَقد تَم إِرسَال رِسالتك بِنَجاح."],
      form_errors: {
        error_name_text:
          "It should contain between 2 and 30 alphabetical letters.",
        error_email_text: "It should match email format.",
        error_message_text: "It should contain between 2 and 200 letters.",
      },
      form_errors: {
        error_name_text:
          "يَجِبُ أَنْ يحتَوي مَا بَين حَرفين إلى ثَلاثين حَرف أَبجدي.",
        error_email_text:
          "يَجبُ أَن يوافِق تَنسِيق البَريد الإلكِتروني المَعروف.",
        error_message_text:
          "يَجِبُ أَنْ يحتَوي مَا بين حرفَين إلى مِئتين حَرف.",
      },
    },
    not_found: {
      backHomeBtn: "الرُجوع لِلصَفحَة الرَئيسيَّة",
      name: ["404", "مَع الأَسف هَذهِ الصَفحة غَير مَوجُودَة."],
    },
    coming_soon: {
      backHomeBtn: "الرُجوع لِلصَفحَة الرَئيسيَّة",
      name: ["قَريباً", "حَاليّاً يَتمُ تَطّوير هذهِ الصَفحة."],
    },
  },
};
