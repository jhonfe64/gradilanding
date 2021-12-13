export class Products {
  constructor(url) {
    this.url = url;
  }

  getSingleProduct() {
    
    const request = new XMLHttpRequest();
    request.open("GET", this.url, true);
    request.send();

    return new Promise((resolve, reject) => {
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status === 200) {
          let ansWear = request.responseText;
          if (ansWear) {
            resolve(ansWear);
          } else {
            reject("No se puede obtener la informacion");
          }
        }
      };
    });
  }
}
