'use strict' 


let listImages = document.getElementsByClassName("imgCarousel");
let count = 0;
let indexLastImage =  listImages.length - 1;

function imgNext(){

    if (count >= listImages.length - 1){
        count=0;
        listImages[indexLastImage].classList.add("displayNone"); 
        listImages[0].classList.remove("displayNone");
  }
    else {

        listImages[count].classList.add("displayNone");
        listImages[count+1].classList.remove("displayNone");
        count++;


  }
 

}

function imgPrevious(){

  console.log (count);
  listImages[count].classList.remove("displayNone")
  listImages[0].classList.add("displayNone");

 
if(count == 0 ){

count = indexLastImage;


}



}









