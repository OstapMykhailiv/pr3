input = document.getElementById("text")
itemsList = document.getElementById("items-list")
function addItem(){
    switch (checkInput(input)){
        case 1:
            break
        case 2:
            break
        default:
            // Додаємо елемент списку з текстом та зберігаємо цей текст
            let l = document.createElement("li")
            l.innerText = input.value
            itemsList.appendChild(l)
            input.value = ''
            let text = l.innerText
            input.focus()

            // Кнопка delete та обробник подій
            let d = document.createElement("button")
            d.textContent = "delete"
            d.style.marginLeft = "15px"
            d.addEventListener('click', ()=>{
                if(confirm("Ви впевнені, що хочете видалити даний елемент зі списку?")){
                    l.remove()
                }
            })
            l.appendChild(d)

            // Кнопка change
            let c = document.createElement("button")
            c.textContent = "change"
            c.style.marginLeft = "15px"
            l.appendChild(c)

            // Обробник подій для кнопки change
            c.addEventListener('click', () => {
                let inputField = document.createElement("input")
                let saveButton = document.createElement("button")
                let cancelButton = document.createElement("button")
                let item = c.parentElement

                saveButton.textContent = "save"
                cancelButton.textContent = "cancel"
                saveButton.style.marginLeft = "15px"
                cancelButton.style.marginLeft = "15px"

                inputField.value = text
                item.innerHTML = ''
                item.appendChild(inputField)
                item.appendChild(saveButton)
                item.appendChild(cancelButton)

                // Додаємо обробники подій для кнопки "save"
                saveButton.addEventListener('click', () => {
                    let check = checkInput(inputField)
                    if (check === 1 || check === 2) {
                        return 0;
                    }
                    else{
                        // Після натискання "Save" встановлюємо новий текст з input
                        item.innerHTML = ''
                        item.textContent = inputField.value;
                        text = inputField.value
                        item.appendChild(d)
                        item.appendChild(c)
                    }
                });

                // Додаємо обробники подій для кнопки "cancel"
                cancelButton.addEventListener("click", ()=>{
                    item.innerHTML = ''
                    item.innerText = text
                    item.appendChild(d)
                    item.appendChild(c)
                })

            });

    }
}

function checkInput(input){
    if(input.value.trim() === ""){
        alert("Перевірте правильність введення")
        return 1
    }
    let items = itemsList.getElementsByTagName("li");
    for(let i=0; i<items.length; i++){
        if(input.value.trim() === items[i].textContent.replace("deletechange", '')){
            alert("Цей елемент вже є в списку")
            return 2
        }
    }
}

