

// Portfolio Item
const filterContainer = document.querySelector(".tab_portfolio");
      filterBtns = filterContainer.children,
      totalFilterBtns = filterBtns.length,

      portfolioItem = document.querySelectorAll('.portfolio_box_inner'),
      totaoPortlioItems= portfolioItem.length;
      
      for (let i = 0; i < totalFilterBtns; i++) {
        filterBtns[i].addEventListener('click', function(){
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            for (let k = 0; k < totaoPortlioItems; k++) {
                if (filterValue === portfolioItem[k].getAttribute('data-category')) {
                    portfolioItem[k].classList.remove('hide');
                    portfolioItem[k].classList.add('show');
                }
                else{
                    portfolioItem[k].classList.remove('show');
                    portfolioItem[k].classList.add('hide');
                }
                if (filterValue === 'all') {
                    portfolioItem[k].classList.remove('hide');
                    portfolioItem[k].classList.add('show');
                }
                
            }
        });
      }
      
// Light Box 

//     const lightbox = document.querySelector('.lightbox'),
//           lightboxImage = document.querySelector('.lightbox_img'),
//           lightboxClose = document.querySelector('.lightbox_close'),
//           lightboxText = document.querySelector('.text-lightbox'), 
//           lightboxCount = document.querySelector('.count_lightbox');

//           let indexItems = 0;

//           for (let i = 0; i < totaoPortlioItems; i++) {
//             portfolioItem[i].addEventListener('click', function(){
//                 indexItems = i;
//                 changeItems();
//                 toggleLightBox();
//             });
//           }

//           function nextItem(){
//               if (indexItems === totaoPortlioItems-1) {
//                   indexItems = 0;
//               }
//               else{
//                   indexItems++;
//               }
//               changeItems();
//           }

//           function preItem(){
//             if (indexItems === 0) {
//                 indexItems == totaoPortlioItems-1;
//             }
//             else{
//                 indexItems--;
//             }
//             changeItems();
//           }

//           function toggleLightBox(){
//             lightbox.classList.toggle('open');
//           }


//           function changeItems(){
//                 imgSrc = portfolioItem[indexItems].querySelector('.img_portfolio img').getAttribute('src');
//                 lightboxImage.src = imgSrc;
//                 lightboxText.innerHTML = portfolioItem[indexItems].querySelector('h3').innerHTML;
//                 lightboxCount.innerHTML = (indexItems + 1) + " of " + totaoPortlioItems;
//           }
  
// // Close LightBox
// lightbox.addEventListener('click', function(event){
//     if (event.target === lightboxClose || event.target === lightbox) {
//         toggleLightBox();       
//     }
// }); 

// Aside Nabar
  const nav = document.querySelector('.menu_list'),
        navList = nav.querySelectorAll('li'),
        totalNavList = navList.length;

  for (var i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector('a');
         a.addEventListener('click', function(){
            for (var j = 0; j < totalNavList; j++) {
              navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
         })
       }  

 // Toggle Bars
 
// function openNav(){
//    document.getElementById("mySidenav").classList.toggle('open');
//    document.getElementById("toggle_bar").style.marginLeft = "250px";
// }

      
function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
  document.getElementById("toggle_bar").style.marginLeft = "270px";
  document.getElementById("toggle_bar").style.display = "none";
  document.getElementById("toggle_close").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("toggle_bar").style.marginLeft= "0";
  document.getElementById("toggle_bar").style.display = "block";
  document.getElementById("toggle_close").style.display = "none";
}