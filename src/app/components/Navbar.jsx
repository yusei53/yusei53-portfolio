import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">yusei53's Portfolio!</Link>
      </div>
      <a href="" className="cta-btn">
        Resume
      </a>
    </div>
  );
};
