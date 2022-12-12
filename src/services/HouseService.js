import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HouseService {
  async getHouses() {
    const res = await api.get('api/houses')
    logger.log(res.data)
    AppState.houses = res.data
  }

  async createHouse(houseData) {
    const res = await api.post('api/houses', houseData)
    logger.log('House created', res.data)
    AppState.houses.push(res.data)
  }

}
export const houseService = new HouseService()