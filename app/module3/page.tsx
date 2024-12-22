import { getAllModules, MODULE3_GRAPHQL_FIELDS } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const allModules = await getAllModules(
  false,
  MODULE3_GRAPHQL_FIELDS,
  "module3Collection",
  "date_ASC"
);

export default async function ModulePage5() {
  return (
    <>
      {allModules.map((modules: any) => (
        <section
          key={modules.sys.id}
          className="w-full md:max-w-[80%] lg:max-w-[800px]"
        >
          <div
            className={`mainContainer static md:relative mb-5 md:mb-[100px] w-full h-auto lg:h-auto flex flex-col-reverse ${
              modules.isRight ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className={`textContainer mt-0 lg:mt-[40px] lg:mb-0 pt-7 lg:pt-[50px] pl-[40px] pb-7 pr-7 md:pr-[40px] md:pb-[50px] lg:pb-[90px] w-full md:w-full lg:w-[800px] 
                      ${
                        modules.isRight
                          ? "justify-end md:pl-20 lg:pl-[350px] pr-5"
                          : "justify-start"
                      } 
                    ${
                      modules.hasGradient
                        ? `bg-gradient-to-br from-beige to-white`
                        : ""
                    }`}
            >
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] w-full lg:w-[350px]">
                {modules.moduleTitle}
              </h1>

              <div className="space-y-4 md:space-y-6 lg:w-[500px]">
                <div className="space-y-2">
                  <div className="md:w-[80%] lg:max-w-[900px] text-zinc-800 text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-zinc-400">
                    {documentToReactComponents(modules.moduleDescription.json)}
                  </div>
                </div>
              </div>

              {modules.hasButton && (
                <button className="lg:shadow-[10px_10px_10px_rgb(0,0,0,0.2)]cursor-pointer mt-10 uppercase bg-[#f88035] py-4 px-8 text-sm font-semibold text-white hover:text-zinc-600">
                  Read More
                </button>
              )}
            </div>

            <div
              className={`imageContainer md:w-full lg:w-[300px] lg:absolute w-full flex justify-start right-0 ${
                modules.imageType === "large" ? "lg:bottom-[380px]" : ""
              }`}
            >
              {modules.mainImage.url && (
                <Image
                  alt="Module Main Image"
                  className={`lg:absolute overflow-hidden object-cover z-10 top-0 md:right-0 lg:right-0 w-full h-auto md:h-auto lg:w-[300px] ${
                    modules.imageType === "large" ? "lg:bottom-[380px] lg:shadow-[10px_10px_10px_rgb(0,0,0,0.2)]" : ""
                  }`}
                  height="328"
                  src={modules.mainImage.url}
                  width="320"
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
