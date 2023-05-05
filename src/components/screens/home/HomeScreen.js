import IntroBox from "./IntroBox";
import InfoBox from "./InfoBox";
import ServicesBox from "./ServicesBox";
import ProfilesBox from "./ProfilesBox";
import { infoBoxes } from "../../../data/data";

function HomeScreen() {
  return (
    <>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
        <IntroBox />
        <div className="h-[300px] max-lg:h-full max-xl:h-[250px] grid grid-cols-2 max-[580px]:grid-cols-1 gap-5">
          {infoBoxes.slice(0, 2).map((box) => (
            <InfoBox
              image={box.img}
              subtitle={box.subtitle}
              title={box.title}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1 gap-5 mt-[20px] h-[250px] max-xl:h-[250px] max-lg:h-full">
        {infoBoxes.slice(2, 3).map((box) => (
          <InfoBox image={box.img} subtitle={box.subtitle} title={box.title} />
        ))}
        <ServicesBox />
        <ProfilesBox />
      </div>
    </>
  );
}

export default HomeScreen;
