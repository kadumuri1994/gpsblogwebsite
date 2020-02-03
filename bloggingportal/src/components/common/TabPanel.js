import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import {CardComponent} from './CommonComponents';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function TabPanelComponent(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Saved" {...a11yProps(0)} />
          <Tab label="Pending Review" {...a11yProps(1)} />
          <Tab label="Approved" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CardComponent blogs={props.savedBlogs} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardComponent blogs={props.pendingReviewBlogs} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CardComponent blogs={props.approvedBlogs} />
      </TabPanel>
    </Container>
  );
}

export default TabPanelComponent;
