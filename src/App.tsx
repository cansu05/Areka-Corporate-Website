import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/tr" replace />,
  },
  {
    path: "/:lng",
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: () =>
          import("./pages/Home/HomePage").then((m) => ({
            Component: m.default,
          })),
      },

      // ABOUT
      {
        path: "hakkimizda",
        lazy: () =>
          import("./pages/About/AboutPage").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "about",
        lazy: () =>
          import("./pages/About/AboutPage").then((m) => ({
            Component: m.default,
          })),
      },

      // MANIFESTO
      {
        path: "manifesto",
        lazy: () =>
          import("./pages/ArekaManifestoPage").then((m) => ({
            Component: m.default,
          })),
      },

      // CONTACT
      {
        path: "iletisim",
        lazy: () =>
          import("./pages/contact/ContactPage").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "contact",
        lazy: () =>
          import("./pages/contact/ContactPage").then((m) => ({
            Component: m.default,
          })),
      },

      // TERMS
      {
        path: "kullanim-kosullari",
        lazy: () =>
          import("./pages/TermsPage").then((m) => ({ Component: m.default })),
      },
      {
        path: "terms-of-use",
        lazy: () =>
          import("./pages/TermsPage").then((m) => ({ Component: m.default })),
      },

      // PRIVACY
      {
        path: "gizlilik-politikasi",
        lazy: () =>
          import("./pages/PrivacyPage").then((m) => ({ Component: m.default })),
      },
      {
        path: "privacy-policy",
        lazy: () =>
          import("./pages/PrivacyPage").then((m) => ({ Component: m.default })),
      },
    ],
  },
  { path: "*", element: <Navigate to="/tr" replace /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
