import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

//const swiper = new Swiper(...);

    

import {Products} from '../app/Products';
import {Converter} from '../app/converter';
import {UI} from '../app/Ui';

const products = new Products('https://fakestoreapi.com/products/1');
const topSlider = new Products('https://fakestoreapi.com/products?limit=10');
const promotedProducts = new Products('https://fakestoreapi.com/products');
const bottomSlider = new Products(`https://fakestoreapi.com/products/category/women's clothing`);
const bottomPromotedProducts = new Products('https://fakestoreapi.com/products?limit=10');

const converter = new Converter();


const ui = new UI();


require('./index.css');

const fetchProducts = (products, topSlider, promotedProducts, bottomSlider, bottomPromotedProducts) => {

    //Top banner
    const singleProduct = products.getSingleProduct();
    singleProduct.then((product)=>{
        ui.showTopBanner(JSON.parse(product))
    })

    //Top slider
    const topSliderProducts = topSlider.getSingleProduct();
    topSliderProducts.then((productsList)=>{
        ui.showTopSlider(JSON.parse(productsList))
    })

    //promoted products
    const promotedProductsList = promotedProducts.getSingleProduct();
    promotedProductsList.then((productsList)=>{
        ui.showpromotedProducts(JSON.parse(productsList))
    })

    //bottom slider
    const bottomSliderProducts =  bottomSlider.getSingleProduct();
    bottomSliderProducts.then((productList)=>{
        ui.showBottomSlider(JSON.parse(productList))
    })

    //bottom promoted products
    const bottomPromotedProductsList = bottomPromotedProducts.getSingleProduct();
    bottomPromotedProductsList.then((productList)=>{
        ui.showBottompromotedProducts(JSON.parse(productList))
    })

}

//Cuand cargue el dom
document.addEventListener('DOMcontentLoader', fetchProducts(products, topSlider, promotedProducts, bottomSlider, bottomPromotedProducts))


const exchange = () => {
    const data = converter.convertion();
    data.then((res)=>{
        console.log(res);
    })
}


//cuando se haga click en el btn
document.getElementById("euro").addEventListener("click", exchange)