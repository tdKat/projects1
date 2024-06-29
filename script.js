document.addEventListener("DOMContentLoaded", function () {
    fetch('fetch_mechanics.php')
        .then(response => response.json())
        .then(data => {
            const mechanicSelect = document.getElementById('mechanic');
            data.forEach(mechanic => {
                const option = document.createElement('option');
                option.value = mechanics.mechanic_id;
                option.textContent = `${mechanics.name} (Available: ${mechanic.daily_limit - mechanic.work_load})`;
                mechanicSelect.appendChild(option);
            });
        });
});
