getStateManager('redTriggers').getArray()
    .then(redTriggers => redTriggers.map(trigger => trigger.toLowerCase()))
    .then(redTriggers => {

        if (redTriggers.length > 0) {

            document.querySelectorAll('.fc-item__container').forEach(elem => {
                elem.querySelectorAll('.fc-item__header').forEach(headerElem => {
                    headerElem.innerText.split(/[^\w]+/g).forEach(word => {
                        if (redTriggers.indexOf(word.toLowerCase()) > -1) {
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

