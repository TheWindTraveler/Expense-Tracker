const expenseForm = document.getElementById("expense-form");
const expenseInput = document.getElementById("expense-description");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const transactionList = document.getElementById("transaction-history");
const totalExpense = document.getElementById("total-expenses");
const totalIncome = document.getElementById("total-income");
const balance = document.getElementById("balance");
const incomeForm = document.getElementById("income-form");
const incomeDescriptionInput = document.getElementById("income-description");
const incomeAmountInput = document.getElementById("income-amount");

incomeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = incomeDescriptionInput.value.trim();
    const amount = parseFloat(incomeAmountInput.value.trim());

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid income description and amount.');
        return;
    }

    addTransaction(description, amount, 'Income');
    updateSummary();
    clearIncomeInputs();
});

function clearIncomeInputs() {
    incomeDescriptionInput.value = '';
    incomeAmountInput.value = '';
};

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense description and amount.')
        return;
    }


    addTransaction(description, amount, category);
    updateSummary();
    clearInputs();
});

function addTransaction(description, amount, category) {
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
    balance.textContent = (totalIncomes - totalExpenses).toFixed(2);
};

function clearInputs() {
    expenseInput.value = '';
    amountInput.value = '';
    categoryInput.value = '';
}
