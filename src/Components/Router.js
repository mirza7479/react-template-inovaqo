import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { About } from "./About";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { Login } from "./Login";
import { Navbar } from "./Navbar";
import { VideoPlayer } from "./ReactPlayer";
import { SideBar } from "./SideBar";
import { SignUp } from "./Signup";
import { FooterBar } from "./Footer";
import { Unauthorized } from "./Unauthoized";
import { Contact } from "./contact";

const { Content } = Layout;

const Router = () => {
  const userRole = useSelector((state) => state.user.role);

  return (
    <>
      <BrowserRouter>
        <Routes>
          // Protected routes can be added below this
          <Route element={<Protected />}>
            <Route path="/" element={<Home />}></Route>
            // Admin routes can be added below this
            <Route element={<Admin />}>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Route>
          </Route>
          // Non-Protected routes can be added below this
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/player" element={<VideoPlayer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Protected = () => {
  const userRole = useSelector((state) => state.user.role);
  return userRole ? (
    <Layout>
      <Navbar />
      {/* <Layout> */}
      {/* <SideBar /> */}
      <Content>
        <Outlet />
      </Content>
      {/* </Layout> */}
      <FooterBar />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

const Admin = () => {
  const userRole = useSelector((state) => state.user.role);
  return userRole === "admin" ? <Outlet /> : <Unauthorized />;
};

export default Router;
