const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const path = require("path");

// vue.config.js

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),

          routes: ["/", "/about", "/test"],


          // 这个配置很重要
          renderer: new Renderer({
            inject: {
              foo: "bar",
            },
            headless: false,

            renderAfterDocumentEvent: "render-event",
          }),
        }),
      ],
    };
  },
};
