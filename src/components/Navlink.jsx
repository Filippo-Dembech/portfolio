import { Link } from "react-router-dom";

export default function Navlink({to, className, sideElement, ...props}) {
    return (
        <Link to={to} className={`group bg-orange-500 text-orange-50 font-custom-bebas rounded-2xl p-3 text-3xl relative text-center sm:w-1/9 transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:shadow-lg ${className}`} {...props}>
            <span className="inline-block transform duration-200 group-hover:rotate-[-10deg] origin-bottom-left group-hover:text-orange-200 group-hover:translate-x-10 group-hover:scale-150">
                {props.children}
            </span>
            <span>
                {sideElement}
            </span>
        </Link>
    )
}