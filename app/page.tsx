import Link from "next/link";

export default function Page() {
  return <>
    <div className="bg-white w-screen p-10 text-center">
      <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">Andrzej Szczepanik</h1>
      <p className="text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed dark:text-zinc-400">Recruitment Task</p>
    </div>
    <section>
      <div className="p-10 flex flex-row justify-between w-full gap-10">
        <Link href="/module1" className="h-[200px] w-[200px] bg-beige p-10 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">Module 1</Link> 
        <Link href="/module2" className="h-[200px] w-[200px] bg-beige p-10 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">Module 2</Link> 
        <Link href="/module4" className="h-[200px] w-[200px] bg-beige p-10 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">Module 4</Link> 
      </div>
    </section>
  </>
}
