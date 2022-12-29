// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    modules: [
        'nuxt-windicss',
    ],
    app: {
        head: {
            title: 'BB-Bird',
            meta: [
                { name: 'description', content: 'Everything about BBBird' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    }
})

