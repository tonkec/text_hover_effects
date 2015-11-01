$(document).ready(function(){
  $(".item-doc").click(function(){
    var current = $(this);
    var listId = $(this).attr("id");
    var content = $(".content");
    var currentContent = content[listId];
    $(this).addClass("item-active");
    $(".item-doc").not(current).removeClass("item-active");
    $(content).not(currentContent).removeClass("content-active");
    $(currentContent).addClass("content-active");
  });

  $(".item").click(function(){
    var current = $(this);
    $(this).addClass("item-active");
    $(".item").not(current).removeClass("item-active");
    var newClass = $(this).text();
    var p = $("p");
    $(p).removeAttr("class");
    setTimeout(function(){
      $(p).addClass(newClass);
    },100);
  });

  $(".menu").click(function(event){
    event.preventDefault();
    $("aside.left").addClass("open-menu");
    $(".overlay").addClass("show-overlay");
    $(".item, .item-doc").click(function(){
      $("aside.left").removeClass("open-menu");
      $(".overlay").removeClass("show-overlay");
    });
  });

  $(".close").click(function(event){
    event.preventDefault();
    $("aside.left").removeClass("open-menu");
    $(".overlay").removeClass("show-overlay");
  });
})