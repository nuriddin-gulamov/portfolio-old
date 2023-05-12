import { Link } from "react-router-dom";

import Subtitle from "../Subtitle";
import CircledButton from "../buttons/CircledButton";

function ProjectBox({ image, subtitle, title, link }) {
  return (
    <Link to={link} className="group" reloadDocument>
      <div className="h-[300px] max-xl:h-[250px] max-lg:h-[300px] bg-white rounded-3xl relative p-box flex flex-col justify-between shadow-md">
        <img
          src={image}
          alt=""
          className="w-full max-h-[75%] h-full object-contain self-center"
        />
        <div className="flex items-center justify-between mt-[10px]">
          <div>
            <Subtitle className='leading-tight'>{subtitle}</Subtitle>
            <h1 className="text-[20px]">{title}</h1>
          </div>
        </div>
        <CircledButton />
      </div>
    </Link>
  );
}

export default ProjectBox;
