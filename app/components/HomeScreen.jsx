import Illustration from "../../public/images/Illustration.png";
import Image from "next/image";


function HomeScreen() {
    return (
        <div className="home-screen-wrapper flex justify-between items-center min-h-[80vh]">

            <div className="left max-w-[530px] flex flex-col items-start justify-center gap-8">
                <p className="h1">Navigating the digital landscape for success</p>
                <p className="p leading-[28px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <div className="dark-btn">Book a consultation</div>
            </div>
            <div className="right ">
                <Image src={Illustration} width={700} height={615} alt="Illustration" priority />
            </div>
        </div>
    );
}

export default HomeScreen;