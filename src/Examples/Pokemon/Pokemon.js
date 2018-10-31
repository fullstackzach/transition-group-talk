import React, { Fragment } from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { mapPokemon, getRandomNumber, getInitialPokemon } from './utils'
import PokeCard from './PokeCard'
import './Pokemon.css'

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false, isAnimating: false, ...getInitialPokemon() }
  }

  getPokemon () {
    const randomNumber = Math.floor(Math.random() * getRandomNumber(802));
    this.setState({ isLoading: true }, 
    () => axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
      .then(response => {
        this.setState({ 
          isLoading: false,
          ...mapPokemon(response.data)
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoading: false
        })
      }
      )
    )
  }

  render() {
    return (
      <Fragment>
        <div className='pokeCard-container'>
          <TransitionGroup>
            <CSSTransition 
              classNames='transition'
              key={this.state.name}
              appear
              onExit={() => this.setState({ isAnimating: true })}
              onExited={() => this.setState({ isAnimating: false })}
              timeout={2000}>
              <PokeCard {...this.state} />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <button
          onClick={() => this.getPokemon()}
          disabled={this.state.isLoading || this.state.isAnimating}>
            Summon a Pokemon!
        </button>
      </Fragment>
    );
  }
}



export default Pokemon
