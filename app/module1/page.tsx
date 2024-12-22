import { getAllModules, MODULE1_GRAPHQL_FIELDS } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

// export async function generateStaticParams() {
//   const allModules = await getAllModules();

//   return allModules.map((module: any) => ({
//     slug: module.slug,
//   }));
// }

const allModules = await getAllModules(
  false,
  MODULE1_GRAPHQL_FIELDS,
  "heartbeatsRecruitmentCollection",
  "date_ASC"
);

const getGradientValue = (modules: any) => {
  const gradientColor = modules.gradientColor;
  return gradientColor;
}

export default async function ModulePage1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 lg:p-24 bg-white">
      {allModules.map((modules: any) => (
        <section
          key={modules.sys.id}
          className="w-full md:max-w-[80%] lg:max-w-[800px]"
        >
          <div
            className={`mainContainer static md:relative mb-5 md:mb-[100px] h-auto lg:h-[572px] block md:flex ${
              modules.isRight ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`textContainer mt-0 lg:mt-[40px] lg:mb-[40px] pt-7 lg:pt-[50px] pl-[40px] pb-7 pr-7 md:pr-[40px] lg:pb-[178px] w-full md:w-[60%] lg:w-[70%] ${
                modules.isRight
                  ? "justify-end md:pl-20 lg:pl-[220px] pr-5"
                  : "justify-start"
              } ${
                modules.hasGradient
                  ? `bg-gradient-to-br from-[#${modules.gradientColor ? modules.gradientColor : "e5dfca"}] to-white`
                  : ""
              }`}
            >
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] w-full">
                {modules.moduleTitle}
              </h1>

              <div className="space-y-4 md:space-y-6 lg:w-[350px]">
                <div className="space-y-2">
                  <div className="md:w-[80%] lg:max-w-[900px] text-zinc-800 text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-zinc-400">
                    {documentToReactComponents(modules.moduleDescription.json)}
                  </div>
                </div>
              </div>

              {modules.hasButton && (
                <button className="cursor-pointer mt-10 uppercase bg-[#f88035] py-4 px-8 text-sm font-semibold text-white hover:text-zinc-600">
                  Read More
                </button>
              )}
            </div>

            <div
              className={`imageContainer bg-transparent w-full lg:h-[572px] static md:absolute flex ${
                modules.isRight ? "justify-start" : "justify-end"
              }`}
            >
              {modules.mainImage.url && (
                <Image
                  alt="Module Main Image"
                  className="lg:absolute overflow-hidden object-cover z-10 top-0 w-full h-auto md:w-[320px] md:h-[320px]"
                  height="318"
                  src={modules.mainImage.url}
                  width="320"
                />
              )}
              {modules.secondaryImage.url ? (
                  <Image
                  alt="Module Secondary Image"
                  className={`hidden lg:block md:relative overflow-hidden object-cover z-9 top-[273px] w-[235px] h-[296px] ${
                    modules.isRight ? "left-[175px]" : "left-[-175px]"
                  }`}
                  height="235"
                  src={modules.secondaryImage.url}
                  width="296"
                /> 
              ): null}
              {/* {modules.secondaryImage.url && (
                <Image
                  alt="Module Secondary Image"
                  className={`hidden lg:block md:relative overflow-hidden object-cover z-9 top-[273px] w-[235px] h-[296px] ${
                    modules.isRight ? "left-[175px]" : "left-[-175px]"
                  }`}
                  height="235"
                  src={modules.secondaryImage.url}
                  width="296"
                />
              )} */}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
