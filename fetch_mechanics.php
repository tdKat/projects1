<?php
$conn = new mysqli('localhost', 'root', '', 'car_workshop');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT m.mechanic_id, m.name, m.daily_limit, COUNT(a.mechanic_id) AS work_load 
                        FROM mechanics m 
                        LEFT JOIN appointment a ON m.mechanic_id = a.mechanic_id AND a.date = CURDATE() 
                        GROUP BY m.mechanic_id");

$mechanics = array();
while ($row = $result->fetch_assoc()) {
    $mechanics[] = $row;
}

echo json_encode($mechanics);
$conn->close();
?>
