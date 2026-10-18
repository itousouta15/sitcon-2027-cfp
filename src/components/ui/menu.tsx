import { Menu as BaseMenu } from '@base-ui/react/menu'

import { cn, type WithClassName } from '@/lib/utils'

export const Menu = BaseMenu.Root
export const MenuTrigger = BaseMenu.Trigger

/**
 * The calendar menu's light surface pairs with its muted trigger and the
 * cream deadline card behind it.
 */
export function MenuContent({
  className,
  children,
  ...props
}: WithClassName<BaseMenu.Popup.Props>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        sideOffset={6}
        align="end"
        collisionPadding={20}
        className="z-20 outline-none"
      >
        <BaseMenu.Popup
          className={cn(
            'min-w-(--anchor-width) rounded-xl bg-light p-2.5 text-background transition-opacity duration-300 ease-smooth outline-none data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none',
            className,
          )}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

export function MenuLinkItem({
  className,
  ...props
}: WithClassName<BaseMenu.LinkItem.Props>) {
  return (
    <BaseMenu.LinkItem
      closeOnClick
      className={cn(
        'flex min-h-control cursor-pointer items-center rounded-xl px-5 py-2.5 text-paragraph font-bold transition-colors duration-300 ease-smooth select-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue data-highlighted:bg-foreground motion-reduce:transition-none',
        className,
      )}
      {...props}
    />
  )
}
