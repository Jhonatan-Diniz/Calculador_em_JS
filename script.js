function apagar() {
    window.document.querySelector("p#resul").innerText = null
}

function escrever(valor, classe) {
    var text = window.document.querySelector("p#resul")

    text.innerText = text.innerText + valor


}

function resultado() {
    var res = document.querySelector('p#resul')

    let converção = convert(res.innerText)

    res.innerHTML = eval(converção)
}


function convert(x) 
{   
    let lis = ''
    for (let c in x)
    {
        if (x[c] == 'x')
        {
            lis += '*'
        }
        
        else if (x[c] == '÷')
        {

            lis += '/'

        }

        else if (x[c] == '%')
        {
            lis += '**'
        }

        else
        {
            lis += x[c]
        }
    }

    return lis
}

