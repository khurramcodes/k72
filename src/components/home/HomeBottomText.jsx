import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className='font-[LausanneBold] flex items-center justify-center gap-4 pb-3'>
      <div className='uppercase border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] duration-300 border-white rounded-full px-8 pt-7 pb-0 '>
        <Link to='/projects' className='text-[6vw] leading-[4.5vw]'>
          Projects
        </Link>
      </div>
      <div className=' uppercase border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] duration-300 border-white rounded-full px-8 pt-7 pb-0'>
        <Link to='/agence' className='text-[6vw] leading-[4.5vw]'>
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
