var showads = ("true" == "true");
        var adscode = "";
        var adslazy = ("false" == "true");
        adslazy = false
        // Lazyload header
        var adsheader = "";
        var adsheaderLazy = "false";
        // End lazyload header
        var hasWebP = !1;
        ! function() {
            var A = new Image;
            A.onload = function() {
                hasWebP = !!(A.height > 0 && A.width > 0)
            }, A.onerror = function() {
                hasWebP = !1
            }, A.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
        }();

        function lazyImage(lzl) {
            return function(e) {
                var observer,
                    options = {
                        rootMargin: "0px",
                        threshold: 0.05
                    },
                    allTheLazyImages = document.querySelectorAll("." + lzl);

                function lazyLoader(e) {
                    e.forEach(function(e) {
                        e.intersectionRatio > 0 && lazyLoadImage(e.target);
                    });
                }

                function lazyLoadImage(e) {
                    e.onload = function() {
                        e.classList.remove(lzl);
                    };
                    e.dataset.lazybackground && (e.style.backgroundImage = "url(".concat(e.dataset.lazybackground, ")")), e.getAttribute("data-src") && ((e.src = hasWebP && -1 != e.dataset.src.indexOf("googleusercontent.com") ? e.dataset.src + "-rw" : e.dataset.src), "IntersectionObserver" in window && observer.unobserve(e));
                }
                if ("IntersectionObserver" in window)(observer = new IntersectionObserver(lazyLoader, options)), allTheLazyImages.forEach(function(e) {
                    observer.observe(e);
                });
                else
                    for (var i = 0; i < allTheLazyImages.length; i++) lazyLoadImage(allTheLazyImages[i]);
            }
        }

        function lazyScript(c, e) {
            var n = document.createElement("script");
            n.async = !0, e && (n.onload = e), document.head.appendChild(n), n.src = c
        }

        function lazyAds(lzl) {
            return function(e) {
                var observer;
                var options = {
                    rootMargin: "0px",
                    threshold: 0.05
                };
                var allTheLazyAds = document.querySelectorAll("." + lzl);

                function lazyLoader(e) {
                    e.forEach(function(e) {
                        e.intersectionRatio > 0 && lazyLoadAds(e.target);
                    });
                }

                function lazyLoadAds(e) {
                    "IntersectionObserver" in window && observer.unobserve(e);
                    e.classList.remove(lzl);
                    var codeName = e.id;
                    googletag.cmd.push(function() {
                        googletag.display(codeName);
                        googletag.pubads().refresh([window.__gptslot__[codeName]]);
                    });
                }
                if ("IntersectionObserver" in window)(observer = new IntersectionObserver(lazyLoader, options)), allTheLazyAds.forEach(function(e) {
                    observer.observe(e);
                });
                else
                    for (var i = 0; i < allTheLazyAds.length; i++) lazyLoadAds(allTheLazyAds[i]);
            };
        }
        var lazyLoad = false;

        function onLazyLoad() {
            if (lazyLoad === true) return;
            lazyLoad = true;
            document.removeEventListener('scroll', onLazyLoad);
            document.removeEventListener('mousemove', onLazyLoad);
            document.removeEventListener('mousedown', onLazyLoad);
            document.removeEventListener('touchstart', onLazyLoad);
            //ADS script            
            //lazyScript("//securepubads.g.doubleclick.net/tag/js/gpt.js");
            if (showads && adslazy && adscode.length > 0) {
                if (adsheader != "" && adsheaderLazy == "true") {
                    (function() {
                        // var n = document.createElement("script");
                        // n.async = !0, n.setAttribute('data-ad-client', adsheader), document.head.appendChild(n), n.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
                        var n = document.createElement("script");
                        n.async = !0, document.head.appendChild(n), n.crossOrigin = "anonymous", n.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsheader}`
                    })();
                }
                (function() {
                    // var n = document.createElement("script");
                    // n.async = !0, n.setAttribute('data-ad-client', adscode), document.head.appendChild(n), n.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
                    var n = document.createElement("script");
                    n.async = !0, document.head.appendChild(n), n.crossOrigin = "anonymous", n.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adscode}`
                })();
            }
        }
        document.addEventListener("scroll", onLazyLoad),
            document.addEventListener("mousemove", onLazyLoad),
            document.addEventListener("mousedown", onLazyLoad),
            document.addEventListener("touchstart", onLazyLoad),
            document.addEventListener("load", function() {
                document.body.clientHeight != document.documentElement.clientHeight && 0 == document.documentElement.scrollTop && 0 == document.body.scrollTop || onLazyLoad()
            });


    