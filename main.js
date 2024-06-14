function post() {
    // Get values from input fields
    const sellerName = document.getElementById('sellername').value;
    const sellerNum = document.getElementById('sellernum').value;
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('Location').value;
    const productDetail = document.getElementById('productDetail').value;
    const img1 = document.getElementById('img1').value;
    const img2 = document.getElementById('img2').value;
    const img3 = document.getElementById('img3').value;

    // Create an object to store the data
    const postData = {
        sellerName,
        sellerNum,
        productName,
        price,
        location,
        productDetail,
        images: [img1, img2, img3]
    };

    // Save to localStorage
    localStorage.setItem('postData', JSON.stringify(postData));

    // Redirect to user page
    window.location.href = 'user.html';
}
