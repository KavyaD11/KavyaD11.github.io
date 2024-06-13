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
  location.href = "user.html";
  // match = false;
  // sessionStorage.setItem("SetData", JSON.stringify(data));
  // console.log(setdata);
}
