import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormField from "../common/FormField";
import logo from "../../xres/pepspot_fullmark.svg";

//#region form constants
const initial_values = { city: "", guests: "", date: "" };
const labels = { city: "Where", guests: "Guests", date: "date" };
const placeholders = {
  city: "Anywhere in NCR",
  guests: "All Your Friends",
  date: "dd/mm/yy"
};
const types = { city: "text", guests: "text", date: "date" };
//#endregion

export default function Heroform() {
  return (
    <div className="form_container">
      <img src={logo} alt="pepspot" height={100} />
      <h1>
        Book your <br /> house party venue.
      </h1>
      <Formik
        initialValues={initial_values}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          city: Yup.string().required("Required"),
          guests: Yup.number().required("Required"),
          date: Yup.date().required("Required")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <div className="form">
              <form onSubmit={handleSubmit}>
                {Object.keys(initial_values).map((id, index) => (
                  <FormField
                    key={id + index}
                    label={labels[id]}
                    id={id}
                    placeholder={placeholders[id]}
                    type={types[id]}
                    value={values[id]}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                ))}

                <button
                  className="find_venue_button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Find Venues
                </button>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
