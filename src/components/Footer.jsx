import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="cbg-primary pt-5 text-white text-center">
      <div className="my-24">footer</div>
      <p className="bg-gray-900 pt-2 p-0">
        <span> Designed By </span>
        <Link className="m-0 p-0 ct-primary">Mahmoud Magdy</Link>
        <span> and </span>

        <Link className="m-0 p-0 ct-primary"> Ahmed Ashraf</Link>
      </p>
    </div>
  );
}

export default Footer;
