'use client'
import supabase from "../../../../../../utils/supabaseClient";

export default async function CreateBlog() {

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.decp.value;

        const { data, error } = await supabase.from('blogposts').insert({ title, decp: true }).select()

        if (error) {
            console.log(error.message);
        }

        alert("Blog Success Fully Published!!!");
        event.target.title.value = "";
        event.target.decp.value = "";
    };


    return (
        <main>
            <section className="text-center flex justify-start items-center bg-gradient-to-r from-[#8711c1] to-[#2472fc] h-16 mt-12">
                <h1 className="text-center text-3xl font-[600] text-slate-200 ml-3">
                    Crete New Blog
                </h1>
            </section>
            <form className="flex justify-center items-center flex-col my-10 mx-auto gap-5 lg:w-2/4 sm:w-full"
                onSubmit={handleOnSubmit}>
                <input
                    className="border w-full p-2 outline-none"
                    type="text" name="title" id="userTitle" placeholder="Enter title..." 
                    required/>
                <textarea
                    className="border w-full p-2 outline-none"
                    placeholder="Enter description..."
                    name="decp" id="decp" cols="30" rows="10"
                    required>
                </textarea>
                <div>
                    <button
                        className="border py-2 w-28 mr-2 hover:bg-blue-500 hover:text-white transition ease-in"
                        type="submit"
                    >Create</button>
                </div>
            </form>
        </main>
    )
}