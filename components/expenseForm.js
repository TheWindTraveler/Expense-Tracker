// Expense form function
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense description and amount.')
        return;
    }


    addTransaction(description, amount, category);
    showExpenseNotification("Transaction added successfully!");
    updateSummary();
    clearExpenseInput()
});

// Clear expense input
function clearExpenseInput() {
    expenseInput.value = '';
    amountInput.value = '';
    categoryInput.value = '';
};