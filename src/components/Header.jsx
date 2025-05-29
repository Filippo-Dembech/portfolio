export default function Header(props) {
    return (
        <h1 className="text-orange-500 font-custom-bebas mb-7 text-[4rem] sm:text-center sm:text-[5rem] md:text-[6rem]">
            {props.children}
        </h1>
    );
}
