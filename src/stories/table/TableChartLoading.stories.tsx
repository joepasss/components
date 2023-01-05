import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableChartLoading from "Table/TableChartLoading";

export default {
  title: "Table/TableChartLoading",
  component: TableChartLoading,
} as ComponentMeta<typeof TableChartLoading>;

const Template: ComponentStory<typeof TableChartLoading> = () => (
  <TableChartLoading />
);

export const Loading = Template.bind({});
