/** @type {import('next').NextConfig} */

const { env } = require('process');

const nextConfig = {
  productionBrowserSourceMaps: true, 
  experimental: {
    missingSuspenseWithCSRBailout: false, 
  },
  env: {
    GRAPHQL_URL: env.GRAPHQL_URL,
    API_ENDPOINT: env.API_ENDPOINT,
    API_ENDPOINT_WEB_SOCKET: env.API_ENDPOINT_WEB_SOCKET,
    ANONYMOUS_TOKEN: env.ANONYMOUS_TOKEN,
    ID_VIDEO_YOUTUBE_LARGE: env.ID_VIDEO_YOUTUBE_LARGE,
    ID_VIDEO_YOUTUBE_SMALL: env.ID_VIDEO_YOUTUBE_SMALL,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.goldengatex.com' },
      { protocol: 'https', hostname: 'static-evo.goldengatex.com' },
      { protocol: 'https', hostname: 'dream.goldengatex.com' },
      { protocol: 'https', hostname: 'static-pragmatic.goldengatex.com' },
      { protocol: 'https', hostname: 'static-creative.goldengatex.com' },
      { protocol: 'https', hostname: 'static.uniongame.org' },
      { protocol: 'https', hostname: 'www.pgsoft.com' },
      { protocol: 'https', hostname: 'public.pg-demo.com' },
      { protocol: 'https', hostname: 'static.pg-demo.com' },
      { protocol: 'https', hostname: 'static.pgsoft.com' },
      { protocol: 'https', hostname: 'app-b.insvr.com' },
      { protocol: 'https', hostname: 'app-c.insvr.com' },
      { protocol: 'https', hostname: 'app-d.insvr.com' },
      { protocol: 'https', hostname: 'app-e.insvr.com' },
      { protocol: 'https', hostname: 'bx.imgix.net' },
      { protocol: 'https', hostname: 'bc.imgix.net' },
      { protocol: 'https', hostname: 'bd.imgix.net' },
      { protocol: 'https', hostname: 'be.imgix.net' },
      { protocol: 'https', hostname: 'bf.imgix.net' },
      { protocol: 'https', hostname: 'bg.imgix.net' },
      { protocol: 'https', hostname: 'bh.imgix.net' },
      { protocol: 'https', hostname: 'static-booongo.goldengatex.com' },
      { protocol: 'https', hostname: 'resource.fdsigaming.com' },
      { protocol: 'https', hostname: 'dream.thefanz.net' },
      { protocol: 'https', hostname: 'static.thefanz.net' },
      { protocol: 'https', hostname: 'static2.pgf-asu2nd.com' },
    { protocol: 'https', hostname: 'cdn-cms.razed.com' },
    { protocol: 'https', hostname: 'play.thefanz.net' },
    ],
  },
};

module.exports = nextConfig;
