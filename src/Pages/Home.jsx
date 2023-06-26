import { Link } from 'react-router-dom';
import img1 from '../assets/beers.png';
import img2 from '../assets/random-beer.png';
import img3 from '../assets/new-beer.png';

const Home = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '15px'
        }}
      >
        <img src={img1} alt='all' style={{ borderRadius: '20px' }} />
        <Link to='/beers' style={{ textDecoration: 'none' }}>
          <button
            style={{
              marginTop: '10px',
              backgroundColor: '#3ec4fc',
              borderRadius: '30px',
              border: '1px solid grey'
            }}
          >
            <p>All Beers</p>
          </button>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '15px'
        }}
      >
        <img src={img2} alt='Random' style={{ borderRadius: '20px' }} />
        <Link to='/random-beer' style={{ textDecoration: 'none' }}>
          <button
            style={{
              marginTop: '10px',
              backgroundColor: '#3ec4fc',
              borderRadius: '30px',
              border: '1px solid grey'
            }}
          >
            <p>Random Beer</p>
          </button>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '15px'
        }}
      >
        <img src={img3} alt='New' style={{ borderRadius: '20px' }} />
        <Link to='/new-beer' style={{ textDecoration: 'none' }}>
          <button
            style={{
              marginTop: '30px',
              backgroundColor: '#3ec4fc',
              borderRadius: '30px',
              border: '1px solid grey'
            }}
          >
            <p>New Beer</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
