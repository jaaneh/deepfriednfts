import * as React from 'react'
import clsx from 'clsx'

type Anchor = React.ComponentPropsWithoutRef<'a'>
type Button = React.ComponentPropsWithoutRef<'button'>

type IButton = {
  isActive?: boolean
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary'
} & (Anchor | Button)

const button_base =
  'px-4 py-2 btn border rounded-md bg-transparent shadow hover:shadow-lg'

const button_disabled =
  'bg-opacity-50 text-opacity-50 text-white border-none bg-red-800 cursor-not-allowed pointer-events-none'

const button_loading = 'loading'

const button_primary = 'border-yellow-400 text-white hover:bg-yellow-400 hover:text-black'
const button_primary_active = 'df-btn bg-df-blue text-white hover:bg-df-blue'

const button_secondary = 'border-white text-white hover:bg-gray-100 hover:text-black'
const button_secondary_active = 'bg-gray-100 text-black hover:bg-gray-100'

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  (
    {
      isActive,
      disabled,
      className,
      loading = false,
      fullWidth = false,
      variant = 'primary',
      ...props
    },
    ref
  ): JSX.Element => {
    const isPrimary = variant === 'primary'
    const isSecondary = variant === 'secondary'

    const classNames = clsx(className, {
      [button_base]: true,
      [button_disabled]: disabled,
      [button_loading]: loading,

      [button_primary]: isPrimary && !isActive,
      [button_primary_active]: isPrimary && isActive,

      [button_secondary]: isSecondary && !isActive,
      [button_secondary_active]: isSecondary && isActive,

      ['w-full']: fullWidth,
      ['w-max']: !fullWidth
    })

    if ('href' in props) {
      return <a {...props} rel='noopener' className={classNames} />
    } else {
      return <button {...(props as Button)} ref={ref} className={classNames} />
    }
  }
)

export default Button
