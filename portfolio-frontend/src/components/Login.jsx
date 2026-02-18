import "./Signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { PortfolioContext } from "../context/Portfolio";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:1308/api/user/sign-up";
function Login() {
  const { login, } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("*Email is Required"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .max(20, "Maximum 20 characters")
      .required("*Password is required"),
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
    const res = await login(data);
    if(res.success){
    //   reset();
      navigate("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="LoginSignup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="outer">
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
          </div>
          <div>
            <button className="btnn">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
