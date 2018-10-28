import React from 'react'

const PokeCard = ({ name, img, abilities }) =>
  name ? <div className='pokeCard'>
  <img className='pokeImg'src={img} alt={`image of ${name}`} />
  <div>{name}</div>
  <div>
    <ul className='ability-list'>
    {abilities.map((ability, index) =>
      <li className='ability' key={index}>{ability.ability.name}</li>)}
    </ul>
  </div>
</div> : null

export default PokeCard
