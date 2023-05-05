import { useSelector } from "react-redux";

import Header from "./components/UI/header/Header";
import HomeScreen from "./components/screens/home/HomeScreen";

function App({ ScreenComponent }) {
  const mobileNavOpened = useSelector((state) => state.mobileNavOpened);

  let screen = <HomeScreen />;

  if (ScreenComponent) {
    screen = ScreenComponent;
  }

  return (
    <div className="min-h-screen h-full w-full bg-gray relative">
      <div className="container">
        <Header />
        <div
          className={`px-[20px] py-[75px] animate__animated ${
            mobileNavOpened ? "hidden" : "block"
          }`}
        >
          {screen}
        </div>
      </div>
    </div>
  );
}

export default App;
