import TertiaryHeading from "../../headings/TertiaryHeading";

import mountain from "../../../images/about-page/mountain.png";
import target from "../../../images/about-page/target.png";
import img1 from "../../../images/about-page/img1.webp";
import img2 from "../../../images/about-page/img2.webp";

function History() {
  return (
    <section className="bg-[url('./images/about-page/bg.png')] bg-cover px-6 py-32 text-center">
      <div className="container grid shadow-2xl xl:grid-cols-2 ">
        <div className="flex h-full flex-col gap-4 self-center bg-white p-6"> {/* Adjusted padding here */}
          <img
            src={target}
            alt=""
            className="hover:rotate-y-180 mx-auto w-32 transition-all duration-700"
          />
          <TertiaryHeading>Why choose us</TertiaryHeading>
          <ul className="text-left list-disc">
            <li className="font-medium text-gray-300">
              Expert Guidance: Benefit from the expertise of our certified trainers who are committed to helping you achieve your fitness goals safely and effectively.
            </li>
            <li className="font-medium text-gray-300">
              Convenience: Located in the vibrant Park Street area, our gym offers convenience and accessibility for individuals living and working in Kolkata.
            </li>
            <li className="font-medium text-gray-300">
              Results-Oriented Approach: Our holistic approach to fitness ensures that you achieve sustainable results that go beyond physical transformation, leading to long-term health and well-being.
            </li>
          </ul>
        </div>

        <div className="overflow-hidden">
          <img
            src={img1}
            alt=""
            className="h-full transition-all duration-300 hover:scale-110"
          />
        </div>

        <div className="flex h-full flex-col gap-4 self-center bg-white p-6 xl:order-4"> {/* Adjusted padding here */}
          <img
            src={mountain}
            alt=""
            className="hover:rotate-y-180 mx-auto transition-all duration-700"
          />
          <TertiaryHeading>Our Mission</TertiaryHeading>
          <p className="font-medium text-gray-300">
            To inspire, motivate, and empower individuals to achieve their fitness goals, leading to a healthier, happier lifestyle
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src={img2}
            alt=""
            className="h-full transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default History;
