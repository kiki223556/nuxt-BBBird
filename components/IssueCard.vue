<template>
    <div class="card text-center">
        <img :src="hotIssue.image" alt="hotIssue thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ hotIssue.title }}</p>
        <NuxtLink :to="`/hotIssues/${hotIssue.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>        
    </div>
</template>

<script setup>
    const { hotIssue } = defineProps(['hotIssue'])

</script>

<style scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%; 
        margin: 0 auto;
    }
</style>