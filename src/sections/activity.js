import React from 'react';
import Slider from 'components/slider';
import Slide from 'components/slide';

const slides = [
  {
    img: "/assets/slides/1R0A8928.jpg",
    title: '2018斗鱼嘉年华盛况',
    content: '本届斗鱼嘉年华分4大舞台和8大主题。4大舞台包括主舞台-斗鱼舞台、young舞台、link舞台和电竞游戏区舞台。主舞台-斗鱼舞台上会有大主播、明星大咖的精彩演绎；link舞台偏重于主播和粉丝互动；young舞台更亲民、演出内容更多元；电竞游戏区舞台偏重展现电竞赛事、电竞豪门、电竞选手的游戏互动。8大主题包括：电竞、游戏、美食、音乐、热舞、户外、科技、二次元。对于热爱直播与追求时尚的年轻人来说，这无疑是一场直播界的豪华盛宴。',
    link: 'asdasdas'
  },
  {
    img: "/assets/slides/1R0A8955.jpg",
    title: '惊天大海参，要来了！！',
    content: '4大舞台包括主舞台-斗鱼舞台、young舞台、link舞台和电竞游戏区舞台。主舞台-斗鱼舞台上会有大主播、明星大咖的精彩演绎；link舞台偏重于主播和粉丝互动；young舞台更亲民、演出内容更多元；电竞游戏区舞台偏重展现电竞赛事、电竞豪门、电竞选手的游戏互动。8大主题包括：电竞、游戏、美食、音乐、热舞、户外、科技、二次元。',
    link: ''
  },
  {
    img: "/assets/slides/1R0A8956.jpg",
    title: '电竞游戏区舞台偏重展现电竞赛事',
    content: '电竞游戏区舞台偏重展现电竞赛事、电竞豪门、电竞选手的游戏互动。8大主题包括：电竞、游戏、美食、音乐、热舞、户外、科技、二次元。',
    link: ''
  },
  {
    img: "/assets/slides/1R0A8957.jpg",
    title: '惊天大海参，要来了！！',
    // content: '本届斗鱼嘉年华分4大舞台和8大主题。4大舞台包括主舞台-斗鱼舞台、young舞台、link舞台和电竞游戏区舞台。主舞台-斗鱼舞台上会有大主播、明星大咖的精彩演绎；link舞台偏重于主播和粉丝互动；young舞台更亲民、演出内容更多元；电竞游戏区舞台偏重展现电竞赛事、电竞豪门、电竞选手的游戏互动。8大主题包括：电竞、游戏、美食、音乐、热舞、户外、科技、二次元。对于热爱直播与追求时尚的年轻人来说，这无疑是一场直播界的豪华盛宴。',
    link: 'asdasdasqweqw1'
  },
  {
    img: "/assets/slides/1R0A8959.jpg",
    // title: '惊天大海参，要来了！！',
    content: '本届斗鱼嘉年华分4大舞台和8大主题。4大舞台包括主舞台-斗鱼舞台、young舞台、link舞台和电竞游戏区舞台。主舞台-斗鱼舞台上会有大主播、明星大咖的精彩演绎；link舞台偏重于主播和粉丝互动；young舞台更亲民、演出内容更多元；电竞游戏区舞台偏重展现电竞赛事、电竞豪门、电竞选手的游戏互动。8大主题包括：电竞、游戏、美食、音乐、热舞、户外、科技、二次元。对于热爱直播与追求时尚的年轻人来说，这无疑是一场直播界的豪华盛宴。',
    link: ''
  },
]

export default (props) => {

const renderSlides = (data) => data.map((s, i) => <Slide key={i} img={s.img} title={s.title} content={s.content} link={s.link}/>)

  return (
    <Slider className="activity">
      {renderSlides(slides)}
    </Slider>
  )
}