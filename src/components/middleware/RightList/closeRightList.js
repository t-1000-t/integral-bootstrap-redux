
const closeRightList = (id) => {
    const x = document.getElementById(`${id}`);
    if (x === null) {
        return
    }
    x.classList.remove("show");
};

export default  closeRightList;