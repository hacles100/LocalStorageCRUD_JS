
function validateForm(){

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;

    if(name == ""){
        alert('Name is required!');
        return false;
    }

    if(age == ""){
        alert('Age is required!');
        return false;
    }

    else if(age < 1){
        alert('Age must not be zero or less than zero!');
        return false;
    }

    if(address == ""){
        alert('Address is required!');
        return false;
    }

    if(email == ""){
        alert('Email is required!');
        return false;
    }
    else if(!email.includes("@")){
        alert("Invalid email address");
        return false;
    }


    return true;
}


// Function ShowData

function ShowData(){

    let peopleList;

    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";

    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });


    document.querySelector("#crudTable tbody").innerHTML = html;

}


// Loads all data when document or page loaded
document.onload = ShowData();

// function to add data
function AddData(){
    // for validate form

    if(validateForm() == true){
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;
        
        let peopleList;

        if(localStorage.getItem("peopleList") == null){
            peopleList = [];

        }else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name,
            age: age,
            address: address,
            email: email,
        });
        
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        ShowData();

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
    }
}