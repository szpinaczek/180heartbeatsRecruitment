import { getAllModulesREST } from "@/lib/restapi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import LeadText from "@/components/LeadText";

export default async function Module5() {
  const entries = await getAllModulesREST("module5");
  {
    console.log("entries: ", entries);
  }
  return (
    <>
      <section className="text-xl font-bold sm:text-3xl text-zinc-500 mb-[30px] w-full md:max-w-[80%] lg:max-w-[800px]">
        <LeadText module="module5" />
      </section>

      {entries.map((entry: any) => (
        <section
          key={entry.sys.id}
          className="w-full md:max-w-[80%] lg:max-w-[800px]"
        >
          <div
            className={`mainContainer static md:relative mb-5 md:mb-[100px] w-full h-auto lg:h-[572px] flex flex-col-reverse ${
              entry.fields.isRight ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className={`textContainer mt-0 lg:mt-[40px] lg:mb-[40px] pt-7 lg:pt-[50px] pl-[40px] pb-7 pr-7 md:pr-[40px] md:pb-[50px] lg:pb-[50px] w-full md:w-full lg:w-[800px] 
                    ${
                      entry.fields.isRight
                        ? "justify-end md:pl-20 lg:pl-[350px] pr-5"
                        : "justify-start"
                    } 
                  ${
                    entry.fields.hasGradient
                      ? `bg-gradient-to-br from-light-blue to-white`
                      : ""
                  }`}
            >
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] w-full">
                {entry.fields.moduleTitle}
              </h1>

              <div className="space-y-4 md:space-y-6 lg:w-[350px]">
                <div className="space-y-2">
                  <div className="md:w-[80%] lg:max-w-[900px] text-zinc-800 text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-zinc-600">
                    {documentToReactComponents(entry.fields.moduleDescription)}
                  </div>
                </div>
              </div>

              {entry.fields.hasButton && (
                <div className="flex flex-row gap-4">
                  {entry.fields.buttons.map((button: any) => (
                    <button key={button.sys.id} className={`cursor-pointer mt-10 text-sm font-semibold text-orange hover:text-zinc-600`}>
                    {button.fields.title}
                  </button>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`imageContainer md:w-full lg:w-[300px] lg:absolute w-full flex justify-start left-0`}
            >
              {entry.fields.mainImage.fields.file.url && (
                <Image
                  alt="Module Main Image"
                  className="lg:absolute overflow-hidden object-cover z-10 top-0 md:right-0 lg:left-0 w-full h-auto md:h-auto lg:w-[300px]"
                  height="328"
                  width="320"
                  src={`https:${entry.fields.mainImage.fields.file.url}`}
                />
              )}

              {entry.fields.secondaryImage.fields.file.url ? (
                <Image
                  alt="Module Secondary Image"
                  className={`hidden lg:block md:relative overflow-hidden object-cover z-9 top-[273px] w-[235px] h-[296px] ${
                    entry.fields.isRight ? "left-[-50px]" : "left-[175px]"
                  }`}
                  height="235"
                  width="296"
                  src={`https:${entry.fields.secondaryImage.fields.file.url}`}
                />
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
