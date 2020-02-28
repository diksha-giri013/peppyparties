import React from "react";
import PropertyCard from "./PropertyCard";
import PropertyDetails from "./PropertyDetails";
import Toolbar from "./Toolbar";
import "../../xstyles/property.css";

export default function PropertyViewer() {
  return (
    <div style={{ color: "#424242", padding: "4rem", margin: "2rem 0 0" }}>
      <h1 className="head_thin">Discover</h1>
      <h2 className="head_bold">the best venues</h2>
      <p>
        Party to your heart's content in unique places, flavored with themes of
        your choice.
      </p>
      <Toolbar />
      <PropertyCard />
      <PropertyDetails />
    </div>
  );
}
