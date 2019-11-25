import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { layout } from "styled-system";
import { Box } from "@rebass/grid";

export const InputWrapper = styled(Box)`
  position: relative;
`;

export const StyledInput = styled.input`
  ${layout};
  font-size: 18px;
  padding: 10px 10px 10px 0;
  display: block;
  min-width: 300px;
  border: none;
  background-color: #000;
  color: #dadcde;
  border-bottom: 1px solid #94949a;

  &:focus {
    outline: none;
    background-color: #000;
    color: #dadcde;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    font-size: 13px;
    color: #8f8f8f;
    left: 0;
  }
  &:-webkit-autofill {
    background-color: #000 !important;
  }
`;

export const Label = styled.label`
  color: #94949a;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: 10px;
  transition: 0.2s ease all;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  margin-top: 10px;
  position: relative;
  top: 5px;
`;

const Input = ({
  type,
  label,
  required,
  onChange,
  value,
  name,
  error,
  onBlur,
  ...props
}) => (
  <InputWrapper {...props}>
    <StyledInput
      type={type}
      required={required}
      onChange={onChange}
      value={value}
      name={name}
      onBlur={onBlur}
      width={props.width}
    />
    <Label>{label}</Label>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </InputWrapper>
);

Input.defaultValues = {
  width: "300px"
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  error: PropTypes.string,
  onBlur: PropTypes.func
};

export default Input;
