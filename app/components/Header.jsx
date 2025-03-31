

function Header() {
    return (<>
        <div className="header-wrapper flex justify-between items-center h-[150px]">
            <div className="left flex gap-2 items-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black" />
                </svg>
                <p className="font-semibold text-4xl">Positivus</p>
            </div>
            <div className="right flex gap-5 items-center">
                <div className="nav-links flex items-center gap-10">
                    <a className="text-[20px]" href="#">About us</a>
                    <a className="text-[20px]" href="#">Services</a>
                    <a className="text-[20px]" href="#">Use Cases</a>
                    <a className="text-[20px]" href="#">Pricing</a>
                    <a className="text-[20px]" href="#">Blog</a>
                </div>
                <button className="bordered-btn">Request a quote</button>
            </div>
        </div>
    </>);
}

export default Header;