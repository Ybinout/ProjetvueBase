<template>
  <div style="display: flex;flex-direction: column;">
    <h1>{{ title }}</h1>
    Le timer <p v-if="showbtn">{{ formattedTime }}</p>
    <button @click="rest()">reset</button>
    <button :disabled="showbtn" @click="declacheF('test')">Cliquez-moi</button>
    <button class="lebtn" v-if="showbtn" @click="stopTimer()">LE GROS BOUTON</button>
  </div>
</template>

<script>
// import AnotherComponent from './AnotherComponent.vue';

export default {
  name: 'MyComponent',
  components: {
    // AnotherComponent,
  },
  props: {
    propMessage: {
      type: String,
      default: 'Hello, Vue!',
    },
  },
  data() {
    return {
      title: 'Le jeu du timer',
      message: 'Hello, Vue!',
      loaded: false,
      show: null,
      showbtn: false,
      timer: 0,
      declanche: false,
      startTime: null,
      currentTime: null,
      timerId: null,
    };
  },
  computed: {
    computedMessage() {
      return this.message + ' ' + this.propMessage;
    },
    formattedTime() {
      if (!this.currentTime) return "00:00:000";
      const diff = this.currentTime - this.startTime;
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      const milliseconds = diff % 1000;
      return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        ":" +
        String(milliseconds).padStart(3, "0")
      );
    },

  },
  methods: {
    rest(){
      this.showbtn = false;
      this.resetTimer();
    },
    end() {
      this.declanche = false
    },
    declacheF() {
      console.log('ça part');
      const delaiAleatoire = Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000;
      setTimeout(() => {
        this.showbtn = true
        this.startTimer();

      }, delaiAleatoire);
    },
    changetitle(title) {
      this.title = title
    },
    startTimer() {
      if (this.timerId) return; 
      if (!this.startTime) {
        this.startTime = new Date().getTime();
      } else if (this.currentTime) {
        this.startTime = new Date().getTime() - (this.currentTime - this.startTime);
      }
      this.timerId = setInterval(() => {
        this.currentTime = new Date().getTime();
      }, 1); 
    },
    stopTimer() {
      clearInterval(this.timerId);
      this.timerId = null;
    },
    resetTimer() {
      this.stopTimer();
      this.startTime = null;
      this.currentTime = null;
    },
  },
  mounted() {
    console.log('Component mounted');
    this.loaded = true;
  },
  created() {
    console.log('Component created');
  },
  // Autres hooks du cycle de vie : beforeCreate, beforeMount, beforeUpdate, updated, beforeDestroy, destroyed
  // ... 
};
</script>

<style scoped>
h1 {
  color: #42b983;
}

button {
  margin-top: 20px;
}

.lebtn {
  width: 100%;
  height: 500px;
  background-color: green;
}
</style>
