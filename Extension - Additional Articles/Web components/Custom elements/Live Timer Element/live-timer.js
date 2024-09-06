class LiveTimer extends HTMLElement {

    /* your code here */
    render(){
        this.innerHTML = 
        `<time-formatted hour="numeric" minute="numeric" second="numeric"></time-formatted>`;

        this.timerElem = this.firstElementChild;
    }

    connectedCallback(){
        if (!this.rendered){
            this.render();
            this.rendered = true;
        }
        this.timer = setInterval(() => this.update(), 1000);
    }

    update(){
        this.date = new Date();
        this.timerElem.setAttribute('datetime', this.date);
        this.dispatchEvent(new CustomEvent('tick', {
            detail: this.date
        }));
    }

    disconnectedCallback(){
        clearInterval(this.timer); // important to let the element be garbage-collected
    }
  }
  
  customElements.define("live-timer", LiveTimer);