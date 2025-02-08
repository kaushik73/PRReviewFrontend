import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LOGIN_FORM_URL } from "../utils/constants";
import { BlueButton, GrayButton } from "./buttons";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) => {
      axios
        .post(LOGIN_FORM_URL, values)
        .then((response) => alert(response.data.message))
        .catch((error) => alert(error.response.data.message));
    },
  });
  const navigate = useNavigate();

  const OpenChangePasswordForm = () => {
    navigate("/change-password");
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-6 shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">Login</h2>
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
        <BlueButton text="Login" type="submit" />
        <span
          className="text-blue-600  cursor-pointer underline"
          onClick={OpenChangePasswordForm}
        >
          Change Password
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
