import progression from "../../images/who-we-are/progression.png";
import workout from "../../images/who-we-are/workout.png";
import nutritions from "../../images/who-we-are/nutritions.png";

const cardStyles =
  "relative z-10 flex flex-col items-center gap-4 overflow-hidden rounded-br-3xl rounded-tl-3xl bg-white bg-[url('./images/who-we-are/card-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-10 text-center shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:z-[-1] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:bg-opacity-0";

function FeatureCards() {
  return (
    <div className="mt-[-50px] grid gap-14 2xl:grid-cols-3 2xl:gap-6">
      <div className={cardStyles}>
        <img src={progression} alt="progression" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase" style={{ fontFamily: "'Copse', serif" }}>Progression</h5>
        <p className="font-medium" style={{ fontFamily: "'Copse', serif" }}>
          Together, you and our team of specialists will develop a unique plan that takes you step by step toward achievement.
        </p>
      </div>
      <div className={cardStyles}>
        <img src={workout} alt="workout" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase" style={{ fontFamily: "'Copse', serif" }}>Workout</h5>
        <p className="font-medium" style={{ fontFamily: "'Copse', serif" }}>
          You will have everything you need to get into the best shape of your life with a range of training options.
        </p>
      </div>
      <div className={cardStyles}>
        <img src={nutritions} alt="nutritions" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase" style={{ fontFamily: "'Copse', serif" }}>Nutritions</h5>
        <p className="font-medium" style={{ fontFamily: "'Copse', serif" }}>
          Together, you and our staff will develop a customized meal plan that will enable you to meet your unique health objectives.
        </p>
      </div>
    </div>
  );
}

export default FeatureCards;
