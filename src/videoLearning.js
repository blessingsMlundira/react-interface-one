import React, { useState } from "react";
import { Header, Input, ToDos, Softkey, VideoLearning } from "./components";
import { useNavigation } from "./hooks";
import {DefaultPlayer as Video} from 'react-html5video';
import { Player, ControlBar, PlayToggle } from 'video-react';
import videoFile from './videos/videoFile.mp4';
import 'react-html5video/dist/styles.css';
import ReactDOM from "react-dom";

export default function App() {
  const [toDos, setToDo] = useState([]);

  const [current, setNavigation] = useNavigation();

  const onKeyCenter = () => {
    // <Video autoPlay></Video>
    console.log("middle button clicked");

    console.log(document.getElementById("videoElem").nodeName);

    //pause and play video
    if (document.getElementById("videoElem").paused){
      document.getElementById("videoElem").play();
      
      
    }else {
      document.getElementById("videoElem").pause();
      
    }

    

    // const currentElement = document.querySelector("[nav-selected=true]");
    // const currentNavigationIndex = parseInt(currentElement.getAttribute("nav-index"), 0);

    const currentIndex = parseInt(
      document.querySelector("[nav-selected=true]").getAttribute("nav-index"),
      0
    );
    
  };

  const onKeyRight = () => {
    document.getElementById("videoElem").pause();
    document.getElementById("videoElem").currentTime = 0;
    const currentIndex = parseInt(
      document.querySelector("[nav-selected=true]").getAttribute("nav-index"),
      10
    );
    if (currentIndex > 0) {
      setToDo(prevState => {
        const current = [...prevState];
        current.splice(currentIndex - 1, 1);
        const goToPreviousElement = Boolean(current.length);
        setNavigation(goToPreviousElement ? currentIndex - 1 : 0);
        return current;
      });
    }
  };

  const onKeyLeft = () => {
    const currentIndex = parseInt(
      document.querySelector("[nav-selected=true]").getAttribute("nav-index"),
      10
    );
    if (currentIndex > 0) {
      setToDo(prevState => {
        const current = [...prevState];
        current.splice(currentIndex - 1, 1);
        const goToPreviousElement = Boolean(current.length);
        setNavigation(goToPreviousElement ? currentIndex - 1 : 0);
        return current;
      });
    }
  };

  return (
    <>
      <Header title="Introduction to genetics 1/12" />
      <div id="elemDiv">
          <Video 
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              width="240" height="250"
              id= "videoElem"
              onCanPlayThrough={() => {
                  // Do stuff
                  console.log("can play through");
              }}>

              <source src={ videoFile } type="video/webm" />
              
          </Video> 
      </div> 

      <Softkey
        

        // center={current.type === "VIDEO" ? "PAUSE" : "PLAY"}
        id="navElem"
        onKeyCenter={onKeyCenter}
        left={current.type = "PREV" }
        onKeyLeft={onKeyLeft}
        right={current.type = "NEXT" }
        onKeyRight={onKeyRight}
      />
    </>
  );
}
