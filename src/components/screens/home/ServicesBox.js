import Subtitle from "../../utilities/Subtitle";
import CircledButton from "../../utilities/buttons/CircledButton";
import { services } from "../../../data/data";

function ServicesBox() {
  return (
    <div className="bg-white rounded-3xl col-span-2 p-box relative group cursor-pointer flex flex-col justify-between">
      <div className="flex items-center justify-center h-[80%]">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="w-full group/service hover:scale-150 transition duration-500 cursor-pointer flex flex-col items-center justify-center">
              <Icon className="text-[50px]" />
              <h3 className="text-white text-[12px] group-hover/service:text-black transition duration-500">
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
  );
}

export default ServicesBox;
