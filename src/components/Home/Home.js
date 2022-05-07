import React from "react";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import HomeSectionItems from "../HomeSectionItems/HomeSectionItems";

import PageTitle from "../PageTitle/PageTitle";
import Showroom from "../Showroom/Showroom";

const Home = () => {
  return (
    <div className="">
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <HomeSectionItems></HomeSectionItems>
      <Brand></Brand>
      <Showroom></Showroom>
      <Footer></Footer>
    </div>
  );
};

export default Home;
