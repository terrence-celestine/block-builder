import { useEffect } from 'react'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import './App.css'
import { Canvas } from "./components/Canvas"
import { usePageStore } from './store/usePageStore'
import { PropertiesPanel } from './components/PropertiesPanel'
import { BlockSidebar } from './components/BlockSidebar'
import { Header } from './components/Header'

function App() {
  const reorderBlocks = usePageStore((state) => state.reorderBlocks);
  const undo = usePageStore((state) => state.undo);
  const redo = usePageStore((state) => state.redo);
  const selectedId = usePageStore((state) => state.selectedId);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
      const cmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;

      if (cmdOrCtrl && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        if (event.shiftKey) {
          redo();
        } else {
          undo();
        }
      } else if (cmdOrCtrl && event.key.toLowerCase() === 'y') {
        event.preventDefault();
        redo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [undo, redo]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderBlocks(active.id as string, over.id as string);
    }
  }
  
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <div className="w-64 border-r">     
          <BlockSidebar /> 
        </div>
        <div className="flex-1 overflow-y-auto">      
          <DndContext onDragEnd={handleDragEnd}>
              <Canvas />
          </DndContext> </div>
        {selectedId && <div className="w-80 border-l"> <PropertiesPanel /> </div>}
      </div>
      </>
  )
}

export default App
