import React from "react";

export default function Favor(){
    return(
        <div className="container p-5 px-10 bg-stone-800 mx-auto space-y-3">
            <h1 className="text-lg text-white font-semibold">Favourites</h1>
            <div className="grid grid-cols-12 gap-1">
                <img src="https://www.themealdb.com/images/category/beef.png" alt="" className="rounded-full w-16 h-16 border-2 border-white-500" />
                <img src="https://www.themealdb.com/images/category/chicken.png" alt="" className="rounded-full w-16 h-16 border-2 border-white-500" />
                <img src="https://www.themealdb.com/images/category/dessert.png" alt="" className="rounded-full w-16 h-16 border-2 border-white-500" />
                <img src="https://www.themealdb.com/images/category/lamb.png" alt="" className="rounded-full w-16 h-16 border-2 border-white-500" />
            </div>
        </div>
    )
}