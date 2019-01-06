const root = $("#root");
const arr = [];
for (let item in effects) {
  let arrayItem = effects[item];
  let nameOfTheGroup = Object.keys(arrayItem);
  let arrayOfEffects = arrayItem[nameOfTheGroup];
  arr.push(arrayOfEffects);
  root.append(`
    <section class="section-effect section-${nameOfTheGroup}">
      <h3> ${nameOfTheGroup} </h3>
    </section>
  `);
}

if ($(".section-effect").length > 0) {
  $(".section-effect").each(function(i) {
    let oneArr = arr[i];
    let column = $(this);
    for (let item in oneArr) {
      $(column).append(`
       <span class="effect" id=${oneArr[item]}> ${oneArr[item]} </span>
     `);
    }
  });
}

$(".effect").click(function() {
  let id = $(this).attr("id");
  $("#result")
    .attr("class", "")
    .addClass("text-hover " + "text-hover-" + id);
});
