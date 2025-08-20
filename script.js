

// function chance(prob) {
//   return !!prob && Math.random() <= prob;
// }

// function randInt(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// function pick(arr) {
//   return arr[(Math.random() * arr.length) | 0];
// }


// $(".float .wrapper").click(function(){
//       $(".float").fadeOut();
  
// });


// $(document).ready(function(){
  
//  $("#wrapper-cards .card").draggable();
  
//   let total = $( "#wrapper-cards .card" ).length;
//   let totalP = $( "#prompts span" ).length;
  
//   $( "#prompts span" ).each(function(i) {
  
//     $(this)
//       .css("left", `${randInt(0,50)}%`)
//       .css("top", `${ (90/totalP)*i + (randInt(12,20)*0.01) }%`)
//   });
  
//   $( "#wrapper-cards .card" ).each(function(i) {
    
//     let maxH = $( document ).height() - 400;
    
//     $(this)
//       .css(pick(["left", "right"]), `${randInt(10,50)}px`)
    
//     let w = $(this).find("[word]").html();
//     let p = $(this).find("p").html();
    
//     $(`<span def>
//     <span word>${w}</span>
//     <p definition>${p}</p>
//     </span>`)
//       .appendTo("#define .wrapper");
    
//     $(`<span def>
//     <input w="${w}" type="radio">
//     <span word>${w}</span>
//     </span>`)
//       .css("top", `${ 4 + (85/total)*i + (randInt(10,16)*0.01) }%`)
//       .css("left", `${randInt(5,85)}%`)
//       .appendTo("#map .wrapper");
    
    
//   });
  
//   $("#map").on("click", "input[type='radio']", function(){
    
//     let wordToFind = $(this).attr("w").toLowerCase();
    
//     var card = $('.card').filter(function() {
//         return $(this).find('span[word]').text().toLowerCase() === wordToFind;
//     });
//     if (card.length) {
//         $('html, body').animate({
//             scrollTop: card.offset().top - 100
//         }, 1000);
//     }
    
//   });

//   $("#switch").on("click", "a", function(){

//     $("a[switch]").removeAttr("active");
//     $(this).attr("active", "");

//     let s = $(this).attr("switch");
    
//     if(s == "txt"){
//       $(".float").hide();
//     }
    
//     if(s == "channel"){
//       $(".float").hide();
//       $("#channel").fadeIn();
//     }
    
//     if(s == "define"){
//       $(".float").hide();
//       $("#define").fadeIn();
//     }

//     if(s == "map"){
//       $(".float").hide();
//       $("#map").fadeIn();
//     }

//   });
  
  
// });



// //$('#essay p').each(function() {
// //  var words = $(this).text().split(' ');
// //  var html = '';
// //  for (var i = 0; i < words.length; i++) {
// //      html += '<span>' + words[i] + '</span> ';
// //  }
// //  $(this).html(html);
// //});

// //$("#essay p").on("mouseenter", "span", function() {
// //  let d = $(this);
// //  let word = $(this).html();
// //  let w = $(this).html().replace(/[^a-zA-Z]/g, '').toLowerCase();
// //  
// //   $(".card").each(function() {
// //  const card = $(this);
// //  const spanWord = card.find("span[word]").text().replace(/[.,!?'"-]/g, '').toLowerCase();
// //
// //    
// //  if (w == spanWord) {
// //    
// //  $(d).addClass("highlighted");
// //  $("h1[title]").html(word);
// //  
// //    // Get the contents of the <p> element within this .card
// //    const pContents = card.find("p").text();
// //    console.log(pContents); 
// //    define(pContents); 
// //  }
// //});
// //  
// //}).on("mouseleave", "span", function() {
// //  $(this).removeClass("highlighted");
// //  $("h1[title]").html("On Domain Naming");
// //});



// var typeTimeout;

// function changeH1Text(word) {
//   $('h1[title]').html("");
//   var h1 = $('h1[title]');
//   var currentText = h1.text();
//   var newText = word;
//   var i = 0;
//   // Clear any existing timeout
//   clearTimeout( typeTimeout);

//   // Recursive function to change text character by character
//   function changeCharacter() {
//     if (i < newText.length) {
//       h1.text(currentText + newText.charAt(i));
//       i++;
//       currentText = h1.text();
//       typeTimeout = setTimeout(changeCharacter, 100); // Adjust the timeout as needed
//     }
//   }

//   // Start changing text
//   changeCharacter();
// }


//     var observer;
//     var isObserverActive = true;


// $(document).ready(function() {
//    changeH1Text("Domain Naming");
  
  
//     // Intersection Observer callback
//     function handleIntersection(entries, obs) {
//         var first = false;
//         entries.forEach(entry => {
//           if(first) return false;
//               console.log(isObserverActive, entry.isIntersecting , entry.intersectionRatio);
          
//             if ( entry.isIntersecting && entry.intersectionRatio) {
//                 var word = entry.target.getAttribute('highlight');
//                 changeH1Text(word);
//               console.log(word);
//               first = true;
//             }
//         });
//     }

//     // Observer options
//     var options = {
//         root: null,
// //        rootMargin: '-220px',
// //        rootMargin: '-100px',
//         rootMargin: '0px',
//         threshold: 0.5
//     };

//     // Function to create new intersection observer
//     function createObserver() {
//         observer = new IntersectionObserver(handleIntersection, options);

//         // Get all span elements with highlight attribute
//         var highlightSpans = document.querySelectorAll('span[highlight]');

//         // Observe each span element
//         highlightSpans.forEach(span => {
//             observer.observe(span);
//         });
//     }


//     createObserver();

//     // Function to handle scrolling
//     function handleScroll() {
//         if (isObserverActive) {
//             isObserverActive = false;
//             setTimeout(function() {
//                 isObserverActive = true;
//             }, 50); 
//         }
//     }

//     // Reobserve elements on scroll
//     window.addEventListener('scroll', handleScroll);
  
// });



// function addBorder(){
  
//   let i = $(`<img src='./border/`+ randInt(1,97) +`.gif'>`)
//     .css("transform", "scale("+ (randInt(8,12) * 0.1) +") rotate(" + randInt(0,8) +"deg)")
//     .css("padding", randInt(0,8) + "px")
//     .hide()
//     .fadeIn(randInt(800,3000))
//     .appendTo("#border");
  
//   if(randInt(0,1)){
//     $(i).css("transform", "scale("+ (randInt(8,13) * 0.1) +") rotate(-" + randInt(0,8) +"deg)")
//   }
  
//   let choose = randInt(0,3);
//       $(i).css("bottom", randInt(0,40) + "%").css("left", randInt(0,95) + "%");
  
  
  
// //  console.log("...");
  
// }