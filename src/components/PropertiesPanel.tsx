import { Trash2 } from 'lucide-react';
import { usePageStore } from '../store/usePageStore';
import { ComponentRegistry } from '../registry';

export const PropertiesPanel = () => {
  const { blocks, selectedId, updateBlockProps, removeBlock } = usePageStore();
  const block = blocks.find((b) => b.id === selectedId);

  if (!block) {
    return <div className="p-4 text-gray-500 italic">Select a block to edit settings</div>;
  }

  const { schema } = ComponentRegistry[block.type as keyof typeof ComponentRegistry];

  return (
    <div className="flex flex-col h-full p-4 border-l bg-gray-50">
        <div className="flex flex-col h-full border-l bg-white border-l-slate-200">
        {/* Header Section */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">
            {block.type} Settings
            </h2>
        </div>
        
        {Object.entries(schema).map(([propName, type]) => (
          <div key={propName} className="mb-4">
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
              {propName}
            </label>
            
            {type === 'text' && (
              <input 
                className="w-full border rounded p-2 text-sm"
                value={block.props[propName] || ''}
                onChange={(e) => updateBlockProps(block.id, { [propName]: e.target.value })}
              />
            )}

            {type === 'number' && (
              <input 
                type="number"
                className="w-full border rounded p-2 text-sm"
                value={block.props[propName] || 0}
                onChange={(e) => updateBlockProps(block.id, { [propName]: Number(e.target.value) })}
              />
            )}

            {type === 'boolean' && (
              <input 
                type="checkbox"
                className="h-4 w-4"
                checked={!!block.props[propName]}
                onChange={(e) => updateBlockProps(block.id, { [propName]: e.target.checked })}
              />
            )}

            {type === 'select' && (
              <select 
                className="w-full border rounded p-2 text-sm"
                value={block.props[propName]}
                onChange={(e) => updateBlockProps(block.id, { [propName]: e.target.value })}
              >
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
              </select>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => removeBlock(block.id)}
        className="mt-6 flex items-center justify-center gap-2 w-full p-2 bg-red-50 text-red-600 border border-red-200 rounded hover:bg-red-100 transition-colors cursor-pointer"
      >
        <Trash2 size={16} />
        Delete Block
      </button>
    </div>
  );
};