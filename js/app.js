// ================= APPLICATION STATE =================
let balance = 89400;
const transactions = [];

// ================= CORE UI SELECTORS =================
const loginView = document.getElementById("login-view");
const dashboardView = document.getElementById("dashboard-view");

const panels = {
  addMoney: document.getElementById("panel-add-money"),
  cashOut: document.getElementById("panel-cash-out"),
  history: document.getElementById("panel-history"),
};

const navButtons = {
  addMoney: document.getElementById("nav-add-money"),
  cashOut: document.getElementById("nav-cash-out"),
  history: document.getElementById("nav-history"),
};

// ================= CORE HELPER FUNCTIONS =================
function updateBalanceUI() {
  document.getElementById("account-balance").innerText = balance;
}

function switchPanel(activeKey) {
  Object.keys(panels).forEach((key) => {
    if (key === activeKey) {
      panels[key].classList.remove("hidden");
      navButtons[key].classList.add("btn-active", "btn-primary");
    } else {
      panels[key].classList.add("hidden");
      navButtons[key].classList.remove("btn-active", "btn-primary");
    }
  });
}

function appendTransaction(type, amount) {
  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  transactions.unshift({ type, amount, timestamp }); // Pushes new transactions to top
  renderHistory();
}

function renderHistory() {
  const container = document.getElementById("transaction-container");
  if (transactions.length === 0) return;

  container.innerHTML = transactions
    .map(
      (tx) => `
    <div class="flex justify-between items-center bg-neutral-900 border border-neutral-800 p-2 rounded-lg text-xs">
      <div>
        <span class="font-bold ${tx.type === "Add Money" ? "text-success" : "text-error"}">${tx.type}</span>
        <div class="text-[10px] text-neutral-500">${tx.timestamp}</div>
      </div>
      <span class="font-semibold text-white">${tx.type === "Add Money" ? "+" : "-"}${tx.amount} BDT</span>
    </div>
  `,
    )
    .join("");
}

// ================= EVENT EVENT HANDLERS =================

// 1. Authentication Handler
document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = document.getElementById("login-phone").value.trim();
  const pin = document.getElementById("login-pin").value;

  if (phone === "5" && pin === "1234") {
    loginView.classList.add("hidden");
    dashboardView.classList.remove("hidden");
    updateBalanceUI();
  } else {
    alert("Invalid credentials! Hint: Use Phone '5' and PIN '1234'.");
  }
});

// 2. Tab Navigation Switcher Engine
navButtons.addMoney.addEventListener("click", () => switchPanel("addMoney"));
navButtons.cashOut.addEventListener("click", () => switchPanel("cashOut"));
navButtons.history.addEventListener("click", () => switchPanel("history"));

// 3. Form Action Execution: Add Money
document
  .getElementById("form-add-money")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin").value;

    if (pin !== "1234") {
      alert("Security Violation: Invalid PIN.");
      return;
    }

    balance += amount;
    updateBalanceUI();
    appendTransaction("Add Money", amount);
    alert(`Added ${amount} BDT Successfully!`);
    this.reset();
  });

// 4. Form Action Execution: Cash Out
document
  .getElementById("form-cash-out")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById("withdraw-amount").value);
    const pin = document.getElementById("withdraw-pin").value;

    if (pin !== "1234") {
      alert("Security Violation: Invalid PIN.");
      return;
    }
    if (amount > balance) {
      alert("Transaction Denied: Insufficient Funds available.");
      return;
    }

    balance -= amount;
    updateBalanceUI();
    appendTransaction("Cash Out", amount);
    alert(`Successfully withdrew ${amount} BDT!`);
    this.reset();
  });
