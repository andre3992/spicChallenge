export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    const guest = this.props.guest;
    return (
      <div className="modal-main">
        <div className="modalTop">
          <div class="wrapper">
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
            <div className="box2">{guest.company}</div>*/}
          </div>
        </div>
      </div>
    );
  }
}
