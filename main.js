$(document).ready(function(){
    $('#form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);
        novoItem.appendTo('ul');
        $(novoItem).click(function(){
        $(this).css('text-decoration', 'line-through');
        })
        $('#tarefa').val('');
    });
    
});