import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-BbbuE1sJ.js";const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=b(t[0])}},a=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");n.setAttribute("disabled","");let i;const o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},b=t=>{if(t-Date.now()<1e4)h.show({position:"topRight",messageColor:"white",iconUrl:"/goit-js-hw-10/src/img/icon-error.svg",backgroundColor:"#EF4040",message:"Please choose a date in the future"}),n.setAttribute("disabled","");else return n.removeAttribute("disabled"),t},f=()=>{const t=setInterval(()=>{const r=i-Date.now();if(r>0){n.setAttribute("disabled",""),a.setAttribute("disabled","");const e=p(r);console.log(o),o.days.textContent=s(e.days),o.hours.textContent=s(e.hours),o.minutes.textContent=s(e.minutes),o.seconds.textContent=s(e.seconds)}else g(t)},1e3)};function p(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:u,seconds:l}}const s=t=>String(t).padStart(2,"0"),g=t=>{clearInterval(t),a.removeAttribute("disabled")};m(a,y);n.addEventListener("click",f);
//# sourceMappingURL=1-timer.js.map
