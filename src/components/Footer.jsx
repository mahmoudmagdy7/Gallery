import { Button } from "@nextui-org/react";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" pt-5 text-black text-start border-t-2  container m-auto">
      <div className="grid-cols-1 sm:grid-cols-2 gap-4 grid">
        <div>
          <h2 className="font-bold text-lg">طرق التواصل </h2>
          <ul className="flex justify-start mt-5 gap-5 items-center">
            <li>
              <Button as={Link} to={"https://wa.me/201062210524"} target="blanc" isIconOnly variant="flat" className="bg-green-50">
                <WhatsappLogo size={25} className="text-green-300 " weight="fill" />{" "}
              </Button>{" "}
            </li>
            <li>
              <Button isIconOnly variant="flat" className="bg-red-50">
                <InstagramLogo size={25} className="text-red-300" weight="light" />{" "}
              </Button>
            </li>
            <li>
              <Button isIconOnly variant="flat" className="bg-blue-50">
                <FacebookLogo size={25} className="text-blue-300" weight="bold" />{" "}
              </Button>
            </li>
          </ul>{" "}
        </div>
        <ul>
          <h2 className="font-bold text-lg">من نحن</h2>
          <li>
            <p className="mt-5 sm:text-lg">
              <p className="mb-2">الاسم / مجدى رزق أحمد معلم خبير رياضيات ابتدائى</p> شاعر و كاتب قصة فنان أوريجامى origami فنان بورتريه رصاص و فحم محب للثقافة
              و العلوم و الفنون
              <p className="mb-2"> الجنسية / مصرى مواليد / 1969م</p>
              شرفنى مروركم الكريم ❤️ و يسعدنى تواصلكم{" "}
            </p>{" "}
          </li>
        </ul>
      </div>
      <p className=" py-4 text-center">
        <div>
          <span> Designed By </span>
          <Link className="m-0 p-0 ct-primary" to="https://www.facebook.com/mahmoudmagdy47/" target="blanc">
            Mahmoud Magdy
          </Link>
          <span> and </span>

          <Link className="m-0 p-0 ct-primary ms-3" to="https://www.facebook.com/ahmedashrafaly22" target="blanc">
            {" "}
            Ahmed Ashraf
          </Link>
        </div>
        <span className="mx-2">v.7.2</span>
      </p>
    </div>
  );
}

export default Footer;
