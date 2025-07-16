import Marquee from "react-fast-marquee";

export const CompanyCarousel = () => {
  return (
    <div className="px-6">
      <Marquee gradient={false} speed={50}>
        <div className="flex items-center gap-8">
          <img
            src="https://www.svgrepo.com/show/303246/google-1-1-logo.svg"
            className="h-54 w-auto"
            alt="Google"
          />
          <img
            src="https://www.svgrepo.com/show/303143/microsoft-logo.svg"
            className="h-54 w-auto"
            alt="Microsoft"
          />
          <img
            src="https://www.svgrepo.com/show/303196/netflix-2-logo.svg"
            className="h-54 w-auto"
            alt="Netflix"
          />
          <img
            src="https://www.svgrepo.com/show/303377/ibm-logo.svg"
            className="h-42 w-auto"
            alt="IBM"
          />
          <img
            src="https://www.svgrepo.com/show/303151/slack-logo.svg"
            className="h-54 w-auto"
            alt="Slack"
          />
          <img
            src="https://www.svgrepo.com/show/303165/facebook-1-logo.svg"
            className="h-60 w-auto"
            alt="Facebook"
          />
        </div>
      </Marquee>
    </div>
  );
};
