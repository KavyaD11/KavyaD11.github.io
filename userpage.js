document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage
    const postData = JSON.parse(localStorage.getItem('postData'));
    console.log('Retrieved Post Data:', postData); // Log data to console

    if (postData) {
        // Display data
        document.getElementById('displaySellerName').textContent = postData.sellerName;
        document.getElementById('displaySellerNum').textContent = postData.sellerNum;
        document.getElementById('displayProductName').textContent = postData.productName;
        document.getElementById('displayPrice').textContent = postData.price;
        document.getElementById('displayLocation').textContent = postData.location;
        document.getElementById('displayProductDetail').textContent = postData.productDetail;

        // Display images
        document.getElementById('displayImg1').src = postData.images[0];
        document.getElementById('displayImg2').src = postData.images[1];
        document.getElementById('displayImg3').src = postData.images[2];
    } else {
        // Handle the case where there's no data
        document.body.innerHTML = '<h1>No post data found</h1>';
    }
});
