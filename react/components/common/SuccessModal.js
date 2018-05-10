import React from 'react';

class SuccessModal extends React.PureComponent {
  constructor() {
    super();
    this.modalRef = React.createRef();
  }
  componentDidMount() {
    // eslint-disable-next-line
    $("#animatedModal").fancybox();
  }
  componentDidUpdate() {
    if (this.props.display === true) {
      $.fancybox.open({
        src: '#animatedModal',
        type: 'inline',
      });
    } else {
      $.fancybox.open({
        src: '#animatedModal',
        type: 'inline',
      });
    }
  }
  render() {
    return (
      <div
        id="animatedModal"
        style={{ display: 'none' }}
        className="animated-modal text-center p-5 fancybox-content success-modal"
      >
        <h2>Success!</h2>
        <p>
          {this.props.message}
          <br />
        </p>
        <p className="mb-0" style={{ paddingTop: '10px' }}>
          <svg
            width="150"
            height="150"
            viewBox="0 0 510 510"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#fff"
              d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204 S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255 s114.75,255,255,255s255-114.75,255-255H459z"
            />
          </svg>
        </p>
      </div>
    );
  }
}

export { SuccessModal };
