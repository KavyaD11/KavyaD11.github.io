    <script>
        function postAd(event) {
            event.preventDefault();

            const sellerName = document.getElementById('sellername').value;
            const sellerNum = document.getElementById('sellernum').value;
            const productName = document.getElementById('productName').value;
            const price = document.getElementById('price').value;
            const location = document.getElementById('location').value;
            const productDetail = document.getElementById('productDetail').value;
            const img1 = document.getElementById('img1').value;
            const img2 = document.getElementById('img2').value;
            const img3 = document.getElementById('img3').value;

            if (validateForm(sellerName, sellerNum, productName, price, location, productDetail, img1)) {
                console.log('Seller Name:', sellerName);
                console.log('Seller Number:', sellerNum);
                console.log('Product Name:', productName);
                console.log('Price:', price);
                console.log('Location:', location);
                console.log('Product Details:', productDetail);
                console.log('Image 1 URL:', img1);
                console.log('Image 2 URL:', img2);
                console.log('Image 3 URL:', img3);

                // Here you can add code to send this data to your server or process it as needed
            } else {
                alert("Please fill out all required fields correctly.");
            }
        }

        function validateForm(sellerName, sellerNum, productName, price, location, productDetail, img1) {
            const phonePattern = /^\d{10}$/;
            return (
                sellerName &&
                phonePattern.test(sellerNum) &&
                productName &&
                price > 0 &&
                location &&
                productDetail &&
                img1
            );
        }
    </script>
