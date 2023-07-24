import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [activebar, setActivebar] = useState(true);


  const Activeandclose = () => {
    setActivebar(!activebar);
    
  };

  return (
     
          <HeaderContainer  >
            {/* <MObileStyle   style={activebar ? { margin: '1px' } : { margin: '-700px' }}>   */}
            <Divorsvges >
          <Link to='/'> <svg xmlns="http://www.w3.org/2000/svg" width="170" height="16">
            <defs>
              <linearGradient id="a" x1="0%" x2="50%" y1="85.457%" y2="14.543%">
                <stop offset="0%" stop-color="#FFC593" />
                <stop offset="51.945%" stop-color="#BC7198" />
                <stop offset="100%" stop-color="#5A77FF" />
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#000"
                fill-rule="nonzero"
                d="M31.108 15.568v-4.541h2.703c.836 0 1.6-.133 2.292-.4a5.19 5.19 0 001.773-1.113 5.1 5.1 0 001.146-1.676c.273-.642.41-1.344.41-2.108 0-.75-.137-1.449-.41-2.098a5.072 5.072 0 00-1.146-1.686A5.19 5.19 0 0036.103.832c-.692-.266-1.456-.4-2.292-.4H27v15.136h4.108zm2.487-8.217h-2.487V4.108h2.487c.49 0 .9.162 1.232.487.332.324.497.702.497 1.135 0 .432-.165.81-.497 1.135-.332.324-.742.486-1.232.486zm12.54 8.217V9.73h5.514v5.838h4.108V.432h-4.108v5.622h-5.514V.432h-4.108v15.136h4.108zM66.784 16a8.616 8.616 0 003.319-.638 8.401 8.401 0 002.68-1.74 8.192 8.192 0 001.785-2.552c.432-.965.648-1.989.648-3.07a7.428 7.428 0 00-.648-3.07 8.192 8.192 0 00-1.784-2.552 8.401 8.401 0 00-2.681-1.74A8.616 8.616 0 0066.783 0c-1.196 0-2.306.213-3.329.638a8.432 8.432 0 00-2.67 1.74A8.192 8.192 0 0059 4.93 7.428 7.428 0 0058.351 8c0 1.081.217 2.105.649 3.07a8.192 8.192 0 001.784 2.552 8.432 8.432 0 002.67 1.74c1.023.425 2.133.638 3.33.638zm0-3.676A4.285 4.285 0 0165.119 12a3.942 3.942 0 01-1.34-.908 4.33 4.33 0 01-.887-1.373A4.479 4.479 0 0162.568 8c0-.62.108-1.193.324-1.719a4.33 4.33 0 01.886-1.373c.375-.39.822-.692 1.34-.908a4.285 4.285 0 011.666-.324c.59 0 1.142.108 1.654.324.512.216.958.519 1.34.908.382.39.681.847.898 1.373.216.526.324 1.1.324 1.719 0 .62-.108 1.193-.324 1.719a4.236 4.236 0 01-.898 1.373c-.382.39-.828.692-1.34.908a4.206 4.206 0 01-1.654.324zm18.054 3.244V4.108h4.216V.432h-12.54v3.676h4.216v11.46h4.108zM98.784 16a8.616 8.616 0 003.319-.638 8.401 8.401 0 002.68-1.74 8.192 8.192 0 001.785-2.552c.432-.965.648-1.989.648-3.07a7.428 7.428 0 00-.648-3.07 8.192 8.192 0 00-1.784-2.552 8.401 8.401 0 00-2.681-1.74A8.616 8.616 0 0098.783 0c-1.196 0-2.306.213-3.329.638a8.432 8.432 0 00-2.67 1.74A8.192 8.192 0 0091 4.93 7.428 7.428 0 0090.351 8c0 1.081.217 2.105.649 3.07a8.192 8.192 0 001.784 2.552 8.432 8.432 0 002.67 1.74c1.023.425 2.133.638 3.33.638zm0-3.676A4.285 4.285 0 0197.119 12a3.942 3.942 0 01-1.34-.908 4.33 4.33 0 01-.887-1.373A4.479 4.479 0 0194.568 8c0-.62.108-1.193.324-1.719a4.33 4.33 0 01.886-1.373c.375-.39.822-.692 1.34-.908a4.285 4.285 0 011.666-.324c.59 0 1.142.108 1.654.324.512.216.958.519 1.34.908.382.39.681.847.898 1.373.216.526.324 1.1.324 1.719 0 .62-.108 1.193-.324 1.719a4.236 4.236 0 01-.898 1.373c-.382.39-.828.692-1.34.908a4.206 4.206 0 01-1.654.324zM114.568 16c.95 0 1.801-.133 2.55-.4.75-.267 1.385-.627 1.904-1.081.519-.454.915-.98 1.189-1.578.274-.599.41-1.236.41-1.914 0-.88-.172-1.6-.518-2.162a4.35 4.35 0 00-1.298-1.362 6.98 6.98 0 00-1.697-.822l-1.697-.562a7.533 7.533 0 01-1.297-.551c-.346-.195-.52-.465-.52-.811 0-.332.148-.63.444-.898.295-.266.688-.4 1.178-.4.375 0 .714.062 1.016.184.303.123.563.263.779.422.26.173.49.367.692.584l2.378-2.487a5.559 5.559 0 00-1.276-1.08c-.432-.275-.98-.523-1.643-.747C116.5.112 115.706 0 114.784 0c-.865 0-1.65.13-2.357.39-.706.259-1.308.605-1.805 1.037-.498.432-.883.93-1.157 1.492a3.908 3.908 0 00-.41 1.73c0 .879.172 1.6.518 2.162a4.35 4.35 0 001.297 1.362 6.98 6.98 0 001.698.822c.612.201 1.178.389 1.697.562.519.173.951.357 1.297.551.346.195.52.465.52.81 0 .433-.174.812-.52 1.136-.346.324-.821.487-1.427.487-.49 0-.933-.083-1.33-.25a5.466 5.466 0 01-1.027-.55 5.352 5.352 0 01-.886-.822l-2.378 2.486c.432.49.944.923 1.535 1.298.504.331 1.131.63 1.88.897.75.267 1.63.4 2.639.4zm12.54-.432V7.135l6.508 8.433h3.546V.432h-4.108v8.433L126.568.432H123v15.136h4.108zm16.216 0l1.081-3.244h4.973l1.081 3.244h4.433L149.162.432h-4.54l-5.73 15.136h4.432zm4.973-6.487h-2.81l1.405-4.432 1.405 4.432zm12.433 6.487v-4.541h2.702c.836 0 1.6-.133 2.292-.4a5.19 5.19 0 001.773-1.113 5.1 5.1 0 001.146-1.676c.274-.642.411-1.344.411-2.108 0-.75-.137-1.449-.41-2.098a5.072 5.072 0 00-1.147-1.686 5.19 5.19 0 00-1.773-1.114c-.692-.266-1.456-.4-2.292-.4h-6.81v15.136h4.108zm2.486-8.217h-2.486V4.108h2.486c.49 0 .901.162 1.233.487.331.324.497.702.497 1.135 0 .432-.166.81-.497 1.135-.332.324-.743.486-1.233.486z"
              />
              <path fill="url(#a)" d="M0 16L9.5 0 19 16z" />
            </g> 
          </svg> </Link>

          <Divmobile><svg xmlns="http://www.w3.org/2000/svg" width="20" height="6" onClick= {Activeandclose} > <g fill-rule="evenodd"><path d="M0 0h20v1H0zM0 5h20v1H0z"/></g></svg>
          </Divmobile></Divorsvges>
          {/* </MObileStyle> */}
           <Divformanue style={activebar ? { display: 'block' } : { display: 'none' }}> 
           <Difforbuttons>
          <Link to='/story'> <HeaderButtons> STORIES</HeaderButtons> </Link> 
          <Link to='/features'><HeaderButtons> FEATURES</HeaderButtons></Link> 
          <Link to='/pricing'><HeaderButtons> PRICING</HeaderButtons></Link> 
        
                    <BlackHeaderButton>GET AN INVITE</BlackHeaderButton>
                    </Difforbuttons>
                    </Divformanue>
        </HeaderContainer>
       
  
    );
  }

  export default Header;

  // const MObileStyle = styled.div`
 
  // `;
  
