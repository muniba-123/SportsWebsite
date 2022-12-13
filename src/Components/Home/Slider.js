import React, { Component } from 'react';
import ItemsCarousel from '../Common/ItemsCarousel';
import img1 from "../../Assets/images/slider-img-1.png";
import { Row,Col } from 'reactstrap';

class Slider extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    render() {
        const {activeIndex,setActiveIndex,groups,className}=this.props;
        return (
           
            <div className={`details-block ${className}`} >
            <div className='details-inner-block'>
                <div className='d-flex align-items-baseline'>
                <div className='title'> News</div>
                <div className='title link ml-auto'> View all</div>
                </div>
              
                <ItemsCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} groups={groups}>
                    <Row className='item-details-block'>
                                <Col className='item-block' xl={6} lg={6} >
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
                                <Col className='item-block' xl={6} lg={6} >
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
                </ItemsCarousel>
            </div>
        </div >
       
        );
    }
}

export default Slider;