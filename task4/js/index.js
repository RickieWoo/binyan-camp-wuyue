// $(function(){
// 	$.ajax({
//         type: "GET", 
//         url: "http://api.douban.com/v2/movie/top250", 
// 		data:"jsonp",
        
// 		success:function(data){
//              console.log(data); 
            
// 		}
// 	});
// })
$(function(){  
    $.getJSON("http://api.douban.com/v2/movie/top250?alt=xd&callback=?", function(data){  
        console.log(data); 
        console.log(data.subjects); 
        var item =data.subjects;
        addData(item);
        // for (var i = 0; i < 10; i++){
        //     $
        // }
    });  
});

function addData(result){
    $.each(result,function(index,obj){
        var link = obj['alt'];
        var img = obj['images']['medium'];
        var tit = obj['title'];
        var score = obj['rating']['average'];
        $(".item-list").append("<li class='flag' role='link' href='"
            +link+"'> <a class='figure flag-item' href='"
            +link+"'> <img alt='' src='"
            +img +"'> </a> " + "<div class='flag-title'> <a href='##' title=''>"
            +tit + "</a></div> <div class='flag-score'><span>评分</span><strong>"
            +score + "</strong> </div> "
            +"</li>"
        )
        console.log(obj['images']['medium']);
        if(index>9)
        return;
    })
}