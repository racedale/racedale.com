import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid'
import HoverCard from './components/HoverCard'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const Header = styled.header`
  flex: 1 0 100%;
  background-color: var(--dark-green);
  border-top: 2px solid var(--bright-green);
  color: var(--light);
  padding-top: 1.5rem;
  letter-spacing: 2rem;
  text-transform: uppercase;
  h1 {
    margin-bottom: -0.5rem;
    padding-left: 2.5rem;
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
  flex: 0 1 60%;
  line-height: 1.5rem;
  height: 100px;
  margin-right: 5vw;
`

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 5fr 3fr 1fr 0.5fr;
`

const LeftArrow = styled(FontAwesomeIcon)`
  grid-column-start: 2;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`
const RightArrow = styled(FontAwesomeIcon)`
  grid-column-start: -3;
  align-self: center;
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
`
const StyledHoverCard = styled(HoverCard)`
  grid-column: 3 / 6;
  max-width: 100%;
`
const Description = styled.div`
  grid-column: 6 / 7;
  line-height: 1.5rem;
  padding: 0 0.5rem;
`


class App extends Component {

  constructor(props, context) {
    super(props)

    this.state = {
      cards: [
        {
          cardTitle: 'TMN',
          cardImage: 'images/tmn.truman.edu-cropped.png',
          cardDescription: `Created Wordpress theme for a news site with hundreds of legacy articles.
          Emphasis on page load time and having spaces for advertisements that could be varying sizes.
          Built with: Wordpress, Advanced Custom Fields`
        },
        {
          cardTitle: 'APO',
          cardImage: 'images/apo.truman.edu-cropped.png',
          cardDescription: `Custom site for a service organization to be able to manage 300+ members information and log service hours.
          Built with: PHP, MySQL`
        },
        {
          cardTitle: 'Evolve24',
          cardImage: 'images/evolve24.com-cropped.png',
          cardDescription: `Marketing focused site for a data analytics company.
          Emphasis on non-technical people being able to make updates.
          Built with: WordPress, Timber, Twig`
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
        <Grid>
          <LeftArrow
            id="left-arrow"
            icon={faAngleLeft}
            size="5x"
            onClick={this.changeCardPrev.bind(this)}
          />
          <StyledHoverCard
            card={this.state.cards[0]}
          />
          <Description>
            {this.state.cards[0].cardDescription}
          </Description>
          <RightArrow
            id="right-arrow"
            icon={faAngleRight}
            size="5x"
            onClick={this.changeCardNext.bind(this)}
          />
        </Grid>
      </Container>
    )
  }
}

export default App;
