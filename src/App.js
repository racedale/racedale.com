import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid'
import HoverCard from './components/HoverCard'


const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 2fr 5fr 0.5;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 5fr 3fr 1fr 0.5fr;
`

const Header = styled.header`
  grid-column: 1 / -1;
  grid-row: span 2;
  align-self: end;
  background-color: var(--dark-green);
  border-top: 2px solid var(--bright-green);
  color: var(--light);
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  letter-spacing: 2rem;
  text-transform: uppercase;
  h1 {
    margin-bottom: -0.5rem;
  }
`

const Circle = styled.div`
  width: 10vw;
  height: 10vw;
  left: calc(1.5rem);
  top: calc(1.5rem);
  border-radius: 50%;
  background: url(${props => props.src}) center no-repeat;
  background-size: 250%;
  background-position: 100% 0%;
  box-shadow: 1px 2px 0 var(--dark);
  position: absolute;
`

const Introduction = styled.p`
  grid-column: 5 / 8;
  line-height: 1.5rem;
  height: 100px;
  min-height: 100%;
`

const LeftArrow = styled(FontAwesomeIcon)`
  grid-column-start: 2;
  grid-row-start: 4;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`
const RightArrow = styled(FontAwesomeIcon)`
  grid-column-start: -3;
  grid-row-start: 4;
  align-self: center;
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
`
const StyledHoverCard = styled(HoverCard)`
  grid-column: 3 / 6;
  grid-row: 4;
  max-width: 100%;
`
const Description = styled.div`
  grid-column: 6 / 7;
  grid-row: 4;
  line-height: 1.5rem;
  padding: 0 0.5rem;
`


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          cardTitle: 'Prev',
          cardImage: 'images/test.png',
          cardDescription: `Little informational blurb about the technical aspects of whatever the heck this is and explaining the process of building it and why the heck it’s so freaking awesome, ya know?
          Built with: ReactJS, GraphQL, Styled Components`
        },
        {
          cardTitle: 'Whatever',
          cardImage: 'images/test.png',
          cardDescription: `Little informational blurb about the technical aspects of whatever the heck this is and explaining the process of building it and why the heck it’s so freaking awesome, ya know?
          Built with: ReactJS, GraphQL, Styled Components`
        },
        {
          cardTitle: 'Next',
          cardImage: 'images/test.png',
          cardDescription: `Little informational blurb about the technical aspects of whatever the heck this is and explaining the process of building it and why the heck it’s so freaking awesome, ya know?
          Built with: ReactJS, GraphQL, Styled Components`
        }
      ]
    }
  }

  changeCardPrev(event) {
    this.state.cards.unshift(this.state.cards.pop())
    this.setState({
      cards: this.state.cards.reduce((prev, current, index) =>  prev.concat(current), [])
    })
  }

  changeCardNext(event) {
    this.setState({
      cards: this.state.cards.concat(this.state.cards.shift())
    })
  }

  render() {
    return (
      <Container className="text-center">
        <Circle src="images/ren.jpg" />
        <Header>
          <h1>First Last</h1>
        </Header>
        <Introduction>
          A portfolio site, made in ReactJS. Now on GitLab, things are about to get fancy!
          Now with text that is twice as long because I need to figure out how to get this to layout properly.
        </Introduction>
        <LeftArrow id="left-arrow" icon={faAngleLeft} size="5x" onClick={this.changeCardPrev.bind(this)} />
        <StyledHoverCard title={this.state.cards[0].cardTitle} src={this.state.cards[0].cardImage} />
        <Description>
          {this.state.cards[0].cardDescription}
        </Description>
        <RightArrow id="right-arrow" icon={faAngleRight} size="5x" onClick={this.changeCardNext.bind(this)} />
      </Container>
    )
  }
}

export default App;
