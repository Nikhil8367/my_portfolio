import React from "react";
import styled from "styled-components";

const Card = ({ title, stack, description, highlights, image, link}) => {
  return (
    <StyledWrapper>
      
        <div className="card">

          <div className="card__front">
            <img src={image} alt={title} />
            <div className="overlay">
              <h3>{title}</h3>
            </div>
          </div>

          <div className="card__content">
            <h3>{title}</h3>
            <p><strong>Stack:</strong> {stack}</p>
            <p className="desc">{description}</p>
            <p className="highlights">{highlights}</p>

              <a href={link} target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
          </div>

        </div>
      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  .card {
    position: relative;
    width: 100%;
    max-width: 380px;
    height: 340px;
    border-radius: 22px;
    overflow: hidden;
    perspective: 1200px;
    transition: all 0.45s ease;
    cursor: pointer;
    box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(0,0,0,0.5);
  }

  .card__front {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .card__front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .card:hover .card__front img {
    transform: scale(1.08);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 22px;
    background: linear-gradient(
      to top,
      rgba(0,0,0,0.85),
      rgba(0,0,0,0.1)
    );
    color: white;
  }

  .overlay h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  .card__content {
    position: absolute;
    inset: 0;
    padding: 26px;
    background: rgba(10, 18, 35, 0.96);
    backdrop-filter: blur(10px);
    color: white;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: 0.55s ease;
    overflow-y: auto;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__content h3 {
    font-size: 1.4rem;
    margin-bottom: 14px;
  }

  .card__content p {
    margin-bottom: 12px;
    line-height: 1.45;
  }

  .desc {
    color: #d1d5db;
    font-size: 0.95rem;
  }

  .highlights {
    color: #facc15;
    font-weight: 600;
  }

  button {
    margin-top: 16px;
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #2563eb, #06b6d4);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

export default Card;