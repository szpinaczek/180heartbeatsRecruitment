import Button from "@/components/Button";
import { getAllModules, MODULE4_GRAPHQL_FIELDS } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const allModules = await getAllModules(
  false,
  MODULE4_GRAPHQL_FIELDS,
  "module4Collection",
  "date_ASC"
);

const handleButtonColor = (modules: any) => {
  if (modules.buttonColor) {
    return modules.buttonColor;
  } else {
    return "black";
  }
};

export default async function ModulePage4() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 md:p-24 bg-white">
      {allModules.map((modules: any) => (
        <section key={modules.sys.id} className="w-full lg:max-w-[800px]">
          <div
            className={`mainContainer relative mb-20 md:mb-[100px] flex flex-col-reverse ${
              modules.isRight ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div
              className={`textContainer pr-10 mt-0 pt-[50px] pl-[40px] pb-20 lg:pb-[178px] md:w-[60%] ${
                modules.isRight
                  ? "justify-end pl-10 md:pl-[100px] lg:pl-[120px]"
                  : "justify-start"
              } ${
                modules.hasGradient
                  ? "bg-gradient-to-br from-[#dde3ef] to-white"
                  : ""
              }`}
            >
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">
                {modules.moduleTitle}
              </h1>

              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <div className="max-w-[900px] text-zinc-800 md:text-xl/relaxed lg:text-xl/relaxed dark:text-zinc-400">
                    {documentToReactComponents(modules.moduleDescription.json)}
                  </div>
                </div>
              </div>

              {modules.hasButton && (
                <button
                
                  className={`cursor-pointer mt-10 uppercase bg-${handleButtonColor(
                    modules
                  )} py-4 px-8 text-sm font-semibold text-white hover:text-zinc-600`}
                >
                  Read More
                </button>
              )}

              <Button bgColor={modules.buttonColor}>click me</Button>
            </div>

            <div
              className={`imageContainer md:absolute top-0 md:w-[50%] left-0 h-auto flex ${
                modules.isRight ? "justify-start" : "justify-end"
              }`}
            >
              {modules.mainImage.url && (
                <Image
                  alt="Module Main Image"
                  className="overflow-hidden object-cover z-10 top-0 max-w-full h-auto"
                  height="860"
                  src={modules.mainImage.url}
                  width="695"
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
