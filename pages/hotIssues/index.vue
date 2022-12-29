<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in hotIssues">   
                <IssueCard :hotIssue="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'hot-issues'
    })

    // fetch the hotIssue
    const { data: hotIssues } =  await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'BB-Bird | Issue',
        meta: [
            { name: 'description', content: 'BB-Bird Issue' }
        ]
    })

</script>

<style scoped>

</style>