// src/components/Header/SaveButton.tsx
import { useState } from 'react';
import { Download, Check } from 'lucide-react';
import { usePageStore } from '../store/usePageStore';

export const SaveButton = () => {
  const [isSaved, setIsSaved] = useState(false);
  const { blocks } = usePageStore();

  const handleSave = () => {
    // Serialization logic
    const data = JSON.stringify(blocks, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `my-page-${new Date().getTime()}.json`;
    document.body.appendChild(link);
    link.click();
    
    // UI feedback
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleSave}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
        isSaved ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      {isSaved ? (
        <>
          <Check size={16} /> Saved!
        </>
      ) : (
        <>
          <Download size={16} /> Export JSON
        </>
      )}
    </button>
  );
};