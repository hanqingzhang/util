//把图片转成base64编码
//带前缀，去前缀 let base64 = res.split(",")[1];
function getBase64(file) {
    return new Promise(function(resolve, reject) {
      let reader = new FileReader();
      let imgResult = "";
      reader.readAsDataURL(file);
      reader.onload = function() {
        imgResult = reader.result;
      };
      reader.onerror = function(error) {
        reject(error);
      };
      reader.onloadend = function() {
        resolve(imgResult);
      };
    });
  }
  