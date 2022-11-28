import React, { useState } from "react";
import { Header, Input, ToDos, Softkey, audioLearning } from "./components";
import { useNavigation } from "./hooks";
import audioFile from './audios/audioFile.mp3';
export default function App() {
  const [toDos, setToDo] = useState([]);

  const [current, setNavigation] = useNavigation();

  const onKeyCenter = () => {
    if (document.getElementById("audioElem").paused){
      document.getElementById("audioElem").play();
      
      
    }else {
      document.getElementById("audioElem").pause();
    }
    const currentElement = document.querySelector("[nav-selected=true]");
    const currentNavigationIndex = parseInt(currentElement.getAttribute("nav-index"), 10);

    const isATask = currentNavigationIndex > 0;
    if (isATask) {
      setToDo(prevState => {
        const current = [...prevState];
        current[currentNavigationIndex - 1].completed = !current[currentNavigationIndex - 1].completed;
        return current;
      });
    } else if (currentElement.value.length) {
      const toDo = { name: currentElement.value, completed: false };
      setToDo(prevState => [...prevState, toDo]);
      currentElement.value = "";
    }
  };

  const onKeyRight = () => {
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
       <center>
        <h3>Genetic disorders</h3>

        <p>This will display some info on the lesson</p>
            <br />
            <audio src={audioFile} controls id="audioElem" />
            
       </center>
      
      

      <Softkey
        left={current.type = "PREV" }
        // center={current.type = "PLAY" }
        right={current.type = "NEXT" }
        
        onKeyLeft={onKeyLeft}
        onKeyCenter={onKeyCenter}
        onKeyRight={onKeyRight}
      />
    </>
  );
}
