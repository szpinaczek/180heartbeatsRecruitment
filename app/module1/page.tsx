import { getAllModules, MODULE1_GRAPHQL_FIELDS } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import AnimationOnScroll from "@/components/Interactions";

const allModules = await getAllModules(
  false,
  MODULE1_GRAPHQL_FIELDS,
  "heartbeatsRecruitmentCollection",
  "date_ASC"
);

export default async function ModulePage1() {
  return (
    <>
      {allModules.map((modules: any) => (
        <section
          key={modules.sys.id}
          className="w-full md:max-w-[80%] lg:max-w-[800px]"
        >
          <div
            className={`mainContainer static md:relative mb-5 md:mb-[100px] h-auto lg:h-[572px] flex flex-col-reverse ${
              modules.isRight ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <AnimationOnScroll
              classNameInView="animate-fade-in"
              classNameNotInView="animate-fade-out"
            >
              <div
                className={`textContainer mt-0 lg:mt-[40px] lg:mb-[40px] pt-7 lg:pt-[50px] pl-[40px] pb-7 pr-7 md:pr-[40px] md:pb-[50px] lg:pb-[100px] w-full md:w-[350px] lg:w-[500px] 
                    ${
                      modules.isRight
                        ? "justify-end md:pl-20 lg:pl-[220px] pr-5"
                        : "justify-start"
                    } 
                  ${
                    modules.hasGradient
                      ? // ? `bg-gradient-to-br from-[#${
                        //     modules.gradientColor ? modules.gradientColor : "e5dfca"
                        //   }] to-white`
                        // : ""
                        `bg-gradient-to-br from-beige to-white`
                      : ""
                  }`}
              >
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] w-full">
                  {modules.moduleTitle}
                </h1>

                <div className="space-y-4 md:space-y-6 lg:w-[350px]">
                  <div className="space-y-2">
                    <div className="md:w-[80%] lg:max-w-[900px] text-zinc-800 text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-zinc-400">
                      {documentToReactComponents(
                        modules.moduleDescription.json
                      )}
                    </div>
                  </div>
                </div>

                {modules.hasButton && (
                  <button className="cursor-pointer mt-10 uppercase bg-[#f88035] py-4 px-8 text-sm font-semibold text-white hover:text-zinc-600">
                    Read More
                  </button>
                )}
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              classNameInView="animate-zoom-in "
              classNameNotInView="animate-zoom-out"
            >
              <div
                className={`imageContainer lg:right-0 bg-transparent w-full md:w-[265px] lg:w-[320px] lg:h-a static lg:relative flex ${
                  modules.isRight ? "justify-start" : "justify-end"
                }`}
              >
                {modules.mainImage.url && (
                  <Image
                    alt="Module Main Image"
                    className="lg:absolute overflow-hidden object-cover z-10 top-0 md:right-0 lg:right-0 w-full h-auto lg:w-full md:h-auto"
                    height="318"
                    width="320"
                    src={modules.mainImage.url}
                  />
                )}

                {modules.secondaryImage.url ? (
                  <Image
                    alt="Module Secondary Image"
                    className={`hidden lg:block md:relative overflow-hidden object-cover z-9 top-[273px] w-[235px] h-[296px] ${
                      modules.isRight ? "left-[175px]" : "left-[-175px]"
                    }`}
                    height="235"
                    width="296"
                    src={modules.secondaryImage.url}
                  />
                ) : null}
              </div>
            </AnimationOnScroll>
          </div>
        </section>
      ))}
    </>
  );
}
