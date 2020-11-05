document.querySelector('#btn').addEventListener('dblclick',()=>{
    //corpo da arrow function

    //declarando variáveis de memória
    let nome, sobrenome, dep, total;
  
    //atribuindo valores às variáveis
    //case sensitive = diferencia maiúsculas de minúsculas
    nome = document.getElementById('nome').value;
    sobrenome =document.getElementById('sobrenome').value;
  
    // dep='3'      '3'*150 = NaN not a number = não é um número
    //convertendo para número
    dep= parseInt(document.getElementById('dependentes').value);
    total=dep*150;

    //alterando para o formato monetário R$   ,00
    total= total.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});

    //concatenar +  é juntar
   // document.write ('A pessoa '+nome+' '+sobrenome+' tem '+dep+' dependentes.');
   document.write(total);
})
