import { getAllArticles } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-800">
                Andrzej Szczepanik
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Recruitment task
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article: any) => (
                  <article key={article.sys.id} className="h-full flex flex-col overflow-hidden">
                    <Image
                      alt="placeholder"
                      className="aspect-[4/3] object-cover w-full"
                      height="263"
                      src={article.mainImage.url}
                      width="350"
                    />
                    <div className="flex-1 p-6">
                      
                      <div className="inline-block bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                        {article.moduleTitle}
                      </div>
                    
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}