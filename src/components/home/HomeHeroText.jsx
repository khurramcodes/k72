import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className='font-[LausanneLight] pt-5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[8.5vw]'>L'étincelle</div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center'>
        qui
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw]'>la créativité</div>
    </div>
  );
};

export default HomeHeroText;
