// Add transaction function
function addTransaction(description, amount, category) {
    
    // Save transation to local storage
    const transaction = {
        description: description,
        amount: amount,
        category: category
    };

    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    
    
    const transactionRow = document.createElement("tr");

    transactionRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${category === "Income" ? "Income" : "Expense"}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    transactionList.appendChild(transactionRow);

    transactionRow.querySelector(".delete-btn").addEventListener('click', function() {
        transactionRow.remove();
        updateSummary();
    });
};