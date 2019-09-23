import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTech } from '../../store/modules/techs/actions';

// import { Container } from './styles';

export default function TechList() {
  // const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState('');

  const dispatch = useDispatch();

  const techs = useSelector(state => state.techs);

  function handleAddTech() {
    //    setTechs([...techs, tech]);
    dispatch(addTech(tech));

    setTech('');
  }

  // useEffect(() => {
  //   const techsStorage = localStorage.getItem('techs');

  //   if (techsStorage) {
  //     setTechs(JSON.parse(techsStorage));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('techs', JSON.stringify(techs));
  // }, [techs]);

  return (
    <form data-testid='tech-form' onSubmit={handleAddTech}>
      <ul data-testid='tech-list'>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <label htmlFor='tech'>Tech</label>
      <input
        id='tech'
        type='text'
        value={tech}
        onChange={e => setTech(e.target.value)}
      />
      <button type='button'>Adicionar</button>
    </form>
  );
}
