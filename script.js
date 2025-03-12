function loadPage(page) {
    
    // Tải nội dung từ file HTML
    fetch(`page/${page}.html`)
        .then(response => {
            // Kiểm tra nếu tải thành công
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Chèn nội dung vào thẻ <main>
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('main-content').innerHTML = "<p>Content not found.</p>";
        });
}

// Tải trang Home khi vừa vào trang web
window.onload = function() {
    loadPage('home');
};

function showaddress() {
    document.querySelector("#address button").innerHTML = "An Lạc, Bình Tân, TP.HCM";
}

// i create a function use querryselectorAll to get all the class skills ul
function showskills() {
    let skills = document.querySelectorAll("#skills ul li");
    // Change the text of the second and third <li> elements
        // Change the text of the second and third <li> elements
        skills[1].innerHTML = "Developer skills";
        skills[2].innerHTML = "Developer skills";
}

// i create a function replace content project to new content, this content have a 4 tag <p>
function showproject() {
    let project = document.querySelector("#projects div");
    project.innerHTML = `<p>describe 1</p>
                        <p>describe 2</p>
                        <p>describe 3</p>
                        <p>describe 4</p>`;
}

// This function changes the class of the element with id "changeclass" from "oldClass" to "newClass"
function changeClass() {
    let element = document.getElementById("changeclass");
    element.classList.add("newClass");
}


function toggleBlue() {
    let element = document.getElementById("changeclass");
    element.classList.toggle("newClass");
}