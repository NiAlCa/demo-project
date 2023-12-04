/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  i18n,
  images: {
    domains: ["rrcc.mypinata.cloud"],
  },
};

module.exports = nextConfig;
