import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const ThemeButton = () => {
    const themeContext = useContext(ThemeContext);
    const onClickHandler = ()=> {
        themeContext.changeMode();
    };
    return (
        <button style={{background: themeContext.themes.background, color: themeContext.themes.foreground }} onClick={() => onClickHandler()}>
        버튼 컬러보기
        </button>
    );
};
export default ThemeButton;