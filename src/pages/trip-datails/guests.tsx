import { CircleDashed, CircleCheck, UserCog } from "lucide-react";

export function Guests(){
  return (
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
            <span className="text-zinc-100 block">Wilfred Dickens III</span>
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
  )
}