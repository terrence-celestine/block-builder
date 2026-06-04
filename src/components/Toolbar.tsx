import { usePageStore } from '../store/usePageStore';

export const Toolbar = () => {
  const addBlock = usePageStore((state) => state.addBlock);

  return (
    <div className="flex gap-4 p-4 border-b">
      <button onClick={() => addBlock('hero')} className="bg-blue-500 text-white p-2 rounded">
        Add Hero
      </button>
      <button onClick={() => addBlock('text')} className="bg-green-500 text-white p-2 rounded">
        Add Text
      </button>
    </div>
  );
};