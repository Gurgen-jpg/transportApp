export const cityObject_util = (city, name) => {
  return city.filter(el => el["Город"] === name)[0]
}