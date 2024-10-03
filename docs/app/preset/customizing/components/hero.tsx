import { css, cx } from '@cerberus/styled-system/css'
import { cq, hstack, vstack } from '@cerberus/styled-system/patterns'
import Link from 'next/link'

interface HeroProps {
  heading: string
  subHeading: string
}

export default function Hero(props: HeroProps) {
  return (
    <div
      className={cx(
        cq(),
        vstack({
          bgColor: 'page.surface.100',
          justify: 'center',
          pxi: '4',
          py: '10rem',
          mb: 10,
          rounded: '4xl',
          w: 'full',
        }),
      )}
    >
      <h1
        className={css({
          fontSize: {
            '@/sm': 'display-xl',
            '@/xl': '7xl',
          },
          textStyle: 'display-lg',
          textWrap: 'pretty',
          wordBreak: 'break-word',
        })}
      >
        {props.heading}
      </h1>
      <p
        className={css({
          color: 'page.text.100',
          textStyle: 'body-2xl',
          maxW: '88ch',
        })}
      >
        {props.subHeading}
      </p>
    </div>
  )
}
