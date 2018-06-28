
function convertCurrency() {
  
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var xmlhttp = new XMLHttpRequest();
    var query = fromCurrency + '_' + toCurrency;
    var url = 'https://free.currencyconverterapi.com/api/v5/convert?q='
            + query + '&compact=ultra';
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState == 4  && xmlhttp.status == 200){
                    var result = xmlhttp.responseText;
                    alert(result);                   
                    var jsonObj = JSON.parse(result);
                    var oneUnit = jsonObj[toCurrency]/jsonObj[fromCurrency];
                    var amt = document.getElementById('fromAmount').value;
                    document.getElementById('toAmount').value = oneUnit * amt;

                    
                   
                }
                }
            };

  

 /*  get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          try {
            var jsonObj = JSON.parse(body);

            var val = jsonObj[query];
            if (val) {
              var total = val * amount;
              cb(null, Math.round(total * 100) / 100);
            } else {
              var err = new Error("Value not found for " + query);
              console.log(err);
              cb(err);
            }
          } catch(e) {
            console.log("Parse error: ", e);
            cb(e);
          }
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
        cb(e);
  });
}


convertCurrency(10, 'USD', 'AUD', function(err, amount) {
  console.log(amount);
});
}
 */