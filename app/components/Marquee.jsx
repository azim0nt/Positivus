import Image from "next/image";
import Amazon from "../../public/images/amazon.png";
import Dribble from "../../public/images/dribbble.png";
import HubSpot from "../../public/images/hubspot.png";
import Notion from "../../public/images/notion.png";
import Netflix from "../../public/images/netflix.png";
import Zoom from "../../public/images/zoom.png";

function Marquee() {
  const logos = [Amazon, Dribble, HubSpot, Notion, Netflix, Zoom];

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex w-[100vh] animate-marquee gap-10">
        {[...logos,...logos,...logos,...logos, ...logos].map((logo, index) => (
          <Image key={index} src={logo} alt="logo" width={100} height={50} className="grayscale opacity-80 hover:opacity-100 transition duration-300 select-none pointer-events-none" />
        ))}
      </div>
    </div>
  );
}

export default Marquee;
