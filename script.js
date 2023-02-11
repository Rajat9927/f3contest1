fetch("https://dummyjson.com/products")
.then((response)=> response.json())
.then((data)=>{
  let productData = data.products;
  let add = document.getElementById('getdata');

  // we use foor loop to access all product details.
  for (let i = 0; i < productData.length; i++) {
    const element = productData[i];
    let prodCategory = element.category;
    let idNumber = element.id;
    let prodBrand = element.brand;
    let prodTitle = element.title;
    let prodDescription = element.description;
    let prodPrice = element.price;
    let dis = element.discountPercentage;
    let prodStock = element.stock;
    let prodRating = element.rating;
    let imageArr = element.images;
    let imagee = imageArr[0];

    let crt = document.createElement("span");

    //here wee are creating html tag with the help of java script, inside for loop. It will create html for all elements

    crt.innerHTML = 
    `<div class="card border border-dark border-3 border-opacity-25" style="width: 18rem;">
    <img src="${imagee}" width="100%" height="180" class="card-img-top" alt="no image available">
  
    <div class="card-body">
      <h3 class="card-title">${prodBrand}</h3>
      <p class="card-text text-capitalize"> <b>Product Category:</b> ${prodCategory}</p>
      <p class="card-text text-capitalize"> <b>ID:</b> ${idNumber}</p>
      <p class="card-text text-capitalize"> <b>Model:</b> ${prodTitle}</p>
      <p class="card-text text-capitalize fst-italic"> <b>Product Description:</b> ${prodDescription}</p>
      <p class="card-text text-capitalize"> <b>Price:</b> ${prodPrice}$</p>
      <p class="card-text text-capitalize"> <b>Discouunt:</b> ${dis}%</p>
      <h5> <span class="badge text-bg-success"><b>Ratings:</b> ${prodRating}</span></h5>
      <p class="card-text text-capitalize fw-semibold text-primary"><i>Only ${prodStock} stock me hai<i></p>
      <a class="btn btn-dark">Add to Cart</a>
    </div>
  </div>`
  add.appendChild(crt);
  }
  
  console.log(productData);

})