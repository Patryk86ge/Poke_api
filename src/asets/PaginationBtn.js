import React from 'react';
import {Button} from "react-bootstrap";

const PaginationBtn = ({getNexPage, getPrevPage}) => {
  return (
    <div className={"paginationBtn"}>
      {getPrevPage && <Button className={'m-1'} variant="primary" onClick={getPrevPage}>Prev</Button>}
      {getNexPage && <Button className={'m-1'} variant="primary" onClick={getNexPage}>Next</Button>}
    </div>
  );
};

export default PaginationBtn;