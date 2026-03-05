import React from "react";
import styled from "styled-components";

const Card = ({ title, stack, description, highlights, image }) => {
  return (
    <StyledWrapper>
      <div className="card">

        {/* FRONT SIDE (Image) */}
        <div className="card__front">
          <img src={image} alt={title} />
          <div className="overlay">
            <h3>{title}</h3>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="card__content">
          <h3>{title}</h3>
          <p><strong>Stack:</strong> {stack}</p>
          <p className="desc">{description}</p>
          <p className="highlights">{highlights}</p>
        </div>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    max-width: 380px;
    min-height: 320px;
    border-radius: 18px;
    overflow: hidden;
    perspective: 1000px;
    transition: 0.4s ease;
  }

  .card:hover {
    transform: scale(1.03);
  }

  /* FRONT */
  .card__front {
    position: relative;
    width: 100%;
    min-height: 320px;
    overflow: hidden;
    backface-visibility: hidden;
  }

  .card__front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
  }

  .overlay h3 {
    margin: 0;
    font-size: 1.3rem;
  }

  /* BACK */
  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 320px;
    padding: 30px;
    box-sizing: border-box;
    background: #121212;
    color: #f1f1f1;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: 0.6s;
    overflow-y: auto;
    backface-visibility: hidden;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__content h3 {
    margin-bottom: 12px;
    color: #ffffff;
  }

  .card__content p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 10px;
    color: #cccccc;
  }

  .highlights {
    margin-top: 14px;
    font-size: 0.9rem;
    color: #00d9ff;
  }
`;

export default Card;