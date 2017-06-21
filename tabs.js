var tabs=$($(".tabs")[0]);
var content=$($(".content")[0]);
console.log("dfa");
tabs.on("click","li",function(e){
    console.log("sasf");
    let target=$(e.currentTarget);
    console.log(target);
    let index=target.index();
    $(target).addClass("active");
    $(target).siblings().removeClass("active");
    console.log(index);
    var contentLi=content.children().eq(index);
    console.log(contentLi);
    contentLi.addClass("active");
    $(contentLi).siblings().removeClass("active");
})