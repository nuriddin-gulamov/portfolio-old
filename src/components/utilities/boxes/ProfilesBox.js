import { Link } from "react-router-dom";

import Subtitle from "../Subtitle";
import CircledButton from "../buttons/CircledButton";
import { profiles } from "../../../data/data";

function ProfilesBox() {
  return (
    <Link to='/contact' className="group">
      <div className="h-[300px] max-xl:h-[250px] max-lg:h-[300px] bg-white rounded-3xl p-box flex flex-col justify-between relative shadow-md">
        <div className="flex justify-center items-center bg-gray rounded-3xl h-[65%] px-[5px] mb-[15px]">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;

            return (
              <button
                className={`group/button w-[100px] h-[100px] max-xl:w-[75px] max-xl:h-[75px] rounded-full bg-white flex justify-center items-center ${
                  i !== 0 && "ml-[15px]"
                }`}
              >
                <Icon className="text-[35px] group-hover/button:scale-125 transition duration-500" />
              </button>
            );
          })}
        </div>
        <div>
          <Subtitle>MY SOCIAL PROFILES</Subtitle>
          <h2 className="text-[20px]">My Profiles</h2>
        </div>
        <CircledButton />
      </div>
    </Link>
  );
}

export default ProfilesBox;
