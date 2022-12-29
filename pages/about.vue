<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore beatae, perferendis dolorum odit voluptatibus delectus voluptatum impedit ratione perspiciatigygygygygs.</p>
        <p>api response:</p>
        <div>{{ data }}</div>
    </div>
</template>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>

<script setup>

    const { data } = await useFetch('/api/currency/GBP')  

//   const { data } = await useFetch('/api/ninja?name=mario', {
//     method: 'post',
//     body: { age: 30 }
//   })
</script>