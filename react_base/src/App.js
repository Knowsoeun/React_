import "./App.css"
import Hello from "./component/Hello";
import Hi from "./component/Hi";
import Title from "./component/Title";
import Count from "./component/Count";
import Clock from "./component/Clock";
import Form from "./component/Form";
import SignupForm from "./component/SignupForm";
import First from "./component/First";
import { useState } from "react";
import CountEffect from "./component/hooks/useEffect/CountEffect";
import Container from "./component/themeTest/Container";
import ThemeButton from "./component/themeTest/ThemeButton";
import { themes } from "./component/themeTest/Themes";
import { ThemeContext } from "./component/themeTest/ThemeContext";
import MemoContainer from "./component/understanding/MemoContainer";



function App(){
  const [isDark, setIsDark] = useState(true);
  const changeMode= () => {
    setIsDark(!isDark);
  };
  /* const [time, setTime]=useState(new Date().toLocaleString());
  setInterval(() => {
    setTime(new Date().toLocaleString());
  }, 1000); */

  return (
    <div className="App">
      <header className="App-header">
        <MemoContainer></MemoContainer>
        {/* <ThemeContext.Provider value={{themes: isDark ? themes.dark: themes.light, changeMode}}>
          <Container setIsDark={setIsDark} isDark={isDark}></Container>
        </ThemeContext.Provider> */}
        {/* <First></First>
        // <Vote></Vote> */}
        {/* <Form></Form>
        <SignupForm></SignupForm> */}
        {/* <Hi></Hi>
        <Hello></Hello>
        <Title title ="hello" name="react">
          <Title title="pppp" name="aaaa"></Title>
        </Title>
        <Title title = "hi" name="reactt1"></Title>
        <Count></Count>
        <Clock time={time}></Clock> */}
        {/* <div className="App">
        <header className="App-header">
        <CountEffect></CountEffect>
        </header>
        </div> */}
      </header>
    </div>
  );
}




export default App;