export interface AppContextModel {
  lightModeOn?: boolean
  toggleLightModeOn?: () => void
  queryParam?: {}
  setQueryParam?: (queryParam: {}) => void
}
