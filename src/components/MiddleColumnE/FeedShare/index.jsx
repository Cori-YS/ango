import React from 'react';

import Panel from '../../Panel/index';

import { Link } from 'react-router-dom'

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  ArticleIcon,
  SendIcon
} from './styles';

const FeedShare = () => {
  return (
    <Panel>
      <Container>
        <div className="write">
          
          <WriteIcon />
          <span>Começar uma publicação de uma vaga</span>
        </div>
        <div className="attachment" style={{display:"flex", justifyContent:"flex-end"}}>
        <Link to="/cadastrar-vaga">
        <button style={{ borderRadius:"4px"}}>
            <SendIcon />
            <span>Começar</span>
          </button>
        </Link>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
