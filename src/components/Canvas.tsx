import { usePageStore } from '../store/usePageStore';
import { ComponentRegistry } from '../registry';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggableBlock } from './DraggableBlock';

export const Canvas = () => {
  const { blocks, setSelectedId } = usePageStore();

  return (
    <div className="flex flex-col gap-4 p-8 border-gray-700 min-h-screen ">
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
                    className="cursor-pointer hover:ring-2 ring-blue-500"
                >
                    <Component {...block.props} />  
                </div>
           </DraggableBlock>
        );
      })}
      {!blocks.length && <div className="text-gray-500 text-center py-8">No blocks added yet. Add a block to get started.</div>}
    </SortableContext>
    </div>
  );
};