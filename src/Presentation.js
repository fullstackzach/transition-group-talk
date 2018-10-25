// Import React
import React from 'react'
// Import Spectacle Core tags
import { Deck, Heading, ListItem, List,
  Slide, Text, CodePane, Appear, Notes, Image, Fit, Fill, Layout, Link, ComponentPlayground
} from 'spectacle'
import { box, reactExampleJSX } from './Examples/CodePanes.js'
import WithReactState from './Examples/WithReactState'
import Pokemon from './Examples/Pokemon'

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
          Animations, so what?
          <List>
            <ListItem>More engaging to your users</ListItem>
            <ListItem>Your design team will be asking you soon</ListItem>
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
            <ListItem>`position:absolute` your element being transitioned</ListItem>
            <ListItem>`position:relative` a parent your element</ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
