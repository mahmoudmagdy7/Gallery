import Footer from "../components/Footer";
import { StickyNavbar } from "../components/StickyNavbar";

function AboutMe() {
  return (
    <>
      <div className="h-full">
        <StickyNavbar />
        <article className="bg-white m-5 text-center py-5 px-3 shadow-md rounded-xl">
          <h1 className="text-3xl ct-primary font-bold"> عني </h1>
          <p className="mt-5 sm:text-lg">
            <p className="mb-2">الاسم / مجدى رزق أحمد معلم خبير رياضيات ابتدائى</p> شاعر و كاتب قصة فنان أوريجامى origami فنان بورتريه رصاص و فحم محب للثقافة و
            العلوم و الفنون
            <p className="mb-2"> الجنسية / مصرى مواليد / 1969م</p>
            شرفنى مروركم الكريم ❤️ و يسعدنى تواصلكم{" "}
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
