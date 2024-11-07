# Cerberus React

This is the React component library for Cerberus.

## Installation

```bash
pnpm add @doodleui/react
```

## Usage

```typescript
import { Button } from '@doodleui/react'

function BasicExample() {
  return (
    <form>
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

### Basic Customization

```typescript
import { Button } from '@doodleui/react'

function BasicExample() {
  return (
    <form>
      <Button palette="danger" usage="outline" type="button">Cancel</Button>
    </form>
  )
}
```

### Advanced Customization

You can use [Panda-CSS](https://panda-css.com/) to customize the styles of the components.

```typescript
import { Button } from '@doodleui/react'
import { css } from '../styled-system/css'

function CustomButton() {
  return (
    <Button
      className={css({
          backgroundColor: 'yellow',
          color: 'black',
          borderRadius: '0.5rem',
          '&:hover': {
            backgroundColor: 'black',
            color: 'yellow'
          },
        })}
    >
      Wu-Tang Forever
    </Button>
  )
}
```

---

_Copyright (c) 2024 Life Awesome Apps, All Rights Reserved_
