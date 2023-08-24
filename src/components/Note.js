import DeleteForeverOutLinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import "../css/Note.css";

function Note({ text, deleteHandler, id }) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutLinedIcon onClick={() => deleteHandler(id)} />
      </div>
    </div>
  );
}

export default Note;
