import Subtitle from "../../utilities/Subtitle";
import CircledButton from "../../utilities/buttons/CircledButton";

function InfoBox({ image, subtitle, title }) {
  return (
    <div className="bg-white rounded-3xl relative p-box flex flex-col justify-between group cursor-pointer">
      <img src={image} alt="" className="w-full h-full object-contain" />
      <div className="flex items-center justify-between mt-[10px]">
        <div>
          <Subtitle>{subtitle}</Subtitle>
          <h1 className="text-[20px]">{title}</h1>
        </div>
      </div>
      <CircledButton />
    </div>
  );
}

export default InfoBox;
