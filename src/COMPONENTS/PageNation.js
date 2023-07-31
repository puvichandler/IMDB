import React, { useState } from 'react'

function PageNation(props) {     
    let {pageNum,onPrev,onNext} = props;
    return(
        <div className='flex justify-center my-4'>
            <div className='border-2 p-2 boder-r-0 rounded-l-xl border-black cursor-pointer' onClick={()=>{onPrev(pageNum-1)}}>BACK</div>
            <div className='border-1 p-2 boder-r-0  border-black cursor-pointer'>{pageNum}</div>
            <div className='border-2 p-2 rounded-r-xl border-black cursor-pointer' onClick={()=>{onNext(pageNum+1)}}>NEXT</div>
        </div>
    )
    } 
export default PageNation