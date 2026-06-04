import { usePageStore } from "../store/usePageStore";

export const PropertiesPanel = () => {
    const { blocks, selectedId, updateBlockProps } = usePageStore();
    const selectedBlock = blocks.find((b) => b.id === selectedId);
  
    if (!selectedBlock) return <div className="p-4">Select a block to edit</div>;
  
    return (
      <div className="w-80 border-l p-4">
        <h2 className="font-bold mb-4">Edit {selectedBlock.type}</h2>
        {selectedBlock.type === 'hero' && (
            <>
            <label htmlFor="image">Image</label>
            <input 
                id="image"
                value={selectedBlock.props.image}
                onChange={(e) => updateBlockProps(selectedBlock.id, { image: e.target.value })}
                className="border p-2 w-full"
            />
          </>
        )}
        {/* Example for a Text Block */}
        {selectedBlock.type === 'text' && (
          <input 
            value={selectedBlock.props.content}
            onChange={(e) => updateBlockProps(selectedBlock.id, { content: e.target.value })}
            className="border p-2 w-full"
          />
        )}
      </div>
    );
  };