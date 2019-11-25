$(document).ready(function(){
    // $("h2").css("text-decoration","underline");
    // $("td").css("border","solid 1px #ccc");
    // $("td").addClass("underline");
    $("td").addClass("border");    
    // $("h2").removeClass(underline);
    // $("ul").removeClass(border);   
     $("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");

  });
});