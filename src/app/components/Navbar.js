import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-lg font-bold">E-Commerce</a>
        </Link>
        <Link href="/cart">
          <a className="text-gray-700">🛒 Cart</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;