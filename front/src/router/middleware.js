import { useMonitStore } from "src/stores/monit.store"
import { useAuthStore } from "src/stores/auth.store"

// Config Router Global
export function checkIsLoggedIn (from, to) {
    // console.log('Middleware checkIsLoggedIn', from, to)
    const authStore = useAuthStore();
    const isLoggedIn = authStore.loggedIn
    // console.log('middleware isloggedin', isLoggedIn)
    if (!isLoggedIn) return { path: '/auth/login' }
    else return
}

export function checkLandingPage (to, from) {
    // console.log('Middleware checkLandingPage', landing, from, to)
    const monitStore = useMonitStore()
    const landing = monitStore.getLanding

    if (landing) return { path: '/landing' }
    else return
}
