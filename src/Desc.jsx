import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Desc() {
    const { id } = useParams()
    const [newData, setNew] = useState(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=5277${id}`)
            .then((res) => res.json())
            .then((data) => setNew(data))
            .catch((error) => console.log(error))
    }, [])


    return (
        <div className="container mx-auto">
            {newData && newData.meals.map((newList) => {
                return (
                    <div className="border shadow space-y-3 p-10" key={newList.idMeal}>
                        <img src={newList.strMealThumb} alt="" className="h-52 mx-auto" />
                        <h1 className="font-semibold text-xl">{newList.strCategory}</h1>
                        <p className="">{newList.strInstructions}</p>
                        <div className="flex justify-end">
                            <Link to='/'><button type="button" className="bg-red-600 active:bg-red-700 focus:outline-none focus:ring text-white font-semibold text-md tracking-widest w-20 h-7 rounded-md">
                                Go back
                            </button>
                            </Link>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}