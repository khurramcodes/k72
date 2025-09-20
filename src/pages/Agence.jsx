import React from "react";

const Agence = () => {
  return (
    <div>
      <div className='section1'>
        <div className='absolute top-50 left-[30vw] overflow-hidden h-[20vw] w-[15vw] rounded-3xl bg-amber-500'>
          <img
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
