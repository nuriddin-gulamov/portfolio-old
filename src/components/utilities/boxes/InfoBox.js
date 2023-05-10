import { Link } from "react-router-dom";

import Subtitle from "../Subtitle";
import CircledButton from "../buttons/CircledButton";

function InfoBox({ image, subtitle, title, link }) {
  return (
    <Link to={link} className="group">
      <div className="h-[300px] max-xl:h-[250px] max-lg:h-[300px] bg-white rounded-3xl relative p-box flex flex-col justify-between">
        <img
          src={image}
          alt=""
          className="w-full max-w-[300px] h-full object-contain self-center"
        />
        <div className="flex items-center justify-between mt-[10px]">
          <div>
            <Subtitle>{subtitle}</Subtitle>
            <h1 className="text-[20px]">{title}</h1>
          </div>
        </div>
        <CircledButton />
      </div>
    </Link>
  );
}

export default InfoBox;
