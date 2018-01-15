const state = getStateManager('redTriggers');
const triggerForm = document.getElementById('trigger-form');

if (triggerForm) {
    console.log('trigger form');
    const redTrigger = document.getElementById('red-triggers') || {value: ''};
    const resetValues = () => state.getArray().then(value => {
        redTrigger.value = value.join(', ');
    });
    triggerForm.addEventListener('submit', e => {
        e.preventDefault();
        const redTriggerValue = redTrigger.value;
        const valueToStore = redTriggerValue.split(',').map(x => x.trim());
        state.setArray(valueToStore).then(resetValues);
    });
    resetValues();
} else {
    console.error('no trigger form');
}
