export class UI{
    constructor(){
        this.topBanner =  document.getElementById('topBanner');
        this.topSlider = document.getElementById("topSliderWrapper");
        this.promotedProducts = document.getElementById("promotedProducts");
        this.bottomSlider = document.getElementById("bottomSliderWrapper");
        this.BottomPromotedProducts = document.getElementById("BottomPromotedProducts");
    }

    showTopBanner(product){
        this.topBanner.innerHTML = `
        <div class="description">
            <div>
                <h1>
                    ${product.title}
                </h1>
                <p>
                   ${product.description}
                </p>
                <button>
                    shopNow
                </button>
            </div>
        </div>
        <div class="img-container">
        <div> UpTo 45% OFF </div>
            <img src=${product.image} alt="">
        </div>
        `
    }


    showTopSlider(productsList){
        
        this.topSlider.innerHTML = `
        ${
            productsList.map(function (product) {
                
              return `
              
                <div class="swiper-slide">
                    <div class="img-container">
                        <img src=${product.image} alt="">
                    </div>
                    <h4>${product.title}</h4>
                    <div class="productDescription">
                        <div>
                            <span><i class="fas fa-euro-sign mr-5"></i></span><span>${product.price}</span>
                        </div>
                        <div class="price">
                            <span class="mr-5">${product.rating.rate}</span>
                            <span class="mr-5"><i class="fas fa-star"></i></span> 
                            <p>(${product.rating.count})</p>
                        </div>
                    </div>
                </div>
              `;
            }).join('')
          }
      
        `
    }

    showpromotedProducts(promotedProducts){
        const allpromotedProducts = [promotedProducts[10], promotedProducts[9]];
        console.log(promotedProducts)
        this.promotedProducts.innerHTML = `
            ${
                allpromotedProducts.map((singleProduct)=>{
                    return `
                    <div class="singleProduct">
                        <div class="img-container">
                            <img src=${singleProduct.image} alt="">
                        </div>
                        <div class="description">
                            <h2>${singleProduct.title}</h2>
                            <p>${singleProduct.description}</p>
                            <button>Shop now</button>
                        </div>
                    </div>
                    `
                })
            }
        `
    }

    showBottomSlider(bottomSliederProducts){
        this.bottomSlider.innerHTML = `

        ${
            bottomSliederProducts.map(function(product){
                return `
                <div class="swiper-slide">
                <div class="img-container">
                    <img src=${product.image} alt="">
                </div>
                <h4>${product.title}</h4>
                <div class="productDescription">
                    <div>
                        <span><i class="fas fa-euro-sign mr-5"></i></span><span>${product.price}</span>
                    </div>
                    <div class="price">
                        <span class="mr-5">${product.rating.rate}</span>
                        <span class="mr-5"><i class="fas fa-star"></i></span> 
                        <p>(${product.rating.count})</p>
                    </div>
                </div>
            </div>
                `
            }).join('')
        }
        `
    }

    showBottompromotedProducts(bottomProducts){
        const allBottomproducts = [bottomProducts[1], bottomProducts[3]];

        this.BottomPromotedProducts.innerHTML = `
            ${
                allBottomproducts.map((product, index)=>{
                    return `
                    <div ${index}>
                        <h1>Never Lost Spring Summer 2021</h1>
                        <img src="${product.image}" alt="${product.title}">
                        <h2></h2>
                        <h2 class="productName">${product.title}</h2>
                        <button>Explore Now</button>
                    </div>
                    `
                }).join('')
            }
        `
    }
}