import { getAllModules, getModule } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allModules = await getAllModules();

  return allModules.map((module: any) => ({
    slug: module.slug,
  }));
}

export default async function ModulePage({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const module = await getModule(slug);

  if (!module) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">

      <section className="w-full">

        <div className="container relative">

          <div className="mt-[100px] pt-[50px] pl-[40px] pb-[178px] absolute min-height-[572px] w-full bg-gradient-to-br from-[#e5dfca] to-white">

            <div className="max-w-[50%]">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl text-zinc-500">
                {module.moduleTitle}
              </h1>
            </div>

            <div className="space-y-4 md:space-y-6 max-w-[50%]">
              <div className="space-y-2">
                <div className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  {documentToReactComponents(module.moduleDescription.json)}
                </div>
              </div>
            </div>


          </div>

          <div className="w-full h-[572px] relative flex justify-end">
            <Image
              alt="Article Image"
              className="absolute overflow-hidden object-cover z-10 top-0 w-[320px] h-[320px]"
              height="318"
              src={module.mainImage.url}
              width="320"
            />
            <Image
              alt="Article Image"
              className="relative overflow-hidden object-cover z-9 top-[273px] left-[-175px] w-[235px] h-[296px]"
              height="235"
              src={module.secondaryImage.url}
              width="296"
            />
          </div>
          
        </div>
      </section>
    </main>
  );
}