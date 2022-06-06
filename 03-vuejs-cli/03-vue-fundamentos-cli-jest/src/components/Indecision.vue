<template>
  <div>
    <img v-if="img" :src="img" alt="bg" />
    <div class="bg-dark"></div>

    <div class="indecision-container">
      <input type="text" placeholder="Ask me a Question!" v-model="question" />
      <h3>Remember to end with a question mark (?).</h3>
      <div v-if="isValidQuestion">
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        question: null,
        answer: null,
        img: null,
        isValidQuestion: false,
      };
    },

    methods: {
      async getAnswer() {
        try {
          const { answer, image } = await fetch('https:/yesno.wtf/api').then((res) =>
            res.json()
          );

          this.answer = answer;
          this.img = image;

          console.log(answer, image);
        } catch (error) {
          this.img = null;
          this.answer = '404 Not found API';

          console.log('IndecisionComponent: ', error);
        }
      },
    },

    watch: {
      question(newValue) {
        this.isValidQuestion = false;

        console.log({ newValue });

        if (!newValue.includes('?')) return;

        console.log({ newValue });

        this.isValidQuestion = true;

        this.getAnswer();
      },
    },
  };
</script>

<style scoped>
  img,
  .bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
  }

  .bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .indecision-container {
    position: relative;
    z-index: 99;
  }

  input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  h1,
  h2,
  h3 {
    color: white;
  }

  h2 {
    margin-top: 150px;
  }
</style>
