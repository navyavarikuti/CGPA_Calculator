function createFields() {
    let count = document.getElementById("semesterCount").value;
    let container = document.getElementById("sgpaFields");

    if (count < 1 || count > 8) {
        alert("Please enter a number between 1 and 8");
        return;
    }

    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        let input = document.createElement("input");

        input.type = "number";
        input.step = "0.01";
        input.placeholder = `Enter SGPA of Semester ${i}`;

        container.appendChild(input);
    }

 
    document.getElementById("calculateBtn").style.display = "block";
}

function calculateCGPA() {
    let inputs = document.querySelectorAll("#sgpaFields input");

    let total = 0;

    inputs.forEach(input => {
        total += Number(input.value);
    });

    let cgpa = total / inputs.length;

    document.getElementById("result").innerHTML =
        `CGPA: ${cgpa.toFixed(2)}`;
}