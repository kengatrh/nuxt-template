// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true,
  },
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ["Button"],
    },
  },
  css: [
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
});
