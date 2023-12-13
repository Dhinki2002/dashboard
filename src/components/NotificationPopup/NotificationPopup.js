

const NotificationPopup = ({ onClose }) => {
  return (
    <div className="rounded-[var(--br-5xs)] bg-[color:var(--white)] shadow-[-1px_1.7px_3.3px_rgba(0,0,0,0.15)] w-[215px] h-[248px] overflow-hidden max-w-full max-h-full text-left text-[length:var(--cn-regular-size)] text-[color:var(--black)]">
      <div className="absolute flex items-start justify-start flex-col gap-[var(--gap-12xs)] text-[color:var(--purple)] left-0 top-[37.248px] ">
        <div className="relative bg-[color:var(--color-gray-100)] shadow-[0_1px_1px_rgba(0,0,0,0.03)] w-[215.936px] h-[32.128px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_7.68px)] flex flex-row items-start justify-start gap-[var(--gap-9xs)] left-[13.568px]">
            <div className="relative tracking-[-0.02em] leading-[15px]" />
            <div className="relative tracking-[-0.02em] leading-[15px] text-[color:var(--icon-grey)] ">
              Test scheduled at 12 pm today.
            </div>
          </div>
        </div>
        <div className="relative bg-[color:var(--color-gray-100)] shadow-[0_1px_1px_rgba(0,0,0,0.03)] w-[215.936px] h-[32.128px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_7.68px)] flex flex-row items-start justify-start gap-[var(--gap-9xs)] left-[13.568px]">
            <div className="relative tracking-[-0.02em] leading-[15px]" />
            <div className="relative tracking-[-0.02em] leading-[15px] text-[color:var(--icon-grey)] ">
              Test scheduled at 12 pm today.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-12xs)] text-[color:var(--icon-grey)]  top-[10.71vw]">
        <div className="relative bg-[color:var(--white)] shadow-[0_1px_1px_rgba(0,0,0,0.03)] w-[190.3px] h-[30.128px] overflow-hidden shrink-0 left-[13.568px]">
          <div className="relative tracking-[-0.02em] leading-[14.84px] text-[color:var(--icon-grey)] -12-pm-today-wrapper">
            <div className="relative tracking-[-0.02em] leading-[14.84px] ">Test scheduled at 12 pm today.</div>
          </div>
        </div>
        <div className="relative bg-[color:var(--white)] shadow-[0_1px_1px_rgba(0,0,0,0.03)] w-[190.3px] h-[30.128px] overflow-hidden shrink-0 left-[13.568px] ">
          <div className="relative tracking-[-0.02em] leading-[14.84px] text-[color:var(--icon-grey)] -12-pm-today-wrapper">
            <div className="relative tracking-[-0.02em] leading-[14.84px] ">Test scheduled at 12 pm today.</div>
          </div>
        </div>
        <div className="relative bg-[color:var(--white)] shadow-[0_1px_1px_rgba(0,0,0,0.03)] w-[190.3px] h-[30.128px] overflow-hidden shrink-0 left-[13.568px]">
          <div className="relative tracking-[-0.02em] leading-[14.84px] text-[color:var(--icon-grey)] -12-pm-today-wrapper">
            <div className="relative tracking-[-0.02em] leading-[14.84px] ">Test scheduled at 12 pm today.</div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer bg-transparent absolute w-[16.9px] h-[16.9px] overflow-hidden p-0 border-0 left-[190px] top-[10.11px]" onClick={onClose}>
        <img className="absolute h-[34%] w-[34.01%] max-w-full overflow-hidden max-h-full left-[32.99%] right-[33%] top-[32.99%] bottom-[33.01%]" alt="" src="/vector1.svg" />
      </button>
      <div className="absolute tracking-[-0.02em] leading-[14.8px] left-[13.56px] text-[length:var(--font-size-sm)] top-[15.232px]  ">Notifications</div>
      <div className="absolute tracking-[-0.02em] leading-[14.8px] left-[13.56px] top-[116px] ">Older notifications</div>
    </div>
  );
};

export default NotificationPopup;
