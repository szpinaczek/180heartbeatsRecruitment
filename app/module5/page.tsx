import { getAllModules, MODULE5_GRAPHQL_FIELDS } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import AnimationOnScroll from "@/components/Interactions";

const allModules = await getAllModules(
  false,
  MODULE5_GRAPHQL_FIELDS,
  "module5Collection",
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
          <section className="text-xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px]">
            <h2 className="mb-10">
            Lorem ipsum dolor sit amet
            </h2>
            <p className="mb-20 lg:pl-[100px] font-normal text-zinc-800 md:text-base/relaxed lg:text-base/relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati cupiditate, perferendis nostrum aut sed porro quia et at veniam vel perspiciatis, nesciunt facere impedit deleniti, ut repellendus. Dolores, tenetur illum.
            Odit tenetur delectus ipsum! Est dicta omnis impedit voluptate fugiat porro, corrupti sint non molestias odio, sequi, nulla obcaecati animi labore totam explicabo laboriosam? Facere hic dolores omnis excepturi? Dolores.
            Obcaecati expedita, nesciunt pariatur quos quam fuga eius eum saepe sunt aliquid, eveniet quis molestiae nisi quisquam quaerat. Minima molestias aliquam impedit ut explicabo recusandae aspernatur omnis illum maxime maiores!
            Itaque recusandae quos magni magnam quia molestiae accusantium voluptate consectetur nemo facere iste molestias, veritatis culpa quas libero tempora quod possimus aperiam, at, ipsa deleniti mollitia eveniet. Expedita, dolores molestias!
            Tempore possimus ipsa magni iure reiciendis nulla quia animi voluptates nisi! Eaque consectetur ea laboriosam enim doloremque corporis harum aliquam. Dolores, quo eius quis possimus debitis facere dolore rerum fugiat.</p>
          </section>
          <div
            className={`mainContainer static md:relative mb-5 md:mb-[100px] w-full h-auto lg:h-[572px] flex flex-col-reverse ${
              modules.isRight ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className={`textContainer mt-0 lg:mt-[40px] lg:mb-[40px] pt-7 lg:pt-[50px] pl-[40px] pb-7 pr-7 md:pr-[40px] md:pb-[50px] lg:pb-[50px] w-full md:w-full lg:w-[800px] 
                    ${
                      modules.isRight
                        ? "justify-end md:pl-20 lg:pl-[350px] pr-5"
                        : "justify-start"
                    } 
                  ${
                    modules.hasGradient
                      ? 
                        `bg-gradient-to-br from-light-blue to-white`
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
                <div className="flex flex-row gap-4">
                    <button className="cursor-pointer mt-10 text-sm font-semibold text-orange hover:text-zinc-600">
                    Read More
                    </button>
                    <button className="cursor-pointer mt-10 text-sm font-semibold text-orange hover:text-zinc-600">
                    Read More
                    </button>
                </div>
              )}
            </div>

            <div
              className={`imageContainer md:w-full lg:w-[300px] lg:absolute w-full flex justify-start left-0`}
            >
              {modules.mainImage.url && (
                <Image
                  alt="Module Main Image"
                  className="lg:absolute overflow-hidden object-cover z-10 top-0 md:right-0 lg:left-0 w-full h-auto md:h-auto lg:w-[300px]"
                  height="328"
                  src={modules.mainImage.url}
                  width="320"
                />
              )}

              {modules.secondaryImage.url ? (
                <Image
                  alt="Module Secondary Image"
                  className={`hidden lg:block md:relative overflow-hidden object-cover z-9 top-[273px] w-[235px] h-[296px] ${
                    modules.isRight ? "left-[-50px]" : "left-[175px]"
                  }`}
                  height="235"
                  src={modules.secondaryImage.url}
                  width="296"
                />
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
