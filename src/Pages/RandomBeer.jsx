import Header from '../components/Header';
import axios from 'axios';
import Spinner from '../components/Spinner';

import { Link, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  const fetchRandomBeer = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      console.log(response.data);
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  if (!randomBeer) {
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <Spinner />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className='random-beer'>
        <h2>Random Beer</h2>
        <div className='card'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div>
              <img src={randomBeer.image_url} alt='beer' width={100} />

              <p>
                <h1>{randomBeer.name}</h1>
                <h3>{randomBeer.attenuation_level}</h3>
              </p>
              <p>
                {randomBeer.tagline}
                {randomBeer.first_brewed}
              </p>

              <p
                style={{
                  width: '40%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto' // Added margin to center the paragraph within its container
                }}
              >
                {randomBeer.description}
              </p>
              <p>{randomBeer.contributed_by}</p>
            </div>
          </div>
        </div>
        <button onClick={fetchRandomBeer}>Randomize!</button>
      </div>
    </>
  );
};

export default RandomBeer;
