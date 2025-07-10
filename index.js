const expenseForm = document.getElementById("expense-form");
const expenseInput = document.getElementById("expense-description");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const transactionList = document.getElementById("transaction-history");
const totalExpense = document.getElementById("total-expenses");
const totalIncome = document.getElementById("total-income");
const balance = document.getElementById("balance");
const incomeForm = document.getElementById("income-form");
const incomeDescriptionInput = document.getElementById("income-description");
const incomeAmountInput = document.getElementById("income-amount");
const clearAllInput = document.getElementById("clear-all");




// Clear all inputs function
clearAllInput.addEventListener('click', function() {
    // Clear all input fields
    expenseInput.value = '';
    amountInput.value = '';
    categoryInput.value = '';
    incomeDescriptionInput.value = '';
    incomeAmountInput.value = '';

    // Remove all rows from transaction table
    transactionList.innerHTML = '';

    // Reset summary
    totalExpense.textContent = '0.00';
    totalIncome.textContent = '0.00';
    balance.textContent = '0.00';
});

// Show income notification
function showIncomeNotification(message) {
    const notification = document.getElementById("income-notification");
    notification.textContent = message;
    notification.classList.remove("hidden");

    setTimeout(function() {
        notification.classList.add("hidden");
    }, 2000);
}

// Show expense notification
function showExpenseNotification(message) {
    const notification = document.getElementById("expense-notification");
    notification.textContent = message;
    notification.classList.remove("hidden");

    setTimeout(function() {
        notification.classList.add("hidden");
    }, 2000);
}
