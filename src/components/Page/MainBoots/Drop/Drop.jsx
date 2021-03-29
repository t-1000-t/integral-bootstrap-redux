import React, {useState} from "react";
import AddList from "../AddList/AddList";

const Drop = ({id, category, list}) => {
    const [open, setOpen] = useState(false)

    const toggleList = () => {
        setOpen(!open)
    }

    return (
        <div key={id} className="">
            <button onClick={() => toggleList()} type="button" className="">
                {category}
            </button>
            <AddList idRL={id} list={list} toggleList={toggleList} open={open}/>
        </div>)
};

export default Drop;