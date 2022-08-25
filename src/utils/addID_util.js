import {uuid} from "./uuid";

const addID_util = (order) => {
 return {...order, id: uuid()}
}

export default addID_util;