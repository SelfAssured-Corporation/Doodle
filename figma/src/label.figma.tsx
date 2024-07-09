import figma from '@figma/code-connect'
import { Label } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9225-4221&m=dev'

const imports = ["import { Label } from '@cerberus/react'"]

const props = {
  // Figma specific
  state: figma.enum('State', {
    required: 'required',
    optional: 'optional',
    disabled: 'disabled',
    hidden: 'hidden',
  }),
  text: figma.textContent('text'),
}

figma.connect(Label, SELECTION, {
  imports,
  props,
  example: (props) => {
    return <Label htmlFor="ADD_INPUT_ID">{props.text}</Label>
  },
})

figma.connect(Label, SELECTION, {
  imports,
  variant: {
    State: 'hidden',
  },
  props,
  example: (props) => {
    return (
      <Label htmlFor="ADD_INPUT_ID" hidden>
        {props.text}
      </Label>
    )
  },
})
