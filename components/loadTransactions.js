function loadTransactions() {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    transactions.forEach(function(transaction) {
        addTransaction(transaction.description, transaction.amount, transaction.category);
    });

    updateSummary();
}

window.addEventListener("load", loadTransactions);