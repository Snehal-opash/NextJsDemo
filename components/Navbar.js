import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link id="link" href="/">
     Home 
            </Link>
          </li>
          <li>
            <Link  id="link" href="/about">
             About 
            </Link>
          </li>
          <li>
            <Link id="link" href="/contact">
             Contact 
            </Link>
          </li>
          <li>
            <Link id="link" href="/blog">
               Blog 
            </Link>
          </li>
          <li>
            <Link id="link" href="/product">
             Product
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
