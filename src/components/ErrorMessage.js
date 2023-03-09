import Alert from "react-bootstrap/Alert";

export const ErrorMessage = ({ message }) => {
  return <Alert variant="danger">{message}</Alert>;
};
