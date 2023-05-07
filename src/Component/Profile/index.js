import React from "react";
import data from "../data.json";
import icon from "../image/icon-profile.png";
import "./style.scss";
import icon_rank from "../image/icons/bx-medal.png";
import icon_gender from "../image/MyEC_Clone design/icons/bx-profile.png";
import icon_cake from "../image/MyEC_Clone design (1)/icons/Vector.png";
import icon_phone from "../image/MyEC_Clone design (2)/icons/Vector.png";
import icon_email from "../image/MyEC_Clone design (3)/icons/Vector.png";
import icon_check from "../image/arrow-chevron-down.png";

function MyProfile() {
  return (
    <div className="profile">
      {/* Profile-brief */}
      <div className="profile-brief">
        <div className="flex-start">
          <div className="profile-brief-top">
            <div className="profile-avata">
              <img src={data.image} className="profile-image" />
              <img src={icon} className="profile-icon-camera" />
            </div>

            <div className="profile-name ">{data.name} </div>

            <div className="profile-rank">
              <img src={icon_rank} />
              <div className="profile-score">{data.score} </div>
            </div>
          </div>

          <div className="profile-infor">
            <div className="profile-info-item">
              <img className="profile-info-icon" src={icon_gender} />
              <div className="profile-info-value">{data.gender}</div>
            </div>
            <div className="profile-info-item">
              <img className="profile-info-icon" src={icon_cake} />
              <div className="profile-info-value">{data.birthday}</div>
            </div>
            <div className="profile-info-item">
              <img className="profile-info-icon" src={icon_phone} />
              <div className="profile-info-value">{data.phone}</div>
            </div>
            <div className="profile-info-item">
              <img className="profile-info-icon" src={icon_email} />
              <div className="profile-info-value">{data.email}</div>
            </div>
          </div>

          <div className="border"> </div>

          <div className="profile-nick-name-all">
            <div className="profile-nick-name">
              {" "}
              Alias 1:<span className="nick-name">Sophia</span>
            </div>
            <div className="profile-nick-name">
              {" "}
              Alias 2: <span className="nick-name">はな</span>
            </div>
          </div>
        </div>

        <div className="flex-end">
          <div className="profile-infor-password">Change password</div>
        </div>
      </div>

      {/* profile-detail */}
      <div className="profile-detail">
        <div className="profile-detail-top">
          <div className="profile-detail-top-header">
            <div className="profile-detail-heading">Job Information</div>
            <img src={icon_check} className="profile-detail-iconCheck" />
          </div>

          <div className="profile-detail-top-content">
            <div className="profile-detail-top-info">
              <div className="top-info-title">
                ID:<span className="top-info-value">{data.id}</span>
              </div>
              <div className="top-info-title">
                Department: <span className="top-info-value">Takumi</span>
              </div>
            </div>
            <div className="profile-detail-top-info">
              <div className="top-info-title">
                Work start date:
                <span className="top-info-value">{data["date-start"]}</span>
              </div>
              <div className="top-info-title">
                Work end date:{" "}
                <span className="top-info-value">{data["date-end"]}</span>
              </div>
            </div>
            <div className="profile-detail-top-info">
              <div className="top-info-title">
                Year experiences:
                <span className="top-info-value">{data.experiences}</span>
              </div>
              <div className="top-info-title">
                Work status:
                <span className="top-info-value">{data["work-status"]}</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="profile-detail-center">
          <div className="profile-detail-center-header">
            <div className="profile-detail-center-heading">My Skills</div>
            <img src={icon_check} className="profile-detail-iconCheck" />
          </div>
          <div className="profile-detail-center-content">
            <div className="profile-detail-center-part">
              <div className="profile-detail-info-domain">Domain: BA</div>
              <div className="detail-center-info-part">
                <div className="info-skill">
                  Skill 1: <span>BA</span>
                </div>
                <div className="info-level">
                  Level 1: <span>Middle</span>
                </div>
              </div>

              <div className="detail-center-info-part">
                <div className="info-skill">
                  Skill 2:<span>PO</span>
                </div>
                <div className="info-level">
                  Level 2: <span>Senior</span>
                </div>
              </div>
            </div>
            <div className="proflie-detail-line"></div>

            <div className="profile-detail-center-part">
              <div className="profile-detail-info-languages">Languages</div>
              <div className="profile-detail-info-part">
                TOEIC: <span>750</span>
              </div>
              <div className="profile-detail-info-part">
                Japanese: <span>N2</span>
              </div>
              <div className="profile-detail-info-part">
                Others:{" "}
                <span>
                  Korean: Topik I - Level 2. Can communicate at a basic level
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-detail-bottom">
          <div className="profile-detail-bottom-header">
            <div className="profile-detail-bottom-heading">CV Information</div>
            <img src={icon_check} className="profile-detail-iconCheck" />
          </div>

          <div className="profile-detail-bottom-content">
            <div className="profile-detail-bottom-part">
              <div className="profile-deatial-bottom-info">Link cv</div>
              <div className="detail-info-cv">
                <div className="info-cv">CV-EN</div>

                <div className="info-link-cv">
                  https://www.topcv.vn/xem-cv/UldTAQdWDwQCUgdWAVFfDgoEVAQAVFgFDwMFUgba68
                </div>
              </div>
              <div className="detail-info-cv">
                <div className="info-cv">CV-JP</div>

                <div className="info-link-cv">
                  https://wwwtopcv.vn/xem-cv/skjfa
                </div>
              </div>
              <div className="detail-info-cv">
                <div className="info-cv">CV-VN</div>

                <div className="info-link-cv">
                  https://wwwtopcv.vn/xem-cv/sjnfaiwpdfgaS
                </div>
              </div>
            </div>

            <div className="profile-detail-line"></div>

            <div className="profile-detail-bottom-part">
              <div className="profile-deatial-bottom-info">Note</div>
              <div className="detail-info-note">This is my note.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
