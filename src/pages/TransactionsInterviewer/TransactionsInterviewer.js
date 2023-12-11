import InterviewerNavbar from '../../components/InterviewerNavbar/InterviewerNavbar.js';
import InterviewerHeader from '../../components/InterviewerHeader/InterviewerHeader.js';
// import "./TransactionsInterviewer.css";
import { Helmet } from "react-helmet";

const TransactionsInterviewer = () => {
  const counter = 1;

  const transactions = [
    {
      id:1,
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Complete",
    },
    {
      id:2,
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Complete",
    },
    {
      id:3,
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Processing",
    },
    {
      id:4,
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Failed",
    },
    {
      id:5,
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
    {
      id:6,
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
    {
      id:7,
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
    {
      id:8,
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
  ];
  

  const getTextClass = (text) => {
    switch (text) {
      case "Complete":
        return "relative rounded-[var(--br-81xl)] bg-[color:var(--color-mediumseagreen)] w-[0.86vw] h-[0.86vw] top-[1.1vw]";
      case "Processing":
        return "relative rounded-[var(--br-81xl)] bg-[color:var(--incomplete)] w-[0.86vw] h-[0.86vw]  top-[1.1vw]";
      case "Failed":
        return "relative rounded-[var(--br-81xl)] bg-[color:var(--danger)] w-[0.86vw] h-[0.86vw]  top-[1.1vw]";
      default:
        return ""; // default class if needed
    }
  };

  return (
    <div className="relative bg-[color:var(--color-ghostwhite-100)] w-full h-[64.95vw] overflow-hidden text-left text-[length:var(--font-size-5xl)] text-[color:var(--color-darkslategray-200)]
    font-family: var(--font-avenir-lt-std)">
      <Helmet>
        <title>Transaction Interviewer</title>
        <meta name="desc"
          content="Transaction Interviewer" />
      </Helmet>
      <InterviewerNavbar counter={counter} />
      <InterviewerHeader />
      <div className="flex flex-col items-start justify-start absolute gap-[var(--gap-lgi)] left-[21.3vw] top-[10.12vw]">
        <div className="flex flex-row items-center justify-start gap-[57.74vw] ">
          <div className="flex flex-col items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[2.78vw] ">Transactions</div>
          </div>
          <button className="flex flex-row items-center  cursor-pointer border-[color:var(--danger)] pt-[var(--padding-5xs)] pr-[var(--padding-base)] pb-[var(--padding-5xs)] pl-[var(--padding-base)] bg-[color:var(--color-crimson-200)] rounded-[var(--br-9xs)] overflow-hidden justify-center border-[0.07vw] border-solid">
            <div className="relative text-[length:var(--font-size-sm)] text-[color:var(--danger)] text-left
    font-family: var(--font-avenir-lt-std)">Report a problem</div>
          </button>
        </div>
        <div className="flex-col items-start justify-start gap-[var(--gap-5xl)] text-[length:var(--font-size-lg)] text-[color:var(--text)]">
          <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)]">
            <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[22.35vw] h-[6.75vw] overflow-hidden shrink-0">
              <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-5xs)] left-[1.59vw] top-[1.32vw]">
                <div className="relative opacity-80">Next Payment date:</div>
                <div className="relative opacity-80 text-[length:var(--font-size-5xl)] ">27 October 2023</div>
              </div>
            </div>
            <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[22.35vw] h-[6.75vw] overflow-hidden shrink-0">
              <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-5xs)] left-[1.59vw] top-[1.32vw]">
                <div className="relative opacity-80">Last Payment date:</div>
                <div className="relative opacity-80 text-[length:var(--font-size-5xl)]">27 July 2023</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[var(--br-base)] bg-[color:var(--white)] w-[76.59vw] h-[31.15vw] text-[length:var(--font-size-base)] text-[color:var(--icon-grey)] top-[2vw]">
            <div className="absolute w-[73.94vw] h-[28.84vw] left-[1.32vw] top-[1.06vw]">
              <div className="flex items-start justify-start absolute left-[calc(50%_-_36.21vw)] flex-row gap-[14.88vw] top-[0vw]">
                <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)] flex-col gap-[var(--gap-11xs)] ">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Date</div>
                  <div className="flex items-start justify-start flex-col gap-[var(--gap-5xs)] text-[color:var(--color-darkslategray-200)]">
                    {transactions.map((transaction) => (
                      <div className="relative tracking-[-0.02em] leading-[2.78vw] top-[-0.4vw]" key={transaction.id}>
                        {transaction.Date}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)] flex-col gap-[var(--gap-11xs)]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw] ">Transaction Id</div>
                  <div className="flex items-start justify-start flex-col gap-[var(--gap-5xs)] text-[color:var(--color-darkslategray-200)]">
                    {transactions.map((transaction) => (
                      <div className="relative tracking-[-0.02em] leading-[2.78vw] top-[-0.3vw]" key={transaction.id}>
                        {transaction.TransactionNumber}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start flex-col items-start gap-[0.86vw]">
                  <div className="relative tracking-[-0.02em] leading-[2.78vw]">Status</div>
                  <div className="flex-col items-start gap-[var(--gap-15xl)] text-[color:var(--light-base-chart-title)] flex justify-start">
                    {transactions.map((text) => (
                      <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]" key={text.id}>
                        <div className={`${getTextClass(text.Status)}`} />
                        <div className="relative tracking-[0.01vw] leading-[1.06vw] top-[1vw]">{text.Status}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[var(--gap-xl)] flex-col gap-[var(--gap-11xs)]">
                  <div className="flex justify-start flex-row items-center">
                    <div className="relative tracking-[-0.02em] leading-[2.78vw]">Invoice</div>
                  </div>
                  <div className="flex items-start justify-start flex-col gap-[var(--gap-5xs)] text-[color:var(--color-darkslategray-200)]">
                    {transactions.map((transaction) => (
                      <div className="relative underline tracking-[-0.02em] leading-[2.78vw] top-[-0.4vw]" key={transaction.id}>
                        Download
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-start justify-start gap-[var(--gap-31xl)] left-0 top-[2.51vw]">
                {transactions.map((transaction) => (
                  <div className="relative border-t-[color:var(--icon-grey)] box-border w-[74.01vw] h-[0.07vw] opacity-[0.18] border-t-[0.07vw] border-solid" key={transaction.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsInterviewer;
