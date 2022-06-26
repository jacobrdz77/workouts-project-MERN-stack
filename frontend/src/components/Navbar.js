import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <h1>
          <Link to="/">Workout Buddy</Link>
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
