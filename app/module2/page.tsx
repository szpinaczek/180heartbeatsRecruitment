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

export default async function ModulePage2() {
  return (
    <>
      {allModules.map((modules: any) => (
        <section key={modules.sys.id} className="w-full lg:max-w-[800px]">
          <div
            className={`mainContainer relative mb-[100px] flex flex flex-col-reverse ${
              modules.isRight ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div
              className={`textContainer mt-0 pt-[50px] md:pl-[40px] md:pb-[178px] w-full md:w-[80%] ${
                modules.isRight ? "justify-end" : "justify-start"
              } ${
                modules.hasGradient
                  ? "bg-gradient-to-br from-[#e5dfca] to-white"
                  : ""
              }`}
            >
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

            <div
              className={`imageContainer w-full h-auto lg:h-[572px] md:h-[572px] relative flex ${
                modules.isRight ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {modules.mainImage.url && (
                <Image
                  alt="Module Main Image"
                  className="md:absolute overflow-hidden object-cover z-10 top-0 w-[320px] h-[320px]"
                  height="318"
                  src={modules.mainImage.url}
                  width="320"
                />
              )}
              {modules.secondaryImage.url && (
                <Image
                  alt="Module Secondary Image"
                  className={`hidden md:block relative overflow-hidden object-cover z-9 top-[273px] w-[235px] h-[296px] ${
                    modules.isRight ? "left-[175px]" : "left-[-175px]"
                  }`}
                  height="235"
                  src={modules.secondaryImage.url}
                  width="296"
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
