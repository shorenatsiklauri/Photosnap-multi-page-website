import styled from "styled-components";
import Createandsharepicture from "../assets/home/desktop/create-and-share.jpg";
import Beutifulstory from "../assets/home/desktop/beautiful-stories.jpg";
import Designedpicture from "../assets/home/desktop/designed-for-everyone.jpg";
import Mauntain from "../assets/stories/desktop/mountains.jpg";
import CitySun from "../assets/stories/desktop/cityscapes.jpg";
import Voiager from "../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../assets/stories/desktop/architecturals.jpg";

const Homepage = () => {
  return (
    <Maindiv>
      <Divforpictureandtext>
        <Divfortext>
          <Paragrapaboutsharestory>
            Create and share your photo stories.{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </Contentelement>
          <GetAnIntiveelement>
            <TextGetANINTIVE> GET AN INVITE</TextGetANINTIVE>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="white">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </GetAnIntiveelement>
        </Divfortext>
        <Divforpicture>
          <Picturestyle src={Createandsharepicture} alt="My Image" />{" "}
        </Divforpicture>{" "}
      </Divforpictureandtext>

      <Divforpictureandtext>
        <Divforpicture>
          <Picturestyle src={Beutifulstory} alt="One" />{" "}
        </Divforpicture>
        <Divfortext>
          <Paragrapaboutsharestory>
            BEAUTIFUL STORIES EVERY TIME{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </Contentelement>
          <GetAnIntiveelement>
            <TextGetANINTIVE> VIEW THE STORIES</TextGetANINTIVE>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="white">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </GetAnIntiveelement>
        </Divfortext>
      </Divforpictureandtext>

      <Divforpictureandtext>
        <Divfortext>
          <Paragrapaboutsharestory>
            Create and share your photo stories.{" "}
          </Paragrapaboutsharestory>
          <Contentelement>
            {" "}
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </Contentelement>
          <GetAnIntiveelement>
            <TextGetANINTIVE> GET AN INVITE</TextGetANINTIVE>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="white">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </GetAnIntiveelement>
        </Divfortext>
        <Divforpicture>
          <Picturestyle src={Designedpicture} alt="My Image" />{" "}
        </Divforpicture>{" "}
      </Divforpictureandtext>
      <Divforsmallpictures>
        <SmalldiveOne>
          <ParagrMauntains>The Mountains</ParagrMauntains>
          <ParagraphbyWho>by John Appleseed</ParagraphbyWho>
          <Readstorydiv>
            <TextGetANINTIVE> READ STORY</TextGetANINTIVE>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="white">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Readstorydiv>
        </SmalldiveOne>

        <Smalldivesecond>
          <ParagrMauntains>The Mountains</ParagrMauntains>
          <ParagraphbyWho>by John Appleseed</ParagraphbyWho>
          <Readstorydiv>
            <TextGetANINTIVE> READ STORY</TextGetANINTIVE>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="white">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Readstorydiv>
        </Smalldivesecond>

        <Smalldivethree>
          <ParagrMauntains>The Mountains</ParagrMauntains>
          <ParagraphbyWho>by John Appleseed</ParagraphbyWho>
          <Readstorydiv>
            <TextGetANINTIVE> READ STORY</TextGetANINTIVE>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="white">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Readstorydiv>
        </Smalldivethree>

        <Smalldivefour>
          <ParagrMauntains>The Mountains</ParagrMauntains>
          <ParagraphbyWho>by John Appleseed</ParagraphbyWho>
          <Readstorydiv>
            <TextGetANINTIVE> READ STORY</TextGetANINTIVE>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="white">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Readstorydiv>
        </Smalldivefour>
      </Divforsmallpictures>
    </Maindiv>
  );
};

export default Homepage;

const Maindiv = styled.div`
  width: 100%;
`;
const Divforpictureandtext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin:0px;
  padding:0px;
`;

const Divfortext = styled.div`
  background: black;
  padding-top: 170px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width:40%;

  
`;

const Divforpicture = styled.div`
width:70%;
height:105%;

  
`;

const Paragrapaboutsharestory = styled.p`
  color: #fff;
  font-size: 40px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 4.167px;
  text-transform: uppercase;
`;

const Contentelement = styled.h1`
  color: #fff;
  font-size: 15px;
  font-family: DM Sans;
  line-height: 25px;
  opacity: 0.6000000238418579;
`;

const GetAnIntiveelement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: auto;
`;

const TextGetANINTIVE = styled.h1`
  color: #fff;
  font-size: 12px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Divforsmallpictures = styled.div`
  display: flex;
  flex-direction: row;
`;
const SmalldiveOne = styled.div`
  height: 360px;
  background: url(${Mauntain});
  background-size: cover;
  width: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
`;
const ParagrMauntains = styled.p`
  margin-top: 245px;
  color: white;
`;
const ParagraphbyWho = styled.p`
  color: white;
  margin-top: -12px;
`;

const Readstorydiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
  border-top: solid 1px white;
  padding-top: 10px;
  width: 300px;
`;

const Smalldivesecond = styled.div`
  height: 360px;
  background: url(${CitySun});
  background-size: cover;
  width: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
`;

const Smalldivethree = styled.div`
  height: 360px;
  background: url(${Voiager});
  background-size: cover;
  width: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
`;
const Smalldivefour = styled.div`
  height: 360px;
  background: url(${architecturals});
  background-size: cover;
  width: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
`;

const Picturestyle=styled.img`
min-width:100%;
height:100%;
  
`;
