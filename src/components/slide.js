import React from 'react';

export default (props) => {
  const style = props.img?{backgroundImage: `url('${props.img}')`}: null;


  return (
    <div>
      <div className="slide_wrapper" style={style}>
        {(props.title || props.content) && <div className="slide_text">
          {props.title && <div className="slide_text_title">
            {props.title}
          </div>}
          {props.content && <div className="slide_text_content">
            {props.content}
          </div>}
        </div>}
        {props.link && <a href={props.link} className="slide_link">立即购买</a>}
      </div>
    </div>
  )
}