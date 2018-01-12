window.onload = function () {
    var sectionButtons = document.querySelectorAll('.explainer__links');

    function hideAllShowCurrent(index) {
        var sectionElements = document.querySelectorAll('.js-explainer-area');
        
        sectionElements.forEach(item => {
            item.classList.toggle('show');
        })
        sectionElements[index].className += ' show';
    }
    
    var setShowAndHideListeners = function(buttons) {
        buttons.forEach((element, index) => {
            element.addEventListener('click', function () {
                hideAllShowCurrent(index)        
            });
        });
    }

    setShowAndHideListeners(sectionButtons);
}


