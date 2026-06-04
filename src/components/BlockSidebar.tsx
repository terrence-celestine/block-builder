import { ImageIcon } from 'lucide-react';
import { ComponentRegistry } from '../registry';
import { usePageStore } from '../store/usePageStore';
import { LandingPageTemplate } from '../const/Templates';

export const BlockSidebar = () => {
  const addBlock = usePageStore((state) => state.addBlock);
  const setBlocks = usePageStore((state) => state.setBlocks)

  return (
    <div className="w-64 p-4 border-r">
        <h3 className="text-sm font-semibold mb-4 text-gray-500">Templates</h3>
        <div className="space-y-2">
            <button className="group flex items-center gap-3 w-full px-3 py-2 rounded-md transition-all bg-slate-100 border border-transparent hover:border-slate-200 cursor-pointer" onClick={() => setBlocks(LandingPageTemplate)}>
                <ImageIcon size={20} className="group-hover:text-slate-500" />
                <span className="capitalize">Landing Page</span>
            </button>
        </div>
      <h3 className="text-sm font-semibold mb-4 text-gray-500">Available Blocks</h3>
      <div className="space-y-2">
        {Object.entries(ComponentRegistry).map(([key, item]) => {
            const Icon = item.icon;
            return (
                <button
                key={key}
                onClick={() => addBlock(key)}
                className="group flex items-center gap-3 w-full px-3 py-2 rounded-md transition-all bg-slate-100 border border-transparent hover:border-slate-200 cursor-pointer"
            >
                <Icon size={20} className="group-hover:text-slate-500" />
                <span className="capitalize">{key}</span>
            </button>
            )
        })}
      </div>
    </div>
  );
};