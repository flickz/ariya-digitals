import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { InputWrapper, StyledInput, Label, ErrorMessage } from "./Input";

const HideOrShowPasswordButton = styled.button`
  outline: none;
  border: none;
  background-color: #000;
  color: #c1a266;
  position: absolute;
  align-items: baseline;
  left: calc(${props => props.inputWidth} - 44px);
  top: -1px;
  font-size: 14px;
  padding: 10px 10px 10px 5px;
  cursor: pointer;
  letter-spacing: 1.5px;
`;

const PasswordInput = ({
  label,
  required,
  onChange,
  value,
  name,
  error,
  onBlur,
  ...props
}) => {
  const [type, setType] = useState("password");

  return (
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
      {value && (
        <HideOrShowPasswordButton
          inputWidth={props.width}
          onClick={e => {
            e.preventDefault();
            type === "password" ? setType("text") : setType("password");
          }}
        >
          {type === "password" ? "SHOW" : "HIDE"}
        </HideOrShowPasswordButton>
      )}
      <Label>{label}</Label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.string
};

export default PasswordInput;
