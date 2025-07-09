const expenseForm = document.getElementById("expense-form");
const expenseInput = document.getElementById("expense-input");
const amountInput = document.getElementById("amount-input");
const categoryInput = document.getElementById("category-input");
const transactionList = document.getElementById("transaction-list");
const totalExpense = document.getElementById("total-expense");
const totalIncome = document.getElementById("balance");

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense description and amount.')
    }

    addTransaction(description, amount, category);
    updateSummary();
    clearInputs();
})