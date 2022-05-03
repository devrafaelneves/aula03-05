$('#InputSub').click(
    function(){
        $.ajax({
            type:'GET',
            url:'http://jsonplaceholder.typicode.com/posts',
            success:function(data){
                console.log(data)

            }, 
            error:function(data){
                console.log('fds')

            }
        })
         }
)



//         login = 
//         {
//             'usuário': document.getElementById('InputEmail').value,
//             'senha': document.getElementById('InputPass').value
            
//         }
        
//         if (login.senha == '1'){
//             document.getElementById('resultado').innerHTML = "<b>Bem Vindo</b>";
//             }
//         else{
//             document.getElementById('resultado').innerHTML = "<b>Usuário ou senha inválidos</b>";
//             }
    
//     }
        
// )
