"use client";

import { type FormEvent, useMemo, useState } from "react";

type Currency = "USD" | "CAD";
type Frequency = "weekly" | "monthly" | "quarterly" | "yearly";

type SubscriptionItem = {
  id: number;
  name: string;
  amount: number;
  frequency: Frequency;
  currency: Currency;
  includedInSavings: boolean;
};

const frequencyLabels: Record<Frequency, string> = {
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Every 3 months",
  yearly: "Yearly",
};

const monthlyMultiplier: Record<Frequency, number> = {
  weekly: 52 / 12,
  monthly: 1,
  quarterly: 1 / 3,
  yearly: 1 / 12,
};

const currencyFormatter = (currency: Currency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  });

function formatAmount(amount: number, currency: Currency) {
  return currencyFormatter(currency).format(amount);
}

function getTotals(items: SubscriptionItem[]) {
  return (["USD", "CAD"] as Currency[]).map((currency) => {
    const monthly = items
      .filter((item) => item.currency === currency)
      .reduce(
        (total, item) => total + item.amount * monthlyMultiplier[item.frequency],
        0,
      );

    return { currency, monthly, yearly: monthly * 12 };
  });
}

export function SubscriptionCostCalculator() {
  const [items, setItems] = useState<SubscriptionItem[]>([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [formError, setFormError] = useState("");

  const activeItems = useMemo(
    () => items.filter((item) => !item.includedInSavings),
    [items],
  );
  const savingsItems = useMemo(
    () => items.filter((item) => item.includedInSavings),
    [items],
  );
  const activeTotals = useMemo(() => getTotals(activeItems), [activeItems]);
  const savingsTotals = useMemo(() => getTotals(savingsItems), [savingsItems]);

  const addItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericAmount = Number(amount);

    if (!name.trim()) {
      setFormError("Add a subscription name.");
      return;
    }

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setFormError("Enter a price greater than zero.");
      return;
    }

    setItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        name: name.trim(),
        amount: numericAmount,
        frequency,
        currency,
        includedInSavings: false,
      },
    ]);
    setName("");
    setAmount("");
    setFrequency("monthly");
    setCurrency("USD");
    setFormError("");
  };

  const addSampleItems = () => {
    const now = Date.now();
    setItems((currentItems) => [
      ...currentItems,
      {
        id: now,
        name: "Streaming service",
        amount: 18,
        frequency: "monthly",
        currency: "USD",
        includedInSavings: false,
      },
      {
        id: now + 1,
        name: "Cloud storage",
        amount: 10,
        frequency: "monthly",
        currency: "USD",
        includedInSavings: false,
      },
      {
        id: now + 2,
        name: "Annual app plan",
        amount: 90,
        frequency: "yearly",
        currency: "CAD",
        includedInSavings: false,
      },
    ]);
  };

  const toggleSavings = (id: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, includedInSavings: !item.includedInSavings }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <section
      aria-labelledby="calculator-heading"
      className="rounded-2xl border border-[#bcd0ef] bg-[#eef9ff] p-5 shadow-[0_18px_50px_rgba(43,120,255,0.08)] md:p-8"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase text-[#2b7cff]">Free tool</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl" id="calculator-heading">
            Calculate your subscription costs
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#415574]">
            Add subscriptions to see a monthly and yearly total. Mark any item for
            your savings scenario to see what canceling it could free up.
          </p>
        </div>
        <button
          className="rounded-full border border-[#bcd0ef] bg-white px-4 py-2 text-sm font-bold text-[#07143f] transition hover:border-[#2b7cff]"
          onClick={addSampleItems}
          type="button"
        >
          Add sample rows
        </button>
      </div>

      <form className="mt-6 grid gap-3 md:grid-cols-[1.4fr_0.75fr_0.9fr_0.65fr_auto]" onSubmit={addItem}>
        <label className="grid gap-1 text-sm font-bold text-[#415574]">
          Subscription
          <input
            className="min-h-12 rounded-xl border border-[#bcd0ef] bg-white px-3 text-[#07143f] outline-none transition focus:border-[#2b7cff] focus:ring-2 focus:ring-[#2b7cff]/20"
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Music app"
            value={name}
          />
        </label>
        <label className="grid gap-1 text-sm font-bold text-[#415574]">
          Price
          <input
            className="min-h-12 rounded-xl border border-[#bcd0ef] bg-white px-3 text-[#07143f] outline-none transition focus:border-[#2b7cff] focus:ring-2 focus:ring-[#2b7cff]/20"
            inputMode="decimal"
            min="0"
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0.00"
            step="0.01"
            type="number"
            value={amount}
          />
        </label>
        <label className="grid gap-1 text-sm font-bold text-[#415574]">
          Frequency
          <select
            className="min-h-12 rounded-xl border border-[#bcd0ef] bg-white px-3 text-[#07143f] outline-none transition focus:border-[#2b7cff] focus:ring-2 focus:ring-[#2b7cff]/20"
            onChange={(event) => setFrequency(event.target.value as Frequency)}
            value={frequency}
          >
            {Object.entries(frequencyLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-bold text-[#415574]">
          Currency
          <select
            className="min-h-12 rounded-xl border border-[#bcd0ef] bg-white px-3 text-[#07143f] outline-none transition focus:border-[#2b7cff] focus:ring-2 focus:ring-[#2b7cff]/20"
            onChange={(event) => setCurrency(event.target.value as Currency)}
            value={currency}
          >
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
          </select>
        </label>
        <button
          className="mt-auto min-h-12 rounded-xl bg-[#07143f] px-5 text-sm font-bold text-white transition hover:bg-[#10245f]"
          type="submit"
        >
          Add cost
        </button>
      </form>
      {formError ? <p className="mt-3 text-sm font-bold text-[#c2410c]">{formError}</p> : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-5">
          <h3 className="text-lg font-black">Current recurring cost</h3>
          <div aria-live="polite" className="mt-4 grid gap-3 sm:grid-cols-2">
            {activeTotals.map((total) => (
              <div className="rounded-xl border border-[#d9e7f6] p-4" key={total.currency}>
                <p className="text-xs font-bold uppercase text-[#53627a]">{total.currency}</p>
                <p className="mt-1 text-xl font-black text-[#07143f]">
                  {formatAmount(total.monthly, total.currency)}
                  <span className="text-sm font-bold text-[#53627a]"> / month</span>
                </p>
                <p className="mt-1 text-sm text-[#53627a]">
                  {formatAmount(total.yearly, total.currency)} / year
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-[#07143f] p-5 text-white">
          <h3 className="text-lg font-black">Potential savings scenario</h3>
          <div aria-live="polite" className="mt-4 grid gap-3 sm:grid-cols-2">
            {savingsTotals.map((total) => (
              <div className="rounded-xl border border-white/15 bg-white/8 p-4" key={total.currency}>
                <p className="text-xs font-bold uppercase text-[#69ead6]">{total.currency}</p>
                <p className="mt-1 text-xl font-black">
                  {formatAmount(total.monthly, total.currency)}
                  <span className="text-sm font-bold text-[#c7d7ef]"> / month</span>
                </p>
                <p className="mt-1 text-sm text-[#c7d7ef]">
                  {formatAmount(total.yearly, total.currency)} / year
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-black">Your subscriptions</h3>
        {items.length === 0 ? (
          <p className="mt-3 rounded-xl border border-dashed border-[#bcd0ef] bg-white/70 p-4 leading-7 text-[#53627a]">
            Add your first subscription above. This calculator runs in your browser;
            nothing you enter is sent to PayClear.
          </p>
        ) : (
          <ul className="mt-3 grid gap-3">
            {items.map((item) => (
              <li
                className={`flex flex-col gap-4 rounded-xl border bg-white p-4 sm:flex-row sm:items-center sm:justify-between ${
                  item.includedInSavings ? "border-[#69ead6]" : "border-[#d9e7f6]"
                }`}
                key={item.id}
              >
                <div>
                  <p className="font-black text-[#07143f]">{item.name}</p>
                  <p className="mt-1 text-sm text-[#53627a]">
                    {formatAmount(item.amount, item.currency)} {frequencyLabels[item.frequency].toLowerCase()} · {formatAmount(item.amount * monthlyMultiplier[item.frequency], item.currency)} monthly equivalent
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="flex cursor-pointer items-center gap-2 text-sm font-bold text-[#415574]">
                    <input
                      checked={item.includedInSavings}
                      className="h-4 w-4 accent-[#2b7cff]"
                      onChange={() => toggleSavings(item.id)}
                      type="checkbox"
                    />
                    Include in savings
                  </label>
                  <button
                    aria-label={`Remove ${item.name}`}
                    className="rounded-lg px-3 py-2 text-sm font-bold text-[#2b7cff] transition hover:bg-[#eef9ff]"
                    onClick={() => removeItem(item.id)}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="mt-5 text-sm leading-6 text-[#53627a]">
        USD and CAD totals stay separate because exchange rates and card conversion fees change.
        This tool is for planning and does not cancel subscriptions.
      </p>
    </section>
  );
}
