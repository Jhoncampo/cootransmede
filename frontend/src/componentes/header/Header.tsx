import HeaderBajo from "./HeaderBajo";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <div className="flex justify-center">
                <HeaderBajo />
            </div>
        </div>
    );
};

export default Header;
