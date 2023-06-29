export default function About() {
    return (
        <main className="text-center flex-col">
            <section className="text-center flex justify-start items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-96 mt-12">
                <h1 className="text-6xl font-semibold text-slate-200 lg:ml-60 sm:ml-10">
                    About
                </h1>
            </section>
            <section className="w-4/5 mx-auto my-20">
            <p className="my-10 mx-auto sm:w-full xl:w-5/6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat praesentium deserunt iste incidunt sit minima facere ducimus nihil
                quibusdam. Vel atque voluptatibus tenetur ut voluptatum quos quia culpa
                deleniti assumenda.</p>
            <p className="my-10 mx-auto sm:w-full xl:w-5/6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eum praesentium, 
                minima autem deserunt mollitia dolor necessitatibus officiis excepturi aliquid corporis, 
                est in perferendis neque reprehenderit! Dolores commodi fugit id!</p>
            </section>
        </main>
    )
}