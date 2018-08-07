var random_images_array = ["img/4.jpg"];



function getRandomImage(imgAr, path) {
    path = path || 'assets/images/'; 
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
  };