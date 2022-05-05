import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HomeSectionItems from "../HomeSectionItems/HomeSectionItems";
import Brand from "../MyItems/Brand/Brand";
import PageTitle from "../PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="">
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <HomeSectionItems></HomeSectionItems>
      <Brand></Brand>
      <Footer></Footer>
    </div>
  );
};

export default Home;
