// Imports for configuring Vuetify
import Vue from "vue";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  xstate: true,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
