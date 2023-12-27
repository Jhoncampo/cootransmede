import HeaderBajo from "./HeaderBajo";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return (
        <div className="" >
            <HeaderTop />
            <div className="flex justify-center shadow-2xl z-20 relative">
                <HeaderBajo />
            </div>
        </div>
    );
};

export default Header;
