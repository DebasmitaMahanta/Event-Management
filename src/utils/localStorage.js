// set to local storage
// Example
// setItem('token', 'abc123')
export const setItem = (key, value) => {
  try {
    const serializedValue =
      typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch (error) {
    console.error(`Error setting localStorage key “${key}”:`, error)
  }
}

/**
 * Get from local storage
 * @param {*} key
 * @param useges - getItem('token')
 * @returns item
 */

export const getItem = key => {
  try {
    const item = localStorage.getItem(key)
    if (!item) return null
    try {
      return JSON.parse(item) // if it's JSON
    } catch {
      return item // if it's a plain string
    }
  } catch (error) {
    console.error(`Error getting localStorage key “${key}”:`, error)
    return null
  }
}

/**
 * remove a item from local storage
 * Example - removeItem('token')
 * @param {*} key
 */
export const removeItem = key => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing localStorage key “${key}”:`, error)
  }
}

/**
 *  Remove all
 * Example clearAll()
 */
export const clearAll = () => {
  try {
    localStorage.clear()
  } catch (error) {
    console.error('Error clearing localStorage:', error)
  }
}
