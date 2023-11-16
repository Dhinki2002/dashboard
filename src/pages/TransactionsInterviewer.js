import InterviewerNavbar from "../components/InterviewerNavbar";
import InterviewerHeader from "../components/InterviewerHeader";
import "./TransactionsInterviewer.css";
import { Helmet } from "react-helmet";

const TransactionsInterviewer = () => {
  const counter = 1;

  const transactions = [
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Complete",
    },
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Complete",
    },
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Processing",
    },
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364346664",
      Status: "Failed",
    },
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
    {
      Date: "17-09-23",
      TransactionNumber: "2414352364352353",
      Status: "Complete",
    },
  ];
  

  const getTextClass = (text) => {
    switch (text) {
      case "Complete":
        return "legend-indicator-14";
      case "Processing":
        return "legend-indicator-16";
      case "Failed":
        return "legend-indicator-17";
      default:
        return ""; // default class if needed
    }
  };

  return (
    <div className="transactions-interviewer">
      <Helmet>
        <title>Transaction Interviewer</title>
        <meta name="desc"
          content="Transaction Interviewer" />
      </Helmet>
      <InterviewerNavbar counter={counter} />
      <InterviewerHeader />
      <div className="frame-parent56">
        <div className="frame-parent57">
          <div className="transactions-wrapper">
            <div className="transactions">Transactions</div>
          </div>
          <button className="report-a-problem-wrapper">
            <div className="report-a-problem">Report a problem</div>
          </button>
        </div>
        <div className="frame-parent58">
          <div className="frame-parent59">
            <div className="frame-wrapper30">
              <div className="next-payment-date-parent">
                <div className="next-payment-date">Next Payment date:</div>
                <div className="october-2023">27 October 2023</div>
              </div>
            </div>
            <div className="frame-wrapper30">
              <div className="next-payment-date-parent">
                <div className="next-payment-date">Last Payment date:</div>
                <div className="october-2023">27 July 2023</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper32">
            <div className="frame-parent60">
              <div className="frame-parent61">
                <div className="date-parent">
                  <div className="transactions">Date</div>
                  <div className="download-parent">
                    {transactions.map((transaction, index) => (
                      <div className="transactions" key={index}>
                        {transaction.Date}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="date-parent">
                  <div className="transactions">Transaction Id</div>
                  <div className="download-parent">
                    {transactions.map((transaction, index) => (
                      <div className="transactions" key={index}>
                        {transaction.TransactionNumber}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="status-parent">
                  <div className="transactions">Status</div>
                  <div className="legend-label-3-parent">
                    {transactions.map((text, index) => (
                      <div className="legend-label-31" key={index}>
                        <div className={`${getTextClass(text.Status)}`} />
                        <div className="complete">{text.Status}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="date-parent">
                  <div className="invoice-wrapper">
                    <div className="transactions">Invoice</div>
                  </div>
                  <div className="download-parent">
                    {transactions.map((_, index) => (
                      <div className="download" key={index}>
                        Download
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="line-parent2">
                {transactions.map((_, index) => (
                  <div className="frame-child37" key={index} />
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
