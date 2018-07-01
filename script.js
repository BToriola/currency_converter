//Register Service Worker
if('serviceWorker' in navigator){

navigator.serviceWorker.register('./sw.js', { scope:'./'})
    .then(function(registration){
    console.log('Registration Worked', registration);
    })
    .catch(function (err) {
        console.log('Registration Failed', err);
        
    })
}

function convertCurrency() {
  
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    var fromAmount = document.getElementById('fromAmount').value;
    var toAmount = document.getElementById('toAmount').value;

    var xmlhttp = new XMLHttpRequest();
    var query = fromCurrency + '_' + toCurrency;
    var url = 'https://free.currencyconverterapi.com/api/v5/convert?q='
            + query + '&compact=ultra';
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState == 4  && xmlhttp.status == 200){
                    var result = xmlhttp.responseText;
                    var myObj = JSON.parse(result);
                    console.log( myObj);                   
                    document.getElementById('toAmount').value = myObj[query]*fromAmount;
                 
                }
            }
            document.getElementById('toAmount').addEventListener("change",function(){
                query = fromCurrency + '_' + toCurrency;
                url = 'https://free.currencyconverterapi.com/api/v5/convert?q='
                      + query + '&compact=ultra';
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
                xmlhttp.onreadystatechange = function(){
                    if(xmlhttp.readyState == 4  && xmlhttp.status == 200){
                        
                        result = xmlhttp.responseText;
                        myObj = JSON.parse(result);
                        console.log( myObj);                   
                        document.getElementById('fromAmount').value = toAmount * (1 / myObj[query]); 
                     
                    }
                }

               
              });
            
    };

  

 