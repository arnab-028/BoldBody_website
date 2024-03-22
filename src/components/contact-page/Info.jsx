import SocialLinks from "../footer/SocialLinks";

const headingStyles = `relative mb-4 mt-6 pb-2 text-xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red`;

function Info() {
  return (
    <div>
      <h3 className="mb-4 text-3xl font-bold">
        We are here for help you To Shape Your Body
      </h3>
      <p className="font-medium text-gray-300">
        At BoldBody Gym, we believe in transforming bodies and lives through fitness, empowerment, and community. Located in the heart of Park Street, Kolkata, we are dedicated to providing unparalleled fitness experiences tailored to meet the needs of every individua
      </p>
      <div className="grid 2xl:grid-cols-2 2xl:gap-y-8">
        <div>
          <h4 className={headingStyles}>Park Street, Kolkata</h4>
          <address className="font-medium not-italic text-gray-300">
            2nd G/A lane,
            <br /> Park Street, Kolkata
          </address>
        </div>
        <div>
          <h4 className={headingStyles}>Opening Hours</h4>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Fri: 7:30 am — 1:00 am
          </p>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Fri: 7:30 am — 1:00 am
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Information</h4>
          <a
            href="tel:+98-21-225-429-71"
            className="block font-medium text-gray-300"
          >
            +91 7777777777
          </a>
          <a
            href="mailto:example@boldbody.com"
            className="block font-medium text-gray-300"
          >
            example@boldbody.com
          </a>
        </div>
        <div>
          <h4 className={headingStyles}>Follow Us On</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Info;
