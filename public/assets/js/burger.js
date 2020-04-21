console.log('test')
$(".devour").click(function(){
    const burgerId = $(this).val()
    $.ajax("/api/burgers/" + burgerId, {
        type: "PUT",
        
      }).then(res=>location.reload())
});

$(".create-form").submit(function(event){
  event.preventDefault()
  const burgerName = $('#ca').val()
  $.post('/api/burgers',{burger_name: burgerName},res=>location.reload())
})