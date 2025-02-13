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