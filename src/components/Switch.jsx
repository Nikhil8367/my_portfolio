import React from "react";
import styled from "styled-components";

const Switch = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <StyledWrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
        />

        <span className="slider">
          <div className="star star_1" />
          <div className="star star_2" />
          <div className="star star_3" />

          <svg viewBox="0 0 16 16" className="cloud_1 cloud">
            <path
              transform="matrix(.77976 0 0 .78395-299.99-418.63)"
              fill="#fff"
              d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
            />
          </svg>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 4em;
    height: 2.2em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    background-color: #2a2a2a;
    border-radius: 30px;
    transition: 0.4s;
    overflow: hidden;
  }

  .slider:before {
    content: "";
    position: absolute;
    height: 1.2em;
    width: 1.2em;
    left: 0.5em;
    bottom: 0.5em;
    border-radius: 50%;
    transition: 0.4s;
    box-shadow: inset 8px -4px 0px 0px white;
  }

  .switch input:checked + .slider {
    background-color: #00a6ff;
  }

  .switch input:checked + .slider:before {
    transform: translateX(1.8em);
    box-shadow: inset 15px -4px 0px 15px #ffcf48;
  }

  .star {
    background: white;
    border-radius: 50%;
    position: absolute;
    width: 5px;
    height: 5px;
    transition: 0.4s;
  }

  .star_1 { left: 2.5em; top: 0.5em; }
  .star_2 { left: 2.2em; top: 1.2em; }
  .star_3 { left: 3em; top: 0.9em; }

  .switch input:checked ~ .slider .star {
    opacity: 0;
  }

  .cloud {
    width: 3.5em;
    position: absolute;
    bottom: -1.4em;
    left: -1.1em;
    opacity: 0;
    transition: 0.4s;
  }

  .switch input:checked ~ .slider .cloud {
    opacity: 1;
  }
`;

export default Switch;