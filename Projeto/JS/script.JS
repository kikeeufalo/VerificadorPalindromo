function isPalindrome(str) {
    // Remover caracteres especiais, espaços e tornar tudo minúsculo
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Verificar se o texto é igual à sua versão invertida
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Ação do botão
document.getElementById('check-btn').addEventListener('click', function() {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const text = inputElement.value.trim();  // Remover espaços desnecessários

    if (text === "") {
        alert("Please input a value");
        return;
    }

    if (isPalindrome(text)) {
        resultElement.textContent = `${text} is a palindrome`;
    } else {
        resultElement.textContent = `${text} is not a palindrome`;
    }
});

document.getElementById('oq').addEventListener('click', function() {
    const div = document.createElement('div')
    const p = document.createElement('p')

    div.id = 'div-info'
    p.id = 'p-info'

    p.textContent = 'Um palíndromo é uma palavra ou frase que é escrita da mesma forma, de trás para frente, ignorando pontuação, maiúsculas e minúsculas e espaçamento.'

    div.appendChild(p)
    document.getElementById('oq').appendChild(div)

    setTimeout(() => {
        document.getElementById('div-info').remove()
    }, 2000)
})