import React, { useState } from "react";
import { Header, Input, ToDos, Softkey, WelcomeNote } from "./components";
import { useNavigation } from "./hooks";
import ReactDOM from "react-dom";
// import App from "./App";
import HomeScreen from "./homeScreen";
import SignUpOne from "./signUpOne";

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
    console.log("right key clicked");
    ReactDOM.render(<HomeScreen />, document.getElementById("root"));
    
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
    ReactDOM.render(<SignUpOne />, document.getElementById("root"));
    
    
  };

  return (
    <>
      <Header title="Account details" />
       <center>
        <h3>Welcome Faith</h3>
            <p>Why are you joining?</p>
            <select >
                <option>For school studies</option>
                <option>For self learning</option>
            </select>
       </center>
      
      {/* <ToDos toDos={toDos} /> */}

      <Softkey
        left={current.type = "PREV" }
        
        onKeyLeft={onKeyLeft}
        right={current.type = "NEXT" }
        onKeyRight={onKeyRight}
      />
    </>
  );
}
