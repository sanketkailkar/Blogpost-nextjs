'use client'
import Link from "next/link"

export default function Login() {
    return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#000328] to-[#00458e]">
                <div className=" flex flex-col rounded-xl w-[370px] border mx-auto py-10 px-5">
                    <input
                        className="my-2 text-white border border-1 bg-transparent border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
                        type="text"
                        placeholder="Email address or phone number"
                    />
                    <input
                        className="my-2  text-white border border-1 bg-transparent border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="bg-blue-600 my-2 py-2 text-lg font-[600] text-white rounded-md hover:bg-blue-700">
                        Log in
                    </button>   
                    <span className="my-2">
                        <hr />
                    </span>
                    <button className="bg-green-500 my-2 py-2 px-5 text-lg font-[600] text-white rounded-md hover:bg-green-600 w-fit mx-auto">
                        <Link href='/components/navbar/login/signin'>Create new account</Link>
                    </button>
                </div>
            </div>
    )
}