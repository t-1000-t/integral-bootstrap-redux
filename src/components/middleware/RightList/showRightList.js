const showRightList = (id) => {

    const x = document.getElementById(`${id}`);
    if (x.classList.contains("show")) {
        x.classList.remove("show");
        return
    }
    x.classList.add("show");

};

export default showRightList;