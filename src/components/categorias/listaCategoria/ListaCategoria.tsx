/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { buscar } from '../../../services/Service';
import Categoria from '../../../model/Categoria';
import CardCategoria from '../cardCategoria/CardCategoria';

function ListaCategoria() {
  const [categorias, setCategoria] = useState<Categoria[]>([]);

  async function buscarCategoria() {
    try {
      await buscar('/categorias', setCategoria);
    } catch (error: any) {
      if (error.toString().includes('400')) {
        alert('Falha de acesso')
      }
    }
  }

  useEffect(() => {
    buscarCategoria();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
