import PropTypes from "prop-types";
import styled from "styled-components";
import {
  layout,
  space,
  color,
  typography,
  fontSize,
  fontWeight,
  letterSpacing
} from "styled-system";

const Button = styled.button`
  outline: none;
  color: #fff;
  background: #c1a266;
  text-align: center;
  border: none;
  cursor: pointer;

  ${layout};
  ${space};
  ${color};
  ${typography};
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`;

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
