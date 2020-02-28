import React, { Suspense } from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  const { image, header } = props;
  return (
    <section className="hero_container">
      <Suspense
        delay={`10ms`}
        fallback={
          <img
            src={image.src + "&q=10"}
            height={image.height}
            width="100%"
            alt={image.alt}
            className="hero_img"
            loading="lazy"
            decoding="async"
          />
        }
      >
        <img
          src={image.src + "&q=100"}
          height={image.height}
          width="100%"
          alt={image.alt}
          className="hero_img"
          loading="lazy"
          decoding="async"
        />
      </Suspense>
      <div className="hero_overlay">
        <h5 className="head_mini">{header.mini}</h5>
        <h1 className="head_bold">{header.bold}</h1>
        <h3 className="head_thin">{header.thin}</h3>
      </div>
    </section>
  );
}

Header.propTypes = {
  image: PropTypes.object,
  header: PropTypes.object
};

Header.defaultProps = {
  image: { src: "", alt: "loading Image", height: "600px" },
  header: { mini: "", bold: "", thin: "" }
};
