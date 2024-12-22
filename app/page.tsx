import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-white w-screen p-10 text-center">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">
          Andrzej Szczepanik
        </h1>
        <p className="text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed dark:text-zinc-400">
          Recruitment Task
        </p>
      </div>
      <section>
        <div className="p-10 flex flex-col md:flex-row justify-between align-center w-full gap-10">
          <Link
            href="/module1"
            className="h-[200px] w-[200px] bg-white p-0 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] flex flex-col justify-center items-center"
          >
            <Image
              src="/module1_home.jpg"
              alt="Module 1"
              width={200}
              height={200}
            />
            <p className="text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed mt-5">
              Module 1
            </p>
          </Link>

          <Link
            href="/module2"
            className="h-[200px] w-[200px] bg-white p-0 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] flex flex-col justify-center items-center"
          >
            <Image
              src="/module2_home.jpg"
              alt="Module 1"
              width={200}
              height={200}
            />
            <p className="text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed mt-5">
              Module 2
            </p>
          </Link>

          <Link
            href="/module3"
            className="h-[200px] w-[200px] bg-white p-0 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] flex flex-col justify-center items-center"
          >
            <Image
              src="/module3_home.jpg"
              alt="Module 1"
              width={200}
              height={200}
            />
            <p className="text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed mt-5">
              Module 3
            </p>
          </Link>

          <Link
            href="/module4"
            className="h-[200px] w-[200px] bg-white p-0 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] flex flex-col justify-center items-center"
          >
            <Image
              src="/module4_home.jpg"
              alt="Module 4"
              width={200}
              height={200}
            />
            <p className="text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed mt-5">
              Module 4
            </p>
          </Link>

          <Link
            href="/module5"
            className="h-[200px] w-[200px] bg-white p-0 text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] flex flex-col justify-center items-center"
          >
            <Image
              src="/module5_home.jpg"
              alt="Module 5"
              width={200}
              height={200}
            />
            <p className="text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed mt-5">
              Module 5
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
