import 'i18next';
import viLang from '~/lib/i18n/locales/vi';
import krLang from '~/lib/i18n/locales/kr';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'vi';
    // custom resources type
    resources: typeof viLang;
    nsSeparator: '.';
    // other
  }
}
