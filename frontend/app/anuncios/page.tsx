"use client"

import { useEffect, useState } from "react"

interface Anuncio {
 data : {
     title: string
     description: string
     priceInCents: number
     sellerId: string
     categoryId: string
     status: string
 }
 
}

export default function Anuncios() {
 const [anuncios, setAnuncios] = useState<Anuncio[]>([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  async function buscarAnuncios() {
   const response = await fetch(
    "http://localhost:3001/produtos"
   )

   const data = await response.json()

    console.log("DATA:", data)
    console.log("PRIMEIRO:", data[0])
    console.log("PREÇO:", data[0]?.priceInCents)

   setAnuncios(data)
   setLoading(false)
  }

  buscarAnuncios()
 }, [])

 if (loading) {
  return (
   <main className="min-h-screen flex items-center justify-center">
    <p>Carregando anúncios...</p>
   </main>
  )
 }

 return (
  <main className="min-h-screen bg-gray-100">

   <header className="bg-white border-b">
    <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

     <div>
      <h1 className="text-2xl font-bold text-blue-600">
       VendeAí
      </h1>

      <p className="text-sm text-gray-500">
       O marketplace do seu bairro
      </p>
     </div>

     <a
      href="/criar-anuncio"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
     >
      Criar anúncio
     </a>

    </div>
   </header>

   <section className="max-w-6xl mx-auto px-6 py-10">

    <h2 className="text-3xl font-bold text-gray-900 mb-8">
     Anúncios
    </h2>

    {anuncios.length === 0 ? (
     <p className="text-gray-500">
      Nenhum anúncio encontrado.
     </p>
    ) : (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {anuncios.map((anuncio, index) => (

       <div
        key={index}
        className="bg-white rounded-2xl shadow-sm border p-6"
       >

        <div className="mb-4">
         <span className="text-sm text-blue-600 font-medium">
          {anuncio.data.categoryId}
         </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900">
         {anuncio.data.title}
        </h3>

        <p className="text-gray-600 mt-2">
         {anuncio.data.description}
        </p>

        <p className="text-2xl font-bold text-green-600 mt-5">
         R$ {(anuncio.data.priceInCents / 100).toFixed(2)}
        </p>

        <div className="border-t mt-5 pt-4 text-sm text-gray-500">
         Vendedor: {anuncio.data.sellerId}
        </div>

       </div>

      ))}

     </div>
    )}

   </section>

  </main>
 )
}