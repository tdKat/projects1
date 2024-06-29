<?php
$conn = new mysqli('localhost', 'root', '', 'car_workshop');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT a.appointment_id, c.name AS client_name, c.phone, c.car_license_number, a.date, m.name AS mechanic_name 
        FROM appointment a 
        INNER JOIN clients c ON a.client_id = c.client_id 
        INNER JOIN mechanics m ON a.mechanic_id = m.mechanic_id 
        WHERE a.appointment_date = CURDATE()";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $currentAppointments = array();
    while ($row = $result->fetch_assoc()) {
        $currentAppointments[] = $row;
    }
    echo json_encode($currentAppointments);
}

$conn->close();
?>
