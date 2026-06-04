import { 
  Type, Image as ImageIcon, Columns, MousePointer, 
  Minus, ArrowDown, MessageSquare, Film, List 
} from 'lucide-react';

import Hero from './components/Hero';
import TextBlock from './components/TextBlock';
import TwoColumn from './components/TwoColumn';
import ImageBlock from './components/ImageBlock';
import ButtonBlock from './components/ButtonBlock';
import DividerBlock from './components/DividerBlock';
import SpacerBlock from './components/SpacerBlock';
import QuoteBlock from './components/QuoteBlock';
import VideoBlock from './components/VideoBlock';
import ListBlock from './components/ListBlock';

// registry.ts
export const ComponentRegistry = {
  hero: { 
    component: Hero, icon: ImageIcon, 
    schema: { title: 'text', subtext: 'text', imageSource: 'text' } 
  },
  text: { 
    component: TextBlock, icon: Type, 
    schema: { content: 'text' } 
  },
  columns: { 
    component: TwoColumn, icon: Columns, 
    schema: { leftContent: 'text', rightContent: 'text' } 
  },
  image: { 
    component: ImageBlock, icon: ImageIcon, 
    schema: { src: 'text', alt: 'text' } 
  },
  button: { 
    component: ButtonBlock, icon: MousePointer, 
    schema: { label: 'text', url: 'text', variant: 'select' } 
  },
  divider: { 
    component: DividerBlock, icon: Minus, 
    schema: { thickness: 'number', color: 'text', margin: 'number' } 
  },
  spacer: { 
    component: SpacerBlock, icon: ArrowDown, 
    schema: { height: 'number' } 
  },
  quote: { 
    component: QuoteBlock, icon: MessageSquare, 
    schema: { quote: 'text', author: 'text' } 
  },
  video: { 
    component: VideoBlock, icon: Film, 
    schema: { url: 'text' } 
  },
  list: { 
    component: ListBlock, icon: List, 
    schema: { items: 'text', ordered: 'boolean' } 
  },
};