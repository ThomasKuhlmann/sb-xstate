import BaseButton from "./BaseButton.vue";
import machine from "./BaseButton.machine";

export default {
  title: "Atoms/BaseButton",
  component: BaseButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: "<BaseButton v-bind=$props>BaseButton</BaseButton>",
});

export const Default = Template.bind({});
Default.parameters = {
  xstate: {
    [machine.id]: {
      events: ["click", "click"],
      delay: 2.5e3,
      shouldRepeatEvents: true,
    },
  },
};
