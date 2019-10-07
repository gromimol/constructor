var state = function viewState() {
    return getViewState.name()
};
$(document).ready(function() {
    function isMobile() {
        var deviceWidth = $(window).width();
        if (deviceWidth < 600) {
            return true
        } else {
            return false
        }
    }
    var musicContentWrap = $(".project-slider__nav");
    var musicContentSwiper = new Swiper(musicContentWrap,{
        direction: "vertical",
        simulateTouch: false,
        autoHeight: true,
        speed: 1e3,
        spaceBetween: 0,
        slidesPerView: "auto",
        mousewheel: {
            invert: true
        },
        keyboard: false,
        on: {
            init: function() {
                var initSlide = $(this.slides.eq(this.activeIndex));
                if (isMobile() != true) {
                    albumSelect(initSlide, this)
                }
            },
            slideChangeTransitionEnd: function() {
                this.update()
            }
        }
    });
    var albumElemItem = ".project-slider__nav__item";
    var btnPlay = ".music-content .music-album-container .play-btn";
    var currentActiveAlbum = ".music-content .music-album-container .album-elem.active";
    var openActiveAlbum = ".music-content .music-album-container .album-elem.open";
    var albumControlBtn = ".music-album-container .album-elem.active .elem-content-wrap .control-btn";
    var selectState = true;
    $(document).on("click", albumElemItem, function(e) {
        var targetElem = $(this);
        if (isMobile() != true) {
            if (!$(e.target).hasClass("play-btn") && !targetElem.hasClass("active")) {
                albumSelect(targetElem, musicContentSwiper)
            }
        } else {
            $(albumElemItem).each(function() {
                $(this).removeClass("active")
            });
            $(this).addClass("active");
            showAlbumContent(targetElem)
        }
    });
    $(document).on("click", btnPlay, function() {
        if (isMobile() != true) {
            var targetElem = $(this).parent(".album-elem");
            albumPlay(targetElem)
        }
    });
    // $(document).on("click", albumControlBtn, function() {
    //     var audioState = whoPlayed();
    //     var audioStateElem = $(audioState).parent(".elem");
    //     if (audioState != null) {
    //         if ($(this).hasClass("play")) {
    //             trackPlay(audioStateElem)
    //         } else {
    //             trackPause(audioStateElem)
    //         }
    //     } else {
    //         var firstTrack = $(musicContentElem).get(0);
    //         trackPlay(firstTrack)
    //     }
    // });
    // $(".music-content-back-btn").on("click", function() {
    //     hideAlbumContent();
    //     $(albumElemItem).each(function() {
    //         $(this).removeClass("active")
    //     })
    // });
    // $(window).on("hashchange", function() {
    //     tracksReload()
    // });
    function albumSelect(elem, swiper) {
        tracksReload();
        albumSelectAnimation(elem);
        albumBackgroundChange(elem);
        swiper.update()
    }
    function albumSelectAnimation(elem) {
        var albumEl = elem;
        var elemEasingsIn = "easeInOutQuart";
        var elemEasingsOut = "easeInOutQuart";
        var elemDuration = 800;
        var albumShowAnime = anime.timeline({});
        albumShowAnime.add({
            targets: albumEl.find(".project-slider__nav__item").get(0),
            offset: elemDuration / 3,
            opacity: {
                value: ["0", "1"],
                duration: elemDuration * 1.5,
                easing: "easeOutQuint"
            }
        }).add({
            targets: albumEl.find(".project-slider__nav__item").get(0),
            offset: 0,
            opacity: {
                value: ["0", "1"],
                duration: elemDuration,
                easing: elemEasingsIn
            }
        }).add({
            targets: albumEl.get(0),
            offset: 0,
            height: {
                value: ["20", "55vh"],
                duration: elemDuration,
                easing: elemEasingsIn
            },
            complete: function(anim) {
                musicContentSwiper.update();
                tracksDisplay();
                albumTitleChange()
            }
        });
        $(albumElemItem).each(function() {
            if ($(this).hasClass("active")) {
                var hideElem = $(this);
                var albumHideAnime = anime.timeline({});
                albumHideAnime.add({
                    targets: hideElem.find(".project-slider__nav__item").get(0),
                    offset: 0,
                    opacity: {
                        value: ["1", "0"],
                        duration: elemDuration,
                        easing: "easeInQuint"
                    }
                }).add({
                    targets: hideElem.find(".project-slider__nav__item").get(0),
                    offset: 0,
                    opacity: {
                        value: ["1", "0"],
                        duration: elemDuration,
                        easing: elemEasingsOut
                    }
                }).add({
                    targets: hideElem.get(0),
                    offset: 0,
                    height: {
                        value: ["55vh", "20vh"],
                        duration: elemDuration,
                        easing: elemEasingsOut
                    }
                });
                albumHideAnime.play();
                $(this).removeClass("active")
            }
        });
        elem.addClass("active");
        albumShowAnime.play()
    }
    function albumBackgroundChange(elem) {
        if (isMobile() != true) {
            var elemBg = $(".project-slider__nav__item.active img").attr("src");
            var sectionBg = $(".project-slider__item");
            sectionBg.fadeOut(400, function() {
                $(this).find('img').attr("src", elemBg)
            }).fadeIn(300);
            sectionBg.find('img').attr("src", elemBg);
        } else {
            var elemBg = elem.find(".project-slider__nav__item.active img").attr("src");
           var sectionBg = $(".project-slider__item");
           sectionBg.find('img').attr("src", elemBg);
        }
    }
    function albumTitleChange() {
        var albumMainTitle = $(".music-content-wrap .album-title");
        var albumCurrentTitle = $(".music-album-container .album-elem.active .title-row .album-title").text();
        albumMainTitle.text(albumCurrentTitle)
    }
    // function albumPlay(elem) {
    //     albumSelect(elem);
    //     var elemContentPlayBtn = elem.find(".elem-content-wrap  .content-block .album-image .control-btn");
    //     elemContentPlayBtn.removeClass("play").addClass("pause");
    //     var firstTrack = $(musicContentElem).get(0);
    //     trackPlay(firstTrack)
    // }
    // var albumInterval = new Object;
    // var circleBgDeg = 0;
    // function albumCircleRotate() {
    //     var circleBg = $(".album-elem.active .elem-content-wrap  .content-block .album-image .background");
    //     albumInterval = setInterval(function() {
    //         rotateBg(circleBg)
    //     }, 100);
    //     function rotateBg(elem) {
    //         circleBgDeg = circleBgDeg + 1;
    //         elem.css("transform", "rotate(" + circleBgDeg + "deg")
    //     }
    // }
    // function albumCircleStop() {
    //     clearInterval(albumInterval)
    // }
    // function showAlbumContent(elem) {
    //     albumBackgroundChange(elem);
    //     tracksReload();
    //     $(".music-album-container").fadeOut(200);
    //     $(".music-album-content").fadeIn(200);
    //     var title = $(elem).find(".elem-content-wrap .title-row .album-title").text();
    //     $(".music-content-wrap .album-title").text(title);
    //     tracksDisplay()
    // }
    // function hideAlbumContent() {
    //     tracksReload();
    //     $(".music-album-container").fadeIn(200);
    //     $(".music-album-content").fadeOut(200)
    // }
    var musicContentElem = ".music-content .music-album-content .elem";
    var musicContentElemControlBtn = ".music-content .music-album-content .elem .elem-row .control-btn";
    // if (isMobile() == false) {
    //     $(document).on("click", musicContentElem, function(e) {
    //         if (!$(e.target).hasClass("control-btn")) {
    //             if (!$(this).hasClass("active")) {
    //                 prevDisable();
    //                 trackPlay(this)
    //             }
    //         }
    //     })
    // }
    // if (isMobile() == true) {
    //     $(document).on("touchend", musicContentElem, function(e) {
    //         if (!$(e.target).hasClass("control-btn")) {
    //             if (!$(this).hasClass("active")) {
    //                 prevDisable();
    //                 trackPlay(this)
    //             }
    //         }
    //     })
    // }
    // $(document).on("click", musicContentElemControlBtn, function(e) {
    //     if ($(e.target).hasClass("control-btn")) {
    //         var currentTrack = $(this).parent().parent(".elem");
    //         trackPause(currentTrack)
    //     }
    // });
    function trackPlay(elem) {
        var currentControlBtn = $(elem).find(".control-btn");
        var trackElAudio = $(elem).find(".elem-audio").get(0);
        $(elem).addClass("active");
        currentControlBtn.removeClass("play").addClass("pause");
        $(albumControlBtn).removeClass("play").addClass("pause");
        albumCircleStop();
        albumCircleRotate();
        trackElAudio.play();
        trackPlayProgress(elem, trackElAudio)
    }
    function trackPause(elem) {
        var currentControlBtn = $(elem).find(".control-btn");
        var trackElAudio = $(elem).find(".elem-audio").get(0);
        if (currentControlBtn.hasClass("pause")) {
            trackElAudio.pause();
            albumCircleStop();
            currentControlBtn.removeClass("pause").addClass("play");
            $(albumControlBtn).removeClass("pause").addClass("play")
        } else {
            trackPlay(elem)
        }
    }
    function tracksReload() {
        var tracks = $(musicContentElem).find(".elem-audio");
        var trackTime = $(musicContentElem).find(".elem-row .time");
        $(musicContentElem).removeClass("active");
        tracks.each(function() {
            this.load()
        })
    }
    function tracksDisplay() {
        var trackElem = $(".music-wrap .elem");
        var currentAlbum = $(".music-album-container .album-elem.active");
        trackElem.each(function() {
            if ($(this).attr("data-album") != currentAlbum.attr("data-album")) {
                $(this).attr("style", "display: none;")
            } else {
                $(this).attr("style", "display: block;")
            }
        })
    }
    function trackPlayProgress(elem, audio) {
        var progressInterval = setInterval(function() {
            calculateProgress(elem, audio);
            if (!$(elem).hasClass("active")) {
                clearInterval(progressInterval)
            }
        }, 1e3);
        function calculateProgress(elem, audio) {
            var totalTrackTime = audio.duration;
            var currentTrackTime = audio.currentTime;
            var progressPercentage = currentTrackTime / totalTrackTime * 100 + "%";
            var elemProgressbar = $(elem).find(".elem-progressbar .track .track-elem");
            elemProgressbar.css("width", progressPercentage);
            var trackTimeContainer = $(elem).find(".elem-row .time.current").get(0);
            var currentTrackTimeSeconds = Math.round(currentTrackTime);
            function msToTime(duration) {
                var seconds = parseInt(duration % 60);
                var minutes = parseInt(duration / 60 % 60);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                return minutes + ":" + seconds
            }
            $(trackTimeContainer).text(msToTime(currentTrackTimeSeconds));
            if (currentTrackTime >= totalTrackTime) {
                stopTrack(elem, audio)
            }
        }
    }
    function whoPlayed() {
        var trackElems = $(musicContentElem);
        var currentPlayed = null;
        trackElems.each(function() {
            if ($(this).hasClass("active")) {
                currentPlayed = $(this).find(".elem-audio").get(0)
            }
        });
        console.log(currentPlayed);
        return currentPlayed
    }
    function prevDisable() {
        var active = whoPlayed();
        if (active != null) {
            $(active).parent(".elem").removeClass("active");
            active.load()
        }
    }
    function stopTrack(elem, audio) {
        $(elem).removeClass("active");
        audio.load();
        playNext(elem)
    }
    function playNext(elem) {
        var nextTrackElem = $(elem).next();
        var display = nextTrackElem.css("display");
        if (nextTrackElem.length != 0 && display == "block") {
            trackPlay(nextTrackElem)
        } else {
            albumCircleStop()
        }
    }
    function musicPageState() {}
    $(window).on("hashchange", function() {
        if (getViewState.name() == "music") {
            musicPageState()
        }
    })
});
