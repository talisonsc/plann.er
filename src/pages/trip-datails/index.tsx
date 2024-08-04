import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, UserCog, X } from "lucide-react"
import { useState } from "react"

export function TripDatailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  
  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto">
      <div className="px-4 h-16 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100 ">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100 texts">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 ">
            Altera local/data
            <Settings2 className="size-5 text-zinc-200" />
          </button>
        </div>
      </div>
      <main className="flex gap-16 py-10 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-2 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar Atividade
            </button>
          </div>
          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-400">Sabado</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-400">Domingo</span>
              </div>
              <div className="px-4 py-1.5 rounded-xl bg-zinc-900 shadow-shape gap-3 flex items-center">
                <CircleCheck className="text-lime-300 size-5" />
                <span className="text-zinc-100">Corrida de Kart</span>
                <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
              </div>
              <div className="px-4 py-1.5 rounded-xl bg-zinc-900 shadow-shape gap-3 flex items-center">
                <CircleCheck className="text-lime-300 size-5" />
                <span className="text-zinc-100">Academia em grupo</span>
                <span className="text-zinc-400 text-sm ml-auto">18:00h</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-xl text-zinc-50 font-semibold">
              Links importantes
            </h2>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block text-zinc-100">Reserva do AirBnB</span>
                <a
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-100"
                  href="#"
                >
                  https://www.airbnb.com.br/rooms/104700011aaassasafsafasfsafa
                </a>
              </div>
              <Link2 className="size-5 shrink-0 text-zinc-400" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block text-zinc-100">Regras da casa</span>
                <a
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-100"
                  href="#"
                >
                  https://www.airbnb.com.br/rooms/104700011aaassasafsafasfsafa
                </a>
              </div>
              <Link2 className="size-5 shrink-0 text-zinc-400" />
            </div>
            <button className="w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 ">
              <Plus className="size-5 text-zinc-200" />
              Cadastrar novo link
            </button>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="space-y-6">
            <h2 className="text-xl text-zinc-50 font-semibold">Convidados</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                  <span className="text-zinc-100 block">Jessica White</span>
                  <span className="text-zinc-400 text-sm block">
                    jessica.white44@yahoo.com
                  </span>
                </div>
                <CircleDashed className="size-5 text-zinc-400" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                  <span className="text-zinc-100 block">Dr. Rita Pacocha</span>
                  <span className="text-zinc-400 text-sm block">
                    lacy.stiedemann@gmail.com
                  </span>
                </div>
                <CircleDashed className="size-5 text-zinc-400" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                  <span className="text-zinc-100 block">
                    Wilfred Dickens III
                  </span>
                  <span className="text-zinc-400 text-sm block">
                    marian.hyatt@hotmail.com
                  </span>
                </div>
                <CircleCheck className="size-5 text-lime-300" />
              </div>
            </div>
            <button className="w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 ">
              <UserCog className="size-5 text-zinc-200" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
      {isCreateActivityModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 text-zinc-400 w-[640px] shadow-shape rounded-xl px-5 py-5 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button type="button" onClick={closeCreateActivityModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Todos convidados podem visualizar as atividades.
              </p>
            </div>
            <form className="space-y-3">
              <div className="h-14 bg-zinc-950 border-zinc-800 rounded-lg flex items-center px-2 flex-1 gap-2">
                <Tag className="size-5 text-zinc-400" />
                <input
                  type="text"
                  name="text"
                  placeholder="Qual a atividade?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <div className="h-14 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 px-2 flex-1 ">
                <Calendar className="size-5 text-zinc-400" />
                <input
                  type="datetime-local"
                  name="occours_at"
                  placeholder="Data e horario da atividade"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <button
                type="submit"
                className=" w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 "
              >
                Salvar atividade
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
