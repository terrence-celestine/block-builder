import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import './App.css'
import { Canvas } from "./components/Canvas"
import { usePageStore } from './store/usePageStore'
import { PropertiesPanel } from './components/PropertiesPanel'
import { BlockSidebar } from './components/BlockSidebar'

function App() {
  const reorderBlocks = usePageStore((state) => state.reorderBlocks);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderBlocks(active.id as string, over.id as string);
    }
  }
  
  return (
      <div className="flex h-screen">
        <div className="w-64 border-r">     
          <BlockSidebar /> 
        </div>
        <div className="flex-1 overflow-y-auto">      
          <DndContext onDragEnd={handleDragEnd}>
              <Canvas />
          </DndContext> </div>
        <div className="w-80 border-l"> <PropertiesPanel /> </div>
      </div>
  )
}

export default App
