const transactions = JSON.parse(localStorage.getItem("transaction")) || []
const Balance = document.getElementById("Balance")
const income = document.getElementById("income")
const expenses = document.getElementById("expenses")
const saving = document.getElementById("saving")
const chart = document.getElementById("chart")
const recent = document.getElementById("recent")

display()

function display() {
    const totalIncome = transactions.filter(item => item.type === "income")
        .reduce((acc, item) => acc + item.amount, 0)
    const totalExpense = transactions.filter(item => item.type === "expense")
        .reduce((acc, item) => acc + item.amount, 0)


    const totalSaving = transactions.filter(item => item.type === "saving")
        .reduce((acc, item) => acc + item.amount, 0)

    const currentBalance = totalIncome - (totalExpense + totalSaving)

    income.textContent = `${totalIncome} ETB`
    expenses.textContent = `${totalExpense} ETB`
    Balance.textContent = `${currentBalance} ETB`
    saving.textContent = `${totalSaving} ETB`
    displayRecentTransaction()
}

function displayRecentTransaction() {
        const recentTransactions = transactions.slice(-4)
    recentTransactions.forEach(element => {
        const card = document.createElement("div")
        const transactionAmount = document.createElement("p")
        const transactionType = document.createElement("p")
        const transactionDate = document.createElement("p")

        transactionAmount.textContent = element.amount
        transactionType.textContent = element.type
        transactionDate.textContent = element.date
        card.append(transactionAmount, transactionType, transactionDate)
        card.classList.add("card")
        recent.append(card)
    });
}