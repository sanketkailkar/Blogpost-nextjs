'use client'
import { useState } from "react";
import supabase from "../../../../../../utils/supabaseClient";

export default function SignIn() {

    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithOtp({email: email.trim()});
        if(!email){
            alert("Enter email address");
        }else if(!email.includes === '@'){
            alert("Enter valid email address");
        }else if(!email.includes === '.com'){
            alert("Enter valid email address");
        }else if(error){
            alert(error.message);
        }else if(data){
            alert("Email has been sent, Successfully !!!");
        }
    }

    return (
        <div className="flex items-center justify-center flex-col h-screen bg-gradient-to-r from-[#000328] to-[#00458e]">
            <h1 className="text-white text-3xl mb-10">Welcome to Sign in Page !</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col rounded-xl w-[370px] border mx-auto py-10 px-5">
                <h2 className="text-[#fff] text-center text-2xl">Enter your Email</h2>
                <input
                    className="my-3 mb-5 text-white border border-1 bg-transparent border-gray-100 py-2 px-2 rounded-md focus:outline-1 outline-blue-600"
                    type="email"
                    placeholder="Email address or phone number"
                    onChange={(e) => { setEmail(e.target.value); }}
                    value={email}
                />
                <button className="bg-blue-600 my-1 py-2 text-lg font-[600] text-white rounded-md hover:bg-blue-700"
                >
                    Sign in
                </button>
            </form>
        </div>
    )
}