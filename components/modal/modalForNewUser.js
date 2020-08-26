import DraftsIcon from "@material-ui/icons/Drafts";
import Form from "../Form/form";

export default function Modal(props) {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const guest = props.guest;
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modalTop">
          <div className="closeModal" onClick={props.handleClose}>
            X
          </div>
        </div>
        <div class="wrapper">
          <div className=" guestInfo">
            <DraftsIcon /> <br />
            New Guest
          </div>
          <div className="exportImport">
            - Export <br /> - Import
          </div>
          <Form />
        </div>
      </section>
    </div>
  );
}
