import axios from "axios";

export function getList() {
  return axios.get("/ajax/moreComingList?ci=1&token=&limit=10&movieIds=1238922%2C338059%2C1250729%2C1308485%2C1302381%2C1280654%2C1300676%2C345432%2C1297973%2C1215300&optimus_uuid=77804710E2CD11EA821F697A9E23ADA2AE942CA0A7924F2688852CCE0026FA30&optimus_risk_level=71&optimus_code=10").then(res => {
    return {
      type: "AddList",
      payload: res.data
    }
  })
}