// Income form function
incomeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = incomeDescriptionInput.value.trim();
    const amount = parseFloat(incomeAmountInput.value.trim());

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid income description and amount.');
        return;
    }

    addTransaction(description, amount, 'Income');
    showIncomeNotification("Income added successfully!");
    updateSummary();
    clearIncomeInputs()
});

// Clear income function
function clearIncomeInputs() {
    incomeDescriptionInput.value = '';
    incomeAmountInput.value = '';
};