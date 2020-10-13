var nome = "RRRR";
var deslocamento = 1

function cifraComCifraDeCesar(deslocamento, nome) {
    var msg = []
    var criptograf = []
    var cod = 65; //numero da letra A
    var tamA = 26; //tamanho alfabeto
    for (var i = 0; i < nome.length; i++) {
        msg.push(((nome.charCodeAt(i) - cod + deslocamento) % tamA) + cod)

    }

    for (var i = 0; i < nome.length; i++) {
        criptograf.push(String.fromCharCode(msg[i]))
    }

    return criptograf.join("")
}

function decifraCifraDeCesar(deslocamento, nome) {
    var msg = []
    var criptograf = []
    var cod = 65;
    var tamA = 26;
    for (var i = 0; i < nome.length; i++) {
        msg.push(((nome.charCodeAt(i) + cod - deslocamento) % tamA) + cod)
    }

    for (var i = 0; i < nome.length; i++) {
        criptograf.push(String.fromCharCode(msg[i]))
    }

    return criptograf.join("")
}

var cifra = cifraComCifraDeCesar(1, nome)
var descifra = decifraCifraDeCesar(1, cifra)

console.log(cifra)
console.log(descifra)