import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "./Table";

export default {
  title: "Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Table Title",
  items: [
    {
      label: 1,
      subLabel: "+10",
      picture: "https://static-cse.canva.com/blob/978199/1600w-8iSVF3m00jk.jpg",
      mainDesc: "Main DESC",
      subDesc: "Sub DESC",
    },
    {
      label: 2,
      subLabel: "+10",
      picture:
        "https://media.npr.org/assets/img/2013/04/22/dark-side_sq-1da3a0a7b934f431c175c91396a1606b3adf5c83-s1100-c50.jpg",
      mainDesc: "Main DESC",
      subDesc: "Sub DESC",
    },
    {
      label: 3,
      subLabel: "+10",
      picture:
        "https://www.skillshare.com/blog/wp-content/uploads/2016/06/ScreenShot2020-10-20at11.36.46AM.png",
      mainDesc: "Main DESC",
      subDesc: "Sub DESC",
    },
    {
      label: 4,
      subLabel: "+10",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4mxbhjAhylUPED9JvE4mM53NkkfADZ9JNg&usqp=CAU",
      mainDesc: "Main DESC",
      subDesc: "Sub DESC",
    },
  ],
};
