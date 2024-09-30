const data = [
    // Your JSON data goes here...
];

function renderTable() {
    const tableBody = document.querySelector('#chemicalTable tbody');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.vendor}</td>
            <td>${item.density}</td>
            <td>${item.viscosity}</td>
            <td>${item.packaging}</td>
            <td>${item.packSize}</td>
            <td>${item.unit}</td>
            <td>${item.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortTable(column) {
    // Implement sorting logic here
}

function addRow() {
    // Implement add row logic here
}

function moveRowUp() {
    // Implement move row up logic here
}

function moveRowDown() {
    // Implement move row down logic here
}

function deleteRow() {
    // Implement delete row logic here
}

function refreshData() {
    renderTable();
}

function saveData() {
    // Implement save functionality here
}

// Initial rendering of the table
renderTable();
