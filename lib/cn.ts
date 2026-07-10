/** Tiny classname joiner — filters out falsy values and joins with spaces.
 *  Avoids pulling in clsx/classnames for such a small need. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
