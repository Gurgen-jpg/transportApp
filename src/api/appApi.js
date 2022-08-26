import axios from "axios";
import {ROUTING} from "../contants";



const instance = axios.create({
    baseURL: `http://localhost:3001/`,
})

const {ORDERS, CITIES} = ROUTING

export const appApi = {
    getCities() {
        return instance
            .get(CITIES)
            .then((response)=>{
                return response.data
            })
    },
    getOrders() {
        return instance
            .get(ORDERS)
            .then((response) => {
                return response.data
            })
    },
    addOrder(newOrder) {
      return instance
          .post(ORDERS, newOrder)
          .then((response)=>{
              return response.data
          })
    },
    delOrder(id){
        return instance
            .delete(ORDERS + `/${id}`)

    },
    editOrder(id, newOrder){
        return instance.put(ORDERS + `/${id}`, newOrder)
    }
}