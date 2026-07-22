const datas = JSON.parse(localStorage.getItem("transaction")) || []
const transactionForm = document.getElementById("transactionForm")
const titleInput = document.getElementById("titleInput")
const amountInput = document.getElementById("amountInput")
const typeInput = document.getElementById("typeInput")
const category = document.getElementById("category")
const dateInput = document.getElementById("dateInput")


function saveDatas() {
    localStorage.setItem("transaction", JSON.stringify(datas))
}

function idGenerator() {
    if (datas.length === 0) { return 1 }
    const maxid = Math.max(...datas.map(item => item.id))
    return maxid + 1
}

transactionForm.addEventListener("submit", event => {
    event.preventDefault()

    const transaction = {
        id: idGenerator(),
        title: titleInput.value,
        amount: Number(amountInput.value),
        type: typeInput.value,
        category: category.value,
        date: dateInput.value
    };
    datas.push(transaction)
    saveDatas()
    console.log(datas)
})