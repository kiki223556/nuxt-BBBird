<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="`${hotIssue.image}`" alt="hotIssue img" class="mx-auto my-7" />
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ hotIssue.title }}</h2>
                <p class="text-xl my-7">Price - ${{ hotIssue.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">HotIssue description:</h3>
                <p class="mb-7">{{ hotIssue.description }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2">shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { hotIssue } = defineProps(['hotIssue'])
</script>

<style scoped>
    img {
        max-width: 400px;
    }
</style>