import { NextRequest, NextResponse } from "next/server";
import getCollection, { URLS_COLLECTION } from "../../../lib/mangodb";

function isValidURL(str: string) {
    try {
        new URL(str);
        return true;
    } catch {
        return false;
    }
}

export async function POST(req: NextRequest) {
    const { url, alias } = await req.json();

    if (!url || !alias) {
        return NextResponse.json({ error: "Both URL and alias are required." }, { status: 400 });
    }

    if (!isValidURL(url)) {
        return NextResponse.json({ error: "Invalid URL." }, { status: 400 });
    }

    const urlsCollection = await getCollection(URLS_COLLECTION);
    const existing = await urlsCollection.findOne({ alias });

    if (existing) {
        return NextResponse.json({ error: "Alias already taken." }, { status: 400 });
    }

    await urlsCollection.insertOne({ alias, url });

    return NextResponse.json({ alias });
}

