const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //split the letters into an array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //map it to create an array of letters with a span around them
        .join('') //then we turn them back into a string
})