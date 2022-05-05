import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HomeSectionItems from "../HomeSectionItems/HomeSectionItems";
import PageTitle from "../PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="">
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <HomeSectionItems></HomeSectionItems>
      <Footer></Footer>
    </div>
  );
};

export default Home;
