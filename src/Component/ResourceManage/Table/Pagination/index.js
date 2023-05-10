import React from "react";
import "./pagination.scss";
import icon_arrow_back_back from "../image/arrow-chevron-back back.png";
import icon_arrow_back from "../image/arrow-chevron-back.png";
import icon_arrow_forward from "../image/arrow-chevron-forward.png";
import icon_arrow_forward_forward from "../image/arrow-chevron- forward forward.png";
function Pagination(){
return(
    <div className="resource-content-footer">
    <div className="resource-content-pagination">
    <div className="footer-text"> 1 - 20 of 200</div>
    <div className="footer-pagination">
              <div className="pagination-icon-back">
                <img src={icon_arrow_back_back} className="icon-arrow-back" />
                <img src={icon_arrow_back} className="icon-arrow-back" />
              </div>
              <div className="pagination-text">1</div>
              <div className="pagination-icon-forward">
                <img src={icon_arrow_forward} className="icon-arrow-forward" />
                <img
                  src={icon_arrow_forward_forward}
                  className="icon-arrow-forward"
                />
              </div>
            </div>
    </div>

    </div>
)
}

export default Pagination;