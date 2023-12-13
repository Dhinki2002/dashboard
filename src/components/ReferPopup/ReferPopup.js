
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
    <div className="rounded-[var(--br-base)] bg-[color:var(--white)] w-[567.16px] h-[375.9px] overflow-hidden max-w-full max-h-full text-left text-[20px] text-[color:var(--black)] absolute left-[384px] top-[256px]">
      <button className="cursor-pointer bg-transparent absolute w-[27.136px] h-[27.136px] overflow-hidden p-0 border-0 left-[516.3px] top-[27.136px]" onClick={onClose}>
        <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[33%] right-[32.99%] top-[32.99%] bottom-[33%]" alt="" src="/vector3.svg" />
      </button>
      <div className="absolute left-[calc(50%_-_247.16px)] flex flex-col items-center justify-start gap-[var(--gap-29xl)] top-[30.46px]">
        <div className="flex flex-col justify-start  items-start gap-[var(--gap-5xl)]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">Invitation</div>
            <div className="relative tracking-[-0.02em] leading-[35.58px] text-[length:var(--font-size-lg)] text-[color:var(--icon-grey)] mt-[-6.8px] ">
              Share this invite link or coupon code to avail exiciting deal
            </div>
          </div>
          <div className="flex flex-col justify-start  items-center gap-[var(--gap-xl)] text-[length:var(--font-size-xl)] text-[color:var(--icon-grey)]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="rounded-[var(--br-xs)] border-[color:var(--color-gainsboro-400)] box-border w-[494px] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid">
                    <div className="flex flex-row items-end justify-center">
                      <div className="relative">{inviteLink}</div>
                    </div>
                    <CopyToClipboard text={inviteLink} onCopy={handleCopy}>
                      <img
                        className="relative w-[20.352px] h-[20.352px] overflow-hidden shrink-0"
                        alt=""
                        src="/materialsymbolsfilecopyoutline.svg"
                      />
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="items-start text-[color:var(--black)] flex flex-col justify-start ">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="rounded-[var(--br-xs)] border-[color:var(--color-gainsboro-400)] box-border w-[494.336px] flex flex-row items-center justify-between pt-[var(--padding-base)] pr-[var(--padding-5xl)] pb-[var(--padding-base)] pl-[var(--padding-5xl)] border-[1px] border-solid">
                    <div className="flex flex-row items-end justify-center gap-[var(--gap-mini)]">
                      <div className="relative">Coupon code:</div>
                      <div className="relative text-[color:var(--icon-grey)]">{couponCode}</div>
                    </div>
                    <CopyToClipboard text={couponCode} onCopy={handleCopy}>
                      <img
                        className="relative w-[20.35px] h-[20.35px] overflow-hidden shrink-0"
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
        <div className="flex flex-row items-start justify-start">
          <button className="cursor-pointer pt-[var(--padding-base)] pr-[var(--padding-xl)] pb-[var(--padding-base)] pl-[var(--padding-xl)] bg-[color:var(--purple)] rounded-[var(--br-5xs)] overflow-hidden flex flex-row items-center justify-center gap-[var(--gap-3xs)] border-0">
            <div className="relative text-[length:var(--font-size-xl)] text-[color:var(--white)] text-left">Share invite link</div>
            <img
              className="relative w-[20.352px] h-[20.352px] overflow-hidden shrink-0"
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