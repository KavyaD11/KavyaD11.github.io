function post(event) {
    event.preventDefault();
    var sellerName = document.getElementById("sellername").value;
    var sellerNum = document.getElementById("sellernum").value;
    var productTitle = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var location = document.getElementById("Location").value;
    var productDetail = document.getElementById("productDetail").value;
    var image1 = document.getElementById("img1").value;
    var image2 = document.getElementById("img2").value;
    var image3 = document.getElementById("img3").value;
    var obj = {
        sellername: sellerName,
        sellernum: sellerNum,
        product: productTitle,
        price: price,
        image1: image1,
        image2: image2,
        image3: image3,
        description: productDetail,
        location: location,
    };

    var getData = localStorage.getItem("DATA");
    var arrangedData = getData ? JSON.parse(getData) : [];
    arrangedData.push(obj);
    localStorage.setItem("DATA", JSON.stringify(arrangedData));
    displayAds();
}

function deleteAd(index) {
    var getData = localStorage.getItem("DATA");
    var arrangedData = JSON.parse(getData);
    arrangedData.splice(index, 1);
    localStorage.setItem("DATA", JSON.stringify(arrangedData));
    displayAds();
}

function displayAds() {
    var adsList = document.getElementById("adsList");
    adsList.innerHTML = '';
    var getData = localStorage.getItem("DATA");
    var arrangedData = getData ? JSON.parse(getData) : [];
    arrangedData.forEach(function(ad, index) {
        var adElement = document.createElement("div");
        adElement.className = "col-md-4 mb-3";
        adElement.innerHTML = `
            <div class="card">
                <img src="${ad.image1}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">${ad.product}</h5>
                    <p class="card-text">${ad.description}</p>
                    <p class="card-text"><strong>Price:</strong> ${ad.price}</p>
                    <p class="card-text"><strong>Seller:</strong> ${ad.sellername}</p>
                    <p class="card-text"><strong>Contact:</strong> ${ad.sellernum}</p>
                    <p class="card-text"><strong>Location:</strong> ${ad.location}</p>
                    <button class="btn btn-danger" onclick="deleteAd(${index})">Delete</button>
                </div>
            </div>
        `;
        adsList.appendChild(adElement);
    });
}

// Display ads on page load
window.onload = displayAds;
