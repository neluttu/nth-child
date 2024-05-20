const pseudo = document.getElementById('pseudo');
const nthElements = [
    { selector: 'first-child', title: 'First child', description: 'Info'},
    { selector: 'last-child', title: 'Last child', description: 'Info'},
    { selector: 'nth-child(odd)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(even)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(3n)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-last-child(3n)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(3n+1)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-last-child(3n+1)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(3n-1)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-last-child(3n-1)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(3)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-last-child(3)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(-n+3)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-last-child(-n+3)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(n+3)', title: 'Odd childs', description: 'Info'},
    { selector: 'not(:nth-last-child(-n+2))', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(n+3):nth-last-child(n+3)', title: 'Odd childs', description: 'Info'},
    { selector: 'nth-child(-n+2)', title: 'Odd childs', description: 'Info'},
];

nthElements.forEach(nthElement => {
    const ulElement = document.createElement('ul');
    const styleElement = document.createElement('style');
    const h2Element = document.createElement('h2');

    h2Element.textContent = ':' + nthElement.selector;
    h2Element.classList.add('my-3' ,'text-lg' ,'font-normal', 'tracking-wider')
    ulElement.setAttribute('data-css', nthElement.selector);

    ulElement.classList.add('flex', 'items-center', 'bg-[#E6ECF0]', 'p-3', 'rounded-md', 'w-full', 'justify-start', 'mb-16', '[&>li]:rounded-md', '[&>li]:border-white', '[&>li]:aspect-square', '[&>li]:flex-1', '[&>li]:border', 'gap-6', '[&>li]:transition-all', '[&>li]:duration-200', '[&>li]:ease-in', '[&>li]:flex', '[&>li]:items-center', 'font-mono', 'text-lg', '[&>li]:justify-center', '[&>li]:font-semibold', '[&>li]:text-gray-400', '[&>li]:bg-white');
    
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        ulElement.appendChild(li);
    }
    pseudo.appendChild(ulElement);

    styleElement.textContent = '[data-css="' + nthElement.selector + '"] > li:' + nthElement.selector + ' { background-color: #2d80cf; border:1px solid #2d80cf; color: white }';
    ulElement.insertAdjacentElement('beforebegin', h2Element);
    ulElement.insertAdjacentElement('beforebegin', styleElement);
});