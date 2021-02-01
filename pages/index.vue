<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Nuxt + Typescript + Vercel Example</h1>
      <hr />

      <ul class="list">
        <li v-for="(content, index) in contents" :key="index">
          {{ content }}
        </li>
      </ul>

      <pre>
        Pre-rendered time: {{ time }}
        Server rendered?: {{ server }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  asyncData() {
    return { time: Date.now(), server: process.server };
  },

  data: () => ({ contents: [] as string[] }),

  async mounted() {
    const errorMessage =
      'Your serverless functions most likely are not running. Use vercel dev instead of npm run dev.';

    console.log(`Env variable: ${this.$config.envExample}`);
    console.log(`${this.$config.baseURL}`);

    this.contents = await Promise.all([
      // fetch('/api/hello').then((res) => res.text()),
      // fetch('/api/contents/omgthisworks').then((res) => res.text()),

      this.$axios
        .$get('/api/hello')
        .then((res) => res.message)
        .catch((err) => console.log(`${errorMessage} ${err}.`)),

      this.$axios
        .$get('/api/contents/omgthisworks')
        .then((res) => res.message)
        .catch((err) => console.log(`${errorMessage} ${err}.`)),
    ]);
  },
});
</script>

<style lang="postcss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  @apply text-4xl text-green-700 m-6;
}

.list {
  @apply m-6;
}
</style>
