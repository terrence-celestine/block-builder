import { Type, Image as ImageIcon } from 'lucide-react';
import Hero from './components/Hero';
import TextBlock from './components/TextBlock';

export const ComponentRegistry = {
  hero: { component: Hero, icon: ImageIcon },
  text: { component: TextBlock, icon: Type }
};