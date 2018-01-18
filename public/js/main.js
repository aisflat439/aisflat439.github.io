window.onload = function () {
    var sectionButtons = document.querySelectorAll('.explainer__links');

    function hideAllShowCurrent(index) {
        var sectionElements = document.querySelectorAll('.js-explainer-area');
        var useExplanations = document.querySelectorAll('.rule-explanation__content');

        sectionElements.forEach(item => {
            item.classList.toggle('show');
        })
        sectionElements[index].className += ' show';

        useExplanations.forEach(item => {
            item.classList.toggle('visible');
        });
        useExplanations[index].className += ' visible'; 
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


