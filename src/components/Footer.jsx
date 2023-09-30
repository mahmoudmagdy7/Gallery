import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" pt-5 text-black text-start border-t-2  container m-auto">
      <div className="grid-cols-1 sm:grid-cols-2 gap-4 grid">
        <ul>
          <h2 className="font-bold text-lg">طرق التواصل </h2>
          <li>واتساب </li>
          <li>فيسبوك </li>
          <li>رقم الهاتف </li>
        </ul>{" "}
        <ul>
          <h2 className="font-bold text-lg">من نحن</h2>
          <li>
            مجدي سلامة Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere odit modi accusantium, adipisci minima pariatur corporis quod
            voluptatem. Perferendis rem omnis a aliquam aut aperiam corrupti amet debitis exercitationem.
          </li>
        </ul>
      </div>
      <p className=" py-4 text-center">
        <span> Designed By </span>
        <Link className="m-0 p-0 ct-primary" to="https://www.facebook.com/mahmoudmagdy47/" target="blanc">
          Mahmoud Magdy
        </Link>
        <span> and </span>

        <Link className="m-0 p-0 ct-primary ms-3" to="https://www.facebook.com/ahmedashrafaly22" target="blanc">
          {" "}
          Ahmed Ashraf
        </Link>
        <span>v.7.1</span>
      </p>
    </div>
  );
}

export default Footer;
