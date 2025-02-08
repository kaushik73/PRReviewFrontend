import { useFormik } from "formik";
import axios from "axios";
import { LOGIN_FORM_URL } from "../utils/constants";
import Modal from "./Modal";
import ChangePasswordForm from "./ChangePasswordForm";
import { useState } from "react";

const LoginForm = ({ isLoginFormOpen, setIsLoginFormOpen }) => {
  const [isChangePasswordFormOpen, setIsChangePasswordFormOpen] =
    useState(false);

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) => {
      axios
        .post(LOGIN_FORM_URL, values)
        .then((response) => alert(response.data.message))
        .catch((error) => alert(error.response.data.message));
    },
  });

  //  Todo : Implement the OpenChangePasswordForm function to open change password form above the login form
  const OpenChangePasswordForm = () => {
    console.log("OpenChangePasswordForm clicked ", isChangePasswordFormOpen);
    setIsChangePasswordFormOpen(!isChangePasswordFormOpen);
  };

  const toggleModal = () => setIsLoginFormOpen(!isLoginFormOpen);

  return (
    <>
      {isChangePasswordFormOpen && (
        <ChangePasswordForm
          isChangePasswordFormOpen={isChangePasswordFormOpen}
          setIsChangePasswordFormOpen={setIsChangePasswordFormOpen}
        />
      )}
      <Modal
        isOpen={isLoginFormOpen}
        toggleModal={toggleModal}
        onSubmit={formik.handleSubmit}
        title={`Login Form`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-6 shadow-md w-full"
        >
          <div className="mb-4">
            <label className="block">Username</label>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="w-full p-2 border"
            />
          </div>
          <div className="mb-4">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full p-2 border"
            />
          </div>
          <div className="flex flex-col gap-3 justify-around items-end">
            <span
              className="text-blue-600  cursor-pointer underline"
              onClick={() => OpenChangePasswordForm()}
            >
              Change Password
            </span>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default LoginForm;
