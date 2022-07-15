export function isObjectExist(objNames = [], data) {
  try {
    if (
      typeof data === 'object' &&
      data !== null &&
      Array.isArray(objNames) &&
      objNames.length > 0
    ) {
      for (const name of objNames) {
        if (name.trim() in data === false) {
          return false
        }
      }
      return true
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}
