function removeTransaction(transactionToRemove) {
    let transactions = transactions.filter(function(transaction) {
        return !(transaction.description === transactionToRemove.description &&
                transaction.amount === transactionToRemove.amount &&
                transaction.category === transactionToRemove.category);
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));
}