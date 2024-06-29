document.addEventListener("DOMContentLoaded", function () {
    fetchMechanicsWorkload();
    fetchCurrentAppointments();
});

function fetchMechanicsWorkload() {
    fetch('fetch_mechanics_workload.php')
        .then(response => response.json())
        .then(data => {
            const mechanicsWorkload = document.getElementById('mechanicsWorkload');
            mechanicsWorkload.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Mechanic ID</th>
                            <th>Name</th>
                            <th>Daily Limit</th>
                            <th>Workload</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(mechanic => `
                            <tr>
                                <td>${mechanics.mechanic_id}</td>
                                <td>${mechanics.name}</td>
                                <td>${mechanics.daily_limit}</td>
                                <td>${mechanics.workload}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        });
}

function fetchCurrentAppointments() {
    fetch('fetch_current_appointments.php')
        .then(response => response.json())
        .then(data => {
            const currentAppointments = document.getElementById('currentAppointments');
            currentAppointments.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Client Name</th>
                            <th>Phone</th>
                            <th>Car License</th>
                            <th>Appointment Date</th>
                            <th>Mechanic Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(appointment => `
                            <tr>
                                <td>${appointment.appointment_id}</td>
                                <td>${appointment.client_name}</td>
                                <td>${appointment.phone}</td>
                                <td>${appointment.car_license}</td>
                                <td>${appointment.appointment_date}</td>
                                <td>${appointment.mechanic_name}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        });
}
