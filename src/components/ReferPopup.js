import "./ReferPopup.css";

const ReferPopup = ({ onClose }) => {
  return (
    <div className="referpopup">
      <button className="basilcross-outline9" onClick={onClose}>
        <img className="vector-icon31" alt="" src="/vector3.svg" />
      </button>
      <div className="frame-parent209">
        <div className="frame-parent210">
          <div className="invitation-parent">
            <div className="invitation">Invitation</div>
            <div className="share-this-invite">
              Share this invite link or coupon code to avail exiciting deal
            </div>
          </div>
          <div className="frame-parent211">
            <div className="invitation-parent">
              <div className="frame-wrapper82">
                <div className="invitation-parent">
                  <div className="frame-parent212">
                    <div className="invite-linkdontknowhow-wrapper">
                      <div className="invite-linkdontknowhow">
                        invite-link.dontknowhow
                      </div>
                    </div>
                    <img
                      className="material-symbolsfile-copy-out-icon"
                      alt=""
                      src="/materialsymbolsfilecopyoutline.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent213">
              <div className="line-parent11">
                <div className="frame-child163" />
                <div className="invite-linkdontknowhow">or</div>
              </div>
              <div className="frame-child163" />
            </div>
            <div className="frame-wrapper84">
              <div className="frame-wrapper82">
                <div className="invitation-parent">
                  <div className="frame-parent212">
                    <div className="coupon-code-parent">
                      <div className="invite-linkdontknowhow">Coupon code:</div>
                      <div className="ak">2307AK</div>
                    </div>
                    <img
                      className="material-symbolsfile-copy-out-icon"
                      alt=""
                      src="/materialsymbolsfilecopyoutline.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper82">
          <button className="share-invite-link-parent">
            <div className="share-invite-link">Share invite link</div>
            <img
              className="material-symbolsfile-copy-out-icon"
              alt=""
              src="/materialsymbolsshareoutline.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferPopup;
