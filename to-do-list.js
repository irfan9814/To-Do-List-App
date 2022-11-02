const items = document.querySelector("#input")
const box = document.querySelector(".items")

items.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            addNew(this.value)
            this.value = ""
        }
    }

)

const addNew = (items) => {
    const listItem = document.createElement("li");
    listItem.innerHTML =`
        ${items} <i class="bi bi-x"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )

    box.appendChild(listItem)
}