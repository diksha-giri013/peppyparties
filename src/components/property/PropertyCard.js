import React, { Suspense } from "react";
import PropTypes from "prop-types";

const SuspenseImage = props => {
  const { src, height, alt } = props;
  return (
    <Suspense
      delay={`10ms`}
      fallback={
        <img
          src={src}
          height={height}
          width="100%"
          alt={alt}
          className="property_image"
          loading="lazy"
          decoding="async"
        />
      }
    >
      <img
        src={src}
        height={height}
        width="100%"
        alt={alt}
        className="property_image"
        loading="lazy"
        decoding="async"
      />
    </Suspense>
  );
};

const PropertyCard = props => {
  const { image, content } = props;
  return (
    <div className="property_card_container">
      <div className="property_card">
        <SuspenseImage src={image.src} height={image.height} alt={image.alt} />
        <div className="property_overlay">
          <p>{content.title}</p> <p>{content.location}</p>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = { image: PropTypes.object, content: PropTypes.object };

PropertyCard.defaultProps = {
  image: {
    src: "https://www.thepepspot.com/wp-content/uploads/2019/11/2-2.png",
    alt: "Property",
    height: "15rem"
  },
  content: { title: "PepHeights", location: "Sector 16" }
};

export default PropertyCard;
