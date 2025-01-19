const listA = document.querySelectorAll('a');
let active = 'intro';
let zIndex = 2;

listA.forEach(b => {
    b.addEventListener('click', function (event) {
        const valueTab = b.dataset.tab;
        if (valueTab && valueTab !== active) {
            const tabActive = document.getElementById(valueTab);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            active = valueTab;

            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            
            tabActive.classList.add('active');
        }
    });
});
