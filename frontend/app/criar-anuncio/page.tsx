"use client"

import { useState } from "react"

export default function CriarAnuncio() {
 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const [price, setPrice] = useState("")
 const [sellerId, setSellerId] = useState("")
 const [categoryId, setCategoryId] = useState("")

 async function handleSubmit(event: React.FormEvent) {
  event.preventDefault()

  const response = await fetch("http://localhost:3001/produtos", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    title,
    description,
    priceInCents: Number(price) * 100,
    sellerId,
    categoryId,
   }),
  })

  if (!response.ok) {
   alert("Erro ao criar anúncio")
   return
  }

  alert("Anúncio criado com sucesso!")

  setTitle("")
  setDescription("")
  setPrice("")
  setSellerId("")
  setCategoryId("")
 }

 return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
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
            href="/anuncios"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Ver anúncios
          </a>
        </div>
      </header>

      {/* Conteúdo */}
      <section className="max-w-2xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl shadow-sm border p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Criar anúncio
            </h2>

            <p className="text-gray-500 mt-2">
              Publique um produto para os moradores do seu bairro.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Título */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>

              <input
                placeholder="Ex: iPhone 13"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-lg border text-black border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>

              <textarea
                placeholder="Descreva o produto..."
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                rows={4}
                className="w-full rounded-lg border text-black border-gray-300 px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Preço */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço
              </label>

              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">
                  R$
                </span>

                <input
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  value={price}
                  onChange={(event) =>
                    setPrice(event.target.value)
                  }
                  className="w-full rounded-lg border text-black border-gray-300 pl-12 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Vendedor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vendedor
              </label>

              <input
                placeholder="ID do vendedor"
                value={sellerId}
                onChange={(event) =>
                  setSellerId(event.target.value)
                }
                className="w-full rounded-lg border text-black border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Categoria */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>

              <input
                placeholder="Ex: Eletrônicos"
                value={categoryId}
                onChange={(event) =>
                  setCategoryId(event.target.value)
                }
                className="w-full rounded-lg border text-black border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Publicar anúncio
            </button>

          </form>
        </div>
      </section>
    </main>
  )
}