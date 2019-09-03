import { CITY_SET } from "../actionTypes";

const defaultState = {
  cityName: "xxx"
}
export default (state = defaultState, action) => {
  // 1 结构 value和type
  const { value, type } = action;
  // 2 深拷贝
  let newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case CITY_SET:
      newState.cityName = value;
      // console.log(newState);
      return newState;
    default:
      break;
  }


  return state
}