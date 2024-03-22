import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="mb-10">
      <SecondaryHeading>Why choose us</SecondaryHeading>
      <TertiaryHeading color="white">
        We can give a shape of your body here!
      </TertiaryHeading>
      <p className="font-medium text-gray-200">
        At <b>BoldBody</b>, Our goal is to assist you in getting the body of your desires. Together, you and our knowledgeable trainers and nutritionists will develop a customized exercise and dietary plan that will enable you to accomplish your unique objectives.

      </p>
    </div>
  );
}

export default Title;
