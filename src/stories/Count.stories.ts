import type { Meta, StoryObj } from "@storybook/react";
import { Count } from "../Count";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Counter",
  component: Count,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    countValue: { control: "number", defaultValue: 1 },
    color: { control: "color" },
  },
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    countValue: 0,
    color: "red",
  },
};
