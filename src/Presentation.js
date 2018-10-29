// Import React
import React, { Fragment } from 'react'
// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Link,
  Slide, Text, CodePane, Fill, Layout
} from 'spectacle'
import { box, transitionExample } from './Examples/CodePanes.js'
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
        <Slide>
          <Text textSize='60'>Zach Willard</Text>
          <Layout>
            <Fill>
              <List>
                <ListItem>Dev > Business Analyst > Dev</ListItem>
                <ListItem>Been back at it for 1 1/2 years</ListItem>
                <ListItem>Excited about JS, React, Node, AWS & Cloud</ListItem>
                <ListItem>Builds on the client website at Northwestern Mutual</ListItem>
                <ListItem>NM tech blog: <Link href='https://nm.engineering'>nm.engineering</Link></ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary' textSize='60'>Animations, so what?</Text>
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
          <Text textColor='tertiary' textSize='60'>Vanilla CSS transitions</Text>
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
          <Text textColor='tertiary' textSize='60'>Even still you don't need a Library</Text>
          <WithReactState />
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary' textSize='60'>react-transition-group</Text>
          <List>
            <ListItem>Used to show two components transitioning in and out at the same time</ListItem>
            <ListItem>It's a state machine</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Text textColor='tertiary' textSize='60'>react-transition-group states</Text>
          <List>
            <ListItem>Appear - First time on page load</ListItem>
            <ListItem>Enter - component entering</ListItem>
            <ListItem>Exit - component leaving</ListItem>
          </List>
        </Slide>
        <Slide transition={['none']}>
          <Pokemon />
        </Slide>
        <Slide>
          <Text>You can combine with React Router to do full page transitions</Text>
        </Slide>
        <Slide>
          <Text textSize='60'>Transition vs CSSTransition</Text>
          <CodePane
            lang='jsx'
            theme='light'
            textSize={20}
            source={transitionExample}
          />
          'Enter', 'Exit', 'Appear' states are passed as a prop instead
        </Slide>
        <Slide transition={['fade']}>
          <Text textColor='tertiary' textSize='60'>Also</Text>
          <List>
            <ListItem>Components need to be `position:absolute`</ListItem>
            <ListItem>Other animations can clash with yours</ListItem>
            <ListItem>for CSS-in-JS `Transition` may be easier to work with</ListItem>
            <ListItem>Be sensible!</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading textColor='white' textFont='Montserrat'>Thank you</Heading>
        </Slide>
      </Deck>
      </Fragment>
    )
  }
}
