fetch("https://dummyjson.com/products").then((response)=> response.json()).then((data)=>{
  let primeData = data.products;
  let divv = document.getElementById('divv'); // this stores the main div element where we gonaa display our cards

  // to loop over a primeData array of objects
  for (let i = 0; i < primeData.length; i++) {
    const element = primeData[i];
    let categoryy = element.category;
    let idd = element.id;
    let brandd = element.brand;
    let titlee = element.title;
    let descriptionn = element.description;
    let pricee = element.price;
    let discountPercentagee = element.discountPercentage;
    let stockk = element.stock;
    let ratingg = element.rating;
    let imageArr = element.images;
    let imagee = imageArr[0];

    let spann = document.createElement("span");

    spann.innerHTML = 
    `<div class="card border border-dark border-3 border-opacity-25" style="width: 18rem;">
    <img src="${imagee}" width="100%" height="180" class="card-img-top" alt="no image available">
  
    <div class="card-body">
      <h3 class="card-title">${brandd}</h3>
      <p class="card-text text-capitalize"> <b>Category:</b> ${categoryy}</p>
      <p class="card-text text-capitalize"> <b>id:</b> ${idd}</p>
      <p class="card-text text-capitalize"> <b>Model/Title:</b> ${titlee}</p>
      <p class="card-text text-capitalize fst-italic"> <b>Description:</b> ${descriptionn}</p>
      <p class="card-text text-capitalize"> <b>Price:</b> ${pricee}$</p>
      <p class="card-text text-capitalize"> <b>Special Discount for you:</b> ${discountPercentagee}%</p>
      <h5> <span class="badge text-bg-success"><b>Ratings:</b> ${ratingg}</span></h5>
      <p class="card-text text-capitalize fw-semibold text-primary"><i>Only ${stockk} items remain in stock. Hurry up before stock gets exausted!!!<i></p>
      <a class="btn btn-dark">Buy Now</a>
    </div>
  </div>`
    divv.appendChild(spann);
  }
  
  console.log(primeData);

})