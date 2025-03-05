import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// function ImageBox({ imgSrc }) {
//   const boxRef = useRef(null);
//   return (
//     <div>
//       <div className='box-container'>
//         <div ref={boxRef} className="box" style={{width: '150px', height: '150px', marginBlock: '50px '}}>
//           <img src={imgSrc} style={{width: '100%', height: '100%'}} />
//         </div>
//       </div>
//     </div>
//   );
// }

function App() {

  const imageSources = [
    "https://th.bing.com/th/id/R.388a295524209dce7d4bcc4d44e1ed97?rik=zR1t0wGUX%2bn6bg&riu=http%3a%2f%2fwww.missionmission.org%2fwp-content%2fuploads%2f2014%2f02%2fcupcake.jpg&ehk=k%2f0X6uOfQLTtf7S4tpZ6fXol6aTahwOpXXn2eCHnlyg%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.ce9a5abd998e51fbe87d1308d8c77cdf?rik=T16rYnFnQv2kJA&riu=http%3a%2f%2fwww.yourcupofcake.com%2fwp-content%2fuploads%2f2012%2f03%2fPink-Confetti.jpg&ehk=4GleROE7KwEUeyhKam%2btizTCOO1ZN4AyLzTVfn5G048%3d&risl=&pid=ImgRaw&r=0",
    "https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg",
    "https://th.bing.com/th/id/OIP.Jx1EP214SsFaNM5tNmgyjAHaHa?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.2odbmslqbAwDbfyN77mukgHaHa?rs=1&pid=ImgDetMain",
  ];


  // pakai useGSAP jangan useEffect
  useGSAP(() => {
    // cara ini bisa di pakai jika hanya untuk melakukan satu animasi
    // gsap.to(
    //   '.box',
    //   {
    //     scrollTrigger: {
    //       trigger: '.container2',
    //       start: 'top top',
    //       end: '100%',
    //       scrub: true,
    //       markers: true,
    //       pin: true,
    //       toggleActions: 'play none none reverse',
    //       anticipatePin: true
    //     },
    //   }
    // )

    // Cara di bawah jika ingin melakukan animasi pada beberapa box

    const timelineAnimation = gsap.timeline()
      .to('.container2 .box-1', {x: 200, duration: 1}, '>')
      .to('.container2 .box-1', {y: 200, duration: 1}, '>')
      .to('.container2 .box-2', {y: -200, duration: 1}, '>')
      .to('.container2 .box-1', {x: 0, duration: 1}, '>')
      .to('.container2 .box-3', {x: 200, duration: 1}, '>')
      .to('.container2 .box-1', {y: 400, duration: 1}, '>')
      .to('.container2 .box-3', {y: -200, duration: 1}, '>')
      .to('.container2 .box-3', {x: 0, duration: 1}, '>')
      .to('.container2 .box-1', {x: 200, duration: 1}, '>')
      .to('.container2 .box-1', {y: 600, duration: 1}, '>')
      .to('.container2 .box-4', {y: -200, duration: 1}, '>')
      .to('.container2 .box-1', {x: 0, duration: 1}, '>')

    ScrollTrigger.create({
      trigger: '.container2',
      start: 'top top',
      end: '200%',
      scrub: true,
      markers: true,
      pin: true,
      toggleActions: 'play none none reverse',
      anticipatePin: true,
      animation: timelineAnimation
    })

  }, []);


  // lebih baik menggunakan cara ini jika ingin membuat function untuk render content, jika masih satu document yang sama
  function renderImages() {
    const content = []
      for(const [index, imgSrc] of Object.entries(imageSources)) {
        const boxNumber = Number(index) + 1

        content.push(
          <div className={"box box-" + boxNumber} style={{width: '150px', height: '150px', marginBlock: '50px', transition: 'all 0.2s ease'}}>
             <img src={imgSrc} style={{width: '100%', height: '100%'}}/>
          </div>
        )
      }

    return content
  }

  return (
    <div className='container' style={{height: '400vh', width: '100vw'}}>
      <div className='container1' style={{height: '50vh'}}></div>
      <div className='container2' style={{height: '100vh'}}>
        {renderImages()}
        {/*{imageSources.map((src, index) => (*/}
        {/*  <ImageBox imgSrc={src} index={index} key={index} />*/}
        {/*))}*/}
      </div>
    </div>
  )
}

export default App;
