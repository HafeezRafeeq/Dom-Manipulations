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
    var mark1 = Number(document.querySelector("#M-english").value) || 0;
    var mark2 = Number(document.querySelector("#M-urdu").value) || 0;
    var mark3 = Number(document.querySelector("#M-islamiat").value) || 0;
    var mark4 = Number(document.querySelector("#M-math").value) || 0;
    var mark5 = Number(document.querySelector("#M-computer").value) || 0;

    var obtaintSubjectMarks = mark1 + mark2 + mark3 + mark4 + mark5;
    var totalNumber = 500;
    var obtaintpercentage = (obtaintSubjectMarks / totalNumber) * 100;

    totalMarks.innerHTML = obtaintSubjectMarks

    if(obtaintpercentage >= 90  ){
        grade.innerHTML = "A+"
    } else if (obtaintpercentage <= 90){
        grade.innerHTML = "A"
    } else if (obtaintpercentage <= 80){
grade.innerHTML = "B"
    } else if (obtaintpercentage <= 70){
grade.innerHTML = "C"
    } else if (obtaintpercentage <= 50){
grade.innerHTML = "D"
    } else if (obtaintSubjectMarks <= 40)
grade.innerHTML = "Fail"
    Percentage.innerHTML = obtaintpercentage
}






// function result_student() {
//     var studentName = document.querySelector("#student-name").value;
//     var h1 = document.querySelector("#hello-user");
//     var result = document.querySelector("#result-popap");

//     h1.innerHTML = "Hello " + studentName;
//     result.style.display = "block";

//     UserResult();
// }

// function UserResult() {
//     var mark1 = Number(document.querySelector("#M-english").value) || 0;
//     var mark2 = Number(document.querySelector("#M-urdu").value) || 0;
//     var mark3 = Number(document.querySelector("#M-islamiat").value) || 0;
//     var mark4 = Number(document.querySelector("#M-math").value) || 0;
//     var mark5 = Number(document.querySelector("#M-computer").value) || 0;

//     var obtaintSubjectMarks = mark1 + mark2 + mark3 + mark4 + mark5;
//     var totalNumber = 500;
//     var percentage = (obtaintSubjectMarks / totalNumber) * 100;

//     document.querySelector("#total-marks").innerHTML = obtaintSubjectMarks;
//     document.querySelector("#Percentage").innerHTML = percentage.toFixed(2);

//     var grade = "F";
//     if (percentage >= 80) grade = "A+";
//     else if (percentage >= 70) grade = "A";
//     else if (percentage >= 60) grade = "B";
//     else if (percentage >= 50) grade = "C";
//     else if (percentage >= 40) grade = "D";

//     document.querySelector("#Grade").innerHTML = grade;
// }