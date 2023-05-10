import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to='/'>
      <h1 className="text-[28px] text-black">
        Nuriddin<span className="text-primary">G</span>
      </h1>
    </Link>
  );
}

export default Logo;
