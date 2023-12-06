import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { deleteContactRequest } from "../api/contacts.api";
import { useNavigate } from "react-router-dom";

const Button = ({ action, id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await deleteContactRequest(id);
      if (response.ok) {
        console.log("Se elimino correctamente");
      } else {
        console.log("No se elimino correctamente");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const handleClick = () => {
    if (action === "edit") {
      navigate(`/edit/${id}`);
    } else if (action === "delete") {
      handleDelete();
      window.location.reload();
    }
  };

  return (
    <button
      className={action === "edit" ? "text-indigo-500" : "text-red-500"}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={action === "edit" ? faEdit : faTrashAlt}
        className="text-lg mx-5"
      />
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Button;
