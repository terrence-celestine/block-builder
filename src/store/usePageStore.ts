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
  past: Block[][];
  future: Block[][];
  addBlock: (type: string) => void;
  updateBlockProps: (id: string, newProps: Record<string, any>) => void;
  setSelectedId: (id: string | null) => void;
  setBlocks: (blocks: Block[]) => void;
  reorderBlocks: (activeId: string, overId: string) => void;
  removeBlock: (id: string) => void;
  undo: () => void;
  redo: () => void;
}

const DEFAULT_PROPS = {
    hero: { title: 'New Hero', image: 'https://placehold.co/600x400' },
    text: { content: 'New text block...' },
    columns: { leftContent: 'Left column content...', rightContent: 'Right column content...' },
    image: { src: 'https://placehold.co/600x400', alt: 'Placeholder Image' },
    button: { label: 'Click Me', url: '#', variant: 'solid' },
    divider: { thickness: 1, color: '#cccccc', margin: 16 },
    spacer: { height: 32 },
    quote: { quote: 'Design is not just what it looks like and feels like. Design is how it works.', author: 'Steve Jobs' },
    video: { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    list: { items: 'Item 1\nItem 2\nItem 3', ordered: false },
  };

export const usePageStore = create<PageStore>((set) => ({
  blocks: [],
  selectedId: null,
  past: [],
  future: [],
  addBlock: (type) => set((state) => ({ 
    past: [...state.past, state.blocks],
    future: [],
    blocks: [...state.blocks, { id: crypto.randomUUID(), type, props: DEFAULT_PROPS[type as keyof typeof DEFAULT_PROPS] || {} }] 
  })),
  updateBlockProps: (id, newProps) => set((state) => {
    const updatedBlocks = state.blocks.map(b => b.id === id ? { ...b, props: { ...b.props, ...newProps } } : b);
    return {
      past: [...state.past, state.blocks],
      future: [],
      blocks: updatedBlocks
    };
  }),
  setSelectedId: (id) => set({ selectedId: id }),
  setBlocks: (blocks) => set((state) => ({
    past: [...state.past, state.blocks],
    future: [],
    blocks
  })),
  reorderBlocks: (activeId, overId) => set((state) => {
    const oldIndex = state.blocks.findIndex((b) => b.id === activeId);
    const newIndex = state.blocks.findIndex((b) => b.id === overId);
    const reorderedBlocks = arrayMove(state.blocks, oldIndex, newIndex);
    return {
      past: [...state.past, state.blocks],
      future: [],
      blocks: reorderedBlocks
    };
  }),
  removeBlock: (id) => set((state) => ({
    past: [...state.past, state.blocks],
    future: [],
    blocks: state.blocks.filter((b) => b.id !== id),
    selectedId: state.selectedId === id ? null : state.selectedId
  })),
  undo: () => set((state) => {
    if (state.past.length === 0) return {};
    const previous = state.past[state.past.length - 1];
    const newPast = state.past.slice(0, state.past.length - 1);
    return {
      past: newPast,
      future: [state.blocks, ...state.future],
      blocks: previous,
      // Clear selected ID if it doesn't exist in the undone state anymore
      selectedId: state.selectedId && previous.some(b => b.id === state.selectedId) ? state.selectedId : null
    };
  }),
  redo: () => set((state) => {
    if (state.future.length === 0) return {};
    const next = state.future[0];
    const newFuture = state.future.slice(1);
    return {
      past: [...state.past, state.blocks],
      future: newFuture,
      blocks: next,
      // Clear selected ID if it doesn't exist in the redone state anymore
      selectedId: state.selectedId && next.some(b => b.id === state.selectedId) ? state.selectedId : null
    };
  })
}));