
const list = ["О комапании", "Сертификаты", "Сотрудничество", "Отзывы", "Видео", "Гарантия", "Контакты"]

function addLiParentChild(parent, child) {
    function createLi(text) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.classList.add('menu__link')
        a.textContent = text
        li.prepend(a)
        return li
    }
    for (let i = 0; list.length > i; i++) {
        child.prepend(createLi(list[i]))
    }
    parent.prepend(child)
}
export default addLiParentChild