self.addEventListener('fetch',event=>{
    var pages = ["index", "about", "contact", "portfolio", "skills"];
    strPage = (event.request.url.substring(event.request.url.lastIndexOf('/') + 1));

    event.respondWith(
        caches.match(event.request)
            .then(response=>response ||fetch(event.request))
            .catch(()=>{
                if(event.request.mode =='navigate'){
                    if(pages.includes(strPage)){
                        return caches.match(strPage + ".html");
                    }
                    return caches.match('index.html');
                }
            })
            )   
    })
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static_v1')
        .then(cache => cache.addAll([
            'manifest.json'
            ,'index.html'
            ,'about.html'
            ,'contact.html'
            ,'portfolio.html'
            ,'skills.html'
            ,'js/main.js'
            ,'css/main.css'
            ,'css/bootstrap.min.css'
            ,'/img/cv.PNG'
            ,'/img/en.png'
            ,'/img/hun.png'
            ,'/img/quiz.PNG'
            ,'/img/spending-tracker.PNG'
            ,'/res/resume_en.pdf'
            ,'/res/resume_hun.pdf'
            ,'favicon.ico'
            ,'icon.png'
            ,'js/jquery.tagcanvas.min.js'
            ,'js/jquery-slim.min.js'
            ,'js/popper.min.js'
            ,'js/bootstrap.min.js'
            ,'/fontawesome/css/font-awesome.min.css'
            ,'/fontawesome/fonts/fontawesome-webfont.eot'
            ,'/fontawesome/fonts/fontawesome-webfont.svg'
            ,'/fontawesome/fonts/fontawesome-webfont.ttf'
            ,'/fontawesome/fonts/fontawesome-webfont.woff'
            ,'/fontawesome/fonts/fontawesome-webfont.woff2'
            ,'/fontawesome/fonts/fontawesome.otf'
        ]))
    );
})