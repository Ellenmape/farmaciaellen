import React from 'react'
import Categoria from '../../../model/Categoria'
import { Link } from 'react-router-dom'

interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategoria({categoria}: CardCategoriaProps ) {
  return (
    <>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
            <div className='p-4 '>
                <h4 className='text-lg font-semibold uppercase flex justify-center'>{categoria.nome}</h4>
                <p className='flex justify-center'>{categoria.descricao}</p>
            </div>
            
      <div className="flex">
        <Link to={`/editarcategorias/${categoria.id}`} className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-500 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarcategorias/${categoria.id}`} className='text-slate-100 bg-indigo-600 hover:bg-indigo-600 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default CardCategoria