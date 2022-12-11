import React, { Component } from "react";
import close from "../../Assets/icons/icon_close_w.svg";
import reset from "../../Assets/icons/icon_reset.svg";
import Button from "../Common/Button";
import Checkbox from "../Common/Checkbox";

class FilterModal extends Component {
    constructor(props) {
        super(props);
      
      }
  render() {

    return (
      <div className="filter-modal">
        <div className="filter-modal-inner">
          <img src={close} className="closeIcon" onClick={()=>this.props.closeModal()}/>
          <div className="block">
            <div className="title">Event</div>
            <div className="checkbox-block">
              <Checkbox label="PGC 2022"/>
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022"/>
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022" />
              <Checkbox label="PGC 2022"/>
              <Checkbox label="PGC 2022" />
              
            </div>
          </div>
          <div className="block">
            <div className="title">Category</div>
            <div className="checkbox-block">
              <Checkbox label="Announcement"/>
              <Checkbox label="Promotion" />
            </div>
          </div>
          <div className="d-flex align-items-center">
          <Button label="Apply" className="modal-btn my-5" />
          <div className="reset-block"></div>
           </div>
        </div>
      </div>
    );
  }
}

export default FilterModal;
