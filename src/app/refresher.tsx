"use client"

import {useEffect} from "react";
import {redirect} from "next/navigation";

export default function Refresher() {

    useEffect(() => {
        const interval = setInterval( () => {
            window.location.reload()
        }, 10000)

        return () => clearInterval(interval);
    }, [])

    return <div></div>
}