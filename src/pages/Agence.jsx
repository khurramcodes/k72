import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_640X960_2-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 22%",
        end: "top -114%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * (imagesArray.length - 1));

          imageRef.current.src = imagesArray[imageIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className='section1'>
        <div
          ref={imageDivRef}
          className='absolute top-50 left-[30vw] overflow-hidden h-[20vw] w-[15vw] rounded-3xl bg-amber-500'>
          <img
            ref={imageRef}
            className='w-full h-full object-cover'
            src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'
            alt=''
          />
        </div>
        <div className='relative font-[LausanneBold]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17.5vw]'>
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-6xl'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité
              nourrit notre créativité. On reste humbles et on dit non aux gros
              egos, même le vôtre. Une marque est vivante. Elle a des valeurs,
              une personnalité, une histoire. Si on oublie ça, on peut faire de
              bons chiffres à court terme, mais on la tue à long terme. C’est
              pour ça qu’on s’engage à donner de la perspective, pour bâtir des
              marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'></div>
    </div>
  );
};

export default Agence;
