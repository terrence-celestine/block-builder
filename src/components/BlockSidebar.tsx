import { ComponentRegistry } from '../registry';
import { usePageStore } from '../store/usePageStore';

export const BlockSidebar = () => {
  const addBlock = usePageStore((state) => state.addBlock);

  return (
    <div className="w-64 p-4 border-r">
      <h3 className="text-sm font-semibold mb-4 text-gray-500">Available Blocks</h3>
      <div className="space-y-2">
        {Object.entries(ComponentRegistry).map(([key, item]) => {
            const Icon = item.icon;
            return (
                <button
                key={key}
                onClick={() => addBlock(key)}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
                <Icon size={20} />
                <span className="capitalize">{key}</span>
            </button>
            )
        })}
      </div>
    </div>
  );
};