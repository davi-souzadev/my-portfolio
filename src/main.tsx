import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "./components/ThemeProvider.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./lib/i18n.ts"
import "./index.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
