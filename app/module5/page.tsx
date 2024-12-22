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
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-zinc-500 mb-[30px] w-full">
            {modules.moduleTitle}
          </h1>
        </section>
      ))}
    </>
  );
}
