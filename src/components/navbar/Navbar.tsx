import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-400 text-black flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmais</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Itens</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar