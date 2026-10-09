
import "./App.css";

const transactions = [
  { id: 1, name: "Monthly Salary", category: "Income", date: "Oct 08, 2026", amount: 30000, type: "income", icon: "💰" },
  { id: 2, name: "Grocery Shopping", category: "Food", date: "Oct 07, 2026", amount: 1500, type: "expense", icon: "🛒" },
  { id: 3, name: "Electricity Bill", category: "Bills", date: "Oct 06, 2026", amount: 850, type: "expense", icon: "💡" },
  { id: 4, name: "Freelance Work", category: "Income", date: "Oct 05, 2026", amount: 5000, type: "income", icon: "💻" },
  { id: 5, name: "Travel Expenses", category: "Transport", date: "Oct 04, 2026", amount: 600, type: "expense", icon: "🚕" },
];

const spending = [
  { day: "Mon", amount: 35 },
  { day: "Tue", amount: 60 },
  { day: "Wed", amount: 45 },
  { day: "Thu", amount: 80 },
  { day: "Fri", amount: 50 },
  { day: "Sat", amount: 95 },
  { day: "Sun", amount: 40 },
];

function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">S</div>
          <span>SpendSmart</span>
        </div>

        <p className="menu-heading">MENU</p>

        <nav className="navigation">
          <a href="#dashboard" className="nav-link active">
            <span>▦</span> Dashboard
          </a>
          <a href="#transactions" className="nav-link">
            <span>↔</span> Transactions
          </a>
          <a href="#budgets" className="nav-link">
            <span>◉</span> Budgets
          </a>
          <a href="#reports" className="nav-link">
            <span>▥</span> Reports
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">?</div>
            <strong>Need help?</strong>
            <p>Manage your money with confidence.</p>
          </div>
          <div className="profile">
            <div className="avatar">U</div>
            <div>
              <strong>Your Profile</strong>
              <p>Personal Account</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <div>
            <p className="greeting">Welcome back!</p>
            <h1>Financial Dashboard</h1>
          </div>
          <div className="topbar-right">
            <span className="date-label">📅 October 2026</span>
            <button className="primary-button" onClick={() => alert("We'll add the transaction form next!")}>
              + Add Transaction
            </button>
          </div>
        </header>

        <section className="summary-grid">
          <div className="summary-card balance-card">
            <div className="card-top">
              <span>Total Balance</span>
              <span className="summary-icon purple">₹</span>
            </div>
            <h2>₹31,050</h2>
            <p className="card-note">Your current balance</p>
          </div>

          <div className="summary-card">
            <div className="card-top">
              <span>Total Income</span>
              <span className="summary-icon green">↗</span>
            </div>
            <h2>₹35,000</h2>
            <p className="card-note positive">↑ Money received</p>
          </div>

          <div className="summary-card">
            <div className="card-top">
              <span>Total Expenses</span>
              <span className="summary-icon red">↘</span>
            </div>
            <h2>₹2,950</h2>
            <p className="card-note negative">↓ Money spent</p>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel spending-panel" id="reports">
            <div className="panel-header">
              <div>
                <h3>Spending Overview</h3>
                <p>Your spending activity this week</p>
              </div>
              <select defaultValue="week" aria-label="Spending period">
                <option value="week">This week</option>
                <option value="month">This month</option>
              </select>
            </div>

            <div className="chart">
              {spending.map((item) => (
                <div className="chart-column" key={item.day}>
                  <span className="bar-value">₹{item.amount * 100}</span>
                  <div className="bar-track">
                    <div
                      className={`bar ${item.day === "Sat" ? "highlight-bar" : ""}`}
                      style={{ height: `${item.amount}%` }}
                    ></div>
                  </div>
                  <span className="bar-label">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel budget-panel" id="budgets">
            <div className="panel-header">
              <div>
                <h3>Monthly Budget</h3>
                <p>Your spending limit</p>
              </div>
              <span className="budget-icon">◎</span>
            </div>

            <h2>₹2,950 <span>/ ₹10,000</span></h2>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
            <p className="budget-caption">29.5% of your budget used</p>
            <div className="budget-message">
              <span>✓</span>
              <p>You're within your monthly budget. Keep it up!</p>
            </div>
          </div>
        </section>

        <section className="panel transactions-panel" id="transactions">
          <div className="panel-header">
            <div>
              <h3>Recent Transactions</h3>
              <p>Keep track of your latest activity</p>
            </div>
            <a href="#transactions" className="view-all">View all →</a>
          </div>

          <div className="transaction-table">
            <div className="transaction-row table-heading">
              <span>TRANSACTION</span>
              <span>CATEGORY</span>
              <span>DATE</span>
              <span className="amount-cell">AMOUNT</span>
            </div>

            {transactions.map((transaction) => (
              <div className="transaction-row" key={transaction.id}>
                <div className="transaction-name">
                  <div className="transaction-icon">{transaction.icon}</div>
                  <strong>{transaction.name}</strong>
                </div>
                <span>
                  <span className={`category-badge ${transaction.type}`}>
                    {transaction.category}
                  </span>
                </span>
                <span className="transaction-date">{transaction.date}</span>
                <strong className={`amount-cell ${transaction.type}`}>
                  {transaction.type === "income" ? "+" : "-"}₹
                  {transaction.amount.toLocaleString("en-IN")}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 SpendSmart</span>
          <span>Manage your money, achieve your goals.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;