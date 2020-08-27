import DraftsIcon from "@material-ui/icons/Drafts";

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
            Guest Information
          </div>
          <div className="exportImport">
            - Export <br /> - Import
          </div>
          <div className="box1">Name</div>
          <div className="box1">Email</div>
          <div className="box2">{guest.name}</div>
          <div className="box2">{guest.email}</div>
          <div className="box1">Phone</div>
          <div className="box1">Birthday</div>
          <div className="box2">{guest.phone}</div>
          <div className="box2">{guest.birthday}</div>
          <div className="box1">Country</div>
          <div className="box1">Town</div>
          <div className="box2">{guest.country}</div>
          <div className="box2">{guest.town}</div>
          <div className="box1">Address</div>
          <div className="box1">Company</div>
          <div className="box2">{guest.address}</div>
          <div className="box2">{guest.company}</div>
        </div>
      </section>
    </div>
  );
}
