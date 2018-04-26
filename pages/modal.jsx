import React, {Component} from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="modal fade in" id="popupModal" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                      <svg viewport="0 0 20 20" width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="20"
                          x2="20" y2="1"
                          stroke="black"
                          strokeWidth="2"/>
                        <line x1="1" y1="1"
                          x2="20" y2="20"
                          stroke="black"
                          strokeWidth="2"/>
                      </svg>
                    </span>
                  </button>
                  <h3 className="modal-title"></h3>
                </div>
                <div className="modal-body">
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Modal;