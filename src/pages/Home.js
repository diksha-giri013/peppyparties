//#region Main Libs
import React from "react";
import PropTypes from "prop-types";
//#endregion

//#region project components

//#endregion

//#region styles and image resources
import "../xstyles/home.css";
import Heroform from "../components/home/Heroform";
import PropertyViewer from "../components/property/PropertyViewer";
import Header from "../components/common/Header";
//https://unsplash.com/collections/9608840/cms
//#endregion

//#region additional components - to be refactored
//#endregion

const Home = props => {
  //#region hooks and variables
  const imagesrc =
    "https://images.unsplash.com/flagged/photo-1574319523332-4cadaa531506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600";
  const image = {
    src: imagesrc,
    alt: "A couple who met for the first time at a house party",
    height: "800px"
  };
  const header = {
    mini: "PEPSPOT",
    thin: "good and great memories",
    bold: "A bridge between"
  };
  //#endregion
  return (
    <div className="home_container">
      <Header image={image} header={header} />
      <Heroform />
      <PropertyViewer />
    </div>
  );
};

Home.propTypes = {};

export default Home;
