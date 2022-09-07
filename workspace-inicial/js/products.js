const FILTER_BY_PRICE = "FP"
const ORDER_ASC_BY_PRICE = "PR";
const ORDER_DESC_BY_PRICE = "PRD";

const ORDER_DESC_BY_RELEVANCE = "REL";
let catName = "";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minPrice = undefined;
let maxPrice = undefined;
let filter = undefined;


function sortProducts(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }

            return 0;
        });

    } else if (criteria === ORDER_DESC_BY_PRICE) {

        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }

            return 0;
        });



    }
    else if (criteria === ORDER_DESC_BY_RELEVANCE) {
        result = array.sort(function (a, b) {
            if (a.soldCount > b.soldCount) { return -1; }
            if (a.soldCount < b.soldCount) { return 1; }

            return 0;
        });

    }
    return result;
}
function setProdID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"

}






function showList() {


    let htmlContentToAppend = ``;


    for (let i = 0; i < currentProductsArray.length; i++) {
        let prod = currentProductsArray[i];
        if (((minPrice == undefined) || (minPrice != undefined && parseInt(prod.cost) >= minPrice)) &&
            ((maxPrice == undefined) || (maxPrice != undefined && parseInt(prod.cost) <= maxPrice)) &&
            ((filter == undefined) || (filter != undefined && prod.name.toUpperCase().includes(filter)))) {
            htmlContentToAppend += `
                <div  class="list-group-item ">
                    <div class="row">
                        <div class="col-3">
                            <img src="${prod.image}" alt="${prod.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${prod.name}-${prod.cost}${" "}${prod.currency}</h4>
                                <small class="text-muted">${prod.soldCount} vendidos</small>
                            </div>
                            <p class="mb-1">${prod.description}</p>
                        </div>
                    </div>
                </div>
                `
        }


        document.getElementById("prodName").innerHTML = catName
        document.getElementById("cars").innerHTML = htmlContentToAppend;
    };

}

function sortAndShowProducts(sortCriteria, productsArray) {
    currentSortCriteria = sortCriteria;
    if (productsArray != undefined) {
        currentProductsArray = productsArray
    }
    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);
    showList();
}



document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            catName = resultObj.data.catName
            currentProductsArray = resultObj.data.products;
            showList();

        }
    });
    document.getElementById("sortAscPr").addEventListener("click", function () {
        sortAndShowProducts(ORDER_ASC_BY_PRICE);
    });
    document.getElementById("sortDescPr").addEventListener("click", function () {
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortDescRel").addEventListener("click", function () {
        sortAndShowProducts(ORDER_DESC_BY_RELEVANCE);
    });

    /* document.getElementById("rangeFilterCount").addEventListener("click", function () {
         sortAndShowProducts(FILTER_BY_PRICE);
     });*/
    document.getElementById("clearRangeFilter").addEventListener("click", function () {
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minPrice = undefined;
        maxPrice = undefined;

        showList();
    });
    document.getElementById("rangeFilterCount").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minPrice = document.getElementById("rangeFilterCountMin").value;
        maxPrice = document.getElementById("rangeFilterCountMax").value;

        if ((minPrice != undefined) && (minPrice != "") && (parseInt(minPrice)) >= 0) {
            minPrice = parseInt(minPrice);
        }
        else {
            minPrice = undefined;
        }

        if ((maxPrice != undefined) && (maxPrice != "") && (parseInt(maxPrice)) >= 0) {
            maxPrice = parseInt(maxPrice);
        }
        else {
            maxPrice = undefined;
        }

        showList()
    });
    document.getElementById("searchValue").addEventListener("input", () => {
        filter = document.getElementById("searchValue").value.toUpperCase()
        console.log(filter);
        showList()



    })




});
