import { BsArrowRightShort } from "react-icons/bs";

function CircledButton() {
  return (
    <button className="w-[30px] h-[30px] flex justify-center items-center border-[1px] border-black rounded-full absolute bottom-[30px] right-[30px] max-xl:bottom-[20px] max-xl:right-[20px] transition duration500 group-hover:bg-black">
      <BsArrowRightShort className="text-[25px] text-black m-0 group-hover:text-white" />
    </button>
  );
}

export default CircledButton;
