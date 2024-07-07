import positivus from "../assets/positivus.svg";

function Navbar() {
  return (
    <nav className="px-28 fixed top-0 left-0 flex justify-between items-center h-24 bg-white w-full">
      <img src={positivus} alt="logo" />
      <div className="flex justify-between gap-10 font-semibold">
        <a href="/">About Us</a>
        <a href="/">Services</a>
        <a href="/">Use Cases</a>
        <a href="/">Pricing</a>
        <a href="/">Blog</a>
      </div>
      <button className="p-4 w-52 h-16 border border-black rounded-2xl hover:bg-black hover:text-white text-xl">
        Request a quot
      </button>
    </nav>
  );
}

export default Navbar;
