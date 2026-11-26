export type Language = 'en' | 'ur' | 'ar' | 'zh';
export type PageId = 'about' | 'contact';

export interface ContactLink {
  label: string;
  url: string;
}

export interface AboutContent {
  title: string;
  intro: string;
  organizationsLead: string;
  organizationsList: {
    name: string;
    url?: string;
  }[];
  reliefSection: {
    title: string;
    paragraphs: string[];
    policyTitle: string;
    policyIntro: string;
    policyPoints: string[];
    policyOutro: string[];
    closingStatement: string;
    linkLabel: string;
  };
  deguSection: {
    title: string;
    description: string;
    linkLabel: string;
  };
  closing: string;
}

export interface TranslationContent {
  dir: 'ltr' | 'rtl';
  brand: string;
  nav: {
    about: string;
    contact: string;
    relief: string;
    menu: string;
    closeMenu: string;
  };
  languageNames: {
    en: string;
    ur: string;
    ar: string;
    zh: string;
  };
  aboutContent: AboutContent;
  contactSections: {
    personal: string;
    reliefPages: string;
    reliefCommunity: string;
  };
}

export const RELIEF_URL = 'https://palestinereliefnetwork.cc.cd/';
export const DEGUOS_URL = 'https://deguos.cc.cd/';

export const CONTACT_LINKS = {
  personal: [
    { label: 'Bluesky', url: 'https://bsky.app/profile/awaizbinazam.bsky.social' },
    { label: 'YouTube', url: 'https://www.youtube.com/@awaizbinazam' },
    { label: 'Instagram', url: 'https://www.instagram.com/awaizbinazam/' },
    { label: 'Threads', url: 'https://www.threads.com/@awaizbinazam' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@awaizbinazam' },
    { label: 'Reddit', url: 'https://www.reddit.com/user/AwaizBinAzam/' },
    { label: 'Werfie', url: 'https://werfie.com/profile/awaizbinazam' },
  ],
  reliefPages: [
    { label: 'YouTube', url: 'https://www.youtube.com/@palestinereliefnetwork' },
    { label: 'Facebook', url: 'https://www.facebook.com/palestinereliefnetwork/' },
  ],
  reliefCommunity: [
    { label: 'Reddit', url: 'https://www.reddit.com/r/palestinereliefnetwor' },
    { label: 'Facebook Group', url: 'https://www.facebook.com/share/g/1C5HfQe8mo/' },
    { label: 'Matrix', url: 'https://matrix.to/#/#palestine-relief-network:matrix.org' },
    { label: 'Discord', url: 'https://discord.gg/SDUheb7kqQ' },
  ],
};

export const translations: Record<Language, TranslationContent> = {
  en: {
    dir: 'ltr',
    brand: 'Awaiz Bin Azam',
    nav: {
      about: 'About Me',
      contact: 'Contact Me',
      relief: 'Palestine Relief Network',
      menu: 'Menu',
      closeMenu: 'Close',
    },
    languageNames: {
      en: 'EN',
      ur: 'اردو',
      ar: 'العربية',
      zh: '中文',
    },
    aboutContent: {
      title: 'About Me',
      intro:
        'My name is Awaiz bin Azam, and I am from Kasur, Pakistan. I am an entrepreneur, visionary, and founder of initiatives focused on humanitarian support and technological innovation.',
      organizationsLead:
        'I am the founder of many organizations, and these are my top chosen organizations:',
      organizationsList: [
        { name: 'Palestine Relief Network', url: RELIEF_URL },
        { name: 'DeguOS', url: DEGUOS_URL },
      ],
      reliefSection: {
        title: 'Palestine Relief Network',
        paragraphs: [
          'Palestine Relief Network is a humanitarian initiative dedicated to supporting the people of Palestine through transparency, trust, and direct community support.',
          'Our mission is to connect generous donors with Palestinian individuals, families, and local communities who need assistance.',
        ],
        policyTitle: 'Our Donation Policy – Transparency First',
        policyIntro: 'We believe donations should reach the people they are intended to help.',
        policyPoints: [
          "We do not collect or receive donations into our organization's accounts.",
          'Donors contribute directly to Palestinian individuals, families, or local communities listed on our official website.',
          'Donors can choose the individuals or communities they wish to support.',
          'We provide a platform to connect donors with people in need without handling their donations.',
        ],
        policyOutro: [
          'We follow this approach because we believe in honesty, accountability, and transparency. We want donors to know exactly whom they are supporting and where their contributions are going.',
          'We do not ask you to trust our accounts. We encourage you to support Palestinian people directly.',
          'Our commitment is simple: to stand with Palestine, amplify the voices of its people, and help connect those who want to give with those who need support.',
        ],
        closingStatement: 'For Palestine. For Humanity. For Transparency.',
        linkLabel: 'Visit palestinereliefnetwork.cc.cd',
      },
      deguSection: {
        title: 'DeguOS',
        description:
          'An operating system designed for desktop environments, with a focus on enterprise, government, and educational use. Its vision is to provide a reliable, secure, and purpose-driven computing platform for organizations and institutions.',
        linkLabel: 'Visit deguos.cc.cd',
      },
      closing:
        'I am passionate about building meaningful projects, leveraging technology for positive change, and creating solutions that serve communities, organizations, and society.',
    },
    contactSections: {
      personal: 'Awaiz Bin Azam',
      reliefPages: 'Palestine Relief Network Pages',
      reliefCommunity: 'Palestine Relief Network Community',
    },
  },

  ur: {
    dir: 'rtl',
    brand: 'اویس بن اعظم',
    nav: {
      about: 'میرے بارے میں',
      contact: 'رابطہ کریں',
      relief: 'فلسطین ریلیف نیٹ ورک',
      menu: 'مینو',
      closeMenu: 'بند کریں',
    },
    languageNames: {
      en: 'EN',
      ur: 'اردو',
      ar: 'العربية',
      zh: '中文',
    },
    aboutContent: {
      title: 'میرے بارے میں',
      intro:
        'میرا نام اویس بن اعظم ہے اور میرا تعلق قصور، پاکستان سے ہے۔ میں ایک کاروباری شخصیت، وژنری اور انسانی ہمدردی و تکنیکی جدت پر مبنی متعدد اقدامات کا بانی ہوں۔',
      organizationsLead:
        'میں کئی تنظیموں کا بانی ہوں، تاہم یہ میری نمایاں منتخب تنظیمیں ہیں:',
      organizationsList: [
        { name: 'فلسطین ریلیف نیٹ ورک (Palestine Relief Network)', url: RELIEF_URL },
        { name: 'DeguOS', url: DEGUOS_URL },
      ],
      reliefSection: {
        title: 'فلسطین ریلیف نیٹ ورک',
        paragraphs: [
          'فلسطین ریلیف نیٹ ورک ایک انسانی ہمدردی کا اقدام ہے جو شفافیت، اعتماد اور براہِ راست کمیونٹی سپورٹ کے ذریعے فلسطین کے عوام کی مدد کے لیے وقف ہے۔',
          'ہمارا مشن مخیر عطیہ دہندگان کو ان فلسطینی افراد، خاندانوں اور مقامی برادریوں سے جوڑنا ہے جنہیں مدد کی ضرورت ہے۔',
        ],
        policyTitle: 'ہماری عطیہ پالیسی – شفافیت اول',
        policyIntro:
          'ہمارا ماننا ہے کہ عطیات براہِ راست ان لوگوں تک پہنچنے چاہئیں جن کی مدد کے لیے وہ دیے گئے ہیں۔',
        policyPoints: [
          'ہم اپنی تنظیم کے اکاؤنٹس میں کوئی عطیات جمع یا وصول نہیں کرتے۔',
          'عطیہ دہندگان ہماری سرکاری ویب سائٹ پر درج فلسطینی افراد، خاندانوں یا مقامی برادریوں کو براہِ راست تعاون فراہم کرتے ہیں۔',
          'عطیہ دہندگان خود ان افراد یا برادریوں کا انتخاب کر سکتے ہیں جن کی وہ مدد کرنا چاہتے ہیں۔',
          'ہم عطیات کو اپنے ہاتھ میں لیے بغیر عطیہ دہندگان کو ضرورت مند افراد سے جوڑنے کا پلیٹ فارم فراہم کرتے ہیں۔',
        ],
        policyOutro: [
          'ہم یہ طریقہ اس لیے اپناتے ہیں کیونکہ ہم دیانتداری، جوابدہی اور شفافیت پر یقین رکھتے ہیں۔ ہم چاہتے ہیں کہ عطیہ دہندگان کو بالکل معلوم ہو کہ وہ کس کی مدد کر رہے ہیں اور ان کا تعاون کہاں جا رہا ہے۔',
          'ہم آپ سے اپنے اکاؤنٹس پر بھروسہ کرنے کا نہیں کہتے۔ ہم آپ کی حوصلہ افزائی کرتے ہیں کہ فلسطینی عوام کی براہِ راست مدد کریں۔',
          'ہمارا عزم سادہ ہے: فلسطین کے ساتھ کھڑے ہونا، اس کے عوام کی آواز بلند کرنا اور دینے والوں کو ضرورت مندوں سے جوڑنے میں مدد کرنا۔',
        ],
        closingStatement: 'فلسطین کے لیے۔ انسانیت کے لیے۔ شفافیت کے لیے۔',
        linkLabel: 'palestinereliefnetwork.cc.cd دیکھیں',
      },
      deguSection: {
        title: 'DeguOS',
        description:
          'ڈیسک ٹاپ ماحول کے لیے تیار کردہ ایک آپریٹنگ سسٹم، جس کی توجہ انٹرپرائز، سرکاری اور تعلیمی استعمال پر ہے۔ اس کا وژن تنظیموں اور اداروں کے لیے ایک قابلِ اعتماد، محفوظ اور بامقصد کمپیوٹنگ پلیٹ فارم فراہم کرنا ہے۔',
        linkLabel: 'deguos.cc.cd دیکھیں',
      },
      closing:
        'مجھے بامعنی منصوبے تعمیر کرنے، مثبت تبدیلی کے لیے ٹیکنالوجی بروئے کار لانے اور ایسے حل تخلیق کرنے کا شوق ہے جو برادریوں، تنظیموں اور معاشرے کی خدمت کریں۔',
    },
    contactSections: {
      personal: 'اویس بن اعظم',
      reliefPages: 'فلسطین ریلیف نیٹ ورک صفحات',
      reliefCommunity: 'فلسطین ریلیف نیٹ ورک کمیونٹی',
    },
  },

  ar: {
    dir: 'rtl',
    brand: 'عويز بن أعظم',
    nav: {
      about: 'نبذة عني',
      contact: 'تواصل معي',
      relief: 'شبكة إغاثة فلسطين',
      menu: 'القائمة',
      closeMenu: 'إغلاق',
    },
    languageNames: {
      en: 'EN',
      ur: 'اردو',
      ar: 'العربية',
      zh: '中文',
    },
    aboutContent: {
      title: 'نبذة عني',
      intro:
        'اسمي عويز بن أعظم، وأنا من قصور، باكستان. أنا رائد أعمال، وصاحب رؤية، ومؤسس مبادرات تركّز على الدعم الإنساني والابتكار التكنولوجي.',
      organizationsLead:
        'لقد أسست العديد من المؤسسات، وهذه أبرز المؤسسات التي أركز عليها:',
      organizationsList: [
        { name: 'شبكة إغاثة فلسطين (Palestine Relief Network)', url: RELIEF_URL },
        { name: 'DeguOS', url: DEGUOS_URL },
      ],
      reliefSection: {
        title: 'شبكة إغاثة فلسطين',
        paragraphs: [
          'شبكة إغاثة فلسطين هي مبادرة إنسانية مكرّسة لدعم الشعب الفلسطيني من خلال الشفافية والثقة والدعم المجتمعي المباشر.',
          'مهمتنا هي ربط المتبرعين الكرام بالأفراد والعائلات والمجتمعات المحلية الفلسطينية التي تحتاج إلى المساعدة.',
        ],
        policyTitle: 'سياسة التبرعات لدينا – الشفافية أولاً',
        policyIntro: 'نؤمن بأن التبرعات يجب أن تصل مباشرة إلى الأشخاص المستحقين لها.',
        policyPoints: [
          'نحن لا نجمع ولا نستلم أي تبرعات في حسابات مؤسستنا.',
          'يساهم المتبرعون مباشرة لصالح الأفراد أو العائلات أو المجتمعات المحلية الفلسطينية المدرجة على موقعنا الرسمي.',
          'يمكن للمتبرعين اختيار الأفراد أو المجتمعات التي يرغبون في دعمها.',
          'نحن نوفر منصة لربط المتبرعين بالمحتاجين دون أن نتوسط في استلام أو تداول تبرعاتهم.',
        ],
        policyOutro: [
          'نتبع هذا النهج لأننا نؤمن بالأمانة والمساءلة والشفافية. نريد أن يعرف المتبرعون بدقة من يدعمون وأين تذهب مساهماتهم.',
          'نحن لا نطلب منكم الوثوق بحساباتنا، بل نشجعكم على دعم الشعب الفلسطيني بشكل مباشر.',
          'التزامنا بسيط: الوقوف مع فلسطين، وإيصال صوت شعبها، والمساعدة في ربط الراغبين في العطاء بمن هم في حاجة إلى الدعم.',
        ],
        closingStatement: 'من أجل فلسطين. من أجل الإنسانية. من أجل الشفافية.',
        linkLabel: 'زيارة palestinereliefnetwork.cc.cd',
      },
      deguSection: {
        title: 'DeguOS',
        description:
          'نظام تشغيل مصمم لبيئات سطح المكتب، مع التركيز على الاستخدام المؤسسي والحكومي والتعليمي. وتتمثل رؤيته في توفير منصة حوسبة موثوقة وآمنة وهادفة للمؤسسات والهيئات.',
        linkLabel: 'زيارة deguos.cc.cd',
      },
      closing:
        'أنا شغوف ببناء مشاريع هادفة، وتسخير التكنولوجيا لإحداث تغيير إيجابي، وابتكار حلول تخدم المجتمعات والمؤسسات والإنسانية.',
    },
    contactSections: {
      personal: 'عويز بن أعظم',
      reliefPages: 'صفحات شبكة إغاثة فلسطين',
      reliefCommunity: 'مجتمع شبكة إغاثة فلسطين',
    },
  },

  zh: {
    dir: 'ltr',
    brand: 'Awaiz Bin Azam',
    nav: {
      about: '关于我',
      contact: '联系我',
      relief: '巴勒斯坦救援网络',
      menu: '菜单',
      closeMenu: '关闭',
    },
    languageNames: {
      en: 'EN',
      ur: 'اردو',
      ar: 'العربية',
      zh: '中文',
    },
    aboutContent: {
      title: '关于我',
      intro:
        '我叫 Awaiz bin Azam，来自巴基斯坦卡苏尔（Kasur）。我是一名创业者、远见者，也是多个专注于人道主义援助与技术创新倡议的创始人。',
      organizationsLead:
        '我创办了许多组织，其中我最核心关注的代表组织是：',
      organizationsList: [
        { name: '巴勒斯坦救援网络（Palestine Relief Network）', url: RELIEF_URL },
        { name: 'DeguOS', url: DEGUOS_URL },
      ],
      reliefSection: {
        title: '巴勒斯坦救援网络（Palestine Relief Network）',
        paragraphs: [
          '巴勒斯坦救援网络是一项致力于通过透明度、信任与直接社区支持来援助巴勒斯坦人民的人道主义倡议。',
          '我们的使命是将慷慨的捐赠者与需要帮助的巴勒斯坦个人、家庭和当地社区直接连接起来。',
        ],
        policyTitle: '我们的捐赠政策 —— 透明优先',
        policyIntro: '我们相信捐款应当真正到达需要帮助的人手中。',
        policyPoints: [
          '我们不在组织账户中收集或接收任何捐款。',
          '捐赠者直接向官方网站上列出的巴勒斯坦个人、家庭或当地社区提供资助。',
          '捐赠者可以自主选择他们希望支持的个人或社区。',
          '我们仅提供一个连接捐赠者与受助者的平台，绝不经手任何捐款资金。',
        ],
        policyOutro: [
          '我们坚持这一方式，因为我们信奉诚实、问责与透明。我们希望捐赠者清楚地知道自己正在支持谁，以及每一份善款的去向。',
          '我们不要求您信任我们的账户，我们鼓励您直接支持巴勒斯坦人民。',
          '我们的承诺非常简单：与巴勒斯坦站在一起，放大巴勒斯坦人民的声音，帮助连接愿意给予的人与需要支持的人。',
        ],
        closingStatement: '为了巴勒斯坦。为了人道。为了透明。',
        linkLabel: '访问 palestinereliefnetwork.cc.cd',
      },
      deguSection: {
        title: 'DeguOS',
        description:
          '一款面向桌面环境设计的操作系统，专注于企业、政府与教育领域的实际应用。其愿景是为各类组织与机构提供可靠、安全且目标明确的计算平台。',
        linkLabel: '访问 deguos.cc.cd',
      },
      closing:
        '我热衷于打造有意义的项目，运用科技推动积极改变，并创造真正服务于社区、组织与社会的解决方案。',
    },
    contactSections: {
      personal: 'Awaiz Bin Azam',
      reliefPages: '巴勒斯坦救援网络主页',
      reliefCommunity: '巴勒斯坦救援网络社区',
    },
  },
};
