"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1024);
            if (window.innerWidth > 1024) {
                setIsOpen(false); 
            }
        };

        checkScreenSize(); 
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen && isMobile ? "hidden" : "";
    }, [isOpen, isMobile]);

    return (
        <div className={"header-wrapper flex justify-between items-center max-lg:h-[120px] h-[150px] transition-none" + (isOpen ? " fixed top-0 left-0 z-10 bg-white w-full px-5" : "")}>
            <div className="left flex gap-2 items-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black" />
                </svg>
                <p className="font-semibold text-4xl">Positivus</p>
            </div>

           
            {isMobile && (
                <button onClick={() => setIsOpen(!isOpen)} className="burger-menu hidden max-lg:block cursor-pointer">
                    {isOpen ? <X size={45} /> : <Menu size={45} />}
                </button>
            )}

            <div className={(isOpen ? "nav-active " : "") + "right flex gap-5 items-center max-lg:hidden"}>
                <div className="nav-links flex items-center gap-5">
                    <a className="text-[20px] p-2 rounded-2xl hover:bg-green-color" href="#">About us</a>
                    <a className="text-[20px] p-2 rounded-2xl hover:bg-green-color" href="#">Services</a>
                    <a className="text-[20px] p-2 rounded-2xl hover:bg-green-color" href="#">Use Cases</a>
                    <a className="text-[20px] p-2 rounded-2xl hover:bg-green-color" href="#">Pricing</a>
                    <a className="text-[20px] p-2 rounded-2xl hover:bg-green-color" href="#">Blog</a>
                </div>
                <button className="bordered-btn">Request a quote</button>
            </div>
        </div>
    );
}

export default Header;
