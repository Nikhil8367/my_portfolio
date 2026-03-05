import React from "react";
import styled from "styled-components";

const Button = ({text,transport}) => {

const handleClick = () => {
  if (!transport) return;

  // External link (https://..., http://...)
  if (transport.startsWith("http")) {
    window.open(transport, "_blank");
    return;
  }

  // Internal route (/about, /projects)
  if (transport.startsWith("/")) {
    window.location.href = transport;
    return;
  }

  // Otherwise treat as section id (about, skills, contact)
  const section = document.getElementById(transport);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <StyledWrapper>
      <button onClick={handleClick}>
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    padding: 15px 25px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #e8e8e8;
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    cursor: pointer;

    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);

    /* ONLY CHANGED THIS */
    transition: all 1s;
    overflow: hidden;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #1a133aff;
    z-index: -1;

    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);

    /* ONLY CHANGED THIS */
    transition: all 1s;
  }

  button:hover {
    color: #e8e8e8;
  }

  button:hover::before {
    width: 100%;
  }
`;

export default Button;