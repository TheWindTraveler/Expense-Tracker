function addTransaction(description, amount, category) {
    saveTransaction(description, amount, category);
    renderTransaction(description, amount, category);
}