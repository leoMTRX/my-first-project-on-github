let orders = [];

function addOrder() {
    const orderName = document.getElementById('orderName').value;
    const clientName = document.getElementById('clientName').value;

    if (orderName && clientName) {
        orders.push({ orderName, clientName });
        document.getElementById('orderName').value = '';
        document.getElementById('clientName').value = '';
        displayOrders();
    }
}

function displayOrders() {
    const ordersBody = document.getElementById('ordersBody');
    ordersBody.innerHTML = '';

    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderName}</td>
            <td>${order.clientName}</td>
            <td><button onclick="deleteOrder(${index})">Удалить</button></td>
        `;
        ordersBody.appendChild(row);
    });
}

function deleteOrder(index) {
    orders.splice(index, 1);
    displayOrders();
}

function filterOrders() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    const filteredOrders = orders.filter(order => order.clientName.toLowerCase().includes(filterValue));
    displayFilteredOrders(filteredOrders);
}

function displayFilteredOrders(filteredOrders) {
    const ordersBody = document.getElementById('ordersBody');
    ordersBody.innerHTML = '';

    filteredOrders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderName}</td>
            <td>${order.clientName}</td>
            <td><button onclick="deleteOrder(${index})">Удалить</button></td>
        `;
        ordersBody.appendChild(row);
    });
}

function sortOrders() {
    orders.sort((a, b) => a.clientName.localeCompare(b.clientName));
    displayOrders();
}

function generateReport() {
    const reportOutput = document.getElementById('reportOutput');
    const report = orders.map(order => `Заказ: ${order.orderName}, Клиент: ${order.clientName}`).join('\n');
    reportOutput.textContent = report || 'Нет заказов для отчета.';
}