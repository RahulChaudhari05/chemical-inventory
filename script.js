let chemicals = [
    { id: 1, name: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
    { id: 2, name: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
    { id: 3, name: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
    { id: 4, name: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
    { id: 5, name: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
    { id: 6, name: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, name: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 }
];

let selectedRow = null;

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    chemicals.forEach((chemical, index) => {
        const row = document.createElement('tr');
        row.onclick = () => selectRow(row, index);
        row.innerHTML = `
            <td>${chemical.id}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'name', this.textContent)">${chemical.name}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'vendor', this.textContent)">${chemical.vendor}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'density', this.textContent)">${chemical.density}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'viscosity', this.textContent)">${chemical.viscosity}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'packaging', this.textContent)">${chemical.packaging}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'packSize', this.textContent)">${chemical.packSize}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'unit', this.textContent)">${chemical.unit}</td>
            <td contenteditable="true" onblur="updateField(${index}, 'quantity', this.textContent)">${chemical.quantity}</td>
        `;
        tbody.appendChild(row);
    });
}

function selectRow(row, index) {
    if (selectedRow) selectedRow.style.backgroundColor = "";
    selectedRow = row;
    selectedRow.style.backgroundColor = "#d0e4f5";
    selectedRowIndex = index;
}

function updateField(index, field, value) {
    chemicals[index][field] = value;
}

function sortTable(field) {
    chemicals.sort((a, b) => a[field] > b[field] ? 1 : -1);
    renderTable();
}

function addRow() {
    chemicals.push({ id: chemicals.length + 1, name: "", vendor: "", density: 0, viscosity: 0, packaging: "", packSize: 0, unit: "", quantity: 0 });
    renderTable();
}

function moveRowUp() {
    if (selectedRowIndex > 0) {
        const temp = chemicals[selectedRowIndex - 1];
        chemicals[selectedRowIndex - 1] = chemicals[selectedRowIndex];
        chemicals[selectedRowIndex] = temp;
        renderTable();
    }
}

function moveRowDown() {
    if (selectedRowIndex < chemicals.length - 1) {
        const temp = chemicals[selectedRowIndex + 1];
        chemicals[selectedRowIndex + 1] = chemicals[selectedRowIndex];
        chemicals[selectedRowIndex] = temp;
        renderTable();
    }
}

function deleteRow() {
    if (selectedRowIndex !== null) {
        chemicals.splice(selectedRowIndex, 1);
        renderTable();
    }
}

function refreshTable() {
    renderTable();
}

function saveData() {
    const dataStr = JSON.stringify(chemicals, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "chemicals.json";
    a.click();
}

window.onload = renderTable;
