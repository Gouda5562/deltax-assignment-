document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('leadTableBody')) {
        loadLeads();
    }
});

function viewReports() {
    alert("Detailed reports functionality is not implemented in this demo.");
}

function addNewLead() {
    window.location.href = "lead-management.html";
}

function backToLeads() {
    window.location.href = "lead-listing.html";
}

function loadLeads() {
    const leads = [
        { name: 'John Doe', contact: '123-456-7890', status: 'New' },
        { name: 'Jane Smith', contact: '098-765-4321', status: 'Active' }
    ];

    const leadTableBody = document.getElementById('leadTableBody');
    leadTableBody.innerHTML = '';

    leads.forEach((lead, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.contact}</td>
            <td>${lead.status}</td>
            <td>
                <button onclick="viewLead(${index})">View</button>
                <button onclick="editLead(${index})">Edit</button>
                <button onclick="deleteLead(${index})">Delete</button>
            </td>
        `;
        leadTableBody.appendChild(row);
    });
}

function viewLead(index) {
    // For demo purposes, we'll just load a static lead detail
    window.location.href = "lead-details.html";
}

function editLead(index) {
    // For demo purposes, we'll just load a static lead edit form
    window.location.href = "lead-management.html";
}

function deleteLead(index) {
    alert("Delete lead functionality is not implemented in this demo.");
}

function saveLead() {
    alert("Save lead functionality is not implemented in this demo.");
    window.location.href = "lead-listing.html";
}

function cancelEdit() {
    window.location.href = "lead-listing.html";
}

function addNote() {
    const notesList = document.getElementById('notesList');
    const newNote = prompt("Enter new note:");
    if (newNote) {
        const noteItem = document.createElement('li');
        noteItem.textContent = newNote;
        notesList.appendChild(noteItem);
    }
}
