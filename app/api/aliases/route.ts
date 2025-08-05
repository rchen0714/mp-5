import { NextResponse } from "next/server";
import getAllAliases from "@/lib/getAllAlias";

export async function GET() {
    const aliases = await getAllAliases();
    return NextResponse.json(aliases);
}

