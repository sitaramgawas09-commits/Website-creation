let submit = document.getElementById("submit");
let screen = document.getElementById("Screen");
let table = document.getElementById("table");
let Reset = document.getElementById("Reset");
let TeacherDetails = JSON.parse(localStorage.getItem("TeacherDetails"))||[]
submit.addEventListener("click",(a)=>{
    a.preventDefault();
    Submit()
})

function Submit(){

    let name = document.getElementById("name").value;
    let Rollno = document.getElementById("idno").value;
    let subject = document.getElementById("subject").value;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = {
  TeacherName: name,
  TeacherRollno: Rollno,
  TeacherSubject: subject
};
TeacherDetails.push(raw)    
localStorage.setItem("TeacherDetails",JSON.stringify(TeacherDetails))

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify(raw),
  redirect: "follow"
};


fetch("http://localhost:8080/api/teacher", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
    screen.innerHTML = result;
  })
  .catch((error) => console.error(error));
}


Reset.addEventListener("click",()=>{
    localStorage.removeItem("TeacherDetails");
    table.innerHTML = "";
    screen.innerHTML = "";
})
