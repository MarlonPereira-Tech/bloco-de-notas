$(function(){
    $('.btn-adicionar').click(function(){
        var el='<div class="anotacoes-single"><textarea style="font-style: italic;" placeholder="sua nova anotação..." ></textarea>'
        $('.box-anotacoes').append(el)  //elementos adicionados dinamicamente.

        var textArea=$('.anotacoes-single').last().find('textarea')
        
        var date=new Date();
        var dia=date.getDate();
        var ms=date.getMonth()
        var ano=date.getFullYear()
        var hora=date.getHours();
        var minuto=date.getMinutes();

        var tempoNota=hora+':'+minuto;
        textArea.html(tempoNota+'   '+dia+'/'+ms+'/'+ano)
        
    })
   

  


    $('.btn-remover').click(function(){
        let clear=$('anotacoes-single').last().find('textarea');
        let res=prompt('deseja limpar sua area de anotações?S/N');
        if(res=='s'){
            var res2=prompt('você tem certeza?A ação não poderá ser desfeita!')
            if(res2=='s'){
                $('.box-anotacoes').empty(clear)
            }else{
                alert('Arquivos mantidos')
            }
        }else{
            alert('Arquivos mantidos')  
        }

        
        
    })
    





})
