/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0fb374e66cb6893618fb850334ec08d6"
  },
  {
    "url": "accumulate/index.html",
    "revision": "1a81dafd59612366ad5fc9e3196bde87"
  },
  {
    "url": "algorithm/index.html",
    "revision": "dda921da0f107899b6b00054ac15d9ae"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.94da10b1.js",
    "revision": "e5bdcc0b8b1b0800f8c01de34123cf92"
  },
  {
    "url": "assets/js/11.56ab5a22.js",
    "revision": "2a61220f7a373dec8c68abcd8b7e5d1a"
  },
  {
    "url": "assets/js/12.816a1587.js",
    "revision": "b4f9ec3c6e9e3698a942d10171d67400"
  },
  {
    "url": "assets/js/13.5b71f8b5.js",
    "revision": "833ea22d6acec7023d3d4b84359b1e09"
  },
  {
    "url": "assets/js/14.5d62c483.js",
    "revision": "908fe21863a1b204232944229a433379"
  },
  {
    "url": "assets/js/15.71f4a6cb.js",
    "revision": "a8ebc485293b60c161d9cca2a12d891e"
  },
  {
    "url": "assets/js/2.ce1608e6.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.7f8423ba.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.09dc507d.js",
    "revision": "9d2296b507207e44da940310aec5a75a"
  },
  {
    "url": "assets/js/5.b11ebe49.js",
    "revision": "6705a958c4220b631c5025e4f7bcc211"
  },
  {
    "url": "assets/js/6.6ce78cbf.js",
    "revision": "3d24432efd9c58634260b6f2dbef886e"
  },
  {
    "url": "assets/js/7.3ef676a3.js",
    "revision": "abb0f9e5b7f8af4325f443102f33c65e"
  },
  {
    "url": "assets/js/8.6047b5e7.js",
    "revision": "0008044b82b8307227faaeb2d979c872"
  },
  {
    "url": "assets/js/9.01e23169.js",
    "revision": "3d56ed131a4f29ff6eeb7a580734b221"
  },
  {
    "url": "assets/js/app.38071572.js",
    "revision": "dcca17b4e1e59f0ae655d9e38b59c51f"
  },
  {
    "url": "guide.html",
    "revision": "0439c0d5d847bb1ffb8095aa2fa773a7"
  },
  {
    "url": "images/360.jpg",
    "revision": "4b58a4959ae171d76665b64f1db11cb0"
  },
  {
    "url": "images/exportSVG.png",
    "revision": "d04f33b260dbc712eff003b8cc4dfede"
  },
  {
    "url": "images/localTip.png",
    "revision": "24800444a54f564796e6461a4f1c4583"
  },
  {
    "url": "images/logo.png",
    "revision": "f59bd5b622dcce93246f1ac1f539f439"
  },
  {
    "url": "images/me.png",
    "revision": "1912a859d72c0b02a5443289f9729a67"
  },
  {
    "url": "images/memoryOut.png",
    "revision": "40c86a4d0b9dd70d66390512dcecdf57"
  },
  {
    "url": "images/rowsNumber.png",
    "revision": "847d9d22069d29393baaebbed8f19df8"
  },
  {
    "url": "images/sleep.png",
    "revision": "de2fc7c3acfe95c8f876fc8450841686"
  },
  {
    "url": "images/surge_run.gif",
    "revision": "f50b67c5fe8bb045f3c2507f50098456"
  },
  {
    "url": "images/tooltipDiv.png",
    "revision": "1e9eb98d552f0b5a20937ddea419bb83"
  },
  {
    "url": "images/type.png",
    "revision": "b1ae5ba56dd71f93ac5d56c176602877"
  },
  {
    "url": "images/type2.png",
    "revision": "d0ab9fe6d846b6ebea43fdff017bdd43"
  },
  {
    "url": "index.html",
    "revision": "3b6ce15629b07bb9dd7b81bc79fb2637"
  },
  {
    "url": "interview/CSS.html",
    "revision": "02e1154033f01a894792bad034dd0a66"
  },
  {
    "url": "interview/HTML.html",
    "revision": "7d3f830552aa709053a1a45bc643ae0f"
  },
  {
    "url": "interview/HTTP.html",
    "revision": "3761fd5986ac23a97d477e7de41da16d"
  },
  {
    "url": "interview/js基础.html",
    "revision": "69d4e80963bc0093d71d9f64a7426198"
  },
  {
    "url": "interview/vue.html",
    "revision": "6647a020375ffa7cb2c3facf7959eee3"
  },
  {
    "url": "interview/性能.html",
    "revision": "d188713cbc488d1af2c7c0f37df0126d"
  },
  {
    "url": "interview/浏览器.html",
    "revision": "3ecdd0315f6cf429e0c059388df98c86"
  },
  {
    "url": "others/index.html",
    "revision": "5773035765cbba9bced43636244cee57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
