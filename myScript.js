/*어도비폰트*/
(function(d) {
    var config = {
      kitId: 'vsi4snh',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  (function(d) {
    var config = {
      kitId: 'vsi4snh',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


  let imgData = [
    "img/img21.png",
    "img/img41.png",
    "img/img31.png",
    "img/img11.png"
];

let imgName = [
    "생존",
    "생식",
    "외형",
    "생태"
];

let myThumbnails = document.querySelectorAll(".thumbnail");

let imgTags = document.querySelectorAll(".main-imgTag");
let thumbTexts = document.querySelectorAll(".main-thumbnailText");


for(let i = 0; i<myThumbnails.length; i++)
{
    imgTags[i].src = imgData[i];
    thumbTexts[i].textContent = imgName[i]

    myThumbnails[i].addEventListener('mouseover', overFn);
    myThumbnails[i].addEventListener("mouseout",outFn);
}

function overFn(e)
{
    //console.log(e.composedPath()[1].querySelector(".imageTag"));
    e.composedPath()[1].querySelector(".main-imgTag").classList.add('on');
    e.composedPath()[0].classList.add('on');
}

function outFn(e)
{
    e.composedPath()[1].querySelector(".main-imgTag").classList.remove('on');
    e.composedPath()[0].classList.remove('on');
}
    
    


