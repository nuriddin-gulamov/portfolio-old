import { Link } from "react-router-dom";
import { MdWork } from "react-icons/md";

import StatsBox from "../../utilities/boxes/StatsBox";
import { stats } from "../../../data/data";
import CircledButton from "../../utilities/buttons/CircledButton";

function FooterTop() {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
      <div className="min-h-[220px] max-[580px]:min-h-[350px] bg-white rounded-3xl p-box flex max-[580px]:flex-col justify-center items-center">
        {stats.map((stat, i) => (
          <StatsBox
            numbers={stat.numbers}
            title={stat.title}
            index={i}
            key={i}
          />
        ))}
      </div>
      <Link to="contact" className="group">
        <div className="h-[220px] bg-white rounded-3xl relative p-box flex flex-col justify-center">
          <MdWork className="text-[35px]" />
          <h1 className="mt-[15px] text-[50px] leading-none">
            Let's work <br />
            <span className="text-primary">Together.</span>
          </h1>
          <CircledButton />
        </div>
      </Link>
    </div>
  );
}

export default FooterTop;
