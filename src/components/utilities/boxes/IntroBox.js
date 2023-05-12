import { Link } from "react-router-dom";

import Subtitle from "../Subtitle";
import CircledButton from "../buttons/CircledButton";
import nuriddin from "../../../assets/me.png";

function IntroBox() {
  return (
    <Link to="/about" className="group" reloadDocument>
      <div className="h-[300px] max-xl:h-[250px] max-lg:h-[300px] max-sm:h-full bg-white rounded-3xl p-box max-[580px]:pb-50 flex max-[580px]:flex-col items-center relative shadow-md">
        <img
          src={nuriddin}
          alt="Nuriddin"
          className="h-full max-sm:w-half object-contain rounded-tl-3xl rounded-br-3xl"
        />
        <div className="ml-35 max-xl:ml-20 max-[580px]:ml-0 max-[580px]:mt-35 max-[580px]:self-start">
          <Subtitle>A REACT DEVELOPER</Subtitle>
          <h1 className="text-[35px] leading-10 max-xl:leading-9 text-black">
            Nuriddin
            <br className="max-[580px]:hidden" /> Gulamov.
          </h1>
          <p className="text-[15px] text-gray300 leading-5 mt-[10px] max-xl:leading-4">
            I am React & React Native Developer
            <br className="max-xl:hidden max-lg:block" /> from Tashkent,
            Uzbekistan.
          </p>
        </div>
        <CircledButton />
      </div>
    </Link>
  );
}

export default IntroBox;
