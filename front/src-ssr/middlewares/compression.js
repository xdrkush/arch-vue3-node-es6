import compression from 'compression'
import { ssrMiddleware } from 'quasar/wrappers'

export default ssrMiddleware(({ app }) => {
  // console.log('MD front')
  app.use(
    compression({ threshold: 0 })
  )
})
