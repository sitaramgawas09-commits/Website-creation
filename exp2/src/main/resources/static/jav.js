let submit = document.getElementById("submit");
let table = document.getElementById("table");
const reset = document.getElementById("reset");
const screen = document.getElementById("container2")

let studentDetails = JSON.parse(localStorage.getItem("Mega")) || [];

submit.addEventListener("click", (pre) => {
  pre.preventDefault();
  const fname = document.getElementById("fname").value;
  const div = document.getElementById("div").value;
  const std = document.getElementById("std").value;
    const rollno = document.getElementById("rollno").value
  const gender = document.querySelector("input[name='gender']:checked").value;

  let student = {
    Name: fname,
    Div: div,
    STD: std,
    Rollno:rollno,
    Gender: gender,
  };


  studentDetails.push(student);
  window.localStorage.setItem("Mega", JSON.stringify(studentDetails));
  Submit(student)
  displayData();
});

function displayData() {
  table.innerHTML = "";
  table.innerHTML = ` <tr></tr>
            <th>Fname</th>
            <th>STD</th>
            <th>DIV</th>
              <th>RollNO</th>
            <th>Gender</th>
            <th>Edit</th>
             <th>Delete</th>
             </tr>`;
  studentDetails.forEach((element, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td")
    let Editbtn = document.createElement("button");
    let Deletebtn = document.createElement("button");


    Editbtn.innerText = "Edit";
    Editbtn.style.fontSize = "large";
    Editbtn.style.backgroundColor = "rgb(20, 121, 246)";

    Deletebtn.style.fontSize = "large";
    Deletebtn.style.backgroundColor = "red";
    Deletebtn.innerHTML = "Delete";


    Editbtn.onclick = function () {
      EditData(index);
    };

    Deletebtn.onclick = function () {
      DeleteData(index);
    };
    
    let item1 = element.Name
    let item2 = element.STD
    let item3 = element.Div
    let item4 = element.Rollno
    let item5 = element.Gender
     
    table.appendChild(tr);
    tr.append(td1, td2, td3, td4,td7, td5, td6);
    td1.textContent = item1 ;
    td2.textContent = item2;
    td3.textContent = item3;
    td4.textContent = item4;
    td7.textContent = item5;
    td5.appendChild(Editbtn);
    td6.appendChild(Deletebtn);

  });
}

function EditData(index) {
  document.getElementById("fname").value = studentDetails[index].Name;
  document.getElementById("div").value = studentDetails[index].Div;
  document.getElementById("std").value = studentDetails[index].STD;
  document.querySelector(`input[name='gender'][value='${studentDetails[index].Gender}']`,).checked = true;
  studentDetails.splice(index, 1);
  localStorage.setItem("Mega", JSON.stringify(studentDetails));
}

function DeleteData(index) {
  studentDetails.splice(index, 1);
  localStorage.setItem("Mega", JSON.stringify(studentDetails));
  displayData()
}

reset.addEventListener("click", () => {
  localStorage.removeItem("Mega");
  studentDetails = [];
  table.innerHTML = "";
});

displayData();





function Submit(student){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify(student),
  redirect: "follow"
};


fetch("http://localhost:8080/api/student", requestOptions)
  .then((response) => response.text())
  .then((result) =>{ console.log(result)
             screen.textContent = `${result} Save Successfully`      
  })
  .catch((error) => console.error(error));

}