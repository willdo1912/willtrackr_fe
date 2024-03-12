import axios from 'axios'
import lodash from 'lodash'

export const camelize = (obj: object) =>
  lodash.transform(obj, (acc: any, value, key, target) => {
    const camelKey = lodash.isArray(target) ? key : lodash.camelCase(key)

    acc[camelKey] = lodash.isObject(value) ? camelize(value) : value
  })

export const snakelize = (obj: object) =>
  lodash.transform(obj, (acc: any, value, key, target) => {
    const camelKey = lodash.isArray(target) ? key : lodash.snakeCase(key)

    acc[camelKey] = lodash.isObject(value) ? snakelize(value) : value
  })

export const redirectTo = (path: string) => {
  window.location.href = `${import.meta.env.VITE_FE_PATH}${path}`
}

export const getCurrentUser = (setCurrentCustomer: (customer: any) => void) => {
  axios
    .get(`${import.meta.env.VITE_BE_PATH}/api/customer/${window.localStorage.getItem('id')}/`)
    .then(response => response.data)
    .then(data => {
      setCurrentCustomer(data)
      console.log(data)
    })
}

export const safeAccess = (obj: any, path: string, defaultValue: any = null) => {
  const keys = path.split('.')
  const result = keys.reduce((acc, key) => acc?.[key], obj)
  return result ?? defaultValue
}
