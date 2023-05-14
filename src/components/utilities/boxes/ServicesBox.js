import { Link } from "react-router-dom";

import Subtitle from "../Subtitle";
import CircledButton from "../buttons/CircledButton";
import { services } from "../../../data/data";

function ServicesBox() {
  return (
    <Link to="/works" className="group col-span-2 max-lg:col-span-1">
      <div className="h-[300px] max-lg:h-full max-xl:h-[250px] max-md:h-[300px] bg-white rounded-3xl p-box relative flex flex-col justify-between shadow-md">
        <div className="flex items-center justify-center h-[80%]">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="w-full group/service hover:scale-150 transition duration-500 cursor-pointer flex flex-col items-center justify-center">
                <Icon className="text-[50px] max-sm:text-[35px]" />
                <h3 className="leading-tight text-center text-[12px] hidden group-hover/service:block transition duration-500">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
        <div>
          <Subtitle>MY CODING SKILLS</Subtitle>
          <h1 className="text-[20px]">What Can I do?</h1>
        </div>
        <CircledButton />
      </div>
    </Link>
  );
}

export default ServicesBox;
