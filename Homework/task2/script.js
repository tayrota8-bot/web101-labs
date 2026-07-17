function checkGrade() {

    let score = Number(document.getElementById("score").value);
    let result = document.getElementById("result");

    let grade = "";
    let color = "";

    if (score < 0 || score > 100 || isNaN(score)) {
        result.innerHTML = "Enter a valid score!";
        result.style.color = "red";
        return;
    }

    if (score >= 90) {
        grade = "A";
        color = "green";
    } 
    else if (score >= 80) {
        grade = "B";
        color = "blue";
    } 
    
    else if (score >= 50) {
        grade = "c";
        color = "gold";
    } 
    else {
        grade = "F";
        color = "red";
    }

    result.innerHTML = `Score: ${score} - Grade ${grade}`;
    result.style.color = color;
}