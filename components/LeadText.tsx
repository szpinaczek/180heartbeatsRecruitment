import { getAllModulesREST } from "@/lib/restapi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const leadText = await getAllModulesREST("pageLeadingText");

{
  console.log("LEAD TEXT: ", leadText);
}
export default function LeadText({ module }: { module: string }) {
  return leadText
    .filter((entry: any) => entry.fields.description === module)
    .map((entry: any) => (
      <div key={entry.sys.id}>
        <h2 className="mb-10">{entry.fields.mainTitle}</h2>
        <div className="mb-20 lg:pl-[100px] font-normal text-zinc-800 md:text-base lg:text-base">
          {documentToReactComponents(entry.fields.mainDescription)}
        </div>
      </div>
    ));
}
