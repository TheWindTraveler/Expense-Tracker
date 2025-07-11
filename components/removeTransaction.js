function removeTransaction(transactionToRemove) {
    // Fetch transactions
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // Filtering out the one to delete
    transactions = transactions.filter(function (transaction) {
        return !(
            transaction.description === transactionToRemove.description &&
            transaction.amount === transactionToRemove.amount &&
            transaction.category === transactionToRemove.category
        );
    });

    // Save updated list
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
