// Show income notification
function showIncomeNotification(message) {
    const notification = document.getElementById("income-notification");
    notification.textContent = message;
    notification.classList.remove("hidden");

    setTimeout(function() {
        notification.classList.add("hidden");
    }, 2000);
}