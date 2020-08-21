import { createStore, combineReducers, applyMiddleware } from 'redux'
import { tabbarReducer } from './Reducers/tabbarReducer';
import { listReducer } from './Reducers/listReducer';
import reduxPromise from 'redux-promise';

/** isTabbar isList 为 store 中的状态
 * isTabbar: Store中定义的状态 在注册回调函数中，通过 store.getState().isTabbar 获取
 * isList: Store中定义的状态 在注册回调函数中，通过 store.getState().isList 获取
 */
const reducer = combineReducers({
  isTabbar: tabbarReducer,
  isList: listReducer
})
const store = createStore(reducer, applyMiddleware(reduxPromise));

export default store;