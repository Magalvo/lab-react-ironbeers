import Header from '../components/Header';
import axios from 'axios';
import { Container } from 'react-dom';

import { useState, useEffect } from 'react';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        console.log(response.data); // response from Axios always returns de information inside "data"
        setBeers(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBeers();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>All The Awesomeness In One Place</h1>

        {beers &&
          beers.map(beer => (
            <div className='card' key={beer._id}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ padding: '50px' }}>
                  <img src={beer.image_url} alt='beer' width={100} />
                </div>
                <div>
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
                </div>
              </div>
              <hr
                style={{
                  width: '40%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Beers;
