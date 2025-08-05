"use server"

import { AliasProp } from '@/types/types'
import getCollection, {URLS_COLLECTION} from "@/lib/mangodb";

export default async function createNewAlias(alias: string, url: string): Promise<AliasProp> {
    console.log("Creating new alias in DB");

    const a = {
        alias: alias,
        url: url,
    };

    const urlsCollection = await getCollection(URLS_COLLECTION);

    const existing = await urlsCollection.findOne({ alias });

    if (existing) {
        throw new Error("Alias already exists. Please choose another name.");
    }

    const result = await urlsCollection.insertOne({...a});

    if (!result){
        throw new Error("Error inserting into DB.");
    }

    return { alias, url }

}