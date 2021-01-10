import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import ItemInput from "../components/ItemInput";

class CreateNewOffer extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/">
          <Button>Back</Button>
        </NavLink>
        <Tabs>
          <TabList>
            <Tab>Create New Offer</Tab>
          </TabList>
          <TabPanel>
            <ItemInput />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default CreateNewOffer;