import React, { Component, Fragment } from 'react';
import { axios } from '../../utils/requset'
import styles from "./index.module.scss";
import { Carousel } from 'antd-mobile';
import { REACT_APP_API_URL } from "../../utils/urls";
import SearchInput from "../../components/SearchInput";

import nav1 from "../../assets/images/nav-1.png";
import nav2 from "../../assets/images/nav-2.png";
import nav3 from "../../assets/images/nav-3.png";
import nav4 from "../../assets/images/nav-4.png";

class index extends Component {

  state = {
    swiperList: [],
    imgHeight: 176,
    // 导航数据
    navs: [{ id: 0, title: '整租', img: nav1 }, { id: 1, title: '合租', img: nav2 }, { id: 2, title: '地图找房', img: nav3 }, { id: 3, title: '去出租', img: nav4 }],
    // 租房的小组
    homeGroups: [],
    // 资讯
    news: []
  }

  componentDidMount() {
    console.log();
    // 1 轮播图
    axios.get("/home/swiper")
      .then(res => {
        this.setState({ swiperList: res.body });
        // console.log(res);
      })

    // 2 租房小组
    axios.get("/home/groups")
      .then(res => {
        this.setState({ homeGroups: res.body });
        // console.log(res, '租房小组');
      })

    // 3 资讯
    axios.get("/home/news")
      .then(res => {
        this.setState({ news: res.body });
        // console.log(res, '这是咨询');
      })
  }

  render() {
    const { swiperList } = this.state;
    // console.log(REACT_APP_API_URL);
    return (
      <Fragment>
        <div className={styles.hk_home}>
          {/* 轮播图 开始 */}
          <div className={styles.home_swiper}>
            <div className={styles.home_search_input}>
              <SearchInput />
            </div>
            {swiperList.length && <Carousel
              autoplay
              infinite
            >
              {this.state.swiperList.map(val => (
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={REACT_APP_API_URL + val.imgSrc}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // 解决图片高度的bug使用 
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>}

          </div>
          {/* 轮播图 结束 */}

          {/* 导航 开始 */}
          <nav className={styles.home_nav}>
            {this.state.navs.map(v =>
              <div key={v.id} className={styles.nav_item}>
                <img src={v.img} alt="" />
                <p>{v.title}</p>
              </div>
            )}
          </nav>
          {/* 导航 结束 */}

          {/* 租房小组 开始 */}
          <div className={styles.home_group}>
            <div className={styles.home_group_title}>
              <span>租房小组</span>
              <span>更多</span>
            </div>
            <div className={styles.home_group_content}>
              {this.state.homeGroups.map(v =>
                <div key={v.id} className={styles.home_group_item}>
                  <div className={styles.home_group_item_name}>
                    <div className={styles.item_name_1}>{v.title}</div>
                    <div className={styles.item_name_2}>{v.desc}</div>
                  </div>
                  <div className={styles.home_group_item_img}>
                    <img src={REACT_APP_API_URL + v.imgSrc} alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* 租房小组 结束 */}
          {/* 最新资讯 开始*/}
          <div className={styles.home_news}>
            <div className={styles.home_news_title}>最新资讯</div>
            <div className={styles.home_news_content}>
              {this.state.news.map(v =>
                <div key={v.id} className={styles.news_item}>
                  <div className={styles.news_item_img}>
                    <img src={REACT_APP_API_URL + v.imgSrc} alt="" />
                  </div>
                  <div className={styles.news_item_info}>
                    <div className={styles.news_item_name}>{v.title}</div>
                    <div className={styles.news_item_des}>
                      <span className={styles.news_item_from} >{v.from}</span>
                      <span className={styles.news_item_date} >{v.date}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* 最新资讯 结束*/}



        </div>
      </Fragment>
    );
  }
}
export default index;