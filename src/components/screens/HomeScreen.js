import IntroBox from "../utilities/boxes/IntroBox";
import InfoBox from "../utilities/boxes/InfoBox";
import ServicesBox from "../utilities/boxes/ServicesBox";
import ProfilesBox from "../utilities/boxes/ProfilesBox";
import { infoBoxes } from "../../data/data";

function HomeScreen() {
  const ieltsBox = infoBoxes[2];

  return (
    <>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
        <IntroBox />
        <div className="h-full grid grid-cols-2 max-[580px]:grid-cols-1 gap-5">
          {infoBoxes.slice(0, 2).map((box) => (
            <InfoBox
              image={box.img}
              subtitle={box.subtitle}
              title={box.title}
              link={box.to}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-20 h-full">
        <InfoBox
          image={ieltsBox.img}
          subtitle={ieltsBox.subtitle}
          title={ieltsBox.title}
          link={ieltsBox.to}
        />
        <ServicesBox />
        <ProfilesBox />
      </div>
    </>
  );
}

export default HomeScreen;
