"use client";
import supabase from "../../../../../utils/supabaseClient";
import Link from "next/link";
import { useState, useEffect } from "react";

export default async function Posts() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            const user = (await supabase.auth.getSession()).data.session?.user;
            if (user) {
                // setUser(user);
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };
        getUser();
    }, []);
    const { data: posts, error } = await supabase.from('blogposts').select('*')

    return (

        <main className="">
            <section className="text-center flex justify-start items-center bg-gradient-to-r from-[#8711c1] to-[#2472fc] h-96 mt-12">
                <h1 className="text-6xl font-[600] text-slate-200 lg:ml-60 sm:ml-10">
                    BLOG
                </h1>
            </section>
            {
                isLoggedIn === true ?
                    (<section className="xl:w-3/5 lg:w-3/5 md:w-3/5 mx-auto py-20 px-5">
                        <h2 className="text-4xl text-left lg:mb-16 sm:mb-8">
                            Website Developement
                        </h2>
                        <div className="text-1xl fixed z-50 bg-white border border-[#0c244e] py-3 px-4 rounded-full right-10 bottom-10">
                            <Link href={'/components/navbar/blog/createblog'}><button>✎ Compose</button></Link>
                        </div>
                        {posts?.map((post) => (
                            <div key={post.id}>
                                <div className="max-w-full border border-gray-200 shadow-md bg-gradient-to-r from-[#08203E] from-10% via-[#0e1c26] via-50% to-[#08203E] to-100% rounded-md dark:border-gray-700 my-10">
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {post.title}
                        :                 </h5>
                                        <p className="mb-3 font-sm text-gray-700 dark:text-gray-400 text-sm">
                                            {post.decp}
                                        </p>
                                        {/* <Link
                                            href={post.url}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            target="_blank"
                                        >
                                            Read more
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>) :
                    (<section>
                        <h2 className="m-10 text-center text-2xl">Sign In first <Link href={'/components//navbar/login/signin'} className="text-[#2472fc]">Click here</Link></h2>
                    </section>)
            }
        </main>
    );
}