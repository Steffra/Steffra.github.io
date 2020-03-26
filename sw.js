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
            ,'favicon.ico'
            ,'icon.png'
            ,'index.html'
            ,'about.html'
            ,'contact.html'
            ,'portfolio.html'
            ,'skills.html'
            ,'css/main.css'
            ,'css/sidebar.css'
            ,'css/buttons.css'
            ,'css/bootstrap.min.css'
            ,'js/main.js'
            ,'js/jquery.tagcanvas.min.js'
            ,'js/jquery-slim.min.js'
            ,'js/bootstrap.min.js'
            ,'/fontawesome/css/font-awesome.min.css'
            ,'/fontawesome/fonts/fontawesome-webfont.eot'
            ,'/fontawesome/fonts/fontawesome-webfont.svg'
            ,'/fontawesome/fonts/fontawesome-webfont.ttf'
            ,'/fontawesome/fonts/fontawesome-webfont.woff'
            ,'/fontawesome/fonts/fontawesome-webfont.woff2'
            ,'/fontawesome/fonts/FontAwesome.otf'
            ,'/img/cv.png'
            ,'/img/en.png'
            ,'/img/hun.png'
            ,'/img/quiz.png'
            ,'/img/spending-tracker.png'
            ,'/res/resume_en.pdf'
            ,'/res/resume_hun.pdf'
        ]))
    );
})