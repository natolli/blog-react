import React from "react";
import { Container } from "../../utils/Global";
import { ShowCase, Cards, ShowCaseContainer } from "./Homepage.styles";
import { ShowCaseSvg } from "../../assets/showcase";
import HomeCard from "../../components/homeCard/HomeCard";
import { HomeCard1, HomeCard2 } from "../../assets";

const HomePage = () => {
  return (
    <>
      <ShowCase>
        <Container>
          <ShowCaseContainer>
            <div className="content">
              <h1 className="title">Post Blogs And Connect With Others.</h1>
              <button>Get Started</button>
            </div>
            <ShowCaseSvg />
          </ShowCaseContainer>
        </Container>
      </ShowCase>
      <Cards>
        <Container>
          <HomeCard
            Image={HomeCard1}
            title="Blog on your favorite topic "
            description="we'll help you share your blog on what you think is important."
          />
          <div className="sp"></div>
          <HomeCard
            Image={HomeCard2}
            title="See what others blogged"
            description="you can see and give comments on other deep user blogs."
          />
        </Container>
      </Cards>
    </>
  );
};

export default HomePage;
