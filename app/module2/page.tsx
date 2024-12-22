import { getAllModules, MODULE2_GRAPHQL_FIELDS } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

const allModules = await getAllModules(
  false,
  MODULE2_GRAPHQL_FIELDS,
  "module2Collection",
  "date_ASC"
);

// export async function generateStaticParams() {
//   const allModules = await getAllModules();

//   return allModules.map((module: any) => ({
//     slug: module.slug,
//   }));
// }
// allModules.map((modules: any) => console.log(modules));

export default async function Module2Page() {
  
      
  return <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      {allModules.map((modules: any) => (
        <section key={modules.sys.id} className="w-full lg:max-w-[800px]">
          <div className={`mainContainer relative mb-[100px] flex ${modules.isRight ? 'flex-row-reverse' : 'flex-row'}`}>

            <div className={`textContainer mt-0 pt-[50px] pl-[40px] pb-[178px] w-[80%] ${modules.isRight ? 'justify-end' : 'justify-start'} ${modules.hasGradient ? 'bg-gradient-to-br from-[#e5dfca] to-white' : ''}`}>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">
                  {modules.moduleTitle}
                </h1>

              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <div className="max-w-[900px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-zinc-400">
                    {documentToReactComponents(modules.moduleDescription.json)}
                  </div>
                </div>
              </div>
            </div>

            <div className={`imageContainer w-full h-[572px] relative flex ${modules.isRight ? 'justify-start' : 'justify-end'}`}>
              {modules.mainImage.url && (
                <Image
                  alt="Module Main Image"
                  className="absolute overflow-hidden object-cover z-10 top-0 w-[320px] h-[320px]"
                  height="318"
                  src={modules.mainImage.url}
                  width="320"
                />
              )}
              {modules.secondaryImage.url && (
                <Image
                  alt="Module Secondary Image"
                  className={`relative overflow-hidden object-cover z-9 top-[273px] w-[235px] h-[296px] ${modules.isRight ? 'left-[175px]' : 'left-[-175px]'}`}
                  height="235"
                  src={modules.secondaryImage.url}
                  width="296"
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
}
