import React from 'react';
import arrowLeft from "../../Assets/icons/arrow-left-black.svg";
import arrowRight from "../../Assets/icons/arrow-right-black.svg";
import Pagination from 'rc-pagination';

const Pager = (props) => {
    const { total, onChange, pageSize, current } = props;
    const itemRender = (current, type, element) => {
        if (type === 'page') {
            return <span className='page-number'>{current}</span>;
        }
        return element;
    };
    return (
        <Pagination total={total} itemRender={itemRender} pageSize={pageSize} onChange={onChange} current={current}
            hideOnSinglePage prevIcon={<img alt="" width={12} height={12} src={arrowLeft} />}
            nextIcon={<img alt="" width={12} height={12} src={arrowRight} />}
            jumpPrevIcon={<span>----</span>}
            jumpNextIcon={<span>----</span>}

        />
    );
};

export default Pager;