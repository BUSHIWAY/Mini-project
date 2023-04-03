
let name_arr = [];
let text_error = document.querySelector("#Error_text");
let inputs = document.querySelectorAll('input');
let btn = document.getElementById("add");
let index = 0;
var status = '';

// The click event 
btn.addEventListener("click", () => {
    let Name = document.getElementById("Name").value.toLowerCase().trim();
    let Grade = document.getElementById("Grade").value;
    if (exist(Name, Grade)) {
        if (checking(Name, name_arr) === false) {
            if (Status(Grade)) {
                name_arr.push(Name);
                Adding(index, Grade);
                index++;
                text_error.innerHTML = 'Student successfuly added'
                text_error.style.color = "green";
                inputs.forEach(input => input.value = '');
            } else {
                text_error.innerHTML += "\nThe grade must be between 0 and 20";
                text_error.style.color = "red";
            }
        } else {
            text_error.innerHTML = 'Name already exist';
            text_error.style.color = "red";
        }
    } else {
        if (Name === '') {
            text_error.innerHTML = 'Name mustn\'t be empty';
            text_error.style.color = "red";
        }
        if (Grade === '') {
            text_error.innerHTML += '\nFields mustn\'t be empty try enter something';
            text_error.style.color = "red";
        }
    }
    
});

// The selection event
inputs.forEach(input => input.onfocus = function () {
    text_error.innerHTML = '';
});

// The name checking function
function checking (N, arr) {
    let check = arr.includes(N);
    return check;
};

// The Adding Function
function Adding (index, Grade) {
    let tr = document.createElement('tr');
    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = index + 1;
    td2.innerHTML = name_arr[index];
    td3.innerHTML = Grade;
    td4.innerHTML = status;

    document.getElementById('Data').appendChild(tr);
};

// Existence Elements Function 
function exist(name, grade) {
    let check;
    if (name !== '' && grade !== '' ) {
        check = true;
    }
    return check;
}

// The status function 
function Status (grade) {
    let check = true;
    if (grade >= 0 && grade <= 20) { 
        if ( grade >= 10 ) {
            status = 'Validate';
        } else {
            status = 'Unvalidate';
        }
    } else {
        check = false;
    } 
    return check;
};