document.querySelector('#btn').addEventListener('click',()=>{
    let n1, n2, soma, subtracao,multiplicacao, divisao;
    //trabalho com inputs - tem que converter para número
    n1=parseInt(document.getElementById('n1').value);
    n2=parseInt(document.getElementById('n2').value);
    //calcular a soma, subtração, multiplicação e divisão - não posso dividir por zero
    soma=n1+n2;
    subtracao=n1-n2;
    multiplicacao=n1*n2;
    //divisao=n1/n2;  //eu não sei se n2=0
    //atribuição  =    comparação ==
    if (n2==0) 
    {
        divisao='Impossível dividir por 0!';
    } 
    else 
    {
        divisao=n1/n2;
    }
   
    alert ('Soma= '+ soma+'\n'+
    'Subtração='+ subtracao+'\n'+
    'Multiplicação='+multiplicacao+'\n'+
    'Divisão='+divisao);
})
//---------------------------------------------------------------------------------
//nova função
document.querySelector('#btn1').addEventListener('click', ()=>{
    //se for menino e se idade >20 --> 80 PARA CADA ALUNO 
    //se for menino e se idade <=20 --> 100 para cada aluno
    //se for menina e se idade >=20 -->120 para cada aluna
    //se for menina e se idade <20 --> 130 para cada aluna

    //declaração das variáveis
    let numh, numm, idh, idm, vlh, vlm;

    //atribuir valores às variáveis - converter
    numh=parseInt(document.getElementById('h').value);
    numm=parseInt(document.getElementById('m').value);
    idh= parseInt(document.getElementById('idh').value);
    idm= parseInt(document.getElementById('idm').value);
    
    //fazer os cálculos
    //valor que vamos gastar com os meninos
    if (idh>20) 
    {
        vlh= 80*numh;
    }
    else 
    {
        vlh= 100*numh;
    }

    //valor que vamos gastar com as meninas
    if (idm>=20)
    {
        vlm=120*numm;
    } 
    else 
    {
        vlm=130*numm;
    }

    //formatando os valores em reais
    vlh =vlh.toLocaleString('pt-br',{style: 'currency', currency:'BRL'});
    vlm =vlm.toLocaleString('pt-br',{style: 'currency', currency:'BRL'});

    //exibir os resultados
    alert ('Valor a ser gasto com os meninos:'+vlh+'\n'+
    'Valor a ser gasto com as meninas:'+vlm);
})