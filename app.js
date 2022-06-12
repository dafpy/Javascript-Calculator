let display = document.getElementById('output-value')

let buttons = Array.from(document.getElementsByClassName('button'))


buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = ''
                break
            case 'CE':
                if(display.innerText) { 
                    //works only if there is a text already
                    display.innerText = display.innerText.slice(0, -1)
                }
                break
            case '=':
                try {
                    //build in functon that takes the string and executes it
                    display.innerText = eval(display.innerText)
                    break
                }
                catch {
                    display.innerText = 'That is not valid'
                    break
                }   
            default:
                display.innerText += e.target.innerText
        }
    })
})