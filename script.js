let tableBody = document.getElementById("studentData")

// SMS-url
let sms_url = "http://localhost:9090/users"

const getStudent = (function () {
    fetch(sms_url)
        .then(res => res.json())
        .then(res => {
            console.log(res);

            if (res && Array.isArray(res)) {
                for (let i = 0; i < res.length; i++) {
                    tableBody.innerHTML += `<tr>
                    <td>${i + 1}</td>
                    <td>${res[i]['name']}</td>
                    <td>${res[i]['age']}</td>
                    <td>${res[i]['city']}</td>
                    <td><a href="editForm.html?id=${res[i]._id}"><button>Edit</button></a></td>
                    <td><button onClick="deleteStudent('${res[i]._id}')">Delete</button></td>
                </tr>`;
                }
            }
        }).catch(error => {
            // alert(error)
        })
})();


function deleteStudent(id) {
    let confirmFlag = confirm("Do you Really want to delete this record?")

    if (confirmFlag) {
        fetch(sms_url+`?id=${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                // alert(res['message'])
            }).catch(error => {
                console.log(error);
            })
        window.location.reload();
    }
}


