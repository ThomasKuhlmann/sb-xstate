<template>
  <button @click="service.send">{{ state.value }}</button>
</template>

<script>
import { interpret } from "xstate";
import machine from "./BaseButton.machine";

export default {
  name: "BaseButton",
  props: {
    color: { type: String, default: "primary" },
    loading: { type: Boolean, default: false },
  },
  data() {
    return {
      service: interpret(machine, { devTools: true })
        .onTransition((state) => (this.state = state))
        .start(),
      state: machine.initialState,
    };
  },
};
</script>

<style></style>
