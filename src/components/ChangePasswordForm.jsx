import { useFormik } from "formik";
import axios from "axios";
import { CHANGE_PASSWORD_FORM_URL } from "../utils/constants";
import Modal from "./Modal";

const ChangePasswordForm = ({
  isChangePasswordFormOpen,
  setIsChangePasswordFormOpen,
}) => {
  const formik = useFormik({
    initialValues: { username: "", oldPassword: "", newPassword: "" },
    onSubmit: (values) => {
      axios
        .post(CHANGE_PASSWORD_FORM_URL, values)
        .then((response) => alert(response.data.message))
        .catch((error) => alert(error.response.data.message));
    },
  });

  const toggleModal = () =>
    setIsChangePasswordFormOpen(!isChangePasswordFormOpen);

  return (
    <Modal
      isOpen={isChangePasswordFormOpen}
      toggleModal={toggleModal}
      onSubmit={formik.handleSubmit}
      title={`Change Password Form`}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
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
          <label className="block">Old Password</label>
          <input
            type="password"
            name="oldPassword"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block">New Password</label>
          <input
            type="password"
            name="newPassword"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            className="w-full p-2 border"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4">
          Change Password
        </button>
      </form>
    </Modal>
  );
};

export default ChangePasswordForm;
