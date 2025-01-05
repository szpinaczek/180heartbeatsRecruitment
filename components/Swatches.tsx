import { getAllModules, SWATCHES_GRAPHQL_FIELDS } from "@/lib/api";

const allModules = await getAllModules(
  false,
  SWATCHES_GRAPHQL_FIELDS,
  "swatchesCollection",
  "date_ASC"
);

export default async function Swatches() {
    return (
        <>
            {
                allModules.map((modules: any) => (
                    <section key={modules.sys.id}>
                        <h1>{modules.swatchName}</h1>
                    </section>
                ))
            }
            
        </>
    )
}