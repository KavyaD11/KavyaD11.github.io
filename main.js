<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Listing</title>
  <style>
    .product-card {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 16px;
      width: 300px;
    }
    .product-card img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="product-card">
    <h2>Seller: Keya</h2>
    <p>Contact: +91316803889</p>
    <p>Product: Pentonic Pens</p>
    <p>Price: $100</p>
    <img src="\STUDYSWAP\image5.jpg" alt="Pentonic Pens">
    <p>Description: Pentonic pens 10 colour, smooth writing and bright colours. Must try for good and colourful notes. Contact on the number.</p>
    <p>Post Time: Mumbai. 3 mins ago</p>
  </div>
</body>
</html>

  {
    sellername: "OLX User",
    sellernum: "+91312345889",
    product: "Spiral Binded Notebook",
    price: "200",
    image1: "\STUDYSWAP\image6.jpg",
    image2: "\STUDYSWAP\image7.jpg",
    description:
      "Spiral Binded Notebook, 500 pages book in only rs.200",
    postTime: "Pune. 1 mins ago",
  },
  {
    sellername: "Saniya",
    sellernum: "+91312456678",
    product: "Scientific Calculator",
    price: "1,000",
    image1: "\STUDYSWAP\image11.jpg",
    image2: "\STUDYSWAP\image12.jpg",
    image3: "\STUDYSWAP\image13.jpg",
    description: "Scientific Calculator, good for engineering students",
    postTime: "Nagpur. 1 week ago",
  },

  {
    sellername: "OLX User",
    sellernum: "+91312345623",
    product: "Aristocrat Backpack",
    price: "1,500",
    image1: "\STUDYSWAP\image8.jpg",
    image2: "\STUDYSWAP\image10.jpg",
    image3: "\STUDYSWAP\image9.jpg",
    description:
      "Aristocrat Backpack, very comfortable to use and can carry a lot of stuff",
    postTime: "Chatrapati Sambhaji Nagar. 1 mins ago",
  },
];

var onClickFunc = function (item) {
  console.log(item);
  sessionStorage.setItem("products", JSON.stringify(item));
  var getUserMail = sessionStorage.getItem("mail");
  if (getUserMail) {
    location.href = "products.html";
  } else {
    alert("SignIn Required to view the product details");
  }
};

window.onload = function () {
  var getDataFromStorage = localStorage.getItem("DATA");
  if (!getDataFromStorage) {
    localStorage.setItem("DATA", JSON.stringify(data));
  }

  var getData = localStorage.getItem("DATA");
  var Arrangedata = JSON.parse(getData);

  var row = null;
  Arrangedata.forEach(function (item, index) {
    if (index % 4 === 0) {
      row = document.createElement("div");
      row.className = "row mt-1";
    }
    var itemContainer = document.createElement("div");
    itemContainer.className =
      "card mt-3 col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3";
    itemContainer.onclick = function () {
      onClickFunc(item);
    };
    // itemContainer.onclick = onClickFunc(item);
    var datahtml = `<div class="card-div">
                 <img src="${item.image1}" class="cardimg car" alt="...">
               </div>
               <div id='cardbo' class="card-body">
                 <p class="card-text">${item.product}</p><br>
                 <h5 class="card-title">Rs ${item.price}</h5><br>
                 <p class="card-text"><small class="text-muted">${item.postTime}</small></p>
               </div>
             `;
    itemContainer.innerHTML = datahtml;
    row?.appendChild(itemContainer);
    document.getElementById("product-container")?.appendChild(row);

    // console.log(getData);
  });

  // console.log(data);
  // var logout = (document.getElementById("log").innerText = "Login");
  // var logvalue = sessionStorage.setItem("log", "logout");
};

function post() {
  var sellerName = document.getElementById("sellername").value;
  var sellerNum = document.getElementById("sellernum").value;
  var productTitle = document.getElementById("productName").value;
  var price = document.getElementById("price").value;
  var Location = document.getElementById("Location").value;
  var productDetail = document.getElementById("productDetail").value;
  var Image1 = document.getElementById("img1").value;
  var Image2 = document.getElementById("img2").value;
  var Image3 = document.getElementById("img3").value;
  var obj = {
    sellername: sellerName,
    sellernum: sellerNum,
    product: productTitle,
    price: price,
    image1: Image1,
    image2: Image2,
    image3: Image3,
    description: productDetail,
    postTime: Location,
  };

  var getData = localStorage.getItem("DATA");
  var Arrangedata = JSON.parse(getData);
  Arrangedata.push(obj);
  localStorage.setItem("DATA", JSON.stringify(Arrangedata));
  // console.log(Arrangedata);
  location.href = "index.html";
  // match = false;
  // sessionStorage.setItem("SetData", JSON.stringify(data));
  // console.log(setdata);
}
