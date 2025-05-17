//Função: Define uma lista de ações que serão executadas função for chamada. Palavra reservada para criar uma função em java function.

function insert(num){//inicio da função
    //variável é um espaço na memória que armazena uma informação uso posterior. Ao nomeá-la evite: nºs e letras maiúsculas no início, espaço entre palavras(uso_ ou camelCase) e acentuação.
    //Captura o conteúdo atual exibido no elemento com id 'resultado' e armazena na variável 'número'
    var numero = document.getElementById('resultado').innerHTML
    //atualiza o conteúdo do elemento 'resultado' concatenando o valor atual com o nº ou o operador (+,-,/,*) passado no parâmetro num
     document.getElementById('resultado').innerHTML = numero + num
    
}//fim da função

function clean(){
    //Define que o Conteúdo do elemento 'resultado' como um elemento
    document.getElementById('resultado').innerHTML = "";
}
// Função para apagar o último caracter digitado
function del(){
    //Variável para armazenar a infromação atual do visor (tag p)
    var resultado = document.getElementById('resultado').innerHTML;
    //Usa o metodo substring para remover o ultimo caracter digitado na tela, atualizando o valor. o metodo length retornará o tamanho da string, ou seja quantos elementos aparecem na tela.'
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1)
} 
//Função 'calcular' irá avaliar a expressão da tela e realizar o calculo exibindo-o na tela.

//Função 'calcular' irá avaliar a expressão da tela e realizar o cálculo exibindo-o na tela.
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado ){
        document.getElementById("resultado").innerHTML= eval(resultado)
        //Use a função eval() para avaliar a expressão matemática e retornar o resultado da operação
            //Se o conteúdo da tela (tag p) não estiver vazio
    }else{
        document.getElementById('resultado').innerHTML = 'ERROR 405'
        //Senão, caso não haja nenhum conteúdo no visor
         //Exibe uma mensagem de erro

    }
    
   
}

document.addEventListener('keydown', 
    function(event) {
        var tecla = event.key;
        if(/[0-9+\-*/]/.test(tecla)){
            insert(tecla);
        }
        else if(tecla == 'Enter'){
            calcular();
        }
    //Verificar se a tecla precionada é delete
    else if (tecla == "Backspace") {
      del(); //chama a função del - Apaga o ultimo caracter
    } //verifica se a tecla pressionada é o delete
    else if (tecla == "Delete") {
      clean();
    }
}//fm da função
)//fechar o bloco do evento