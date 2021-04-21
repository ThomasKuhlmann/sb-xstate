// Imports for configuring Vuetify
import Vue from "vue";
import { inspect } from "@xstate/inspect";

inspect({
  url: "https://statecharts.io/inspect",
  iframe: false,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
