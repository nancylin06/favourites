import React, { useState, useEffect } from "react";

export default function Favor(props) {
    const [imgData, setImg] = useState(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=5277${props.id}`)
            .then((res) => res.json())
            .then((data) => setImg(data))
            .catch((error) => console.log(error))
    },[imgData])

    // if(imgData !== null){
    //     setImg((listItems) => {
    //         return(
    //             {...listItems, "strMealThumb" : imgData }
    //         )
    //     })
    // }

    return (
        <div className="container p-5 px-10 bg-stone-800 mx-auto space-y-3">
            <h1 className="text-lg text-white font-semibold">Favourites</h1>
            <div className="grid lg:grid-cols-12 md:grid-cols-9 grid-cols-4 gap-1">
                {imgData && imgData.meals.map((newList) => {
                    return (
                        <img src={newList.strMealThumb} alt="" className="rounded-full w-16 h-16 border-2 border-white-500" key={newList.idMeal} />
                    )
                })
                }
            </div>
        </div>
    )
}