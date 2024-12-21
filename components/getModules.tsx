import { getAllModules } from "@/lib/api";

type Props = {draftMode: boolean, query: string, contentType: string, children: React.ReactNode}

export default async function GetModules({draftMode = false, query, contentType, children}: Props) {

    const allModules = await getAllModules( draftMode, query, contentType);

    return allModules

}