import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{f as v}from"./facultyList-DNBPsWaz.js";var o=document.querySelector(".ham"),g=document.querySelector(".link"),f=document.querySelector(".contain");function x(){let s="";v.forEach((e,t)=>{s+=`
   <div
            class="card w-[95vw] min-h-[60vh] md:h-[80vh] md:w-[28%] bg-[#3b3f6c] mt-8 md:mt-0 rounded-[3.15rem] relative z-10
            "
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
                class="relative w-[8rem] h-[8rem] mt-9 rounded-full p-[5px] bg-gradient-to-r from-[#ff7e5f] to-[#ff5f6d]"
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
                class="rating text-left text-xl w-full text-white font-bold pl-4 pt-2"
              >
                Rating:
              </p>
  
              <div class="mt-1 starts flex gap-3" data-id="${t}">
               <img src="/images/ratings/rating-${e.avgrating*10}.png" alt="" class="" />
              </div>
  
              <button class="reviewbtn btn md:py-[0.75rem] md:px-[0.98rem] mt-3" data-index="${t}">
                Review
              </button>
            </div>
          </div>   
          <div
            class="review_section hide fixed  mt-6  w-80 h-[27rem] md:w-[40vw] md:h-[29rem] bg-[#2D3A5A] border border-[#1F2A40] rounded-xl  z-40 p-4  transition-transform duration-300 ease-in-out  "
          >
            <div class="crros">
              <i
                class=" xmark fa-solid fa-xmark fa-2x absolute right-2 top-0 text-gray-200"
              ></i>
            </div>
  
            <p
              class="text-gray-200 font-serif leading-6 text-lg font-semibold mt-6 md:p-5"
            >
              <span class="text-blue-400">Evaluate</span> your faculty and provide
              insights for a better classroom experience.
            </p>
  
            <div
              class="skeleton_star mt-2 flex bg-gray-200 mx-4 py-2  md:mx-20 justify-center gap-2 md:gap-6 rounded-md"
            >
            <div class="star_1 relative">
              <img
              src="/images/sketon.png"
              alt=""
              srcset=""
              class="skleton-1 w-10"
            />
            <img src="/images/star.png" alt="" class="review_star1 w-10 absolute top-[0.001rem] hidden">
            </div>
              
            <div class="star_2 relative">
              <img
              src="/images/sketon.png"
              alt=""
              srcset=""
              class="skleton-1 w-10"
            />
            <img src="/images/star.png" alt="" class="review_star2 w-10 absolute top-[0.001rem] hidden">
            </div>
            <div class="star_3 relative">
              <img
              src="/images/sketon.png"
              alt=""
              srcset=""
              class="skleton-1 w-10"
            />
            <img src="/images/star.png" alt="" class="review_star3 w-10 absolute top-[0.001rem] hidden">
            </div>
            <div class="star_4 relative">
              <img
              src="/images/sketon.png"
              alt=""
              srcset=""
              class="skleton-1 w-10"
            />
            <img src="/images/star.png" alt="" class="review_star4 w-10 absolute top-[0.001rem] hidden">
            </div>
            <div class="star_5 relative">
              <img
              src="/images/sketon.png"
              alt=""
              srcset=""
              class="skleton-1 w-10"
            />
            <img src="/images/star.png" alt="" class="review_star5 w-10 absolute top-[0.001rem] hidden">
            </div>
              
            </div>
            <div
              class="review_in_text w-full text-center text-gray-200 font-semibold font-serif"
            >
         
            </div>
  
            <div class="comment_box">
              <p class="text-gray-200 font-serif">Comment(Optional):</p>
              <input
                type="text"
                name="comment"
                id="comment"
                placeholder="Comment if any"
                class="comment_input p-7 md:px-40 rounded-md z-10 relative"
              />
            </div>
            <p
              class="text-yellow-800 bg-yellow-100 border mr-2 mt-3 border-yellow-300 px-2 md:p-3 rounded-lg font-medium text-lg md:text-base"
            >
              <span class="text-red-600">**Notice:</span> Your identity will remain
              <strong>confidential</strong>.
            </p>
            <button type="submit" class=" submit btn mt-4 mx-auto block md:px-[0.98rem] md:py-[0.75rem]">Submit</button>
          </div>
  `}),f.innerHTML=s,p()}x();document.querySelectorAll(".reviewbtn");var i=document.querySelector(".review_section"),w=document.querySelector(".xmark"),b=document.querySelectorAll(".submit"),n=document.querySelector(".review_in_text"),y=document.querySelector(".comment_input");document.querySelectorAll(".starts ");p();var h=document.querySelectorAll(".skeleton_star .star_1, .skeleton_star .star_2, .skeleton_star .star_3, .skeleton_star .star_4, .skeleton_star .star_5"),u=document.querySelectorAll(".review_star1, .review_star2, .review_star3, .review_star4, .review_star5"),_=["Poor","Below average","Average","Very Good","Excellent"],d=["text-red-500","text-orange-500","text-yellow-500","text-green-300","text-green-600"];o.addEventListener("click",()=>{g.classList.toggle("translate-x-full"),g.classList.toggle("translate-x-0"),o.classList.toggle("fa-bars"),o.classList.toggle("fa-xmark"),o.classList.toggle("rotate-45")});function p(){document.querySelectorAll(".reviewbtn").forEach(e=>{e.addEventListener("click",t=>{const l=t.target.dataset.index;i.classList.remove("hide"),i.classList.add("show"),i.dataset.currentFacultyIndex=l})})}w.addEventListener("click",()=>{i.classList.add("hide")});var r=0;h.forEach((s,e)=>{s.addEventListener("click",()=>{r=e+1,console.log(r),k(r)})});function k(s){d.forEach(e=>{n.classList.remove(e)}),u.forEach((e,t)=>{t<s?e.classList.remove("hidden"):e.classList.add("hidden")}),n.innerHTML=_[s-1],n.classList.add(d[s-1])}b.forEach(s=>{s.addEventListener("click",()=>{const e=i.dataset.currentFacultyIndex,t=v[e];if(console.log(t),r<=0){alert("Please select a rating before submitting.");return}let l=0;if(r>0){let a=t.totalRating;console.log(`OLDtotalrating ${a}`),a=t.totalRating+=r,console.log(`newtotalrating ${t.totalRating}`),t.ratedBy+=1,console.log(`Ratedby ${t.ratedBy}`);let c=a/t.ratedBy;console.log(`newAvgRating ${c}`),l=(Math.round(c*2)/2).toFixed(1),console.log(`DisplayRating ${l}`),t.avgrating=c,console.log(`aVG of ratings for ${t.name}: ${t.avgrating}`)}const m=document.querySelector(`.starts[data-id="${e}"]`);m&&(m.innerHTML=`<img src="images/ratings/rating-${l*10}.png" alt="" class="" />`),i.classList.add("hide"),r=0,u.forEach(a=>a.classList.add("hidden")),n.innerHTML="",y.value="",d.forEach(a=>n.classList.remove(a))})});
