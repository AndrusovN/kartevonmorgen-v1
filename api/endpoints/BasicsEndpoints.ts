// todo: should eliminate self_api because it causes troubles with the hosting domain
// todo: use SWR instead
export const BASICS_API_URL: string = process.env.NEXT_PUBLIC_BASICS_API
export const SELF_API_URL: string = process.env.NEXT_PUBLIC_SELF_API


export const BASICS_ENDPOINTS = {
  getMapPageConfigs: (project: string): string => `${SELF_API_URL}/maps/${project}/config`,
  getBurgerMenuLinks: (project: string): string => `${SELF_API_URL}/maps/${project}/config/burger-menu`,
  getPopularTags: (): string => `${SELF_API_URL}/entries/most-popular-tags`,
  searchEntries: (): string => `${BASICS_API_URL}/search`,
  searchEvents: (): string => `${BASICS_API_URL}/events`,
  getEntries: (): string => `${BASICS_API_URL}/entries`,
  getRatings: (): string => `${BASICS_API_URL}/ratings`,
  getEvent: (): string => `${BASICS_API_URL}/events`,
  postEvent: (): string => `${BASICS_API_URL}/events`,
  postEntries: (): string => `${BASICS_API_URL}/entries`,
  getCategories: (group: string): string => `${SELF_API_URL}/dropdowns/${group}/categories`,
  getRegions: (group: string): string => `${SELF_API_URL}/dropdowns/${group}/regions`,
  postEntryRating: (): string => `${BASICS_API_URL}/ratings`,
  getTags: (): string => `${SELF_API_URL}/tags`,
  postSubscribe: (): string => `${BASICS_API_URL}/subscribe`,

  co_map: {
    getAmbassadorCommunityParams: (): string => `${SELF_API_URL}/co-map/ambassador_community`,
    postAmbassadorAssignment: (): string => `${SELF_API_URL}/co-map/ambassador_application`,
    getAmbassadorCard: (): string => `${SELF_API_URL}/co-map/ambassador-card`,
    getCollaborators: (): string => `${SELF_API_URL}/co-map/collaborators`
  }
}
