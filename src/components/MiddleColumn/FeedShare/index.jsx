import React from 'react';

import Panel from '../../Panel/index';

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
          <span>Começar uma publicação</span>
        </div>
        <div className="attachment" style={{display:"flex", justifyContent:"flex-end"}}>
        <button style={{ borderRadius:"4px"}}>
            <SendIcon />
            <span>Postar</span>
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
