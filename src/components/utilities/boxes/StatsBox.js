import Subtitle from "../Subtitle";

function StatsBox({ numbers, title, index }) {
  return (
    <div
      className={`w-[50%] max-[580px]:w-full h-full rounded-3xl bg-gray flex flex-col justify-center items-center p-20 ${
        index !== 0 && "ml-20 max-[580px]:ml-0 max-[580px]:mt-[15px]"
      }`}
    >
      <h1 className="text-[30px] text-primary font-semibold">{numbers}</h1>
      <Subtitle className="mt-[15px] text-center">{title}</Subtitle>
    </div>
  );
}

export default StatsBox;
