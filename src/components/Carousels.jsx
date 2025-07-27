import Marquee from "react-fast-marquee";

export const CompanyCarousel = () => {
  return (
    <div className="px-4 sm:px-6">
      <Marquee gradient={false} speed={50}>
        <div className="flex items-center gap-6 sm:gap-8">
          <img
            src="https://www.svgrepo.com/show/303246/google-1-1-logo.svg"
            className="h-10 sm:h-12 md:h-14 w-auto lg:h-54"
            alt="Google"
          />
          <img
            src="https://www.svgrepo.com/show/303143/microsoft-logo.svg"
            className="h-10 sm:h-12 md:h-14 w-auto lg:h-54"
            alt="Microsoft"
          />
          <img
            src="https://www.svgrepo.com/show/303196/netflix-2-logo.svg"
            className="h-10 sm:h-12 md:h-14 w-auto lg:h-54"
            alt="Netflix"
          />
          <img
            src="https://www.svgrepo.com/show/303377/ibm-logo.svg"
            className="h-9 sm:h-11 md:h-12 w-auto lg:h-42"
            alt="IBM"
          />
          <img
            src="https://www.svgrepo.com/show/303151/slack-logo.svg"
            className="h-10 sm:h-12 md:h-14 w-auto lg:h-54"
            alt="Slack"
          />
          <img
            src="https://www.svgrepo.com/show/303165/facebook-1-logo.svg"
            className="h-11 sm:h-13 md:h-15 w-auto lg:h-60"
            alt="Facebook"
          />
        </div>
      </Marquee>
    </div>
  );
};
