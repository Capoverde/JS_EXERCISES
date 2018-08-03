// =========================================================//
if ($('#back-to-top').length) {
  var scrollTrigger = 100, // px
      backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('#back-to-top').addClass('show');
          } else {
              $('#back-to-top').removeClass('show');
          }
      };
  backToTop();
  $(window).on('scroll', function () {
      backToTop();
  });
  $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
  });
}
// =========================================================//



// -------------- #1 -------------- //

// Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.

// const btn = document.getElementById('jsstyle');
// let p = document.getElementById('text');

// btn.addEventListener('click',
// function change (){
//  p.classList.toggle('change')
// });

// -------------- #2 -------------- //

// Write a JavaScript function to get the values of First and Last name of the following form

// The Solution:

// function getFormvalue()
// {
//   var x=document.getElementById("form1");
//   for (var i=0;i<x.length;i++)
//   {
//    if (x.elements[i].value!='Submit')
//     {  
//       console.log(x.elements[i].value);
//      }  
//    }
// }

// -------------- #3 -------------- //

// Write a JavaScript program to set the background color of a paragraph.

// function set_background(){
//   var x = document.querySelectorAll('p');
//   x.forEach(function(elem){
//     var z = Array.from(x);
//      console.log(z);
//   for(var i=0;i<=z.length;i++){
//     z[i].style.background = 'red';
//    }
//   });
//   }

// -------------- #4 -------------- //

// Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

// function getAttributes()
// {
//  var u = document.getElementById("w3r").href;
//  console.log('The value of the href attribute of the link is : '+u);
//  var v = document.getElementById("w3r").hreflang;   
//  console.log('The value of the hreflang attribute of the link is : '+v);
//  var w = document.getElementById("w3r").rel; 
//  console.log('The value of the rel attribute of the link is : '+w);
//  var x = document.getElementById("w3r").target; 
//  console.log('The value of the taget attribute of the link is : '+x);
//  var y = document.getElementById("w3r").type; 
//   console.log('The value of the type attribute of the link is : '+y);  
// }

// -------------- #5 -------------- //

// Write a JavaScript function to add rows to a table.

// The solution:

// function insert_Row ()
// {
//   var x=document.getElementById('sampleTable').insertRow(0);
//   var y = x.insertCell(0);
//   var z = x.insertCell(1);
//   y.innerHTML="New Cell1";
//   z.innerHTML="New Cell2";
// }

// -------------- #6 -------------- //

// Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell. 



