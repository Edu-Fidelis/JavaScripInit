
// var nome = "Edu";
// var salva = " e pode te salvar!"
// var frase = "SENHOR, Tu és Bom e Tua misericórdia é para sempre!"
// //alert(nome + ", JESUS É Bom" + " " + salva);
// console.log(frase);
// console.log(frase.replace("SENHOR", "JESUS"));
// console.log(frase.toUpperCase());
// console.log(frase.replace("SENHOR", "JESUS").toUpperCase());

// --------- Array -----------

// var lista = ["alegria", "bondade", "sabedoria"];
// console.log(lista[1]);
// console.log(lista.lenght);
// lista.push("amor");
// console.log(lista);
// //lista.pop();
// console.log(lista);
// //console.log(lista.reverse());
// //console.log(lista.toString());
// console.log(lista.join(" - "));

// ----------- Dicionário -----------

// var adjetivo = { nome: "bom", faz: "faz bondade" }
// console.log(adjetivo.nome);
// console.log(adjetivo.faz);

// var adjetivo = [{ nome: "bom", faz: "faz bondade" }, { nome: "feliz", faz: "faz a alegria de outros" }];
// console.log(adjetivo[1].nome);

// ----------- Condicionais, Repetição e Date -----------

// var idade = prompt("Qual é a sua idade? ");
// if (idade > 18) {
//     alert("Maior de idade");
// } else {
//     alert("Menor de idade");
// };


// var count = -1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }


// var count = 0;
// for (count = 0; count <= 5; count++) {
//     alert(count);
// }


// var d = new Date();
// alert(d.getMonth() + 1);
// alert(d.getDay());


// ---------- Funções ----------

// function soma(a, b) {
//     return a + b;
// }

// alert(soma(5, 10));

function clicou() {
    document.getElementById("thanks");
    console.log(document.getElementById("thanks").innerHTML = "DEUS É Fiel");
}

function redirecionar() {
    window.open("https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_template1");
}

function trocar(elemento) {
    elemento.innerHTML = "Passou né rapaiz kkkkkk";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "NÃO Passe o mouse aqui";
    //alert("trocar texto");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}