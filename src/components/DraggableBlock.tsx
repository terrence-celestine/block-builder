import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface DraggableBlockProps {
  id: string;
  children: React.ReactNode;
}

export const DraggableBlock = ({ id, children }: DraggableBlockProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    // This is the "magic" that moves the component while dragging
    transform: CSS.Transform.toString(transform),
    transition,
    // Visual cue that we are currently moving this item
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded hover:shadow-sm relative p-4"
    >
        <div
            {...attributes}
            {...listeners}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-700 cursor-grab active:cursor-grabbing bg-gray-50 rounded border z-20"
            title="Drag to reorder"
        >
            <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 2a2 2 0 11-4 0 2 2 0 014 0zM7 8a2 2 0 11-4 0 2 2 0 014 0zM7 14a2 2 0 11-4 0 2 2 0 014 0zM17 2a2 2 0 11-4 0 2 2 0 014 0zM17 8a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </div>
      <div>
        {children}
      </div>
    </div>
  );
};