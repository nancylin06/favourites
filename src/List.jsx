import React from "react";

export default function List() {
    return (
        <div className="container mx-auto bg-blue-50 p-10">
            <div className="grid grid-cols-4 gap-5">
                <div className="border rounded-lg shadow bg-blue-100">
                    <img src="https://www.themealdb.com/images/category/beef.png" alt="" className="h-52" />
                    <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                        <h1 className="font-semibold text-lg">Beef</h1>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div>
                <div className="border rounded-lg shadow bg-blue-100">
                    <img src="https://www.themealdb.com/images/category/chicken.png" alt="" className="h-52" />
                    <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                        <h1 className="font-semibold text-lg">Chicken</h1>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div>
                <div className="border rounded-lg shadow bg-blue-100">
                    <img src="https://www.themealdb.com/images/category/dessert.png" alt="" className="h-52" />
                    <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                        <h1 className="font-semibold text-lg">Dessert</h1>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div>
                <div className="border rounded-lg shadow bg-blue-100">
                    <img src="https://www.themealdb.com/images/category/lamb.png" alt="" className="h-52" />
                    <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                        <h1 className="font-semibold text-lg">Lamb</h1>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div>
                <div className="border rounded-lg shadow bg-blue-100">
                    <img src="https://www.themealdb.com/images/category/miscellaneous.png" alt="" className="h-52" />
                    <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                        <h1 className="font-semibold text-lg">Miscellaneous</h1>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div>
                <div className="border rounded-lg shadow bg-blue-100">
                    <img src="https://www.themealdb.com/images/category/pasta.png" alt="" className="h-52" />
                    <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                        <h1 className="font-semibold text-lg">Pasta</h1>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div>
                <div className="border rounded-lg shadow bg-blue-100">
                    <img src="https://www.themealdb.com/images/category/pork.png" alt="" className="h-52" />
                    <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                        <h1 className="font-semibold text-lg">Pork</h1>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}