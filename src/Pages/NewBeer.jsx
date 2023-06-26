import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const beer =
  'https://media.tenor.com/8PSTyxIBxH0AAAAi/clinking-beer-mugs-joypixels.gif';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');
  const navigate = useNavigate();

  const handleName = e => {
    setName(e.target.value);
  };

  const handleTagline = e => {
    setTagline(e.target.value);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };

  const handleFirstBrewed = e => {
    setFirstBrewed(e.target.value);
  };

  const handleBrewersTips = e => {
    setBrewersTips(e.target.value);
  };

  const handleAttenuationLevel = e => {
    setAttenuationLevel(e.target.value);
  };

  const handleContributedBy = e => {
    setContributedBy(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      first_brewed: firstBrewed,
      description: description,
      attenuation_level: attenuationLevel,
      brewers_tips: brewersTips,
      contributed_by: contributedBy
    };

    try {
      await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        newBeer
      );
      navigate('/beers');
    } catch (e) {
      console.log(e);
    }

    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setBrewersTips('');
    setAttenuationLevel(0);
    setContributedBy('');
  };

  return (
    <>
      <Header />
      <div>
        <h1>Add a new Beer</h1>
        <img src={beer} alt='beer toast' width={100} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh'
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#9bd2e8',
            borderRadius: '40px',
            width: '40%',
            padding: '30px'
          }}
        >
          <div className='form-group'>
            <label
              htmlFor='title'
              style={{ display: 'block', marginBottom: '5px' }}
            >
              <b>Name:</b>
            </label>
            <input
              type='text'
              name='title'
              value={name}
              onChange={handleName}
              className='form-control'
              style={{
                borderRadius: '5px',
                margin: '5px',
                border: '1px solid grey'
              }}
            />
          </div>

          <div className='form-group'>
            <label
              htmlFor='image'
              style={{ display: 'block', marginBottom: '5px' }}
            >
              <b>Tagline:</b>
            </label>
            <input
              type='text'
              name='image'
              value={tagline}
              onChange={handleTagline}
              className='form-control'
              style={{
                borderRadius: '5px',
                margin: '5px',
                border: '1px solid grey'
              }}
            />
          </div>

          <div className='form-group'>
            <label
              htmlFor='image'
              style={{ display: 'block', marginBottom: '5px' }}
            >
              <b>Description:</b>
            </label>
            <input
              type='text'
              name='image'
              value={description}
              onChange={handleDescription}
              className='form-control'
              style={{
                borderRadius: '5px',
                margin: '5px',
                border: '1px solid grey'
              }}
            />
          </div>

          <div className='form-group'>
            <label
              htmlFor='image'
              style={{ display: 'block', marginBottom: '5px' }}
            >
              <b>First Brewed:</b>
            </label>
            <input
              type='text'
              name='image'
              value={firstBrewed}
              onChange={handleFirstBrewed}
              className='form-control'
              style={{
                borderRadius: '5px',
                margin: '5px',
                border: '1px solid grey'
              }}
            />
          </div>

          <div className='form-group'>
            <label
              htmlFor='image'
              style={{ display: 'block', marginBottom: '5px' }}
            >
              <b> Brewers Tips:</b>
            </label>
            <input
              type='textarea'
              name='image'
              value={brewersTips}
              onChange={handleBrewersTips}
              className='form-control'
              style={{
                borderRadius: '5px',
                margin: '5px',
                border: '1px solid grey'
              }}
            />
          </div>

          <div className='form-group'>
            <label
              htmlFor='price'
              style={{
                display: 'block',
                marginBottom: '5px'
              }}
            >
              <b>Attenuation Level:</b>
            </label>
            <input
              type='number'
              name='price'
              value={attenuationLevel}
              onChange={handleAttenuationLevel}
              className='form-control'
              style={{
                borderRadius: '5px',
                margin: '5px',
                border: '1px solid grey'
              }}
            />
          </div>

          <div className='form-group'>
            <label
              htmlFor='image'
              style={{
                display: 'block',
                marginBottom: '5px'
              }}
            >
              <b>Contributed By:</b>
            </label>
            <input
              type='text'
              name='image'
              value={contributedBy}
              onChange={handleContributedBy}
              className='form-control'
              style={{
                borderRadius: '5px',
                margin: '5px',
                border: '1px solid grey'
              }}
            />
          </div>

          <button
            type='submit'
            className='btn btn-primary'
            style={{
              marginTop: '10px',
              backgroundColor: '#3ec4fc',
              borderRadius: '30px',
              padding: '10px',
              border: '1px solid grey'
            }}
          >
            <b>Create Awesome Beer!</b>
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;
