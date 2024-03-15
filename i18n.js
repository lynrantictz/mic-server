const i18next = require('i18next');

i18next.init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: require('./locales/en.json')
    },
    sw: {
      translation: require('./locales/sw.json')
    }
  }
});

module.exports = i18next;
