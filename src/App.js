import { useSelector } from "react-redux";

import Header from "./components/UI/header/Header";
import HomeScreen from "./components/screens/HomeScreen";
import Footer from "./components/UI/footer/Footer";

function App({ ScreenComponent }) {
  const mobileNavOpened = useSelector((state) => state.mobileNavOpened);

  let screen = <HomeScreen />;

  if (ScreenComponent) {
    screen = ScreenComponent;
  }

  return (
    <div className="min-h-screen h-full w-full px-[20px] bg-gray relative">
      <div className="container">
        <Header />
        <div
          className={`pt-[50px] animate__animated ${
            mobileNavOpened ? "hidden" : "block"
          }`}
        >
          {screen}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
