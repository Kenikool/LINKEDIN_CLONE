import React from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import NetworkPage from "./pages/NetworkPage";
import NotificationsPage from "./pages/NotificationsPage";
import PostPage from "./pages/PostPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
      <Toaster />
    </Layout>
  );
};

export default App;
