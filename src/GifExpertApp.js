import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
export const GiftExpertApp=()=>{
    //const categories = ["One Punch", "Samurai X", "DBZ"];
    const [categories, setcategories] = useState(["One Punch"])
    // const handleAdd=()=>{
    //     setcategories([...categories ,"XHunter"]);
    // }
    return(
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}