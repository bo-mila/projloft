import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
  el: '.reviews',
  // data: {
  //   disabledClass: true
  // },
  components: {
    Flickity
  },
  props: {
    disabled: Boolean
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true,
        selectedAttraction: 0.2,
        friction: 0.8
        
      },
      
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },
    
    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();

    },
    checkArrows() {
      if (this.$refs.flickity.selectedIndex() == 0) {
        // this.$el.querySelector('.reviews__slider-direc--prev').disabled=true;
        // this.$el.querySelector('.reviews__slider-direc--next').disabled=false;

        this.$el.querySelector('.reviews__slider-direc--prev').style.opacity=".3";
        this.$el.querySelector('.reviews__slider-direc--next').style.opacity="1";

      } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length-1) {
        // this.$el.querySelector('.reviews__slider-direc--next').disabled=true;
        // this.$el.querySelector('.reviews__slider-direc--prev').disabled=false;
        
        this.$el.querySelector('.reviews__slider-direc--next').style.opacity=".3";
        this.$el.querySelector('.reviews__slider-direc--prev').style.opacity="1";

      } else {
        // this.$el.querySelector('.reviews__slider-direc--prev').disabled = false;
        this.$el.querySelector('.reviews__slider-direc--prev').style.opacity="1";

        // this.$el.querySelector('.reviews__slider-direc--next').disabled = false;
        this.$el.querySelector('.reviews__slider-direc--next').style.opacity="1";

      }
    
    }
  }
});