const HeaderContainer = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: space-around;
align-items: start;
margin:auto;
flex-direction: column;
margin-bottom:10px;
margin-top:-10px;
gap:10px;
margin-top:80px;
margin-bottom:30px;

@media (min-width: 767px ) {
  width: 100%;
height: 75px;
display: flex;
justify-content: start;
align-items: center;
margin:auto;
flex-direction: row;

}

@media (min-width: 992px ) {
  width: 100%;
height: 75px;
display: flex;
justify-content: space-around;
align-items: center;
margin:auto;
flex-direction: row;
}

`;

const HeaderButtons = styled.button`
color: #000;
font-size: 12px;
font-family: DM Sans;
font-weight: 700;
letter-spacing: 2px;
background-color: white;
border: none;


&:hover {
  background-color: #f0f0f0;
}

@media (min-width: 992px) {

  color: #000;
font-size: 15px;
font-family: DM Sans;
font-weight: 700;
letter-spacing: 2px;
background-color: white;
border: none;
}
`;



const BlackHeaderButton = styled.button`

height: 40px;
background: #000;
color: white;
/* margin-top:-20px; */
width:300px;
margin-bottom:15px;
&:hover {
  background: #dfdfdf;
  color: black;
}

@media (min-width: 767px) {
  width: 120px;
height: 25px;
margin-bottom:0px;
text-size-adjust:5px;


background: #000;
color: white;
&:hover {
  background: #dfdfdf;
  color: black;

}
}


@media (min-width: 992px) {

  height: 40px;
background: #000;
color: white;
/* margin-top:-20px; */
width:300px;

&:hover {
  background: #dfdfdf;
  color: black;
}
}
`;

const Divorsvges = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin:auto;
gap:100px;



@media (min-width: 767px) {
  width:5%;
  gap:10px;
  display:flex;
flex-direction:row;
justify-content:start;
align-items:start;
margin-left:-20px;

}

@media (min-width: 992px) {
  width:20%;

  display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin:auto;
gap:300px;

}


`;



const Divformanue = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:auto;
gap:15px;
margin-top:15px;
margin-bottom:20px;
/* margin-left:50px;*/


 @media (min-width: 772px) { 
 margin-left:1px;

margin-bottom:1px;
margin-top:50px;
display:flex;
flex-direction:row;
flex-direction:start;
gap:10px;

} 

@media (min-width: 992px) { 
 margin-left:1px;

margin-bottom:1px;
margin-top:50px;
display:flex;
flex-direction:row;
gap:150px;

} 

`;

const Difforbuttons = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:auto;
gap:15px;
width:100%;
@media (min-width: 767px) {

display:flex;
flex-direction:row;
justify-content:start;
align-items:center;
width:auto;
margin-top:0px;
margin-left:-300px;
gap:10px;
}

@media (min-width: 992px) {

  display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:auto;
margin-top:-50px;
gap:100px;
}
  
`;

const Divmobile = styled.div`

@media (min-width: 767px) {
  display:none;
}

`
;