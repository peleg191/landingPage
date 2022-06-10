
$(document).ready(function () {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        $(".scroll-animations .animated").each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass("fadeInLeft");
                return;
            }
            $(this).removeClass("fadeInLeft");
        });
    });
    let title = document.getElementById('landing-page-title');
    let toggleClicked = false;
    title.onclick = function (e) {
        if (!toggleClicked) {
            title.classList += 'animated wobble'
            title.style.animationDuration = '1.5s';
            title.style.animationIterationCount = 1;
            toggleClicked = true;
            return;
        }
        title.classList = 'animated bounce';
        title.style.animationIterationCount = 'infinite';
        title.style.animationDuration = '3s';
        toggleClicked = false;
    };
});

function randomColor(){
    let colorPool = ['#B06AB2','#E771A4','#FF858C','#FFA673','#FFCE65','#F9F871'];
    let index = Math.floor(Math.random() * colorPool.length);
    return colorPool[index];
}

