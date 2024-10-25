import { cx } from '@cerberus/styled-system/css'
import { table } from '@cerberus/styled-system/recipes'
import type { PropsWithChildren, TableHTMLAttributes } from 'react'

/**
 * This module contains the table component.
 * @module
 */

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /**
   * An easy to understand description of the table. Required for accessibility.
   */
  caption: string
}

/**
 * An accessible table component.
 * @definition [ARIA Table pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
 * @see https://cerberus.digitalu.design/react/table.
 * @example
 * ```tsx
 * <Table caption="Basic Table">
 *  {children}
 * </Table>
 * ```
 */
export function Table(props: PropsWithChildren<TableProps>) {
  const { caption, children, ...nativeProps } = props
  const styles = table()

  return (
    <div className={styles.container}>
      <table
        {...nativeProps}
        className={cx(nativeProps.className, styles.table)}
      >
        <caption className={styles.caption}>{caption}</caption>
        {children}
      </table>
    </div>
  )
}

// We only provide this for consistency with the rest of the components

export type TrProps = TableHTMLAttributes<HTMLTableRowElement>

/**
 * The Tr component is used to render a table row.
 * @definition [Table docs](https://cerberus.digitalu.design/react/table)
 * @example
 * ```tsx
 * <Tr>
 *  {children}
 * </Tr>
 * ```
 */
export function Tr(props: PropsWithChildren<TrProps>) {
  return <tr {...props} />
}
