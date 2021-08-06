import React from 'react';
import envelopes from '../imgs/envelopes.jpg';
import inHand from '../imgs/inHand.jpg';
import singleEnvelope from '../imgs/singleEnvelope.jpg';

function Homepage() {
  return (
    <>
      <div id="about" className="card">
        <h1>About Us</h1>
        <p>
          Originating from our love for bullet journaling and all things stationery, we receive
          great joy from sharing little pieces of paper with people. We had the desire to give these
          types of gifts not only to our friends and family but to a wide variety of people as well.
          We want to share the joy we get from stationery with you and hope that some of the love
          and care we impart into the packages will bloom in your life and in your paper projects as
          well.
        </p>
        <h2>Scroll Down for More :)</h2>
      </div>
      <img className="homeimage" src={envelopes} alt="envelopes" />

      <img className="homeimage" src={inHand} alt="envelopes in hand" />

      <img className="homeimage" src={singleEnvelope} alt="single envelope" />
    </>
  );
}

export default Homepage;
