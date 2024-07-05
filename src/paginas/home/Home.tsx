import React from 'react';
import homeLogo from '../../assets/home1.jpg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-indigo-200 flex justify-center">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vindo a Farmais!</h2>
              <p className='text-xl'>Saúde e bem estar em um só lugar!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-indigo-400 text-black font-bold py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;