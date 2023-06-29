import React from 'react';
import styled from 'styled-components';



const Story: React.FC = () => {
  return (
    <Storypage>
      <StoryTitle>story</StoryTitle>
    </Storypage>
  );
};

export default Story;

const Storypage = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 100%;
height:75px;
background: red;

`;
  

const StoryTitle = styled.h1`
color:blue;
`;