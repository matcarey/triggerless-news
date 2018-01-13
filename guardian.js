getStateManager('redTriggers').getArray()
    .then(redTriggers => redTriggers.map(trigger => trigger.toLowerCase()))
    .then(redTriggers => {
        console.log('the guardian - red triggers', redTriggers);

        if (redTriggers.length > 0) {
            console.log('red triggers');

            document.querySelectorAll('.fc-item__container').forEach(elem => {
                console.log('matching', elem);
                elem.querySelectorAll('.fc-item__header').forEach(headerElem => {
                    console.log('matching header', headerElem);
                    headerElem.innerText.split(/[^\w]+/g).forEach(word => {
                        if (redTriggers.indexOf(word.toLowerCase()) > -1) {
                            console.info('found matching word', word);
                            const className = 'trigger-free-news--red-warning';
                            elem.classList.add(className);
                            elem.addEventListener('click', function (e) {
                                if (elem.classList.contains(className)) {
                                    elem.classList.remove(className);
                                    e.preventDefault();
                                }
                            });
                        }
                    });

                })
            })
        }
    });

