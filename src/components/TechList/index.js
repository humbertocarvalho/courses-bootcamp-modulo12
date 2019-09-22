import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState('');
  function handleAddTech() {
    setTechs([...techs, tech]);
    setTech('');
  }
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
