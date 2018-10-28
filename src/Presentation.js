// Import React
import React, { Fragment } from 'react'
// Import Spectacle Core tags
import { Deck, Heading, ListItem, List,
  Slide, Text, CodePane, Fill, Layout
} from 'spectacle'
import { box } from './Examples/CodePanes.js'
import WithReactState from './Examples/WithReactState'
import Pokemon from './Examples/Pokemon/Pokemon'
import Footer from './Footer/Footer'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#7D99AD',
    tertiary: '#1F2022', // black
    secondary: '#1F2022', // blue
    quartenary: '#CECECE' // gray
  },
  {
    primary: 'Helvetica',
    secondary: 'Montserrat'
  }
)

export default class Presentation extends React.Component {
  render () {
    return (
      <Fragment>
      <Footer />
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading caps textColor='white' textFont='Montserrat'>React transition group</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary'>Animations, so what?</Text>
          <List>
            <ListItem>Native mobile apps have set the standard</ListItem> 
            <ListItem>It's more engaging to your users</ListItem>
            <ListItem>Your design team will probably be asking you soon</ListItem>
            <ListItem>It's actually fun!</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary'>There's many other animation libraries out there</Text>
          <List>
            <ListItem>GreenSock</ListItem>
            <ListItem>react-motion</ListItem>
            <ListItem>Popmotion-pose</ListItem>
            <ListItem>react-slick (carousels)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary'>Vanilla CSS transitions</Text>
          <Text textColor='tertiary'>You do not need an animation library or React</Text>
          <Layout style={{paddingTop: '100px'}}>
            <Fill>
              <CodePane 
                lang='css'
                theme='light'
                textSize={20}
                source={box} />
            </Fill>
            <Fill>
              <div className='simple'/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']}>
          <Text textColor='tertiary'>Even still you don't need a Library</Text>
          <WithReactState />
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary'>react-transition-group</Text>
          <List>
            <ListItem>Show two components transitioning in and out at the same time</ListItem>
            <ListItem>It's a state machine</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary'>react-transition-group states</Text>
          <List>
            <ListItem>Appear - First time on a page load</ListItem>
            <ListItem>Enter - component entering</ListItem>
            <ListItem>Exit - component leaving</ListItem>
          </List>
        </Slide>
        <Slide transition={['none']}>
          <Pokemon />
        </Slide>
        <Slide transition={['fade']}>
          <Text textColor='tertiary'>Gotchas</Text>
          <List>
            <ListItem>Components need to be `position:absolute`</ListItem>
            <ListItem>Other animations can clash with yours</ListItem>
            <ListItem>Be sensible</ListItem>
          </List>
        </Slide>
      </Deck>
      </Fragment>
    )
  }
}
