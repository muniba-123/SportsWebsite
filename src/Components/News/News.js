import React, { Component } from "react";
import Button from "../Common/Button";
import Table from "../Players/Table";
import img1 from "../../Assets/images/slider-img-1.png";
import { Col, Row } from "reactstrap";
import FilterModal from "./FilterModal";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
    };
  }
  toggleModal=()=>{
    this.setState({showFilter:!this.state.showFilter});
  }
  render() {
    const { showFilter } = this.state;
    return (
      <>
      <div className="page-wrap news-wrap">
        <div className="page-inner-wrap pt-0  mx-4">
        <Button label="Filter" className="search-btn" onClick={()=>this.toggleModal()}/>
        <div className={`details-block p-0 mt-4`} >
            <div className='details-inner-block'>
                <div className='d-flex align-items-baseline'>
                    <Row className='item-details-block'>
                                <Col className='item-block' xl={4} lg={4}>
                                    <div className='image-block'>
                                        <img alt="" src={img1} />
                                    </div>
                                    <div className='item-details'>
                                        <div className='item-name'>ANNOUNCEMENT/GENERAL</div>
                                        <div className='line'></div>
                                        <p className='description'>
                                        Global Partner Team Program Application Announcement...
                                        </p>
                                        <div className='time'>2022-12-01</div>
                                    </div>
                                </Col>
                                <Col className='item-block' xl={4} lg={4}>
                                    <div className='image-block'>
                                        <img alt="" src={img1} />
                                    </div>
                                    <div className='item-details'>
                                        <div className='item-name'>ANNOUNCEMENT/GENERAL</div>
                                        <div className='line'></div>
                                        <p className='description'>
                                        Global Partner Team Program Application Announcement...
                                        </p>
                                        <div className='time'>2022-12-01</div>
                                    </div>
                                </Col>
                                <Col className='item-block' xl={4} lg={4}>
                                    <div className='image-block'>
                                        <img alt="" src={img1} />
                                    </div>
                                    <div className='item-details'>
                                        <div className='item-name'>ANNOUNCEMENT/GENERAL</div>
                                        <div className='line'></div>
                                        <p className='description'>
                                        Global Partner Team Program Application Announcement...
                                        </p>
                                        <div className='time'>2022-12-01</div>
                                    </div>
                                </Col>
                    </Row>
            </div>
        </div >
        </div>
      </div>
      </div>
      {
        showFilter &&
        <FilterModal closeModal={this.toggleModal}/>}
      </>
    );
  }
}

export default News;
