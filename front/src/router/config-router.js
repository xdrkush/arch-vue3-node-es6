// import module
import { useMonitStore } from '../stores/monit.store'

// Config Router Global
export default (Router) => {
    const monitStore = useMonitStore()
    monitStore.getLandingStatus()

    const checkLandingPage = () => {
        if (monitStore.landing === null || 'null') setTimeout(() => {
            if (monitStore.landing === true) Router.push({ path: '/landing' })
        }, 100)
    }

    Router.beforeEach((to, from, next) => {
        if (monitStore.landing === null || 'null') checkLandingPage()

        next()
    })
}
