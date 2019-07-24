import React from 'react';
import easeInOutcubic from 'utils/ease';

const delay = 4000;

export default class Slider extends React.PureComponent {
  constructor (props) {
    super(props);
    this.currentIndex = 0;
    this.isMoving = false;
    this.animate = null;
    this.timer = setInterval(this.slideMove, delay);
    this.currentMousePos = 0;
    this.currentPos = 0;
    this.onDrag = false;
  }

  componentDidMount () {
    window.addEventListener('resize', this.resetSlides);
    window.addEventListener('focus', this.leaveSlider);
    window.addEventListener('blur', this.enterSlider);
    this.resetSlides();
    this.addDots();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resetSlides);
    window.removeEventListener('focus', this.leaveSlider);
    window.removeEventListener('blur', this.enterSlider);
  }

  addDots = () => {
    for (let idx = 0; idx < this.num; idx++) {
      const dot = document.createElement('div');
      dot.className = `dot${idx === this.currentIndex ? ' active':''}`;
      dot.setAttribute('idx', idx);
      this.dots.appendChild(dot);
    }
  }

  resetSlides = () => {
    this.num = this.slide.children.length;
    if (this.num === 0) return;
    this.width = this.slide.children[0].offsetWidth;
    const maxIndex = this.num - 1;
    this.prevIndex = this.currentIndex - 1 < 0 ? maxIndex : this.currentIndex - 1;
    this.nextIndex = this.currentIndex + 1 > maxIndex ? 0 : this.currentIndex + 1;

    for (let idx = 0; idx<this.num; idx++) {
      if (idx === this.currentIndex) {
        this.slide.children[idx].style = `z-index: ${maxIndex}; left: 0px`;
      } else if (idx === this.prevIndex) {
        this.slide.children[idx].style = `z-index: 1; left: -${this.width}px`;
      } else if (idx === this.nextIndex) {
        this.slide.children[idx].style = `z-index: 1; left: ${this.width}px`;
      } else {
        this.slide.children[idx].style = `z-index: 0; left: ${this.width}px`;
      }
    }
  }

  setIndex = () => {
    
    for (let idx = 0; idx<this.num; idx++) {
      if (idx === this.currentIndex) {
        this.slide.children[idx].style.zIndex = 2;
      } else if (idx === this.prevIndex || idx === this.nextIndex) {
        this.slide.children[idx].style.zIndex = 1;
      } else {
        this.slide.children[idx].style.zIndex = 0;
      }
    }
  }

  clickDot = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.isMoving) return;
    if (e.target.classList.contains('dot')) {
      const idx = Number(e.target.getAttribute('idx'));
      const jump = (this.currentIndex - idx);
      const leftToRight = jump > 0;
      if (jump === 0) return;
      clearInterval(this.timer);

      this.slideMove(leftToRight, idx, Math.abs(jump) > 1);
      // this.timer = setInterval(this.slideMove, delay);
    }
  }

  setDot = (newIdx) => {
    // console.log('set', newIdx)
    for (let idx = 0; idx < this.num; idx++) {
      this.dots.children[idx].classList.remove('active');
    }
    this.dots.children[newIdx].classList.add('active');
  }



  slideMove = (leftToRight = false, setIndex = null, jump = false) => {
    if (this.isMoving) return;
    let count = null;
    const start = 0;
    const duration = 1000;
    const distance = leftToRight ? this.width: -this.width;
    if (!jump) {
      this.prevIndex = this.currentIndex === 0 ? this.num - 1 : this.currentIndex - 1;
      this.nextIndex = this.currentIndex === this.num - 1 ? 0 : this.currentIndex + 1;
    } else {
      if (leftToRight) {
        this.prevIndex = setIndex;
      }else {
        this.nextIndex = setIndex;
      }
    }
    this.slide.children[this.prevIndex].style.left = -this.width + 'px';
    this.slide.children[this.nextIndex].style.left = this.width + 'px';
    
    // console.log({currentIndex:this.currentIndex, prevIndex:this.prevIndex, nextIndex:this.nextIndex, distance, setIndex});
    this.setIndex();
    this.setDot(setIndex !== null ? setIndex: this.nextIndex);
    if (!this.isMoving) this.isMoving = true;
    
 
    const move = (timestamp) => {
      if (leftToRight) {  // reverse
        
        if (this.currentPos >= distance) {
          this.isMoving = false;
          this.currentPos = 0;
          window.cancelAnimationFrame(this.animate);
          if (!this.timer) this.timer = setInterval(this.slideMove, delay);
          if (!jump) {
            this.currentIndex--;
            if (this.currentIndex < 0) this.currentIndex = this.num - 1;
          } else {
            this.currentIndex = setIndex;
          }

        } else {
          if (!count) count = timestamp;
          const progress = timestamp - count;
          this.currentPos = easeInOutcubic(progress, start, distance, duration);
          this.slide.children[this.currentIndex].style.left = this.currentPos + 'px';
          this.slide.children[this.prevIndex].style.left = this.currentPos - this.width + 'px';
          this.animate = window.requestAnimationFrame(move);
        }
      } else {  // forward
        if (this.currentPos <= distance) {
          this.isMoving = false;
          this.currentPos = 0;
          window.cancelAnimationFrame(this.animate);
          if (!jump) {
            this.currentIndex++;
            if (this.currentIndex === this.num) this.currentIndex = 0;
          } else {
            this.currentIndex = setIndex;
          }

        } else {
          if (!count) count = timestamp;
          const progress = timestamp - count;
          this.currentPos = easeInOutcubic(progress, start, distance, duration);
          this.slide.children[this.currentIndex].style.left = this.currentPos + 'px';
          this.slide.children[this.nextIndex].style.left = this.currentPos + this.width + 'px';
          this.animate = window.requestAnimationFrame(move);
        }
      }
    }

    this.animate = window.requestAnimationFrame(move);
  }

  enterSlider = () => {
    clearInterval(this.timer);
  }

  leaveSlider = () => {
    clearInterval(this.timer);
    this.timer = setInterval(this.slideMove, delay);
  }

  onMouseDown = (e) => {
    this.onDrag = true;
    this.currentMousePos = e.touches[0].pageX;
    this.diff = 0;
    clearInterval(this.timer);
    this.timer = null;
  }

  onMouseMove = (e) => {
    if (!this.onDrag) return;
    this.diff = this.currentMousePos - e.touches[0].pageX;
  }

  onMouseUp = (e) => {
    this.onDrag = false;
    let idx;
    if (this.diff < 0 && Math.abs(this.diff) > 50) {
      if (this.currentIndex - 1 < 0) idx = this.num - 1;
      else idx = this.currentIndex - 1;
      this.slideMove(true, idx);
    } else if (this.diff > 0 && Math.abs(this.diff) > 50) {
      if (this.currentIndex + 1 === this.num) idx = 0;
      else idx = this.currentIndex + 1;
      this.slideMove(false, idx);
    } else {
      this.timer = setInterval(this.slideMove, delay);
    }
    this.diff = 0;
  }

  render () {
    return (
      <div 
      onMouseEnter={this.enterSlider}
      onMouseLeave={this.leaveSlider} 
      className={this.props.className || null}
      >
        <div ref={el => this.slide = el} className="slider"
        onTouchStart={this.onMouseDown}
        onTouchMove={this.onMouseMove}
        onTouchEnd={this.onMouseUp}
        >{this.props.children}</div>
        <div className="dots-wrapper">
          <div ref={el => this.dots = el} className="dots" onClick={this.clickDot}></div>
        </div>
      </div>
    )
  }
}

