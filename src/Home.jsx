import React from "react";

export default function Home() {
    return (
        <div className="container mx-auto p-2 px-10 bg-blue-50 flex flex-row justify-between">
            <form className="w-96 flex flex-row items-center space-x-5">
                <label>
                    <input type="text" name="search" className="px-3 py-2 bg-white border-2 shadow-sm border-blue-300 placeholder-slate-700 tracking-wider font-medium focus:outline-none focus:border-blue-200 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="search..." />
                </label>
                <button type="button" className="bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring text-white font-semibold text-md tracking-widest px-4 h-9 rounded-md">
                    Search
                </button>
            </form>
            <button type="button" className="bg-indigo-600 active:bg-indigo-700 outline-none text-white font-semibold text-sm tracking-widest px-4 h-10 rounded-md">
                Random Search
            </button>
        </div>
    )
}