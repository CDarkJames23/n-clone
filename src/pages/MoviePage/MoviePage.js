import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Navigation from "../../components/FilterNavigation/Navigation";
import Footer from "../../components/Footer/Footer";
import MovieBanner from "../../components/InnerBanner/MovieBanner";
import MovieCardsContainer from "../../components/MovieCardsContainer/MovieCardsContainer";

const MoviePage = () => {
  return (
    <>
      <MovieBanner />
      <Navigation />
      <ErrorBoundary>
        {" "}
        <MovieCardsContainer />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MoviePage;
