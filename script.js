// script.js
function addSubjects() {
    var numSubjects = document.getElementById("numSubjects").value;
    var subjectDetails = document.getElementById("subjectDetails");

    subjectDetails.innerHTML = ""; // Clear previous inputs

    for (var i = 0; i < numSubjects; i++) {
        var div = document.createElement("div");
        div.className = "subject";
        div.innerHTML = `
            <p>Subject ${i + 1}</p>
            <label for="credit${i}">Credits:</label>
            <input type="number" id="credit${i}" placeholder="Enter credits"><br>
            <label for="grade${i}">Grade  : </label>
            <input type="text" id="grade${i}" placeholder="Enter grade">
        `;
        subjectDetails.appendChild(div);
    }

    var button = document.createElement("button");
    button.textContent = "Calculate GPA";
    button.onclick = calculateGPA;
    subjectDetails.appendChild(button);
}

function calculateGPA() {
    var numSubjects = document.getElementById("numSubjects").value;
    var totalCredits = 0;
    var weightedSum = 0;

    for (var i = 0; i < numSubjects; i++) {
        var credit = parseFloat(document.getElementById("credit" + i).value);
        var grade = document.getElementById("grade" + i).value.toUpperCase();

        switch (grade) {
            case "S":
                weightedSum += 10 * credit;
                break;
            case "A":
                weightedSum += 9 * credit;
                break;
             case "B":
                weightedSum += 8 * credit;
                break;
            case "C":
                weightedSum += 7 * credit;
                break;
            case "D":
                weightedSum += 6 * credit;
                break;
            case "E":
                weightedSum += 5 * credit;
                break;
            case "F":
                // No points for F
                break;
            case "s":
                weightedSum += 10 * credit;
                break;
            case "a":
                weightedSum += 9 * credit;
                break;
             case "b":
                weightedSum += 8 * credit;
                break;
            case "c":
                weightedSum += 7 * credit;
                break;
            case "d":
                weightedSum += 6 * credit;
                break;
            case "e":
                weightedSum += 5 * credit;
                break;
            case "f":
                // No points for F
                break;
            default:
                console.log("Invalid grade entered. Assuming F (0 points).");
        }

        totalCredits += credit;
    }

    var gpa = weightedSum / totalCredits;
    document.getElementById("result").textContent = `GPA: ${gpa.toFixed(2)}`;
}
