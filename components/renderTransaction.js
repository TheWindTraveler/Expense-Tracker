function renderTransaction(description, amount, category) {
    const transactionRow = document.createElement("tr");

    transactionRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${category === "Income" ? "Income" : "Expense"}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    transactionList.appendChild(transactionRow);

    transactionRow.querySelector(".delete-btn").addEventListener('click', function () {
        transactionRow.remove();
        removeTransaction({ description, amount, category });
        updateSummary();
    });
}
