const displayEl = document.getElementById('display');
const keys = document.querySelectorAll('button');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const delBtn = document.querySelector('.del')


keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let val = key.dataset.key;
        if (!val)
            return;
        if (val !== '=' && val !== 'x'){
            displayEl.value += val;
        }
    })
})

equalBtn.addEventListener('click', () => {
    try {
    let expression = displayEl.value;
    if (!expression) 
        return
            let ans = eval(expression);
            displayEl.value = ans;
        }
        catch (error) {
            displayEl.style.color = 'red'
            displayEl.value = 'Error'
        }
})

clearBtn.addEventListener('click', () => {
     displayEl.value = ''
})

delBtn.addEventListener('click', () => {
    displayEl.value = displayEl.value.slice(0, -1);
})


let darkMode = localStorage.getItem('dark-mode')
const themeChange = document.getElementById('toggleTheme')

if (darkMode === 'active') {
    document.body.classList.add('dark-mode')
}

themeChange.addEventListener('click', () => {
    let isDarkMode = document.body.classList.toggle('dark-mode')

    isDarkMode = localStorage.setItem('dark-mode', isDarkMode ? 'active' : 'inactive')
})