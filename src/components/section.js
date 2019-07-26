import React from 'react';

export default (props) => {
  const classLine = props.single? "section-title-line single":"section-title-line";
  const classText = props.left?"section-title-text left": "section-title-text";
  return (
    <section>
      <div className={classLine}></div>
      <div className="constain section-title">
        {!props.left && <div className="section-title-hold"></div>}
        <div className={classText}>
          {props.t1 && <h2>{props.t1}</h2>}
          <div>{(props.sub && !props.left) && <span>{props.sub}</span>}<h2>{props.t2 || null}</h2>{(props.sub && props.left) && <span>{props.sub}</span>}</div>
        </div>
      </div>
      <div className="constain section-content">
        {props.children}
      </div>
    </section>
  )
}