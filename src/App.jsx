import React from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import ProtectedRoute from "./utils/protected-routes"
import LoginModal from "./components/LoginModal";
import Header from "./components/Header"
import Footer from "./components/Footer"
import ChangePasswordModal from "./components/LostPasswordModal"
import Home from "./pages/Home"
import MyAccount from "./pages/MyAccount"
import Favorite from "./pages/Favorite"
import ProductDetail from "./pages/ProductDetail"
import Catalog from "./pages/Catalog"
import Privacy from "./pages/Privacy"
import UserPrivacy from "./pages/UserPrivacy"
import NotFound from "./pages/404"
import OrderCheckout from "./pages/OrderCheckout"
import FrequentlyQuestions from "./pages/FrequentlyQuestions"
import Orders from "./pages/Orders"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ShoppingCart from "./pages/ShoppingCart"

function App() {
  const location = useLocation()

  return (
    <div>
      {
        location.pathname !== "" ? <Header /> : null
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicas-privacidad" element={<Privacy />} />
        <Route path="/politicas-privacidad-usuario" element={<UserPrivacy />} />
        <Route path="/preguntas-frecuentes" element={<FrequentlyQuestions />} />

        {/* Rutas protegidas */}
        <Route path="/mi-cuenta" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
        <Route path="/favoritos" element={<ProtectedRoute><Favorite /></ProtectedRoute>} />
        <Route path="/cambiar-contraseña" element={<ProtectedRoute><ChangePasswordModal /></ProtectedRoute>} />
        <Route path="/carrito" element={<ProtectedRoute><ShoppingCart /></ProtectedRoute>} /> √
        <Route path="/detalle/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
        <Route path="/catalogo" element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
        <Route path="/login" element={<ProtectedRoute><LoginModal /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><OrderCheckout /></ProtectedRoute>} />
        <Route path="/pedidos" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/contacto" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/nosotros" element={<ProtectedRoute><About /></ProtectedRoute>} />

        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {
        location.pathname !== "" ? <Footer /> : null
      }
    </div>
  )
}

export default App

{
  location.pathname !== "" ? <Header /> : null
}