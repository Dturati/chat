/**
 * Created by david on 22/09/16.
 */
var form = document.getElementById('formulario');
var mensagem = document.getElementById('mensagem');
var resposta = document.getElementById('resposta');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    respostaForm = mensagem.value;
    // impede o envio do form
    e.preventDefault();
    websocket();
});
var aberta = 0;
var websocket = function (){

    var conn = new WebSocket('ws://localhost:8080');
        conn.onopen = function (e)
        {
                conn.send(respostaForm);
                /*
                 Nunca esqueça de fechar o socket, a não ser que queria ficar louco como eu
                */
                conn.close();
        };

        conn.onmessage = function (e) {
            resposta.innerHTML +=  e.data + "\n";
        };


}
websocket();

