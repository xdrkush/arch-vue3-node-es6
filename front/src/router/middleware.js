import { useMonitStore } from "src/stores/monit.store"
import { useAuthStore } from "src/stores/auth.store"

// Config Router Global

// is Logged In
export function checkIsLoggedIn (from, to) {
    // console.log('Middleware checkIsLoggedIn', from, to)
    const authStore = useAuthStore();
    const isLoggedIn = authStore.loggedIn
    // console.log('middleware isloggedin', isLoggedIn)
    if (!isLoggedIn) return { path: '/auth/login' }
    else return
}

// is Admin In
// export function checkIsAdminIn (from, to) {
//     // console.log('Middleware checkIsLoggedIn', from, to)
//     const adminStore = useAdminStore();
//     const isAdminIn = adminStore.adminIn
//     // console.log('middleware isloggedin', isLoggedIn)
//     if (!isAdminIn) return { path: '/auth/login' }
//     else return
// }

// Check Landing Page
export function checkLandingPage (to, from) {
    // console.log('Middleware checkLandingPage', landing, from, to)
    const monitStore = useMonitStore()
    const landing = monitStore.getLanding

    if (landing) return { path: '/landing' }
    else return
}
