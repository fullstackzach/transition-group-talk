import React, {Fragment} from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PokeCard = ({ name, img, abilities }) =>
  name ? <div className='pokeCard'>
  <img className='pokeImg'src={img}  />
  <div>{name}</div>
  <div>
    <ul className='ability-list'>
    {abilities.map((ability, index) =>
      <li className='ability' key={index}>{ability.ability.name}</li>)}
    </ul>
  </div>
</div> : null
  
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = { img: '', abilities: [], isLoading: false, isAnimating: false }
  }

  getPokemon () {
    const randomNumber = Math.floor(Math.random() * 255);
    this.setState({ isLoading: true }, 
    () => axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then(response => {
        const { name, abilities, height, weight,
                sprites: { front_default } } = response.data
        this.setState({ isLoading: false,
            name: capitalizeFirstLetter(name),
            abilities,
            height,
            weight,
            img: front_default })
      })
      .catch(error => console.log(error) || this.setState({ isLoading: false }))
    )
  }

  componentDidMount () {
    this.getPokemon()
  }

  render() {
    return (
      <Fragment>
        <div className='pokeCard-container'>
          <TransitionGroup>
            <CSSTransition 
              classNames='transition'
              key={this.state.name}
              onExit={() => this.setState({ isAnimating: true })}
              onExited={() => this.setState({ isAnimating: false })}
              timeout={2000}>
              <PokeCard {...this.state} />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <button onClick={() => this.getPokemon()} disabled={this.state.isLoading || this.state.isAnimating}>Pokemon!</button>
      </Fragment>
    );
  }
}



export default Pokemon
