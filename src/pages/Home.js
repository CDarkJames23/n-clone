import React from "react";
import Footer from "../components/Footer/Footer";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import Navigation from "../components/FilterNavigation/Navigation";
import MovieCardsContainer from "../components/MovieCardsContainer/MovieCardsContainer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const Home = () => {
  return (
    <>
      <InnerBanner />
      <Navigation />
      <ErrorBoundary>
        <MovieCardsContainer />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Home;
