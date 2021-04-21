import { Machine } from "xstate";

const config = {
  id: "BaseButton",
  initial: "enabled",
  states: {
    enabled: {
      on: { click: "disabled" },
    },
    disabled: {
      on: { click: "enabled" },
    },
  },
};
const options = {};

export default Machine(config, options);
