// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/reu-aict-2026/";
    },
  },{id: "nav-news",
          title: "news",
          description: "Program announcements and updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reu-aict-2026/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Faculty-mentored research projects for Summer 2026, grouped by theme.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reu-aict-2026/projects/";
          },
        },{id: "nav-schedule",
          title: "schedule",
          description: "Ten-week roadmap for Summer 2026 (May 19 – July 24).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reu-aict-2026/schedule/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Directors, faculty mentors, and graduate assistants for the REU AICT 2026 site.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reu-aict-2026/people/";
          },
        },{id: "nav-cohort",
          title: "cohort",
          description: "The 2026 REU AICT undergraduate research cohort.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reu-aict-2026/cohort/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-summer-2026-cohort-announced-the-reu-aict-site-has-been-funded-by-nsf-award-2447704-for-2025-2027-applications-for-the-summer-2026-cohort-open-december-1-2025",
          title: 'Summer 2026 cohort announced — the REU AICT site has been funded by...',
          description: "",
          section: "News",},{id: "news-applications-open-for-summer-2026-browse-research-projects-and-check-the-10-week-schedule-deadline-february-15-2026",
          title: 'Applications open for Summer 2026. Browse research projects and check the 10-week schedule....',
          description: "",
          section: "News",},{id: "news-summer-2026-cohort-arrives-welcome-to-our-10-undergraduate-researchers-orientation-kicks-off-may-20-with-first-cohort-presentations-on-june-3",
          title: 'Summer 2026 cohort arrives! Welcome to our 10 undergraduate researchers. Orientation kicks off...',
          description: "",
          section: "News",},{id: "projects-continuous-asl-recognition-in-the-wild",
          title: 'Continuous ASL recognition in the wild',
          description: "Vision models that recognize signed sentences from everyday video, not just isolated signs from clean studio footage.",
          section: "Projects",handler: () => {
              window.location.href = "/reu-aict-2026/projects/1_asl_recognition/";
            },},{id: "projects-avatar-interpretation-what-makes-a-signing-avatar-legible",
          title: 'Avatar interpretation — what makes a signing avatar legible?',
          description: "User studies comparing human interpreters, motion-captured signers, and AI-generated signing avatars for clarity and acceptability.",
          section: "Projects",handler: () => {
              window.location.href = "/reu-aict-2026/projects/2_avatar_interpretation/";
            },},{id: "projects-captioning-in-noisy-classrooms",
          title: 'Captioning in noisy classrooms',
          description: "How real-time captioning systems perform with overlapping voices, accents, and technical jargon — and how to surface uncertainty to the reader.",
          section: "Projects",handler: () => {
              window.location.href = "/reu-aict-2026/projects/3_captions_classroom/";
            },},{id: "projects-sound-awareness-for-deaf-users",
          title: 'Sound awareness for deaf users',
          description: "On-device ML for recognizing useful environmental sounds, and interfaces that surface them without overwhelming the user.",
          section: "Projects",handler: () => {
              window.location.href = "/reu-aict-2026/projects/4_sound_awareness/";
            },},{id: "projects-aac-for-deafplus-users",
          title: 'AAC for DeafPlus users',
          description: "Co-designing augmentative and alternative communication tools with deaf users who use AAC, with bilingual ASL/English vocabularies.",
          section: "Projects",handler: () => {
              window.location.href = "/reu-aict-2026/projects/5_aac_deafplus/";
            },},{id: "projects-auditing-speech-recognition-for-deaf-voices",
          title: 'Auditing speech recognition for Deaf voices',
          description: "A careful comparison of automatic speech recognition performance for hearing vs. deaf speakers, documenting failure patterns.",
          section: "Projects",handler: () => {
              window.location.href = "/reu-aict-2026/projects/6_asr_audit/";
            },},{id: "projects-llms-and-asl-gloss",
          title: 'LLMs and ASL gloss',
          description: "Where do today&#39;s large language models fail when generating ASL &quot;captions&quot; — and what risks does that create when LLMs sit between deaf and hearing people?",
          section: "Projects",handler: () => {
              window.location.href = "/reu-aict-2026/projects/7_llms_asl_gloss/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/reu-aict-2026/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/reu-aict-2026/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
