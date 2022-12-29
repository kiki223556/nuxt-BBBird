<template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore beatae, perferendis dolorum odit voluptatibus delectus voluptatum impedit ratione perspiciatis.</p>
    </div>
</template>

<script setup>
import { createApp, provide, h } from 'vue'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin-top: 10px;
    }
</style>