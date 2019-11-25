import PropTypes from "prop-types";
import styled from "styled-components";
import {
  layout,
  space,
  color,
  typography,
  fontSize,
  fontWeight
} from "styled-system";

const Link = styled.a`
  text-decoration: none;
  ${layout};
  ${space};
  ${color};
  ${typography};
  ${fontSize}
  ${fontWeight}

  &:hover {
  }
`;

Link.defaultProps = {
  color: "#c1a266"
};

Link.propTypes = {
  href: PropTypes.string
};

export default Link;
