![Quasar Framework logo](https://cdn.rawgit.com/quasarframework/quasar-art/863c14bd/dist/svg/quasar-logo-full-inline.svg)\
## Different Modes

This template currently loads a *SPA* application mode of Quasar.

If you would like to work with the PWA or SSR versions of Quasar, please make the following changes to the `start` script entries in the `package.json`.

#### PWA

```json

 "scripts": {
    "start": "quasar dev -m pwa",

```

#### SSR

```json

 "scripts": {
    "start": "quasar dev -m ssr",

```

Once you've changed the the `start` entry of `scripts` in the `package.json` file accordingly, you simply need to restart the server.
