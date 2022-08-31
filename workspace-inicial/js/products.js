let catId = localStorage.getItem('catID')

const URL = PRODUCTS_URL + catId + EXT_TYPE;


function showCarsList(productsArray) {

    let carsArray = productsArray.products;
    let htmlContentToAppend = ` <div class="text-center p-4">
    <h2>Productos</h2>
    <p class="lead">
      Verás aquí todos los productos de la categoría <b>${productsArray.catName}</b>.
    </p>
  </div>`;


    for (let i = 0; i < carsArray.length; i++) {
        let car = carsArray[i];

        htmlContentToAppend += `
        <div  class="list-group-item ">
            <div class="row">
                <div class="col-3">
                    <img src="${car.image}" alt="${car.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${car.name}-${car.cost}${" "}${car.currency}</h4>
                        <small class="text-muted">${car.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${car.description}</p>
                </div>
            </div>
        </div>
        `
        document.getElementById("cars").innerHTML = htmlContentToAppend;
    };

}


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showCarsList(productsArray);

        }
    });


});
