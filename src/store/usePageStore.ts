import { create } from 'zustand';
import {arrayMove} from '@dnd-kit/sortable';

interface Block {
  id: string;
  type: string;
  props: Record<string, any>;
}

interface PageStore {
  blocks: Block[];
  selectedId: string | null;
  addBlock: (type: string) => void;
  updateBlockProps: (id: string, newProps: Record<string, any>) => void;
  setSelectedId: (id: string | null) => void;
  reorderBlocks: (activeId: string, overId: string) => void;
  removeBlock: (id: string) => void;
}

const DEFAULT_PROPS = {
    hero: { title: 'New Hero', image: 'https://placehold.co/600x400' },
    text: { content: 'New text block...' },
  };

export const usePageStore = create<PageStore>((set) => ({
  blocks: [],
  selectedId: null,
  addBlock: (type) => set((state) => ({ 
    blocks: [...state.blocks, { id: crypto.randomUUID(), type, props: DEFAULT_PROPS[type as keyof typeof DEFAULT_PROPS] || {} }] 
  })),
  updateBlockProps: (id, newProps) => set((state) => ({
    blocks: state.blocks.map(b => b.id === id ? { ...b, props: { ...b.props, ...newProps } } : b)
  })),
  setSelectedId: (id) => set({ selectedId: id }),
  reorderBlocks: (activeId, overId) => set((state) => {
    const oldIndex = state.blocks.findIndex((b) => b.id === activeId);
    const newIndex = state.blocks.findIndex((b) => b.id === overId);
    return {
      blocks: arrayMove(state.blocks, oldIndex, newIndex),
    };
  }),
  // Inside the create store:
  removeBlock: (id) => set((state) => ({
    blocks: state.blocks.filter((b) => b.id !== id),
    // Reset selection if the deleted block was selected
    selectedId: state.selectedId === id ? null : state.selectedId
  }))
}));