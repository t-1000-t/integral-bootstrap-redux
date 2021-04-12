import React from "react";

function listCategoryName({elem}) {
    console.log(elem)
    return (
        <>
            <p className="">
                {elem.name}
            </p>
            {/*<>*/}
            {/*    elem.filters.map((item) => (*/}
            {/*        <div key={item.filterID} className={stylish.checkBoxList}>*/}
            {/*            <p className="">{item.name}</p>*/}

            {/*            <input*/}
            {/*                type="checkbox"*/}
            {/*                className=""*/}
            {/*                checked={item.completed}*/}
            {/*                // onChange={() => updateElemStatus(item.filterID)}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*</>*/}
        </>
    );
}

export default listCategoryName