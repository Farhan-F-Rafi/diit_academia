import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{f as r}from"./facultyList-DNBPsWaz.js";var t=document.querySelector(".ham"),s=document.querySelector(".link"),i=document.querySelector(".contain"),a=0;function o(){let l="";r.forEach(e=>{l+=`
 <div
        class="card w-[95vw] min-h-[55vh] md:h-[80vh] md:w-[28%] bg-[#3b3f6c] mt-1 rounded-[3.15rem] relative"
      >
        <div class="starlogo absolute left-5 top-4">
          <img
            src="/images/teacherofthemonth.png"
            alt="star"
            class="h-12 w-12"
          />
        </div>

        <div
          class="dpanddescription static flex flex-col justify-center items-center"
        >
          <div
            class="relative w-[8rem] h-[8rem] mt-9 rounded-full p-[5px] bg-gradient-to-r from-[#ff7e5f]   to-[#ff5f6d]"
          >
            <img
              src="${e.image}"
              class="w-full h-full rounded-full object-cover"
              alt="Profile Picture"
            />
          </div>

          <p class="name text-white text-4xl font-normal font-serif mt-2">
          ${e.name}
          </p>
          <p
            class="deptandcourse text-[#A79AE0] text-xl font-normal font-serif mt-2"
          >
          ${e.dept}
          </p>
          <p class="description text-white text-center mt-5">
          ${e.description}
          </p>
          <p
            class="rating text-left text-xl w-full text-white font-bold pl-4 pt-6"
          >
            Rating:
          </p>
        </div>
        <div class="ml-24 mt-3 starts flex gap-3">
          <img src="images/ratings/rating-${e.avgrating*10}.png" alt="" class="" />
        
        </div>
      </div>
      
`}),console.log(l),i.innerHTML=l}o();t.addEventListener("click",()=>{a==0?(s.classList.toggle("translate-x-full"),s.classList.toggle("translate-x-0"),t.classList.toggle("fa-bars"),t.classList.toggle("fa-xmark"),t.classList.add("rotate-45"),t.classList.remove("rotate-0"),a=1):a==1&&(s.classList.toggle("translate-x-0"),s.classList.toggle("translate-x-full"),t.classList.toggle("fa-bars"),t.classList.toggle("fa-xmark"),t.classList.add("rotate-0"),t.classList.remove("rotate-45"),a=0)});
