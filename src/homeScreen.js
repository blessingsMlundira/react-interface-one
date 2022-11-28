import React, { useState } from "react";
import { Header, Input, ToDos, Softkey, HomeScreen, BlackBG } from "./components";
import { useNavigation } from "./hooks";
import ReactDOM from "react-dom";
import SignUpThree from "./signUpThree";
import Imglogo from "./splash-screen-logo.png";

export default function App() {
  const [toDos, setToDo] = useState([]);

  const [current, setNavigation] = useNavigation();

  const onKeyCenter = () => {
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
    console.log("left key clicked");
    ReactDOM.render(<SignUpThree />, document.getElementById("root"));
    
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
      {/* <Header title="Homescreen content" /> */}
      <center>
          <img width="80%" height="100px" src={ Imglogo } />
      </center>

      <BlackBG />
          

      
      
       
      
      

       <Softkey
        left={current.type = "PREV"}
        onKeyLeft={onKeyLeft}
        right={current.type = "NEXT"}
        
        onKeyRight={onKeyRight}
        
      />
    </>
  );
}
