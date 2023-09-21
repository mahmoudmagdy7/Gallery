import Footer from "../components/Footer";
import { StickyNavbar } from "../components/StickyNavbar";

function AboutMe() {
  return (
    <>
      <div>
        <StickyNavbar />
        <article className="bg-white m-5 text-center py-5 px-3 shadow-md rounded-xl">
          <h1 className="text-3xl ct-primary font-bold"> عني </h1>
          <div className="mt-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi distinctio consectetur eveniet atque vero provident deserunt laborum. Quam velit
              pariatur, assumenda modi nesciunt, voluptates id possimus quae eius ullam architecto.
            </p>{" "}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi distinctio consectetur eveniet atque vero provident deserunt laborum. Quam velit
              pariatur, assumenda modi nesciunt, voluptates id possimus quae eius ullam architecto.
            </p>{" "}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi distinctio consectetur eveniet atque vero provident deserunt laborum. Quam velit
              pariatur, assumenda modi nesciunt, voluptates id possimus quae eius ullam architecto.
            </p>{" "}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi distinctio consectetur eveniet atque vero provident deserunt laborum. Quam velit
              pariatur, assumenda modi nesciunt, voluptates id possimus quae eius ullam architecto.
            </p>{" "}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi distinctio consectetur eveniet atque vero provident deserunt laborum. Quam velit
              pariatur, assumenda modi nesciunt, voluptates id possimus quae eius ullam architecto.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
