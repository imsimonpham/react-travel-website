import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import TourOne from "../images/tokyo/tokyo-lg-3.jpg";
import TourTwo from "../images/seoul/seoul-lg-2.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;
const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)``;

const Listings = () => {
  return (
    <section>
      <Container>
        <Heading>
          <h1>View our most popular tours</h1>
        </Heading>
        <InfoRow>
          <InfoWrap>
            <Image src={TourOne} alt="destination"></Image>
            <h2>Tokyo One Life Advanture - 5 Days</h2>
            <InfoLink to="/destinations">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap>
            <Image
              src={TourTwo}
              alt="destination"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            ></Image>
            <h2>Seoul Express Tour - 4 Days</h2>
            <InfoLink to="/destinations">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </section>
  );
};

export default Listings;
