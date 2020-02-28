import React, { useState } from "react";
import PropTypes from "prop-types";

const AreaFilters = props => {
  const { areas } = props;
  return (
    <div className="area_filter_container">
      {areas.map((area, index) => (
        <button key={area.name + index} className="area_button">
          {area.name}
          <span className="area_count">{area.count}</span>
        </button>
      ))}
    </div>
  );
};

const Filters = props => {
  const { filters } = props;

  const FilterDropDown = props => {
    const { filter } = props;
    const [activeOption, setActiveOption] = useState(filter.options[0]);
    const [showDropDown, setShowDropdown] = useState(false);
    return (
      <div onClick={() => setShowDropdown(!showDropDown)} className="filter">
        <p>{activeOption}</p>
        {showDropDown ? (
          <div className="filter_dropdown_visible">
            {filter.options.map((option, key) => (
              <p key={key} onClick={() => setActiveOption(option)}>
                {option}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="filter_container">
      {filters.map((filter, index) => (
        <>
          <p>
            <b>{filter.label}:</b>
          </p>
          <FilterDropDown key={index} filter={filter} />
        </>
      ))}
    </div>
  );
};

export default function Toolbar(props) {
  const { areas, filters } = props;
  return (
    <div className="toolbar_container">
      <AreaFilters areas={areas} />
      <Filters filters={filters} />
    </div>
  );
}

Toolbar.propTypes = {
  areas: PropTypes.array.isRequired
};

Toolbar.defaultProps = {
  areas: [
    { name: "Delhi", count: 10 },
    { name: "Gurugram", count: 15 },
    { name: "Noida", count: 19 }
  ],
  filters: [
    {
      label: "Venue Type",
      options: ["3bhk", "Appartment", "Villa", "Farmhouse"]
    },
    { label: "Sort By Price", options: ["lowest first", "highest first"] }
  ]
};
