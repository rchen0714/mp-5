import { redirect } from "next/navigation";
import getCollection, {URLS_COLLECTION} from "@/lib/mangodb";

export default async function AliasPage({ params }: { params: { alias: string }}) {
    const { alias } = await params;

    const urlsCollection = await getCollection(URLS_COLLECTION);
    const new_url = await urlsCollection.findOne({ alias });

    if (new_url) {
        redirect(new_url.url);
    } else {
        return <p>Alias not found.</p>;
    }
}