//slideshow

let img = [
    "https://images.tv9hindi.com/wp-content/uploads/2021/10/neha-sharma.jpg",
    "https://static.toiimg.com/thumb/msid-58888714,width-1200,height-900,resizemode-4/.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjAaznV8EWkG2z9wyABUmQL_OxresdnuiRQ&usqp=CAU",
    "https://m.media-amazon.com/images/I/91e6ua1XpFL._SY450_.jpg",
    "https://static.toiimg.com/photo/msid-87274484/87274484.jpg",
    "https://images.news18.com/ibnlive/uploads/2020/07/1595079024_pjimage.jpg?im=FitAndFill,width=1200,height=900",
  ];
  // console.log(img)
  
  let slide = document.getElementById("slideshow");
  let i = 0;
  
  setInterval(function () {
    if (i == img.length) {
      i = 0;
    }
    let image = img[i];
  
    slide.innerHTML = null;
  
    let imgs = document.createElement("img");
    imgs.src = image;
  
    slide.append(imgs);
    i++;
  }, 2500);
  