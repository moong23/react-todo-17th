import { useEffect, useState } from "react";
import Mainpage from "./pages/Mainpage/Mainpage";

function App() {
  const [clickedIcon, setClickedIcon] = useState("");
  const [mainIconPosition, setMainIconPosition] = useState(
    JSON.parse(localStorage.getItem("mainIconPosition")) ?? {
      top: 30,
      left: 30,
    }
  );
  const [textIconPosition, setTextIconPosition] = useState(
    JSON.parse(localStorage.getItem("textIconPosition")) ?? {
      top: 150,
      left: 30,
    }
  );

  useEffect(() => {
    if (!localStorage.getItem("mainIconPosition")) {
      localStorage.setItem(
        "mainIconPosition",
        JSON.stringify(mainIconPosition)
      );
    }
    if (!localStorage.getItem("textIconPosition")) {
      localStorage.setItem(
        "textIconPosition",
        JSON.stringify(textIconPosition)
      );
    }
  }, [mainIconPosition, textIconPosition]);

  useEffect(() => {});
  return <Mainpage clickedIcon={clickedIcon} setClickedIcon={setClickedIcon} />;
}

export default App;
