import React from "react";

export default function Home() {
    return (
        <div className="container mx-auto p-4 px-10 bg-blue-50 space-y-2 md:space-y-0 md:flex md:flex-row md:justify-between">
            <form className="flex flex-row items-center space-x-2">
                <label>
                    <input type="text" name="search" className="md:w-44 w-56 h-8 bg-white border-2 shadow-sm border-blue-300 placeholder-slate-700 tracking-wider font-medium focus:outline-none focus:border-blue-200 focus:ring-blue-500 block rounded-md sm:text-sm focus:ring-1 indent-2" placeholder="search..." />
                </label>
                <button type="button" className="bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring text-white font-semibold text-md tracking-widest md:w-24 w-20 h-8 rounded-md">
                    Search
                </button>
            </form>
            <button type="button" className="bg-blue-700 active:bg-blue-600 w-full outline-none text-white font-semibold text-sm tracking-widest md:w-36 h-8 rounded-md">
                Random Search
            </button>
        </div>
    )
}