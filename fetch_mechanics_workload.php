<?php
$conn = new mysqli('localhost', 'root', '', 'car_workshop');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT m.mechanic_id, m.name, m.daily_limit, COUNT(a.mechanic_id) AS workload 
        FROM mechanics m 
        LEFT JOIN appointment a ON m.mechanic_id = a.mechanic_id AND a.appointment_date = CURDATE() 
        GROUP BY m.mechanic_id";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $mechanicsWorkload = array();
    while ($row = $result->fetch_assoc()) {
        $mechanicsWorkload[] = $row;
    }
    echo json_encode($mechanicsWorkload);
}

$conn->close();
?>
