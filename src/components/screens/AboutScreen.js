import nuriddin from "../../assets/me.png";
import InfoCard from "../utilities/InfoCard";
import { fundamentals, history } from "../../data/data";

function AboutScreen() {
  return (
    <>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:flex max-lg:flex-col gap-5">
        <div className="min-h-[300px] rounded-3xl bg-white p-box flex justify-center items-center max-lg:self-center">
          <img
            src={nuriddin}
            alt=""
            className="rounded-tl-3xl rounded-br-3xl max-h-[300px]"
          />
        </div>
        <div className="min-h-[300px] bg-white rounded-3xl p-box col-span-2 flex flex-col justify-center">
          <h1 className="text-center uppercase text-[45px] leading-tight max-sm:text-left max-sm:text-[35px]">
            All About Myself!
          </h1>
          <p className="px-[20px] max-lg:px-0 mt-[20px] text-gray400">
            Speaking About MYSELF, I am 15 year old guy born in Tashkent,
            Uzbekistan 🇺🇿. My name is Nuriddin, Gulamov. I have put in the work
            with all of the interest towards my Coding skills. I have 2 years of
            experience. In this past 2 years, I first worked to learn more IT
            skills, and then I stated working on some real-life projects as an
            assistant 👨🏻‍💻, now I would love some intern opportunities that you
            may offer me. Also, I took some time to gain IELTS 7+ Band Score 🛑.
            I think it's not a bad achievement. Which means, I can communicate
            in English with any clients abroad in English language. I reckon
            that I learned many things in these past 2 years, and now I'm raring
            to gain more experience with wonderful teams. Thanks for
            attention!!!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 mt-[20px]">
        <div className="min-h-[300px] bg-white rounded-3xl p-[30px]">
          <h3 className="mb-[20px] uppercase text-[18px] font-semibold">
            More About Me
          </h3>
          {fundamentals.map((data, i) => (
            <InfoCard index={i} data={data} />
          ))}
        </div>
        <div className="min-h-[300px] bg-white rounded-3xl p-[30px]">
          <h3 className="mb-[20px] uppercase text-[18px] font-semibold">
            What I have been busy with?
          </h3>
          {history.map((data, i) => (
            <InfoCard index={i} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutScreen;
