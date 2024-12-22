import Link from "next/link";

export default function header() {
    return <header className="header hidden md:block md:flex flex-row justify-between items-center lg:gap-10 px-5 md:px-20 py-10 w-full">
        <Link href="/">Home</Link> 
        <Link href="/module1">Module 1</Link> 
        <Link href="/module2">Module 2</Link> 
        <Link href="/module3">Module 3</Link> 
        <Link href="/module4">Module 4</Link> 
        <Link href="/module5">Module 5</Link> 
    </header>
}