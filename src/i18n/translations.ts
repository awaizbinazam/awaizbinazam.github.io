export type Language = 'en' | 'ur' | 'ar' | 'zh';
export type PageId = 'about' | 'services' | 'contact';

export interface TranslationContent {
  dir: 'ltr' | 'rtl';
  brand: string;
  nav: {
    about: string;
    services: string;
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
}

export const RELIEF_URL = 'https://palestinereliefnetwork.cc.cd/';

export const translations: Record<Language, TranslationContent> = {
  en: {
    dir: 'ltr',
    brand: 'Awaiz Bin Azam',
    nav: {
      about: 'About Me',
      services: 'My Services',
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
  },
  ur: {
    dir: 'rtl',
    brand: 'اویس بن اعظم',
    nav: {
      about: 'میرے بارے میں',
      services: 'میری خدمات',
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
  },
  ar: {
    dir: 'rtl',
    brand: 'عويز بن أعظم',
    nav: {
      about: 'نبذة عني',
      services: 'خدماتي',
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
  },
  zh: {
    dir: 'ltr',
    brand: 'Awaiz Bin Azam',
    nav: {
      about: '关于我',
      services: '我的服务',
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
  },
};
