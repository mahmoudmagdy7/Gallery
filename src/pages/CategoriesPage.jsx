import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { StickyNavbar } from "../components/StickyNavbar";

function CategoriesPage() {
  return (
    <div className="h-screen  flex  flex-col">
      <StickyNavbar />

      <div className="grow">
        {" "}
        <Categories />
      </div>

      <Footer />
    </div>
  );
}

export default CategoriesPage;
