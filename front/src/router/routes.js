import { checkIsLoggedIn, checkLandingPage } from './middleware'

const routes = [
  {
    path: "/landing",
    component: () => import("layouts/LandingLayout.vue")
  },
  
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: [checkLandingPage],
    children: [
      { path: "", component: () => import("src/pages/website/HomePage.vue") },
      { path: "contact", component: () => import("src/pages/messages/ContactPage.vue") },
      { path: "login", component: () => import("src/pages/auth/LoginPage.vue") },
      { path: "lostPassword", component: () => import("src/pages/auth/LostPasswordPage.vue") },
      { path: "lostPassword/:id", component: () => import("src/pages/auth/LostPasswordIDPage.vue") },
      { path: "article", component: () => import("src/pages/articles/ArticlePage.vue") },
      { path: "article/:name", component: () => import("src/pages/articles/ArticleIDPage.vue") },
      { path: "cgu", component: () => import("src/pages/website/CGUPage.vue") },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "login", component: () => import("src/pages/auth/LoginPage.vue") },
      { path: "lostPassword", component: () => import("src/pages/auth/LostPasswordPage.vue") },
      { path: "lostPassword/:id", component: () => import("src/pages/auth/LostPasswordIDPage.vue") },
    ],
  },

  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    beforeEnter: [checkIsLoggedIn],
    children: [
      { path: "", component: () => import("src/pages/admin/AdminDashboardPage.vue") },
      {
        path: "website",
        component: () => import("src/pages/admin/AdminWebsitePage.vue"),
      },
      {
        path: "article",
        component: () => import("src/pages/admin/AdminArticlePage.vue"),
      },
      {
        path: "profil",
        component: () => import("src/pages/admin/AdminProfilPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
