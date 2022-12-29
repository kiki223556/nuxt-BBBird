<template>
    <div>
        <Head>
            <Title>BB-Bird | {{ hotIssue.title }}</Title>
            <Meta name="description" :content="hotIssue.description" />
        </Head>

        <IssueDetails :hotIssue="hotIssue" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri ='https://fakestoreapi.com/products/' + id
   
    // fetch the hotissue
    const { data: hotIssue } = await useFetch(uri, { key: id })

    if (!hotIssue.value) {
        throw createError({ statusCode: 404, statusMessage: 'Hot Issue not found', fatal: true })
    }

    definePageMeta({
        layout: 'hot-issues'
    })
</script>


<style scoped>

</style>