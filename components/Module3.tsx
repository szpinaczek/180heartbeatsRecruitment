import { getAllModulesREST } from "../lib/restapi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function Module3() {
  const entries = await getAllModulesREST();
  {
    console.log("entries: ", entries);
  }
  return (
    <>
      {entries.map((entry: any) => (
        <section
          key={entry.sys.id}
          className="w-full md:max-w-[80%] lg:max-w-[800px] relative"
        >
          <div
            className={`mainContainer static md:relative mb-5 md:mb-[100px] w-full h-auto lg:h-auto flex flex-col-reverse ${
              entry.fields.isRight ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className={`textContainer mt-0 lg:mt-[40px] lg:mb-0 pt-7 lg:pt-[50px] pl-[40px] pb-7 pr-7 md:pr-[40px] md:pb-[50px] lg:pb-[90px] w-full md:w-full lg:w-[800px] 
                                    ${
                                      entry.fields.isRight
                                        ? "justify-end md:pl-20 lg:pl-[350px] pr-5"
                                        : "justify-start"
                                    } 
                                    ${
                                      entry.fields.hasGradient
                                        ? `bg-gradient-to-br from-beige to-white`
                                        : ""
                                    }`}
            >
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] w-full lg:w-[350px]">
                {entry.fields.moduleTitle}
              </h1>

              <div className="space-y-4 md:space-y-6 lg:w-[500px]">
                <div className="space-y-2">
                  <div className="md:w-[80%] lg:max-w-[900px] text-zinc-800 text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-zinc-400">
                    {documentToReactComponents(entry.fields.moduleDescription)}
                  </div>
                </div>
              </div>

              {entry.fields.hasButton && (
                <button className="lg:shadow-[10px_10px_10px_rgb(0,0,0,0.2)]cursor-pointer mt-10 uppercase bg-[#f88035] py-4 px-8 text-sm font-semibold text-white hover:text-zinc-600">
                  Read More
                </button>
              )}
            </div>

            <div
              className={`imageContainer md:w-full lg:w-[300px] lg:absolute w-full flex justify-start right-0 ${
                entry.fields.imageType === "large" ? "lg:bottom-[380px]" : ""
              }`}
            >
              {entry.fields.mainImage.fields.file.url && (
                <Image
                  alt="Module Main Image"
                  className={`lg:absolute overflow-hidden object-cover z-10 top-0 md:right-0 lg:right-0 w-full h-auto md:h-auto lg:w-[300px] ${
                    entry.fields.imageType === "large"
                      ? "lg:bottom-[380px] lg:shadow-[20px_20px_20px_rgb(0,0,0,0.2)]"
                      : ""
                  }`}
                  height="328"
                  width="320"
                  src={`https:${entry.fields.mainImage.fields.file.url}`}
                />
              )}
            </div>
          </div>

          {entry.fields.swatch && (
            <div
              className={`swatches mb-20 md:mb-0 md:absolute w-full flex justify-center items-center w-full h-[120px] left-0 md:bottom[20px] bottom-[40px] bg-transparent z-10 gap-5 order-2`}
            >
              {entry.fields.swatch.map((swatch: any) => {
                return (
                  <div
                    className={`flex justify-center items-center w-[120px] h-[120px] bg-[#e5dfca]`}
                    key={swatch.sys.id}
                  >
                    <Image
                      alt="Swatch Image"
                      className={`overflow-hidden object-cover w-full h-auto lg:w-[120px]`}
                      height="120"
                      width="120"
                      src={`https:${swatch.fields.swatchImage.fields.file.url}`}
                    />
                  </div>
                );
              })}
            </div>
          )}

        </section>
      ))}
    </>
  );
}
