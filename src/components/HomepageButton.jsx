import { BiLeftArrowCircle } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

export default function HomepageButton(props) {
    
    const navigate = useNavigate();

    return (
        <div>
            <Link
                to="/home"
                className="fixed z-2 rounded-full inline-block p-2 bg-orange-500 bottom-4 right-4 text-orange-50 text-3xl group"
            >
                <div className="flex items-center gap-1">
                    <CiHome />
                    <span className="text-xs transition-all duration-400 w-0 overflow-hidden group-hover:w-[70px]">
                        Homepage
                    </span>
                </div>
            </Link>
            <div className="text-orange-500 bg-orange-50 ">
                <BiLeftArrowCircle
                    className="w-12 h-12 pt-3 pl-3 sm:absolute sm:top-3 sm:left-3 cursor-pointer"
                    onClick={() => navigate("/home")}
                />
            </div>
            {props.children}
        </div>
    );
}
