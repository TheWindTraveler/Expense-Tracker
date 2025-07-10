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