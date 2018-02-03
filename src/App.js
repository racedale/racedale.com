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
  letter-spacing: 2rem;
  text-transform: uppercase;
  h1 {
    margin-bottom: -0.5rem;
  }
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  left: 7.5%;
  top: 5%;
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
      cardImage: 'images/test.png',
      cardDescription: `Little informational blurb about the technical aspects of whatever the heck this is and explaining the process of building it and why the heck it’s so freaking awesome, ya know?
      Built with: ReactJS, GraphQL, Styled Components`
    }
  }

  changeCard(event) {
    this.setState({
      cardImage: 'images/desk.jpg'
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
        <LeftArrow icon={faAngleLeft} size="5x" onClick={this.changeCard.bind(this)} />
        <StyledHoverCard src={this.state.cardImage} />
        <Description>
          {this.state.cardDescription}
        </Description>
        <RightArrow icon={faAngleRight} size="5x" onClick={this.changeCard.bind(this)} />
      </Container>
    )
  }
}

export default App;
