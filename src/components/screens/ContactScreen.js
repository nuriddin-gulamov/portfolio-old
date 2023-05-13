import Subtitle from "../utilities/Subtitle";
import SubmitButton from "../utilities/buttons/SubmitButton";
import { contactInfo } from "../../data/data";

function ContactScreen() {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-5 mb-20">
      <div className="col-span-2 bg-white min-h-[500px] shadow-md rounded-3xl p-[35px]">
        <h1 className="text-[45px]">
          Let's work <span className="text-primary">Together.</span>
        </h1>
        <form
          className="flex flex-col mt-[30px]"
          action="mailto:gm.nuriddin2020@gmail.com"
          method="get"
          enctype="text/plain"
          // onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="p-[10px] outline-0 bg-gray rounded-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-[10px] outline-0 bg-gray rounded-lg mt-[15px]"
          />
          <textarea
            placeholder="Message"
            className="p-[10px] outline-0 bg-gray rounded-lg mt-[15px]"
          />
          <SubmitButton className="mt-[15px]">Submit</SubmitButton>
        </form>
      </div>
      <div className="p-[10px] max-lg:mt-[20px]">
        <h2 className="uppercase text-[16px] text-black px-[20px]">
          Contact info
        </h2>
        {contactInfo.map((info) => {
          const Icon = info.icon;

          return (
            <a href={info.link} target="_blank" rel="noreferrer">
              <div className="flex items-center mt-[10px] p-box hover:bg-white hover:shadow-md transition duration-500 rounded-xl cursor-pointer group">
                <div className="w-[75px] h-[75px] bg-white group-hover:bg-gray rounded-xl flex justify-center items-center shadow-md group-hover:shadow-none transition duration-500">
                  <Icon className="text-[30px] text-primary" />
                </div>
                <div className="ml-[15px] w-[50%]">
                  <Subtitle className="uppercase">{info.subtitle}</Subtitle>
                  <h2 className="text-[14px]">{info.title}</h2>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ContactScreen;
