import React from 'react';

import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn = () => {
  return (
    <Container className="left-column">
      <ProfilePanel />
    </Container>
  );
};

export default LeftColumn;
