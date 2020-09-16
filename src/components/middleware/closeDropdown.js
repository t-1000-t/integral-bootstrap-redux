const closeDropdown = () => {
    const x = document.getElementById("closeDropdownShow");
    x.classList.remove("show");
    const y = document.getElementById("menuDropdownShow");
    y.classList.remove("show");
};

export default closeDropdown;