import React, {useState} from "react";

function ListCategoryName({elem}) {
    const [openFilterElement, setOpenFilterElement] = useState(false)
    return (
        <>
            <p className="" onClick={() => setOpenFilterElement(!openFilterElement)}>
                {elem.name}
            </p>
            <>
                {openFilterElement && elem.filters.map((item) => (
                    <div key={item.filterID} className="">
                        <p className="">{item.name}</p>

                        <input
                            type="checkbox"
                            className=""
                            checked={item.completed}
                            onChange={() => {}}
                            // onChange={() => updateElemStatus(item.filterID)}
                        />
                    </div>
                ))}
            </>
        </>
    );
}

export default ListCategoryName