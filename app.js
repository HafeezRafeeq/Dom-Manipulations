var studentName = document.querySelector("#student-name")
var rollNumber = document.querySelector("#roll-namber")
var h1 = document.querySelector("#hello-user")
var result = document.querySelector("#result-popap")
result.style.display = "none"


function result_student() {
    h1.innerHTML = "hello " + studentName.value
    result.style.display = "inline"
}





var totalMarks = document.querySelector("#total-marks")
var grade = document.querySelector("#Grade")
var Percentage = document.querySelector("#Percentage")

function UserResult() {
    console.log("hello")
    var mark1 = Number(document.querySelector("#M-english").value);
    var mark2 = Number(document.querySelector("#M-urdu").value);
    var mark3 = Number(document.querySelector("#M-islamiat").value);
    var mark4 = Number(document.querySelector("#M-math").value)
    var mark5 = Number(document.querySelector("#M-computer").value);

    var obtaintSubjectMarks = mark1 + mark2 + mark3 + mark4 + mark5;
    var totalNumber = 500;
    var obtaintpercentage = (obtaintSubjectMarks / totalNumber) * 100;

    totalMarks.innerHTML = obtaintSubjectMarks

    if (obtaintpercentage >= 90) {
        grade.innerHTML = "A+"
    } else if (obtaintpercentage >= 80 && obtaintpercentage <= 90) {
        grade.innerHTML = "A"
    } else if (obtaintpercentage >= 70 && obtaintpercentage <= 80) {
        grade.innerHTML = "B"
    } else if (obtaintpercentage >= 60 && obtaintpercentage <= 70) {
        grade.innerHTML = "C"
    } else if (obtaintpercentage >= 50 && obtaintpercentage <= 60) {
        grade.innerHTML = "D"
    } else if (obtaintSubjectMarks >= 40 && obtaintpercentage <= 50) {
        grade.innerHTML = "permoted"
    } else (grade.innerHTML = "Fail")

        
    Percentage.innerHTML = obtaintpercentage.toFixed() + "%"

}

