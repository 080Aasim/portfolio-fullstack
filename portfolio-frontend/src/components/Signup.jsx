import "./Signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { PortfolioContext } from "../context/Portfolio";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:1308/api/user/sign-up";
function Signup() {
  const { signUp } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    firstName: yup.string().required("*First Name is Required"),
    lastName: yup.string().required("*Last Name is Required"),
    email: yup.string().email("Invalid Email").required("*Email is Required"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .max(20, "Maximum 20 characters")
      .required("*Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Do not match")
      .required("*Confirm Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const onSubmit = async (data) => {
    const res = await signUp(data);
    if(res.success){
      reset();
      navigate("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="LoginSignup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="outer">
          <div className="username">
            <input
              type="text"
              placeholder="First Name..."
              {...register("firstName")}
            />
            <h3>{errors.firstName?.message}</h3>
            <input
              type="text"
              placeholder="Last Name..."
              {...register("lastName")}
            />
            <h3>{errors.lastName?.message}</h3>
          </div>
          <div className="email">
            <input type="email" placeholder="email..." {...register("email")} />
            <h3>{errors.email?.message}</h3>
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <h3>{errors.password?.message}</h3>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <h3>{errors.confirmPassword?.message}</h3>
          </div>
          <div>
            <button className="btnn">SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
