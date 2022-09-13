
import { moneyFormat } from '../helpers'

export default function Header({ total, money }) {
  return (
    <>
      {total > 0 && moneyFormat(money - total) !== 0 && (
        <div className="header">
          You have  <span>${moneyFormat(money - total)}</span>money to spend.
        </div>
      )}  
      {money - total === 0 && (
        <div className="header">You have no money left to spend.</div>
      )}
      {total === 0 && (
        <div className="header">
          You have<span>${moneyFormat(money)}</span> money to spend.
        </div>
      )}
      <style jsx>
        {`
          .header {
            position: sticky;
            top: 0;
            background: linear-gradient(to bottom, green, greenyellow);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 24px;
            letter-spacing: 1px;
          }
          .header span {
            margin: 0 10px;
            font-weight: bold;
          }
        `}
      </style>
    </>
  )
}
