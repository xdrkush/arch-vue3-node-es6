import { useMonitStore } from "src/stores/monit.store"
import { useAuthStore } from "src/stores/auth.store"

// Config Router Global

// is Logged In
export function checkIsLoggedIn (from, to) {
    // // console.log('Middleware checkIsLoggedIn', from, to)
    // const authStore = useAuthStore();
    // const isLoggedIn = authStore.getLoggedIn
    // // console.log('middleware isloggedin', authStore)
    // // console.log('middleware isloggedin', isLoggedIn)
    // if (!isLoggedIn) return { path: '/auth/login' }
    // else return
    return
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
    // Error with the first load App.vue (getLanding is not loaded)
    // corectif dans les layout avec beforeCreate


    // console.log('Middleware checkLandingPage', landing, from, to)
    // const monitStore = useMonitStore()
    // const landing = monitStore.getLanding
    // console.log('middleware checkLanding', landing)

    // if (landing) return { path: '/landing' }
    // else return

    return
}
