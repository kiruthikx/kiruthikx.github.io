fetch("./data/db.json")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched data:", data);  // Debugging line

        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        (Array.isArray(data) ? data : data.users || []).forEach(user => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    })
    .catch(error => console.error("Error fetching users:", error));
