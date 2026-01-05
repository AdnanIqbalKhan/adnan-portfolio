/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ur"],
  },
  ns: ["common", "home", "nav", "experience", "meta"],
  reloadOnPrerender: process.env.NODE_ENV === "development",
  defaultNS: "common",
};
