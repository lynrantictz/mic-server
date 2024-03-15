const i18next = require('../i18n'); 

function i18nextMiddleware(req, res, next) {
  const lang = req.query.lang || 'en';
  i18next.changeLanguage(lang, (err, t) => {
    if (err) {
      console.error('Error changing language:', err);
      return res.status(500).send('Internal Server Error');
    }
    req.t = t;
    next();
  });
}

module.exports = i18nextMiddleware;
