// example 1 change the text of the paragraph after performing an event here it is button click
//first grab the event then perfom the action 
  document.getElementById("changeTextButton").addEventListener('click',function(){
    let para = document.getElementById("myParagraph");
    // console.log(para);
    para.textContent = "the paragraph is changed"
});
//as arrow functions when we use this in them the refer the global window so thats why while we use the this we wont use the arrow functions with this



//example 2:
