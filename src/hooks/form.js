import { useState } from "react";

/**
 *  Custom react hook to manage form logic
 */
export const useForm = ({ initalValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initalValues || {});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmtting, setSubmitting] = useState(false);

  const handleOnChange = ({ target }) => {
    const name = target.name;
    setValues({
      ...values,
      [name]: target.value
    });
  };

  const handleOnBlur = ({ target }) => {
    const name = target.name;
    setTouched({ ...touched, [name]: true });

    const err = validate(values);
    setErrors({ ...errors, ...err });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const err = validate(values);
    setErrors({ ...err, ...errors });
    setSubmitting(true);
    onSubmit(values, { setSubmitting });
  };

  return {
    values,
    errors,
    isSubmtting,
    touched,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit
  };
};
