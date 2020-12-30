import React, { useState } from 'react';
import Horizen from '../../baseUI/horizen-item/index';
import { categoryTypes, alphaTypes } from '../../api/config';
import Scroll from '../../baseUI/scroll';
import { connect } from 'react-redux';
import { 
  NavContainer,
  ListContainer,
  List,
  ListItem
} from "./style";
import {
  getSingerList,
  getHotSingerList,
  changeEnterLoading,
  changePageCount,
  changePullDownLoading,
  changePullUpLoading,
  refreshMoreSingerList,
  refreshMoreHotSingerList
} from './store/actionCreators';

function Singers(props) {
  let [category, setCategory] = useState('');
  let [alpha, setAlpha] = useState('');

  // const { singerList } = props;

  const { updateDispatch } = props;

  let handleUpdateAlpha = (val) => {
    setAlpha(val)
    updateDispatch(category, val);
  }

  let handleUpdateCategory = (val) => {
    setCategory(val)
    updateDispatch(category, alpha)
  }

  const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
    return {
      picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
      name: "隔壁老樊",
      accountId: 277313426,
    }
  })

  // 渲染函数，返回歌手列表
  const renderSingerList = () => {
    return (
      <List>
        {
          singerList.map((item, index) => {
            return (
              <ListItem key={item.accountId+""+index}>
                <div className="img_wrapper">
                  <img src={`${item.picUrl}?parsm=300*300`} width="100%" height="100%" alt="music"></img>
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  }
  return (
    <NavContainer>
      <Horizen
        list={categoryTypes}
        title={"分类（默认热门):"}
        handleClick={handleUpdateCategory}
        oldVal={category}></Horizen>
      <Horizen 
        list={alphaTypes}
        title={"首字母:"}
        handleClick={handleUpdateAlpha}
        oldVal={alpha}></Horizen>
      <ListContainer>
        <Scroll>
          { renderSingerList () }
        </Scroll>
      </ListContainer>
    </NavContainer>
  )
}

const mapStateToProps = (state) => ({
  singerList: state.getIn(['singers', 'singerList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUploading: state.getIn(['singers', 'pullUploading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  pageCount: state.getIn(['singers', 'pageCount'])
})

const mapDispatchProps = (dispatch) => {
  return {
    getHotSingerDispatch() {
      dispatch(getHotSingerList());
    },
    updateDispatch(category, alpha) {
      dispatch(changePageCount(0)); // 由于改变了分类 所以pageCount 清零
      dispatch(changeEnterLoading(true)) // loading 现在控制逻辑，效果实现放到下一节
      dispatch(getSingerList(category, alpha));
    },
    // 滑最底部刷新部分处理
    pullRefreshDispatch(category, alpha, hot, count) {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count + 1));
      if (hot) {
        dispatch(refreshMoreHotSingerList())
      } else {
        dispatch(refreshMoreSingerList(category, alpha))
      }
    },
    //顶部下拉刷新
    pullDownRefreshDispatch(category, alpha) {
      dispatch(changePullDownLoading(true));
      dispatch(changePageCount(0));//属于重新获取数据
      if(category === '' && alpha === ''){
        dispatch(getHotSingerList());
      } else {
        dispatch(getSingerList(category, alpha));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(React.memo(React.memo(Singers)));