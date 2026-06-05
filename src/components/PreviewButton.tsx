// src/components/Header/PreviewButton.tsx
import { Eye, Edit2 } from 'lucide-react';
import { usePageStore } from '../store/usePageStore';

export const PreviewButton = () => {
  const { isPreview, togglePreview } = usePageStore();

  return (
    <button
      onClick={togglePreview}
      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
        isPreview ? 'bg-slate-800 text-white' : 'bg-white border text-slate-700 hover:bg-slate-50'
      }`}
    >
      {isPreview ? <Edit2 size={16} /> : <Eye size={16} />}
      {isPreview ? 'Back to Editor' : 'Preview'}
    </button>
  );
};