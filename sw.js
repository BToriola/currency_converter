self.addEventListener('install', function(event){  
    event.waitUntil(
       caches.open('currency-converter').then(function(cache){
            return cache.addAll(
                [
                    '/',
                    '/style.css',
                    '/script.js'
            
                ]
            )
       })
    )
})


self.addEventListener('fetch', function (event){ 
    event.respondWith(
        caches.match(event.request).then(function(response){
                if(response) return response;
                return fetch(event.request);
        })
    );
 });