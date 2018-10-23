// Import React
import React from 'react'
// Import Spectacle Core tags
import { Deck, Heading, ListItem, List,
  Slide, Text, CodePane, Appear, Notes, Image, Fill, Layout, Link
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'black',
    secondary: '#1F2022', // black
    tertiary: '#03A9FC', // blue
    quartenary: '#CECECE' // gray
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading caps textColor='white'>React transition group</Heading>
          
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          Animations, as a dev why should I care?
        </Slide>
        <Slide>
          test
        </Slide>
      </Deck>
    )
  }
}
