import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 2fr 5fr 0.5;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 5fr 3fr 1fr 0.5fr;
`

const Header = styled.header`
  grid-column: 1 / -1;
  grid-row: span 2;
  background-color: #2C5B61;
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  left: 7.5%;
  top: 2%;
  border-radius: 50%;
  background-color: #2C5B61;
  background:url("images/ren.jpg") center no-repeat;
  background-size: 250%;
  background-position: 100% 0%;
  box-shadow: 1px 2px 0 #033;
  position: absolute;
`

const Description = styled.p`
  grid-column: 5 / 8;
`

const LeftArrow = styled.div`
  grid-column-start: 2;
  grid-row-start: 4;
`
const RightArrow = styled.div`
grid-column-start: -3;
grid-row-start: 4;
`
const Preview = styled.div`
  grid-column: 3 / 6;
  grid-row: 4;
  height: 200px;
`

const App = () => (
  <Container className="text-center">
    <Circle src="images/ren.jpg" />
    <Header>
      <h1>First Last</h1>
    </Header>
    <Description>
      A portfolio site, made in ReactJS. Now on GitLab, things are about to get fancy!
      Now with text that is twice as long because I need to figure out how to get this to layout properly.
    </Description>
    <LeftArrow>Prev</LeftArrow>
    <Preview>big ole image</Preview>
    <RightArrow>Next</RightArrow>
  </Container>
);

export default App;
