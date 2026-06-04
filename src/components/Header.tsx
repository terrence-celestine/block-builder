import { usePageStore } from '../store/usePageStore';
import { Undo, Redo } from 'lucide-react';
import { SaveButton } from './SaveButton';
import { ImportButton } from './ImportButton';

export const Header = () => {
  const { past, future, undo, redo } = usePageStore();

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="font-bold text-slate-800 tracking-tight">Builder v1.0</div>
        
        <div className="flex items-center gap-1 border-l pl-4">
          <button
            onClick={undo}
            disabled={!canUndo}
            className={`p-1.5 rounded hover:bg-slate-100 transition-colors ${
              canUndo ? 'text-slate-700 cursor-pointer' : 'text-slate-300 cursor-not-allowed'
            }`}
            title="Undo (Ctrl+Z)"
          >
            <Undo size={18} />
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className={`p-1.5 rounded hover:bg-slate-100 transition-colors ${
              canRedo ? 'text-slate-700 cursor-pointer' : 'text-slate-300 cursor-not-allowed'
            }`}
            title="Redo (Ctrl+Y)"
          >
            <Redo size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
         <Redo size={18}  onClick={redo} cursor={canRedo ? 'pointer' : 'not-allowed'}/>
          <Undo size={18}  onClick={undo} cursor={canUndo ? 'pointer' : 'not-allowed'}/>
          <ImportButton />
          <SaveButton />
      </div>
    </header>
  );
};