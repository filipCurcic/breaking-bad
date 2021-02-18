import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
import '../../../styles/CharacterScreen/CharacterScreen.css';
import CharacterScreenInfo from './CharacterScreenInfo';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Modal from '../Modal';

const CharacterScreen = ({ match }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/${match.params.id}`
      );
      setData(result.data[0]);
      setIsLoading(false);
    };
    fetchItems();
  }, [match]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const fetchRandomQuote = async () => {
    const query = data.name.replace(/\s+/g, '+');
    const result = await axios(
      `https://breakingbadapi.com/api/quote/random?author=${query}`
    );
    if (result.data.length === 0) {
      setQuote('This character does not have any memorable quotes');
    } else {
      setQuote(result.data[0].quote);
    }
    console.log(quote);
    setIsLoading(false);
    openModal();
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="characterScreen__container flex__row">
      <div className="characterScreen__infoContainer flex__column">
        <span>
          {' '}
          <Link to="/">
            <span className="characterScreen__history">characters/</span>
          </Link>
          <span style={{ color: '#ADADAD' }}>{data.name}</span>
        </span>
        <div className="characterScreen__name"> {data.name} </div>
        <Button title="Random Quote" click={fetchRandomQuote} />
        <CharacterScreenInfo info="Birthday" data={data.birthday} />
        <CharacterScreenInfo info="Status" data={data.status} />
        <CharacterScreenInfo info="Seasons" data={data.appearance} />
        <CharacterScreenInfo info="Nickname" data={data.nickname} />
        <CharacterScreenInfo info="Portrayed" data={data.portrayed} />
      </div>
      <div className="characterScreen__imageContainer center">
        <img src={data.img} alt="" />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        click={openModal}
        quote={quote}
      />
    </div>
  );
};

export default CharacterScreen;
