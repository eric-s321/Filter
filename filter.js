// function filterWithGSD(image) {
//   var fileType = image["type"];
//   var canvas = document.getElementById("myCanvas");
//   canvas.style.height = "300px";
//   canvas.style.width = "300px";
//   var context = canvas.getContext("2d")
//   canvas.getContext('2d').scale(2,2);
//
//   var imageObj1 = new Image();
//   var filter = new Image();
//   var afterImg = new Image();
//
//   imageObj1.src = image;
//   imageObj1.onload = function(){
//     context.drawImage(imageObj1,0,0, parseInt(this.height),
//     parseInt(this.width));
//     filter.src = "assets/GSDBadgeReworkv1.png";
//     filter.onload = function(){
//       context.drawImage(filter,230,5, parseInt(this.height)/4,
//       parseInt(this.width)/4);
//     };
//   };
//
//   context.getImageData(0,0, 300,300);
//
//  afterImg = canvas.toDataURL("image/png");
//  return afterImg;
//
// }
//
// var dt = filterWithGSD("assets/jeff_icon.jpg");
//
// function download() {
//     this.href = dt;

// };
// downloadLnk.addEventListener('click', download, false);



function filterWithGSD(image) {
  window.alert("Reached Top");

  var fileType = image["type"];
  var canvas = document.getElementById("myCanvas");
  canvas.style.height = "300px";
  canvas.style.width = "300px";
  var context = canvas.getContext("2d")
  canvas.getContext('2d').scale(2,2);

  var imageObj1 = new Image();
  var filter = new Image();
  var afterImg = new Image();

  imageObj1.src = image;
  imageObj1.onload = function(){
    context.drawImage(imageObj1,0,0, parseInt(this.height),
    parseInt(this.width));
  };

  filter.src = "assets/GSDBadgeReworkv1.png";
  filter.onload = function(){
    context.drawImage(filter,230,5, parseInt(this.height)/4,
    parseInt(this.width)/4);
  };

  console.log("afterImg is \n\n" + afterImg);
  console.log("canvas is \n\n" + canvas.toDataURL("image/png"));

 afterImg = canvas.toDataURL("image/png");
 console.log("afterImg is \n\n" + afterImg);

  window.alert("Reached Bottom");
 return afterImg;

}

var dt;
function download() {
   window.alert("DOWNLOADED");
    this.href = dt;
    console.log(dt);
};


dt = filterWithGSD("assets/jeff_icon.jpg");
document.getElementById('canvasImg').src = dt;
console.log(document.getElementById('canvasImg').src);

download();
//downloadLnk.addEventListener('click', download, false);
