
// Show expense notification
function showExpenseNotification(message) {
    const notification = document.getElementById("expense-notification");
    notification.textContent = message;
    notification.classList.remove("hidden");

    setTimeout(function() {
        notification.classList.add("hidden");
    }, 2000);
}