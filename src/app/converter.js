export class Converter {

    constructor(url) {
      this.url = url;
      this.apikey = '826d6c6c17247aba0314ed1e5c7d1187'

      //http://api.exchangeratesapi.io/v1/latest?access_key=826d6c6c17247aba0314ed1e5c7d1187
    }

    
  
    convertion() {
      const request = new XMLHttpRequest();
      
      request.open("GET", `https://api.exchangeratesapi.io/v1/convert?access_key=826d6c6c17247aba0314ed1e5c7d1187&from=GBP&to=JPY&amount=25`, true);
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
  