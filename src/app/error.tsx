"use client"

export default function Error() {
    return (
        <main className={"h-[90vh] flex flex-col gap-10 justify-center items-center"}>
            <h1 className={"text-error text-6xl font-bold"}>
                Sorry, something failed!
            </h1>
            <h1 className={"text-error opacity-80"}>
                our team is actively looking into the issue
            </h1>
        </main>
    )
}