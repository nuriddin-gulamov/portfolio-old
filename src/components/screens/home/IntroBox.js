import Subtitle from "../../utilities/Subtitle";
import CircledButton from "../../utilities/buttons/CircledButton";
import nuriddin from "../../../assets/me.png";

function IntroBox() {
  return (
    <div className="h-[300px] max-xl:h-[250px] max-sm:h-full bg-white rounded-3xl p-box max-[580px]:pb-[50px] flex max-[580px]:flex-col items-center relative cursor-pointer group">
      <img
        src={nuriddin}
        alt="Nuriddin"
        className="h-full max-sm:w-[50%] object-contain rounded-tl-3xl rounded-br-3xl"
      />
      <div className="ml-[35px] max-[580px]:ml-0 max-[580px]:mt-[35px] max-[580px]:self-start">
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
  );
}

export default IntroBox;
