export { tabs };
const div = document.createElement("div");
function tabs(
  tabSelector,
  contentSelector,
  activeClass,
  display = "block",
  contentBg = false,
  nextArrow,
  prewArrow
) {
  const tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector),
    decoration = document.querySelector(".decoration"),
    background = {
      imgInside: "../assets/img/tabsImgBackground/insideBalcony.png",
      imgOutside: "../assets/img/tabsImgBackground/outsideBalcony.png",
      k: "../assets/img/tabsImgBackground/vekaEvrolajn.png",
      balconUp: "../assets/img/tabsImgBackground/balconup.png",
    };

  function createBg(i) {
    const path = Object.values(background);
    div.classList.add("backgroundImage");
    div.style.background = `url(${path[i]}) center/cover no-repeat`;
    return div;
  }

  function hideContent() {
    content.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animate__animated", "animated", "zoomIn");
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showBgContent(i = 0) {
    const bg = createBg(i);
    decoration.insertAdjacentElement("afterbegin", bg);
  }

  function showContent(i = 0) {
    tab[i].classList.add(activeClass);
    content[i].style.display = display;
    content[i].classList.add("animate__animated", "animated", "flipInY");
    if (contentBg) {
      showBgContent(i);
    }
  }
  hideContent();
  showContent();
  showBgContent();

  tab.forEach(function (item, i) {
    item.addEventListener("click", (e) => {
      const target = e.target;
      if (target.parentNode.contains(item)) {
        hideContent();
        showContent(i);
      }
    });
  });
}

// function tabs (triggerTab, tabSelector, galzingContent, activeClass){
//     const tabsglazing = document.querySelector(triggerTab),
//           tabsContent = document.querySelectorAll(tabSelector),
//           glazingContent = document.querySelectorAll(galzingContent);

//     function hideContent(){
//         glazingContent.forEach(item =>{
//             item.style.display = 'none'
//         });
//         tabsContent.forEach(i =>{
//             i.classList.remove(activeClass)
//         })
//     }

//     function showContent(i = 0){
//         glazingContent[i].style.display = 'block'
//         tabsContent[i].classList.add(activeClass)
//     }

//     hideContent()
//     showContent()

// //Работает только для одного таба

//     // tabsglazing.addEventListener('click',(e)=>{
//     //     const target = e.target
//     //     console.log(target)
//     //     tabsContent.forEach((item,i)=>{
//     //         if(target==item.childNodes[3]){
//     //             console.log(item.childNodes[3])
//     //             hideContent()
//     //             showContent(i)
//     //         }
//     //     })
//     // })
// //

//       tabsglazing.addEventListener('click',(e)=>{
//             const target = e.target

//         //   if (target.parentNode.classLits.contains('glazing_block')){
//         //         console.log('hi');
//         //   }
//           console.log(target.parentNode)
//           console.log(target.classList)
//           console.log(target.parentNode.classList)
//         //   const a = tabSelector.replace(/\./,"")
//         //   console.log(a)
//       })

// }
