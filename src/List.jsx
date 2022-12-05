import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List(props) {
    const [alldata, setData] = useState(null)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error))
    }, [])

    function clickfn(ids) {
        props.setIdchange(ids)
    }

    return (
        <div className="container mx-auto bg-blue-50 p-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-5">
                {alldata && alldata.categories.map((lists) => {
                    return (
                        <div className="border rounded-lg shadow bg-blue-100" key={lists.idCategory}>
                            <Link to={`/des/${lists.idCategory}`}>
                                <img src={lists.strCategoryThumb} alt="" className="h-52" />
                            </Link>
                            <div className="flex flex-row justify-between p-3 bg-blue-300 mt-2">
                                <h1 className="font-semibold text-lg">{lists.strCategory}</h1>
                                <button type="button" onClick={() => clickfn(lists.idCategory)}>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div >
    )
}