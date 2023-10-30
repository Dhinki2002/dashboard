import "./ReferPopup.css";
import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReferPopup = ({ onClose }) => {
  const [inviteLink, setInviteLink] = useState("invite-link.dontknowhow");
  const [couponCode, setCouponCode] = useState("2307AK");

  const handleCopy = (text) => {
    toast.success("Copied to clipboard!", {
      autoClose: 300, // Duration in milliseconds
      hideProgressBar: true, // Hide the progress bar
    });
};
    
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
                      <div className="invite-linkdontknowhow">{inviteLink}</div>
                    </div>
                    <CopyToClipboard text={inviteLink} onCopy={handleCopy}>
                      <img
                        className="material-symbolsfile-copy-out-icon"
                        alt=""
                        src="/materialsymbolsfilecopyoutline.svg"
                      />
                    </CopyToClipboard>
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
                      <div className="ak">{couponCode}</div>
                    </div>
                    <CopyToClipboard text={couponCode} onCopy={handleCopy}>
                      <img
                        className="material-symbolsfile-copy-out-icon"
                        alt=""
                        src="/materialsymbolsfilecopyoutline.svg"
                      />
                    </CopyToClipboard>
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
      <ToastContainer />
    </div>
  );
};

export default ReferPopup;
