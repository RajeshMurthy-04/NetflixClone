export const checkValidate = (name = "", email, password) => {
  const isNameValid = name === "" || /^[0-9A-Za-z]{6,16}$/.test(name);
  const isEmailValid =
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name && !isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
