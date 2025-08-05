"use server"

import { AliasProp } from '@/types/types'
import getCollection, {URLS_COLLECTION} from "@/lib/mangodb";

export default async function getAllAliases(): Promise<AliasProp[]> {
    const urlsCollection = await getCollection(URLS_COLLECTION);
    const data = await urlsCollection.find().toArray();

    const aliases: AliasProp[] = data.map((doc) => ({
        alias: doc.alias,
        url: doc.url,
    }));

    return aliases.reverse();
}