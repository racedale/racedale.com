import React from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  text-align: center
`

const App = () => (
  <CenteredDiv>
    <header>
      <h1>Dale Race</h1>
    </header>
    <p>
      A portfolio site, made in ReactJS. Now on GitLab, things are about to get fancy!
    </p>
  </CenteredDiv>
);

export default App;
