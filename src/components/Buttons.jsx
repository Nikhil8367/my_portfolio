import React from "react";
import styled from "styled-components";

const Button = ({text,transport}) => {

const handleClick = () => {
  if (!transport) return;

  // External link
  if (transport.startsWith("http")) {
    window.open(transport, "_blank");
    return;
  }

  // Internal route
  if (transport.startsWith("/")) {
    window.location.href = transport;
    return;
  }

  // Section scroll
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
    padding: 16px 32px;
    border: 2px solid transparent;
    border-radius: 16px;
    color: #fff;
    z-index: 1;
    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
    position: relative;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset;

    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    overflow: hidden;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 16px;
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    z-index: -1;

    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  button:hover {
    color: #fff;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 16px 40px rgba(59, 130, 246, 0.6),
                0 0 60px rgba(59, 130, 246, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
  }

  button:hover::before {
    width: 100%;
  }

  button:hover::after {
    width: 300px;
    height: 300px;
    opacity: 0;
  }

  button:active {
    transform: translateY(-2px) scale(1.02);
  }
`;

export default Button;