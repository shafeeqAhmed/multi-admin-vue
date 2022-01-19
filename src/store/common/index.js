/* eslint-disable eol-last */
/* eslint-disable indent */
export default {
    namespaced: true,
    state: {
        parentCategory: {
            id: 0,
            name: 'Parent',
            commission_rate: 0,
            loaderOne: false,
            loaderTwo: false,
            loaderThree: false,
            loaderFoure: false,
            loaderFive: false,
            loaderSix: false,
            loaderSeven: false,
            loaderEight: false,
            loaderNine: false,
            loaderTen: false,
        },
        isAuthorize: true,
    },
    getters: {
        getLoader: state => loader => state.parentCategory[loader],
    },
    mutations: {
        UPDATE_PARENT_CATEGORY(state, payload) {
            state.parentCategory.id = payload.id
            state.parentCategory.name = payload.name
            state.parentCategory.commission_rate = payload.commission_rate
        },
        UPDATE_LOADER(state, payload) {
            state.parentCategory[payload.loader] = payload.value
        },
        UPDATE_IS_AUTHORIZE(state, payload) {
            state.isAuthorize = payload
        },
    },
    actions: {
        updateParentMutation(ctx, payload) {
        ctx.commit('UPDATE_PARENT_CATEGORY', payload)
        },
    },
}