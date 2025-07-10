// Update summary function
function updateSummary() {
    let totalExpenses = 0;
    let totalIncomes = 0;

    const transactions = transactionList.querySelectorAll("tr");

    transactions.forEach(function(transaction) {
        const amount = parseFloat(transaction.children[2].textContent);
        const category = transaction.children[1].textContent;

        if (category === 'Income') {
            totalIncomes += amount;
        } else {
            totalExpenses += amount;
        };
    });

    totalExpense.textContent = totalExpenses.toFixed(2);
    totalIncome.textContent = totalIncomes.toFixed(2);

    const currentBalance = totalIncomes - totalExpenses;
    balance.textContent = currentBalance.toFixed(2);

    // Positive and negative class
    if (currentBalance >= 0) {
        balance.classList.remove('negative')
        balance.classList.add("positive");
    } else {
        balance.classList.remove('positive');
        balance.classList.add('negative');
    };
};
