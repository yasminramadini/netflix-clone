import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  email: "",
  password: "",
};

const useForm = () => {
  const [user, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("USER_CRED", JSON.stringify(user));
    navigate("/movies");
  };

  return [user, handleChange, handleSubmit];
};

export default useForm;
