import { IInputProps } from "../interfaces/Input.interface";

const Input = ({ title, name, type = "text", placeholder }: IInputProps) => {
  return (
    <div className="form-container">
      <label className="label">
        <span className="label-text">{title}: </span>
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
};

export default Input;
