window.onload = function () {
    var sectionButtons = document.querySelectorAll('.explainer__links');

    function hideAllShowCurrent(index) {
        var sectionElements = document.querySelectorAll('.js-explainer-area');
        var useExplanations = document.querySelectorAll('.rule-explanation__content');

        sectionElements.forEach(item => {
            item.classList.remove('show');
        })
        sectionElements[index].className += ' show';

        useExplanations.forEach(item => {
            item.classList.remove('visible');
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

    // Example for LOOP
    function wrapInSpan(someString, className) {
        var element = document.createElement('span');
        var text = document.createTextNode(someString);
        element.setAttribute('class', className)         

        console.log("The element we created!", element)
        return element;
    }

    var newArrayWithItemsInSpans = myAwesomeStringIsAnArray.map(item => {
        console.log('item', item);
        return wrapInSpan(item, 'exampleClass');
    })

    console.log("myAwesomeStringIsAnArray ", myAwesomeStringIsAnArray);
    console.log("new array ", newArrayWithItemsInSpans);

    var targetDiv = document.getElementById('ExampleDiv');

    const animals = [
        { name: 'Aaron', species: 'dog' },
        { name: 'Justin', species: 'cat' },
        { name: 'Ziggy', species: 'clown' },
        { name: 'Colin', species: 'cat' },
        { name: 'Willy', species: 'cat' },
        { name: 'Ariel', species: 'dog' },
        { name: 'Lu', species: 'dog' },
        { name: 'Brynne', species: 'dog' },
        { name: 'Devin', species: 'cat' },
        { name: 'Emma', species: 'cat' }
    ];

    /*
        how to get just the dogs?
    */
    // let dogs = [];
    // for (let i = 0; i < animals.length; i++) {
    //     const animal = animals[i];
    //     if (animal.species === 'dog') {
    //         dogs.push(animal);
    //     }
    // }

    /*
        filter
    */
    // const dogs = animals.filter(function(animal) {
    //     return animal.species === 'dog';
    // });

    /*
        shorter filter
    */
    const dogs = animals.filter((animal) => animal.species === 'dog');
    console.log("animals isn't changed", animals);
    console.log("dogs ", dogs);

    // Write a function that makes the following element
    // 
    // <span class="dog">Aaron</span>

    function wrapInSpan(someString, className) {
        var element = document.createElement('span');
        var text = document.createTextNode(someString);
        element.setAttribute('class', className)
        element.appendChild(text)
        // console.log("The element we created!", element)
        return element;
    }

    var aaronElement = wrapInSpan(animals[0].name, animals[0].species)
    console.log("aaronElement ", aaronElement)

    // Cool right? but if we want we can take that same array, 
    // and really help ourselves out
    // var newArrayWithItemsInSpans = []

    // for (var i = 0; i < animals.length; i++) {
    //     newArrayWithItemsInSpans.push(wrapInSpan(animals[i].name, animals[i].species))
    // }

    // console.log('New Array with items in span', newArrayWithItemsInSpans);

    // var betterOption = animals.map((item) => {
    //     console.log('item', item);
    //     console.log('name', item.name);
    //     console.log('species', item.species);
        
    //     return wrapInSpan(item.name, item.species)
    // })

    // console.log("betterOption ", betterOption);
}
