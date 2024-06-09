import { Board } from "@/components/server/board";

export default function Boards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Board board={{}} />
    </div>
  );
}
