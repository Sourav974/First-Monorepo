import React from "react";
import { storiesOf } from "@storybook/react";

import Welcome from "../../components/Welcome";
storiesOf("Welcome", module).add("Welcome component", () => (
  <Welcome name="Sourav"></Welcome>
));
