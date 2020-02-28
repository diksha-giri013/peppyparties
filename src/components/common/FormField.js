import React from "react";
import PropTypes from "prop-types";

export default function FormField(props) {
  const {
    label,
    id,
    placeholder,
    type,
    value,
    handleChange,
    handleBlur,
    errors,
    touched
  } = props;

  return (
    <div>
      <label style={{ display: "block" }}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={
          errors[id] && touched[id]
            ? { border: "0.1rem solid peachpuff" }
            : null
        }
      />
      {errors[id] && touched[id] && (
        <div style={{ color: "peachpuff" }}>{errors[id]}</div>
      )}
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired || PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired
};

FormField.defaultProps = {
  label: "Form Label",
  id: "id",
  placeholder: "Placeholder",
  type: "text",
  value: "",
  handleChange: () => {
    return null;
  },
  handleBlur: () => {
    return null;
  },
  errors: {},
  touched: {}
};
