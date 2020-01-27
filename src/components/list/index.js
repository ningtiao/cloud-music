import React from 'react'
import { ListWrapper, ListItem, List } from './style'
import { getCount } from "../../api/utils";
function RemcommendList(props) {
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {
          props.recommendList.map((item,index) => {
            return (
              <ListItem key={item.id + index}>
                <div className='img_wrapper'>
                  <div className="decorate"></div>
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                    <div className="play_count">
                      <i className="iconfont play">&#xe885;</i>
                      <span className="count">{getCount(item.playCount)}</span>
                    </div>
                  </div>
                <div className='desc'>{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

export default React.memo (RemcommendList);
// function myInstanceof(left, right) {
//   if(typeof left != 'object' || left != null) return false
//   let proto = Object.getPrototypeOf(left)
//   while(true) {
//     if(proto == null) return false
//     if(proto == right.prototype) return false
//     proto = Object.getPrototypeOf(proto)
//   }
// }
// Array.prototype.map = function(callbackFn,thisArg) {
//   if(this == null || this == undefined) {
//     throw new TypeError('cannot read property "map" of null or undefined')
//   }

//   if(Object.prototype.toString.call(callbackFn) != '[object Function]') {
//     throw new TypeError(callbackFn + 'is not Function')
//   }

//   let O = Object(this)
//   let T = thisArg

//   let len = O.length >>> 0
//   let A = new Array(len)
//   for(let k =0;k<len;k++) {
//     if(k in O) {
//       let kValue = O[k]
//       let mappendValue = callbackFn.call(T, kValue, k, O);
//       A[k] = mappendValue
//     }
//   }
//   return A
//  }