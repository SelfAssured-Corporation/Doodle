import { css } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import type { PropsWithChildren } from 'react'
import { MatchFeatureImg, type MatchFeatureKind } from './MatchFeatureImg'

export interface FeatureHeaderProps {
  heading: string
  description: string
  a11y: MatchFeatureKind
}

export default function FeatureHeader(
  props: PropsWithChildren<FeatureHeaderProps>,
) {
  return (
    <header
      className={css({
        containerType: 'inline-size',
        mb: '8',
        pxi: '4',
        md: {
          pxi: 'initial',
        },
      })}
    >
      <div
        className={css({
          display: {
            '@/lg': 'flex',
          },
          h: {
            '@/lg': '20rem',
          },
          gap: {
            '@/lg': '4',
          },
        })}
      >
        <section
          className={vstack({
            alignItems: 'flex-start',
            bgColor: 'page.surface.100',
            h: 'full',
            justify: 'center',
            pxi: {
              '@/sm': '4',
              '@/lg': '8',
            },
            pb: '4',
            pt: {
              '@/sm': '4',
              '@/lg': 'initial',
            },
            rounded: {
              '@/sm': 'xl',
              '@/lg': '1.5em',
            },
            w: {
              '@/lg': '66%',
            },
          })}
        >
          <h1
            className={css({
              fontSize: {
                '@/4xl': '4rem',
              },
              textStyle: {
                '@/sm': 'h1',
                '@/lg': 'display-lg',
              },
            })}
          >
            {props.heading}
          </h1>
          <p
            className={css({
              textStyle: {
                '@/lg': 'body-lg',
              },
              pb: '0',
            })}
          >
            {props.description}
          </p>
        </section>
        <section
          data-category={props.a11y}
          className={vstack({
            bgGradient: 'to-t',
            display: {
              '@/sm': 'none',
              '@/lg': 'flex',
            },
            h: 'full',
            justify: 'center',
            overflow: 'hidden',
            position: 'relative',
            pxi: '4',
            pb: '4',
            rounded: {
              '@/sm': 'xl',
              '@/lg': '1.5em',
            },
            w: {
              '@/lg': '33%',
            },
            '&:is([data-category=touch-target])': {
              cerberusGradient: 'dark-purple',
              color: 'page.surface.300',
              _lightMode: {
                cerbGradient: 'light-purple',
              },
            },
            '&:is([data-category=forms])': {
              cerberusGradient: 'light-blue',
              color: 'warning.text.initial',
            },
            '&:is([data-category=menus])': {
              cerberusGradient: 'green',
              color: 'success.text.200',
            },
            '&:is([data-category=utilities])': {
              cerberusGradient: 'yellow',
              color: 'warning.text.initial',
            },
          })}
        >
          <MatchFeatureImg kind={props.a11y} />
        </section>
      </div>
    </header>
  )
}
