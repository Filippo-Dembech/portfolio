import LottieIcon from "../../components/LottieIcon";
import Navlink from "../../components/Navlink";

export default function HomepageLink({ to, external, iconSrc, children, lottiClassName }) {
    return (
        <Navlink
            to={to}
            external={external}
            linkClassName="group sm:flex-1 bg-orange-500 text-orange-50 font-custom-bebas rounded-2xl p-3 text-3xl relative sm:text-center sm:w-1/9 transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:shadow-lg"
            textClassName="inline-block transform duration-200 group-hover:rotate-[-10deg] origin-bottom-left group-hover:text-orange-200 group-hover:translate-x-5 sm:group-hover:-translate-x-10 group-hover:scale-150"
            sideElement={
                <LottieIcon
                    className={lottiClassName}
                    src={iconSrc}
                    loop
                    autoplay
                />
            }
        >
            {children}
        </Navlink>
    );
}