 const form = document.querySelector("#form");
 const list = document.querySelector("#list");
 const bar = document.querySelector("#search");
 const erased = document.querySelector(".deleted");

 form.addEventListener("submit", e => {
    e.preventDefault();
    
    const elem = document.createElement("li");
    const product = document.createElement("p");
    const deleted = document.createElement("button");

    product.textContent = bar.value;
    deleted.textContent = "Delete";
    deleted.classList.add("deleted");

    deleted.addEventListener("click", e => {
        list.removeChild(elem);
    })

    elem.append(product, deleted);
    list.append(elem);
 })

 