import { Link } from 'react-router-dom';
import img from '../assets/headr.png';

const Header = () => {
  return (
    <div>
      <Link to='/'>
        {' '}
        <img src={img} alt='head' />
      </Link>
    </div>
  );
};

export default Header;
