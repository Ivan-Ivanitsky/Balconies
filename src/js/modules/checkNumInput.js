export {checkNum};

const checkNum = (selector) =>{
    const  numInputs = document.querySelectorAll(selector)

    numInputs.forEach(item =>{
        item.addEventListener('input',()=>{
            item.value = item.value.replace(/\D/, "") //проверка формы на число
        })
    })

}