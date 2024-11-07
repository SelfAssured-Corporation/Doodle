# Icons

This is the official icon library for the Doodle Design System for React.

## Installation

```bash
pnpm add @doodleui/icons
```

## Usage

```typescript
import { Add } from '@doodleui/icons';
import { IconButton, createIconButtonProps } from '@doodleui/react';

// An optional helper to manage a11y for the IconButton
const iconBtnProps = createIconButtonProps({
  label: 'Add to order',
  palette: 'page',
  size: 'lg',
});

function App() {
  return (
    <IconButton {...iconBtnProps.btn}>
      <Add {...iconBtnProps.icon} />
    </IconButton>
  );
};
```

## Usage without the React library

```typescript
import { Add } from '@doodleui/icons';
import { iconButton } from '@doodleui/styled-system/recipes';

function App() {
  return (
    <button aria-label="Add to order" className={iconButton()}>
      <Add aria-hidden />
    </button>
  );
};
```

---

_Copyright (c) 2024 Life Awesome Apps, All Rights Reserved_
