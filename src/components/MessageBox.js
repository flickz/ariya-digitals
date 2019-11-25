import React from "react";
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

const MessageBoxWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 13px;
  color: #fff;
  background: #414141;

  ${layout};
  ${space};
  ${color};
  ${typography};
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
`;

const MessageWrapper = styled.span`
  margin-left: 10px;
`;

const icons = {
  error: <img src="/static/img/error.png" />,
  success: ""
};

const MessageBox = ({ type, message, ...props }) => {
  return (
    <MessageBoxWrapper type={type} {...props}>
      {icons[type]}
      <MessageWrapper>{message}</MessageWrapper>
    </MessageBoxWrapper>
  );
};

MessageBox.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default MessageBox;
