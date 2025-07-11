function saveTransaction(description, amount, category) {
    const transaction = { description, amount, category };
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
