import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Explore.css';

function Explore() {
  return (
    <main>
      <section className="explore-main">
        <Link to="/explore/foods">
          <button
            className="explore-button-food"
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </Link>

        <Link to="/explore/drinks">
          <button
            className="explore-button-drinks"
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}

export default Explore;