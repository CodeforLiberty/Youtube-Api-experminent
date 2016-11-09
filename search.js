

//youtube api key: AIzaSyBtR79on5hDbVHQsghlPlLSTOOLI2zIHmI


//var youtube_url = 'https://www.youtube.com/'
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=batman&key=AIzaSyDl95zSXBoX5dzMi2vvkwBtaNiJD4x0kNk

//var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=batman&key=AIzaSyDl95zSXBoX5dzMi2vvkwBtaNiJD4x0kNk';
// $.getJSON(url, function(data){
// 	console.log('done')
// })   
var url = 'https://www.googleapis.com/youtube/v3/search';//url to get from


var tempObj = {//state like object
		part: 'snippet',
		q:'dogs',
		key:'AIzaSyDl95zSXBoX5dzMi2vvkwBtaNiJD4x0kNk'	
}

function newQuery(query) {//change query to what's in the input
	
	  tempObj.q= $("#query").val(); 
	  return   $.getJSON(url, tempObj, function(data) {
	  		console.log('done', data);
	  		render(data);
	  	})
};
//render html
function render(data) {
console.log(data.items[0].snippet.thumbnails.medium.url);


//var imgUrl = tempObj.snippet.thumbnails.medium.url;

var innerHtml =''; 
for(i=0;i<data.items.length;i++) {
	innerHtml+='<img src="'+data.items[i].snippet.thumbnails.medium.url+' ">'
}

//innerHtml+='<p>'+tempObj.q+'</p>'+'</br>'+'<img src="'+data.items[0].snippet.thumbnails.medium.url+' ">';
$('#search-container').html(innerHtml);
};

// data.items.forEach(function(item, index) {
//       var imgURL = item.snippet.thumbnails.medium.url;
//       var youTubeVideoid = item.id.videoId;
//       var title = item.snippet.title;
//      resultElement += '' +
//      '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">' +
//         '<a href="https://www.youtube.com/watch?v=' + youTubeVideoid +'" target="_blank">' + 
//         '<img src="' + imgURL + '"</a>' +
//         '<p>' + title + '</p>' +
//       '</div>';
//     });

$('.sub').on('click', function() {
 newQuery();
 });

//$.getJSON(url, tempObj, function(data){
//	console.log('done', data);
	//step 3 loop over results and build html 
//})   


