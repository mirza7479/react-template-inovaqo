import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userRole } from "../ReduxToolKit/Slice/userSlice";
import { loginApi } from "../helpers/API";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // const { username, password } = values;
    // // Login api
    // let response = await loginApi(username, password);
    // if (response.data.match === false) {
    //   toast(" YOU HAVE ENTERED INVALID CREDENTIALS ");
    // } else if (response.data.match === true) {
    //   dispatch(userRole(response.data.role));
    //   localStorage.setItem("Token", response.data.token);
    //   navigate("/");
    // }
    dispatch(userRole("admin"));
    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    toast(`Failed: ${errorInfo}`);
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="text-center mt-3 mb-5">Login</h2>
        <ToastContainer />

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 20,
            }}>
            <Button className="mt-1" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 7,
              span: 20,
            }}></Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 2,
              span: 18,
            }}>
            Don't have an account?
            <Link
              to="/signup"
              style={{ textDecoration: "none", marginLeft: "5px" }}>
              Signup
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
