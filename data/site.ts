export const site = {
  url: 'https://bettergrowthsystems.com',
  meta: {
    title: 'Benjamin Grec | Systems Consultant & Automation Strategist',
    description:
      'Systems consultant helping B2B companies replace bloated SaaS stacks with self-hosted CRM platforms, automated outbound pipelines, and AI-driven workflows that drive measurable ROI.',
  },
  hero: {
    name: 'Benjamin Grec',
    role: 'Systems Consultant & Automation Strategist',
    tagline:
      'Helping B2B companies replace bloated SaaS stacks with self-hosted CRM platforms, automated outbound pipelines, and AI-driven workflows — measured by adoption, retention, and documented ROI.',
    contact: 'Available for consulting engagements and advisory roles with growth-focused B2B teams.',
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Benjamin Grec',
  },
  about: {
    paragraphs: [
      'Systems consultant and automation strategist with a foundation in both technical implementation and direct sales. I founded Better Growth Systems to help SMB and mid-market B2B companies replace bloated SaaS stacks with self-hosted CRM platforms, automated outbound pipelines, and AI-driven workflows.',
      'I built real sales instincts across SDR operations, field prospecting, and high-pressure client-facing environments before channeling that experience into building the systems that make outbound scalable. I build solutions clients actually use — not shelfware.',
    ],
  },
  services: [
    {
      icon: 'ph:database',
      title: 'CRM Architecture & Migration',
      description:
        'Replace costly legacy platforms with fully customized SuiteCRM deployments — discovery, configuration, and live training that drives 100% day-one adoption with an 85% cost reduction versus prior platforms.',
    },
    {
      icon: 'ph:funnel-simple',
      title: 'Outbound Infrastructure Engineering',
      description:
        'Build automated data-scraping and ingestion pipelines that populate CRMs with thousands of SIC-coded, pre-segmented B2B leads — eliminating hundreds of hours of manual research per engagement.',
    },
    {
      icon: 'ph:robot',
      title: 'AI & Open-Source Automation',
      description:
        'Migrate from per-seat SaaS to self-hosted open-source stacks (n8n, Mautic) on Debian Linux and Docker — delivering full data ownership, zero licensing overhead, and 10+ hours of admin saved per week per client.',
    },
    {
      icon: 'ph:paper-plane-tilt',
      title: 'Email Deliverability & Infrastructure',
      description:
        'Design and deploy self-hosted email infrastructure for high-volume outbound campaigns — engineered template engines and hardened SPF/DKIM/DMARC configurations for consistent inbox placement at scale.',
    },
    {
      icon: 'ph:code',
      title: 'Technical SEO & Web Engineering',
      description:
        'Migrate legacy B2B websites from WordPress to Astro — sub-second load times, perfect Core Web Vitals, and technical SEO that eliminates reliance on paid acquisition.',
    },
    {
      icon: 'ph:phone-call',
      title: 'Sales Operations & SDR Enablement',
      description:
        'Overhaul outbound infrastructure with structured CRM migration, regional lead databases, and territory segmentation — enabling sales teams to scale outreach and double qualified daily appointments.',
    },
  ],
  caseStudies: [
    {
      title: 'Cross-Platform VoIP Automation System',
      period: 'Jan – Feb 2024',
      summary:
        'Designed and deployed a VoIP solution across iOS, Android, Windows, macOS, and Linux using VoIP.ms SIP trunks, enabling seamless cross-platform deployment and zero manual data entry for outbound sales teams.',
      solution:
        'Orchestrated APIs, webhooks, and real-time data pipelines to automate lead management and call recording — integrating directly with existing CRM infrastructure for unified pipeline visibility.',
      impact:
        'Eliminated manual data entry across outbound calling workflows, maximizing team outreach velocity and ensuring every call, lead, and outcome was captured automatically in the CRM.',
      image: '',
      imageAlt: '',
      techCategories: [
        {
          category: 'Infrastructure',
          items: ['VoIP.ms', 'SIP Trunking', 'iOS', 'Android', 'Windows', 'macOS', 'Linux'],
        },
        {
          category: 'Automation',
          items: ['API Pipelines', 'Webhooks', 'CRM Integration', 'Call Recording'],
        },
      ],
    },
    {
      title: 'GPU Passthrough — Windows VM on Fedora Linux',
      period: 'Apr – May 2024',
      summary:
        'Implemented NVIDIA GPU passthrough to a Windows 10 KVM/QEMU virtual machine using IOMMU, VFIO, and custom libvirt XML configurations for near-native GPU performance on a Fedora Linux host.',
      solution:
        'Configured kernel parameters, IOMMU groups, VFIO driver binding, and advanced resource allocation to achieve near-native GPU performance inside a VM while retaining Linux as the host OS.',
      impact:
        'Achieved near-native GPU performance in the VM and translated the full configuration into a public step-by-step technical guide enabling self-service community onboarding and troubleshooting.',
      image: '',
      imageAlt: '',
      techCategories: [
        {
          category: 'Virtualization',
          items: ['KVM/QEMU', 'IOMMU', 'VFIO', 'libvirt', 'XML Configuration'],
        },
        {
          category: 'Platform',
          items: ['Fedora Linux', 'Windows 10', 'NVIDIA GPU', 'Kernel Modules'],
        },
      ],
    },
  ],
  techStack: [
    {
      category: 'Customer Success & RevOps',
      items: [
        'SuiteCRM', 'Close CRM', 'Salesforce', 'HubSpot', 'Zoho CRM',
        'Workflow Architecture', 'Live Training & Enablement', 'Performance Reporting',
        'Pipeline Management', 'Cold Calling & Outbound Prospecting',
        'Sales Genie', 'ZoomInfo', 'Community Management', 'Content Strategy',
      ],
    },
    {
      category: 'Automation & Data Engineering',
      items: [
        'n8n', 'Mautic', 'B2B Web Scraping', 'Database Lead Ingestion',
        'Webhooks', 'VoIP.ms', 'SIP Trunking', 'API Pipelines', 'SPF/DKIM/DMARC',
      ],
    },
    {
      category: 'Core Infrastructure',
      items: [
        'Debian Linux', 'Fedora Linux', 'Docker', 'Nginx', 'Apache',
        'Cloudflare', 'Backblaze B2', 'rclone',
        'KVM/QEMU', 'IOMMU', 'VFIO', 'SSH', 'VPS Management',
      ],
    },
    {
      category: 'Development & AI',
      items: [
        'JavaScript', 'Node.js', 'Python', 'Go', 'PHP', 'SQL', 'HTML/CSS',
        'Git', 'Astro', 'WordPress', 'Playwright',
        'Claude Code', 'ChatGPT Plus', 'GCP APIs (Maps, Search)',
      ],
    },
    {
      category: 'Design & Creative',
      items: ['Blender (3D Animation & Motion Graphics)'],
    },
  ],
  timeline: [
    {
      period: '2022 – 2026',
      title: 'Security Guard',
      company: 'Partytown.ca / CMG Entertainment',
      location: 'Kitchener, ON · Part-time',
    },
    {
      period: 'Jan – Apr 2023',
      title: 'Security Guard',
      company: 'Allied Universal',
      location: 'Waterloo, ON · Full-time',
    },
    {
      period: 'Sep – Nov 2022',
      title: 'Production Line Worker',
      company: 'Latem Industries',
      location: 'Cambridge, ON · Full-time',
    },
    {
      period: '2021 – 2022',
      title: 'Tech Sales Associate',
      company: 'Staples Canada',
      location: 'Waterloo, ON · Part-time',
    },
    {
      period: 'Sep 2021',
      title: 'Central Poll Supervisor',
      company: 'Elections Canada',
      location: 'Kitchener, ON · Seasonal',
    },
    {
      period: '2017 – 2020',
      title: 'Founder & Online English Instructor',
      company: 'BG English',
      location: 'Ontario · Remote · Self-employed',
    },
  ],
  projectArchivePage: {
    title: 'All Projects',
    description: 'Project archive: dates, roles, and technologies across consulting engagements and personal projects.',
    intro: 'A comprehensive archive of consulting engagements, infrastructure builds, and technical projects.',
  },
  projectArchive: [
    { date: '2024', project: 'Cross-Platform VoIP Automation System', role: 'Architect', techStack: 'VoIP.ms, SIP, APIs, Webhooks' },
    { date: '2024', project: 'GPU Passthrough (NVIDIA on Fedora)', role: 'Infrastructure', techStack: 'KVM/QEMU, IOMMU, VFIO, Fedora Linux' },
    { date: '2024', project: 'SuiteCRM Deployment & Migration', role: 'Consultant', techStack: 'SuiteCRM, Debian Linux, Docker, Nginx' },
    { date: '2024', project: 'Outbound B2B Lead Ingestion Pipeline', role: 'Automation', techStack: 'Python, Web Scraping, CRM APIs' },
    { date: '2024', project: 'Self-Hosted Email Infrastructure', role: 'Infrastructure', techStack: 'Postfix, SPF/DKIM/DMARC, Nginx' },
    { date: '2024', project: 'n8n & Mautic Automation Workflows', role: 'Automation', techStack: 'n8n, Mautic, Docker, APIs' },
    { date: '2024', project: 'WordPress to Astro Migration', role: 'Web Engineering', techStack: 'Astro, TypeScript, Tailwind CSS' },
    { date: '2023', project: 'Close CRM & Regional Sales Database', role: 'Sales Ops', techStack: 'Close CRM, Sales Genie, ZoomInfo' },
    { date: '2020', project: 'BG English — Online Instruction Business', role: 'Founder', techStack: 'Zoom, Google Workspace' },
  ],
  contact: {
    email: 'benjori@posteo.net',
    github: 'https://github.com/bengrec',
    linkedin: 'https://www.linkedin.com/in/bengrec',
    website: 'https://bettergrowthsystems.com',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type CaseStudy = (typeof site.caseStudies)[number];
