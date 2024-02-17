/**
 * Combines multiple class names into a single string.
 *
 * @param {...string} classes - The class names to combine.
 * @returns {string} The combined class names as a single string.
 */
const combineClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export default combineClassNames
