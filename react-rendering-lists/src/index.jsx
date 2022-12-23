import React from 'react';
import * as ReactDOM from 'react-dom/client';

function PokedexList(props) {
  const pokedex = props.pokedex;
  const mappedPokedex = pokedex.map(pokemon =>
    <li key={pokemon.number}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{mappedPokedex}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokedexList pokedex={pokedex} />
);
