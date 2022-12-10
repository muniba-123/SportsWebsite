import React, { Component } from "react";
import arrowDown from "../../Assets/icons/down-arrow-white.svg";
import Button from "../Common/Button";
import Table from "../Players/Table";
import img1 from "../../Assets/images/slider-img-1.png";
import { Col, Row } from "reactstrap";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
    };
  }
  render() {
    const { showFilter } = this.state;
    return (
      <div className="page-wrap news-wrap">
        <div className="page-inner-wrap pt-0 mx-4">
        <Button label="Filter" className="search-btn" onClick={()=>this.setState({showSubMenu:!showFilter})}/>
        <div className={`details-block mt-4`} >
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
    );
  }
}

export default News;
