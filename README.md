# Page Builder MVP

A high-performance, schema-driven page builder engine built with React, Tailwind CSS, and Zustand. This application allows users to assemble web pages using a modular, registry-based component system.

## 🚀 Architecture Highlights

- **Registry Pattern:** Centralized component management in `registry.ts` allows for instant addition of new content blocks.
- **Schema-Driven UI:** The `PropertiesPanel` automatically generates form inputs based on block schemas, eliminating the need for hardcoded property editors.
- **State Management:** Built on `Zustand` for performant, predictable state updates across the canvas and sidebar.
- **Data-Driven:** The entire page state is serializable to JSON, enabling full Import/Export functionality.

## 🛠 Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Icons:** Lucide React

## 🏗 Project Structure

```text
src/
├── components/
│   ├── blocks/       # Individual component definitions (Hero, Button, etc.)
│   ├── Header/       # Global actions (Save/Load)
│   └── Properties/   # Dynamic properties panel
├── store/
│   └── usePageStore.ts # Central state management
└── registry.ts       # Component registration and schema definitions
```
