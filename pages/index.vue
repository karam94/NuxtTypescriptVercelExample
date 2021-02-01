<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="text-4xl">NuxtTypescriptVercelExample</h1>

      <ul>
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

    this.contents = await Promise.all([
      // fetch('/api/hello').then((res) => res.text()),
      // fetch('/api/contents/omgthisworks').then((res) => res.text()),

      this.$axios
        .$get('/api/hello')
        .then((res) => res.text())
        .catch((err) => console.log(`${errorMessage} ${err}.`)),

      this.$axios
        .$get('/api/contents/omgthisworks')
        .then((res) => res.text())
        .catch((err) => console.log(`${errorMessage} ${err}.`)),
    ]);
  },
});
</script>

<style>
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
