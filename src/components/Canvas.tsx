import { usePageStore } from '../store/usePageStore';
import { ComponentRegistry } from '../registry';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggableBlock } from './DraggableBlock';

export const Canvas = () => {
  const { blocks, setSelectedId } = usePageStore();
  const addBlock = usePageStore((state) => state.addBlock);

  // Inside your Canvas component
const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('blockType');
    if (type) {
      addBlock(type); // Uses your existing store function
    }
  };

  return (
    <div 
        onDragOver={(e) => e.preventDefault()} // Required to allow dropping
        onDrop={handleDrop}
        className="min-h-[800px] border-2 border-dashed"
    >
    <div className="bg-slate-100 min-h-screen p-8">
  <div className="max-w-4xl mx-auto bg-white min-h-[800px] shadow-lg rounded-sm p-4">
    <SortableContext items={blocks.map((block) => block.id)} strategy={verticalListSortingStrategy}>
      {blocks.map((block) => {
        // Look up the component in the registry
        const registryItem = ComponentRegistry[block.type as keyof typeof ComponentRegistry];
        const Component = registryItem ? (registryItem.component as any) : null;
        
        if (!Component) return null;

        return (
            <DraggableBlock id={block.id}>
                <div 
                    key={block.id} 
                    onClick={() => setSelectedId(block.id)}
                    className="cursor-pointer"
                >
                    <Component {...block.props} />  
                </div>
           </DraggableBlock>
        );
      })}
      {!blocks.length && <div className="text-gray-500 text-center py-8">No blocks added yet. Add a block to get started.</div>}
    </SortableContext>
    </div>
    </div>
    </div>
  );
};