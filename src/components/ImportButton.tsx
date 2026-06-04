// src/components/Header/ImportButton.tsx
import { useRef } from 'react';
import { Upload } from 'lucide-react';
import { usePageStore } from '../store/usePageStore';

export const ImportButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setBlocks } = usePageStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        // Assuming your store has a 'setBlocks' action
        setBlocks(importedData);
      } catch (error) {
        alert("Failed to import: Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        accept=".json" 
        className="hidden" 
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
      >
        <Upload size={16} /> Import
      </button>
    </>
  );
};