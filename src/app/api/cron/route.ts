import {NextResponse} from "next/server"
import {deleteCachedWeatherData} from "@/util/database";

export async function GET() {
    await deleteCachedWeatherData()
    return NextResponse.json({})
}