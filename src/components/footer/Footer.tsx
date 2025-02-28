import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 return (
    <>
        <div className="flex justify-center bg-indigo-400 text-black">
          <div className="container flex flex-col flex-grow items-center py-4">
            <p className='text-xl font-bold'>Farmacia Ellen - Generation| Copyright: 2024 </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer