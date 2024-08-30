"use client"

import TexComet from "./texComet"
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const testimonials = [
    { comment: "Great service, very satisfied!", name: "Alice Johnson" },
    { comment: "Excellent support and reliable.", name: "Bob Smith" },
    { comment: "I highly recommend this to everyone.", name: "Charlie Brown" },
    { comment: "A wonderful experience, will return again.", name: "David Wilson" },
    { comment: "Professional and courteous staff.", name: "Emily Davis" },
    { comment: "Exceeded my expectations.", name: "Frank Miller" },
    { comment: "Prompt service and friendly atmosphere.", name: "Grace Lee" },
    { comment: "Top-notch quality and great value.", name: "Hannah White" },
    { comment: "Impressive attention to detail.", name: "Isaac Green" },
    { comment: "A truly remarkable service.", name: "Jack Brown" },
    { comment: "Wonderful experience from start to finish.", name: "Karen Taylor" },
    { comment: "Exceptional service and support.", name: "Larry Anderson" },
    { comment: "Very pleased with the outcome.", name: "Megan Hall" },
    { comment: "Professional and efficient.", name: "Nathan Young" },
    { comment: "Reliable and trustworthy service.", name: "Olivia Walker" },
    { comment: "Fantastic experience overall.", name: "Paul Adams" },
    { comment: "High-quality service at a great price.", name: "Quinn Robinson" },
    { comment: "Service was exactly what I needed.", name: "Rachel Clark" },
    { comment: "Friendly staff and excellent results.", name: "Samuel Lewis" },
    { comment: "A great value for the money.", name: "Tina Martinez" },
    { comment: "I will definitely be coming back.", name: "Ulysses Martinez" }
  ];
const Testimonal = () => {
const eig = useRef()
  
  
const scroll1 = useRef()
const scroll2 = useRef()
const [inicount, setinicount] = useState(1)
const [inicount2, setinicount2] = useState(4)
useEffect(() => {
    // scroll1.current.style.transform =  `translateX(-250px)`;
   let hh=  scroll1.current.scroll({
        left:254*inicount,
        behavior:'smooth'
    })
   let hhx=  scroll2.current.scroll({
        left:254*inicount2,
        behavior:'smooth'
    })

const ss = setInterval(() => {
   
   
    if (Number(inicount) >= 4){

        setinicount(0)
    }
    
    else{
        setinicount(inicount+1)
        
    }
    if (Number(inicount2) <= 0) {
        
        setinicount2(4)
    }else{
        setinicount2(inicount2-1)

    }
}, 1000);
  return () => {
   clearInterval(ss)
  }
}, [inicount,inicount2])


    return (
        <section ref={eig} className="w-full h-full flex flex-col items-center ">
<header className="text-[34px]">Testimonial </header>
<main ref={scroll1}  className="flex  hidbar w-full overflow-auto whitespace-break-spaces h-fit  flex-col">
    <div className="w-fit flex space-x-3">
    {testimonials?.map((e, id)=>   <TexComet key={id} data={e}/>)}

    </div>
   
</main>
<main ref={scroll2} className="flex hidbar w-full overflow-auto whitespace-break-spaces h-fit  flex-col">
    <div className="w-fit flex space-x-3 items-end">
  {testimonials?.map((e, id)=>   <TexComet key={id} data={e}/>)}


    </div>
   
</main>
        </section>
    )
}

export default Testimonal
