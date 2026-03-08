import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type TxType = 'income' | 'expense';

interface Transaction {
  id: string;
  date: string;
  type: TxType;
  category: string;
  description: string;
  amount: number;
  denominations?: Record<number, number>;
}

const INCOME_CATEGORIES = ['Offering', 'Tithe', 'Donation', 'Fundraiser', 'Other Income'];
const EXPENSE_CATEGORIES = ['Rent', 'Utilities', 'Events', 'Maintenance', 'Stationery', 'Food', 'Outreach', 'Other Expense'];
const DENOMINATIONS = [500, 200, 100, 50, 20, 10, 5, 2, 1];
const emptyDenominations = (): Record<number, number> =>
  Object.fromEntries(DENOMINATIONS.map((d) => [d, 0]));

const STORAGE_KEY = 'zbc_accounting_transactions';

const formatINR = (amount: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amount);

const today = () => new Date().toISOString().slice(0, 10);

const Accounting = () => {
  const navigate = useNavigate();

  // Auth guard
  useEffect(() => {
    if (sessionStorage.getItem('zbc_admin_auth') !== 'true') {
      navigate('/admin');
    }
  }, [navigate]);

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });

  const [form, setForm] = useState({
    date: today(),
    type: 'income' as TxType,
    category: INCOME_CATEGORIES[0],
    description: '',
    amount: '',
  });

  const [filterMonth, setFilterMonth] = useState(() => today().slice(0, 7));
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [denominations, setDenominations] = useState<Record<number, number>>(emptyDenominations);
  const [expandedTx, setExpandedTx] = useState<string | null>(null);

  const isOffering = form.type === 'income' && form.category === 'Offering';
  const denomTotal = DENOMINATIONS.reduce((sum, d) => sum + d * (denominations[d] || 0), 0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const handleFormChange = (field: string, value: string) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      // Reset category when type changes
      if (field === 'type') {
        updated.category = value === 'income' ? INCOME_CATEGORIES[0] : EXPENSE_CATEGORIES[0];
      }
      return updated;
    });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = isOffering ? denomTotal : parseFloat(form.amount);
    if (!amount || amount <= 0) return;

    const nonZeroDenoms = isOffering
      ? Object.fromEntries(Object.entries(denominations).filter(([, v]) => v > 0))
      : undefined;

    const tx: Transaction = {
      id: Date.now().toString(),
      date: form.date,
      type: form.type,
      category: form.category,
      description: form.description.trim(),
      amount,
      ...(nonZeroDenoms && Object.keys(nonZeroDenoms).length > 0 && { denominations: nonZeroDenoms }),
    };

    setTransactions((prev) => [tx, ...prev].sort((a, b) => b.date.localeCompare(a.date)));
    setForm({ date: today(), type: 'income', category: INCOME_CATEGORIES[0], description: '', amount: '' });
    setDenominations(emptyDenominations());
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    setDeleteId(null);
  };

  const filtered = transactions.filter((t) => t.date.startsWith(filterMonth));
  const totalIncome = filtered.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totalExpense = filtered.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = totalIncome - totalExpense;

  const handleLogout = () => {
    sessionStorage.removeItem('zbc_admin_auth');
    navigate('/admin');
  };

  const exportCSV = () => {
    const denomHeaders = DENOMINATIONS.map((d) => `₹${d}`);
    const rows = [
      ['Date', 'Type', 'Category', 'Description', 'Amount (INR)', ...denomHeaders],
      ...filtered.map((t) => [
        t.date, t.type, t.category, t.description, t.amount.toFixed(2),
        ...DENOMINATIONS.map((d) => (t.denominations?.[d] || '').toString()),
      ]),
    ];
    const csv = rows.map((r) => r.map((v) => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zbc-accounts-${filterMonth}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold font-serif text-white">Church Accounts</h1>
          <p className="text-gray-500 text-xs">Zion Brethren Assembly</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">← Website</a>
          <button
            onClick={handleLogout}
            className="text-xs text-red-400 hover:text-red-300 border border-red-900 hover:border-red-700 px-3 py-1.5 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Month Filter + Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <label className="text-gray-400 text-sm font-medium">Month:</label>
            <input
              type="month"
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={() => setShowForm((v) => !v)}
              className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {showForm ? 'Cancel' : 'Add Entry'}
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SummaryCard label="Total Income" amount={totalIncome} color="text-green-400" bg="bg-green-500/10 border-green-800/40" />
          <SummaryCard label="Total Expense" amount={totalExpense} color="text-red-400" bg="bg-red-500/10 border-red-800/40" />
          <SummaryCard
            label="Net Balance"
            amount={balance}
            color={balance >= 0 ? 'text-blue-400' : 'text-orange-400'}
            bg={balance >= 0 ? 'bg-blue-500/10 border-blue-800/40' : 'bg-orange-500/10 border-orange-800/40'}
          />
        </div>

        {/* Add Entry Form */}
        {showForm && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-5">New Transaction</h2>
            <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => handleFormChange('date', e.target.value)}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Type</label>
                <div className="flex gap-2">
                  {(['income', 'expense'] as TxType[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleFormChange('type', t)}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${
                        form.type === t
                          ? t === 'income' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => handleFormChange('category', e.target.value)}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {(form.type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {isOffering ? (
                <div className="sm:col-span-2">
                  <label className="block text-xs text-gray-500 mb-2">Denomination Breakdown</label>
                  <div className="grid grid-cols-3 gap-3">
                    {DENOMINATIONS.map((d) => {
                      const count = denominations[d] || 0;
                      const subtotal = d * count;
                      return (
                        <div key={d} className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-semibold text-gray-300">
                              {d >= 10 ? `₹${d} note` : `₹${d} coin`}
                            </span>
                            {subtotal > 0 && (
                              <span className="text-[10px] text-green-400 font-medium">= {formatINR(subtotal)}</span>
                            )}
                          </div>
                          <input
                            type="number"
                            min="0"
                            value={count || ''}
                            onChange={(e) =>
                              setDenominations((prev) => ({
                                ...prev,
                                [d]: Math.max(0, parseInt(e.target.value) || 0),
                              }))
                            }
                            placeholder="0"
                            className="w-full bg-gray-900 text-white border border-gray-700 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                    <span className="text-sm font-medium text-gray-400">Total</span>
                    <span className={`text-xl font-bold font-serif ${denomTotal > 0 ? 'text-green-400' : 'text-gray-600'}`}>
                      {formatINR(denomTotal)}
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Amount (₹)</label>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={form.amount}
                    onChange={(e) => handleFormChange('amount', e.target.value)}
                    placeholder="0.00"
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              <div className="sm:col-span-2">
                <label className="block text-xs text-gray-500 mb-1">Description (optional)</label>
                <input
                  type="text"
                  value={form.description}
                  onChange={(e) => handleFormChange('description', e.target.value)}
                  placeholder="e.g. Sunday morning offering"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-colors"
                >
                  Save Transaction
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Transactions Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Transactions
            </h2>
            <span className="text-gray-600 text-xs">{filtered.length} record{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          {filtered.length === 0 ? (
            <div className="px-6 py-16 text-center text-gray-600 text-sm">
              No transactions for this month. Click "Add Entry" to get started.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-600 text-xs uppercase tracking-wider border-b border-gray-800">
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Description</th>
                    <th className="px-6 py-3 text-right">Amount</th>
                    <th className="px-6 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {filtered.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-800/30 transition-colors group">
                      <td className="px-6 py-3.5 text-gray-400 whitespace-nowrap">{tx.date}</td>
                      <td className="px-6 py-3.5 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                          tx.type === 'income'
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}>
                          {tx.type === 'income' ? '↑' : '↓'} {tx.category}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-gray-400 max-w-xs">
                        <div>
                          {tx.description || <span className="text-gray-700 italic">—</span>}
                        </div>
                        {tx.denominations && (
                          <button
                            onClick={() => setExpandedTx(expandedTx === tx.id ? null : tx.id)}
                            className="text-[10px] text-blue-400 hover:text-blue-300 mt-1 inline-flex items-center gap-1"
                          >
                            {expandedTx === tx.id ? '▾ Hide' : '▸ View'} denominations
                          </button>
                        )}
                        {tx.denominations && expandedTx === tx.id && (
                          <div className="mt-2 grid grid-cols-3 gap-x-4 gap-y-0.5 text-[11px] text-gray-500 bg-gray-800/50 rounded-lg p-2">
                            {DENOMINATIONS.filter((d) => tx.denominations![d] > 0).map((d) => (
                              <div key={d} className="flex justify-between">
                                <span>{d >= 10 ? `₹${d} note` : `₹${d} coin`}</span>
                                <span className="text-gray-400">×{tx.denominations![d]} = {formatINR(d * tx.denominations![d])}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className={`px-6 py-3.5 text-right font-semibold whitespace-nowrap ${
                        tx.type === 'income' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {tx.type === 'income' ? '+' : '-'}{formatINR(tx.amount)}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {deleteId === tx.id ? (
                          <span className="inline-flex gap-2">
                            <button
                              onClick={() => handleDelete(tx.id)}
                              className="text-xs text-red-400 hover:text-red-300 font-semibold"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteId(null)}
                              className="text-xs text-gray-500 hover:text-gray-300"
                            >
                              Cancel
                            </button>
                          </span>
                        ) : (
                          <button
                            onClick={() => setDeleteId(tx.id)}
                            className="text-gray-700 hover:text-red-400 transition-colors"
                            title="Delete"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const SummaryCard = ({ label, amount, color, bg }: { label: string; amount: number; color: string; bg: string }) => (
  <div className={`rounded-2xl border px-5 py-4 ${bg}`}>
    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-2xl font-bold font-serif ${color}`}>
      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(amount)}
    </p>
  </div>
);

export default Accounting;
