export default function Title({ h, size, children }) {
    const titleClassName = "text-orange-500 font-bold font-custom-fira-code"
    if (h === 1) return <h1 className={`${titleClassName} text-[${size}]`}>{children}</h1>
    if (h === 2) return <h2 className={`${titleClassName} text-[${size}]`}>{children}</h2>
    if (h === 3) return <h3 className={`${titleClassName} text-[${size}]`}>{children}</h3>
    if (h === 4) return <h4 className={`${titleClassName} text-[${size}]`}>{children}</h4>
    return <h5 className={`${titleClassName} text-[${size}]`}>{children}</h5>
}