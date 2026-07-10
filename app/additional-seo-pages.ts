export type AdditionalSeoPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  breadcrumb: string;
  cta: string;
  calculator?: boolean;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const additionalSeoPages: AdditionalSeoPage[] = [
  {
    slug: "stop-wasting-money-subscriptions",
    eyebrow: "Subscription spending guide",
    title: "Stop Wasting Money on Subscriptions You Do Not Use",
    description:
      "Learn how to stop wasting money on unused subscriptions. Find recurring charges, review what to keep, and use PayClear to plan renewals privately.",
    intro:
      "Subscriptions are convenient because they keep working quietly in the background. That is also why an unused service can stay on a card for months. A simple review system makes recurring costs visible before the next renewal, so you can decide what still earns a place in your budget.",
    breadcrumb: "Stop wasting money on subscriptions",
    cta: "Make every recurring charge visible before it renews.",
    sections: [
      {
        title: "Why unused subscriptions are easy to miss",
        body: [
          "A subscription rarely looks urgent on its own. A streaming plan, app upgrade, cloud-storage tier, game pass, fitness membership, or software tool may renew on a different day and use a different payment method. When those charges are scattered across cards, app stores, and email receipts, it is hard to see the total commitment behind them.",
          "The problem is not always the price. A service that costs only a few dollars can still be a poor fit if it no longer solves a current need. Several low-cost renewals can also add up to a meaningful monthly expense. Seeing each service, renewal date, billing cycle, and price together turns a vague feeling of overspending into a list of decisions you can act on.",
          "A manual tracker is useful here because it is intentional. Instead of letting a bank feed guess which transaction is recurring, you add the services that matter and keep their details current. The result is a cleaner subscription list, with fewer irrelevant transactions and no need to share bank credentials just to understand recurring costs.",
        ],
      },
      {
        title: "Run a practical subscription review",
        body: [
          "Start by checking the places where subscriptions begin: the Google Play subscriptions screen, Apple subscriptions if you use an iPhone or iPad, payment-card statements, PayPal, email receipts, and accounts for streaming or software services. Write down the service name, the amount, how often it bills, the next renewal date, and whether it is shared with anyone.",
          "Then use a simple three-part test. First, did you use it in the last 30 days? Second, would you start it again today at the current price? Third, does another service you already pay for cover the same job? A clear no to two of those questions is a strong signal to cancel, downgrade, pause, or set a reminder to revisit it before the next billing cycle.",
          "Do not try to make every decision in one sitting. Set a short monthly review and a separate reminder a few days before larger annual renewals. PayClear lets you keep the dates and local reminders in one place, so the review becomes a repeatable habit instead of an occasional cleanup after money has already left your account.",
        ],
      },
      {
        title: "Choose the right action for each recurring cost",
        body: [
          "Canceling is not the only useful outcome. You may keep an essential service, move to a lower tier, switch from monthly to annual billing when the savings are real, or rotate entertainment services instead of paying for every catalog at the same time. If a family or household shares the cost, record each person's share before deciding whether the subscription is worth keeping.",
          "For free trials, the best time to decide is before the first paid charge. Add the trial end date as soon as you sign up, then choose a reminder that gives you enough time to evaluate it. This prevents a trial from becoming a forgotten subscription simply because the cancellation window arrived during a busy week.",
          "When you cancel, save the confirmation email and update your tracker immediately. If you are uncertain, add a short note explaining why you kept it. At the next review, that note makes it easier to recognize whether the service is still serving the purpose you intended instead of becoming another automatic expense.",
        ],
      },
      {
        title: "Turn saved money into a clear plan",
        body: [
          "The most motivating number is not a dramatic estimate; it is the amount you can actually redirect. Add the monthly cost of a canceled service, multiply it by twelve, and decide where that money should go. It could reduce a bill, build an emergency fund, cover a higher-priority subscription, or simply leave more room in your monthly budget.",
          "Be careful with annual plans. An annual renewal can be worthwhile for a service you use regularly, but it deserves an earlier reminder because the charge is larger and less visible. Track the full annual amount and a monthly equivalent so you can compare it fairly with other recurring expenses.",
          "PayClear's savings view can help you compare the ongoing impact of removing a service while its reminder and dashboard keep the rest of your recurring spending visible. The goal is not to eliminate every subscription. It is to make sure every one is a deliberate choice that still fits your life.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should I review my subscriptions?",
        answer:
          "A short monthly review works well for most people. Also set reminders before annual renewals and when free trials are about to convert to paid plans.",
      },
      {
        question: "Do I need to link my bank account to find unused subscriptions?",
        answer:
          "No. You can review statements and receipts, then add only the recurring services you want to monitor in a manual tracker such as PayClear.",
      },
      {
        question: "Should I cancel a subscription I only use occasionally?",
        answer:
          "Consider pausing, downgrading, or rotating it with another service. The right choice depends on its price, how predictable your use is, and whether a similar service already covers the need.",
      },
    ],
  },
  {
    slug: "subscription-cost-calculator",
    eyebrow: "Subscription cost calculator",
    title: "Subscription Cost Calculator: See Monthly and Yearly Spend",
    description:
      "Use a subscription cost calculator to add up recurring payments, estimate yearly spending, and plan savings from subscriptions you may cancel.",
    intro:
      "A subscription cost calculator helps turn individual prices into a useful total. List every recurring payment, convert each to a monthly amount, and review the total next to the value you get from it. That simple calculation can reveal renewal risks, duplicate services, and realistic opportunities to save.",
    breadcrumb: "Subscription cost calculator",
    cta: "Track subscription costs and renewal dates in one private app.",
    calculator: true,
    sections: [
      {
        title: "How to calculate your total subscription cost",
        body: [
          "Make one row for every recurring payment you choose to keep an eye on. Include streaming services, mobile apps, cloud storage, software, memberships, gaming, news, fitness, delivery, and shared household plans. Record the current price, billing frequency, currency, and next renewal date instead of relying on a rough estimate from memory.",
          "For a monthly total, use the price as-is for monthly plans. Divide quarterly charges by three, six-month charges by six, and annual charges by twelve. For a yearly total, multiply a monthly price by twelve, a quarterly price by four, and use an annual price once. This gives you comparable numbers even when services renew on different schedules.",
          "PayClear keeps those details alongside reminders and recurring-spend views. You can add subscriptions manually, which is especially useful when you want a calculator without granting a financial app access to your transaction history. The list remains focused on the costs you decide are relevant.",
        ],
      },
      {
        title: "Include costs that are easy to overlook",
        body: [
          "The obvious services are not always the complete list. Look for small app subscriptions, add-on channels, extra storage, domain renewals, antivirus, learning platforms, creator memberships, and plan upgrades. A free trial is also a future cost: add its first paid renewal date and expected price before you forget that it exists.",
          "Shared subscriptions need a second number. Record the full charge as well as the amount you personally pay after a split. That prevents a family plan or shared streaming service from making your personal budget look larger or smaller than it really is. If you collect money from others, track the due date separately from the service renewal.",
          "For services billed in CAD, USD, or another currency, keep the original billing currency and avoid pretending the total is exact after exchange rates change. A multi-currency tracker lets you understand each recurring commitment without hiding the currency differences behind an unreliable single conversion.",
        ],
      },
      {
        title: "Use the calculator to make better decisions",
        body: [
          "Once the total is visible, sort subscriptions into keep, review, and cancel. Keep services you use regularly or that are hard to replace. Put uncertain services in review and add a reminder shortly before their next renewal. Mark clearly unused services for cancellation, but confirm the cancellation policy and save the confirmation once you complete it.",
          "Compare alternatives only when they solve the same need. Two music services, overlapping cloud-storage plans, or several entertainment subscriptions may be candidates for consolidation. By contrast, a useful work tool and a hobby app may both be worthwhile even if their total cost is higher. The calculator should support informed choices, not arbitrary cuts.",
          "Try a what-if calculation before canceling. Remove one service's monthly equivalent, multiply the difference across a year, and decide what you would do with the money. PayClear's savings simulator is designed for this kind of review: it shows the recurring impact without claiming that a cancellation is automatically the best choice.",
        ],
      },
      {
        title: "Keep the number accurate over time",
        body: [
          "A calculator is only as useful as its dates and prices. Update it when a service raises its price, changes a plan, adds tax, switches billing frequency, or moves to a different payment method. Add annual renewals early so a large once-a-year charge does not surprise you after months of quiet.",
          "Use reminders before renewals rather than only after they appear on a statement. A reminder gives you time to check whether you still use the service, ask a household member about a shared plan, or change tiers. It is more practical than trying to recover money after an unwanted charge has already processed.",
          "Review the total monthly, then do a deeper review every few months. This rhythm catches new subscriptions before they blend into the background while keeping the process short enough to maintain. The aim is a trusted, current view of your recurring obligations—not a spreadsheet you update once and abandon.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert an annual subscription to a monthly cost?",
        answer:
          "Divide the full annual charge by twelve. Keep the actual renewal date too, because the annual payment will still arrive as one larger charge.",
      },
      {
        question: "Should a subscription calculator include free trials?",
        answer:
          "Yes. Add the expected first paid price and the trial end date so you can decide before it becomes a recurring charge.",
      },
      {
        question: "Can I calculate shared subscription costs?",
        answer:
          "Yes. Record the full service price and each person's share separately. This makes the total cost and your own contribution clear.",
      },
    ],
  },
  {
    slug: "family-subscription-manager",
    eyebrow: "Shared subscription guide",
    title: "Family Subscription Manager for Shared Plans and Bills",
    description:
      "Manage shared family subscriptions, renewal dates, and bill splits in one place. PayClear helps households track recurring plans without bank linking.",
    intro:
      "A family subscription manager gives shared plans a clear owner, renewal date, and cost split. Whether you share streaming, cloud storage, music, software, or a household membership, a simple record helps everyone know what is active, who pays, and when a decision is due.",
    breadcrumb: "Family subscription manager",
    cta: "Keep shared plans, splits, and renewal dates clear for everyone.",
    sections: [
      {
        title: "Create one source of truth for shared subscriptions",
        body: [
          "Shared subscriptions become confusing when everyone remembers a different version of the plan. One person may believe a service is annual, another may assume it renews monthly, and no one may remember who changed the payment card. Start with a list that identifies the plan, its full cost, billing cycle, next renewal date, plan owner, and the people who use it.",
          "Include services that are not usually thought of as entertainment. Family cloud storage, password managers, home security, software suites, meal plans, gaming memberships, and shared internet add-ons can all be recurring household costs. A complete list makes it easier to spot duplicate plans and subscriptions that outlived the reason the family started them.",
          "PayClear's manual approach works well for this job because you can organize only the subscriptions you share. There is no need to give every household member access to a bank connection or transaction history. The information in the tracker stays focused on plan details, reminders, and the cost decisions you need to make together.",
        ],
      },
      {
        title: "Split shared bills in a way people understand",
        body: [
          "An equal split is simple when every person receives the same value, but it is not the only fair option. A couple may divide a plan evenly, a group of roommates may use a per-person split, and a parent may cover more of a family plan. Write down the full price and each agreed share so the expectation is visible before a payment becomes awkward.",
          "Choose a collection rhythm that matches the billing cycle. For monthly plans, a shared due date shortly before renewal can work. For annual subscriptions, consider dividing each person's share across months so no one is surprised by a larger transfer. A reminder should go to the plan owner early enough to check the arrangement before the charge happens.",
          "Use a bill-splitter feature to calculate and share a clear payment card rather than doing the math in a chat thread every month. Updating the split when someone joins, leaves, or changes usage keeps the household record accurate and makes it easier to decide whether the plan still offers good value.",
        ],
      },
      {
        title: "Review permissions and renewals before they become problems",
        body: [
          "A renewal review is a good time to check more than price. Confirm who has access, whether the plan still has room for everyone, whether parental settings or profiles need updates, and whether the payment owner is still comfortable carrying the charge. These small checks reduce surprise cancellations and unnecessary plan upgrades.",
          "Set reminders before important renewals, especially annual ones. The reminder should create enough time for a family conversation: keep the plan, change its tier, move the owner, or cancel it. For services with free trials or promotional prices, add the regular price alongside the date so the decision is based on the real future cost.",
          "Avoid using a tracker as a substitute for account security. Keep passwords and payment credentials in the appropriate secure tools. A subscription manager is for visibility and planning, while the service's own account settings remain the place to manage access, cancel, or change a billing method.",
        ],
      },
      {
        title: "Make shared subscriptions easier to sustain",
        body: [
          "Agree on a few simple household rules: who can start a new shared plan, where it should be recorded, how cost changes are discussed, and what happens when someone stops using it. This turns recurring costs from a hidden source of friction into a predictable part of household planning.",
          "It can also help to set a shared spending limit for recurring entertainment or digital services. The purpose is not to police individual choices. It is to make the total visible before a series of small additions creates a larger ongoing commitment than anyone intended.",
          "With plans, shares, and renewal dates in one place, you can make a quick review part of a regular household routine. PayClear can keep the local reminders and bill-split details close to the subscriptions themselves, so decisions are made before the renewal rather than after a confusing charge appears.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should a family subscription manager track?",
        answer:
          "Track the plan name, full price, billing cycle, renewal date, payment owner, users, and each person's agreed share.",
      },
      {
        question: "Can I split a shared subscription unequally?",
        answer:
          "Yes. Record the actual agreed amount for each person. An equal split is convenient, but it is not required for a useful shared-bill record.",
      },
      {
        question: "Does PayClear need access to a family bank account?",
        answer:
          "No. PayClear uses manual subscription entries, so you can track shared plans and bills without connecting a bank account.",
      },
    ],
  },
  {
    slug: "subscription-tracker-no-login",
    eyebrow: "Private subscription tracking",
    title: "Subscription Tracker With No Login or Bank Connection",
    description:
      "Use a subscription tracker with no login and no bank connection. PayClear helps Android users track bills, trials, and renewals privately.",
    intro:
      "A subscription tracker with no login is for people who want visibility without creating another account or sharing financial credentials. You enter the subscriptions you choose, add renewal dates and reminders, and keep the tracker focused on recurring payments rather than a broad profile of your spending.",
    breadcrumb: "Subscription tracker no login",
    cta: "Track renewals privately—without a PayClear account or bank login.",
    sections: [
      {
        title: "What no-login subscription tracking means",
        body: [
          "No-login tracking means the core experience does not require you to create a PayClear account before you can add a subscription. You can begin with the details you already know: service name, amount, billing frequency, currency, renewal date, category, and any reminder you want before the next charge.",
          "It also means there is no need to hand over online banking credentials or connect a Plaid-supported account simply to see your subscription list. Manual tracking is different from automatic bank scanning: it asks for a little setup, but it lets you decide exactly what becomes part of the record.",
          "This approach is especially useful if you want to track only a few recurring costs, use more than one payment method, share devices carefully, or prefer not to tie another service to your personal financial accounts. The tracker should make the recurring-payment review easier, not create another data-sharing decision.",
        ],
      },
      {
        title: "Set up a private tracker in a few focused steps",
        body: [
          "Start with the subscriptions most likely to cause surprise: annual plans, free trials, services with recent price changes, and subscriptions you share. Add their actual next billing date rather than a guess. If you do not know it, check the service's account page or the most recent receipt, then correct the record once you have the exact date.",
          "Choose reminder timing based on the decision you need to make. A reminder one day before a small monthly renewal may be enough, while an annual plan or free trial may need a week or more. If a service has a cancellation deadline, schedule the reminder early enough to review the policy and take action without rushing.",
          "Group entries by category, purpose, or profile so the dashboard answers useful questions. You might separate entertainment, work, household, and personal services, or keep separate profiles for a family member. A simple structure helps you review costs without turning manual tracking into a larger administrative task.",
        ],
      },
      {
        title: "Privacy trade-offs to consider",
        body: [
          "Manual tracking does not automatically discover every charge, so you should review your statements and app-store subscriptions periodically. That is the trade-off for keeping control over the list. Many people prefer this because a tracker does not need continuous access to bank transactions in order to do its job.",
          "A no-login app can still offer useful safeguards. Local reminders, app lock, local backups, and CSV export help you retain control over your information. Before relying on any app, read its privacy policy and confirm how data, backups, and optional purchases are handled on your device.",
          "Do not enter passwords, full card numbers, or other unnecessary financial credentials into a subscription tracker. The useful information is the recurring commitment itself: what the service is, what it costs, when it renews, and whether you want a reminder. Keeping the record minimal helps it remain practical and private.",
        ],
      },
      {
        title: "Use reminders to maintain the habit",
        body: [
          "A tracker is most valuable when it is current. Add a new recurring service when you start it, update the price after a change, and mark it canceled as soon as the cancellation is confirmed. Those small actions preserve the value of the dashboard and prevent old entries from weakening your trust in the total.",
          "Set a monthly check-in for the whole list, even if it only takes a few minutes. Open upcoming renewals, decide whether anything needs a change, and look at the recurring spend by category. This turns a subscription tracker from a passive list into a regular planning tool.",
          "PayClear combines manual entries, local reminders, multi-currency tracking, and optional backup or CSV export in an Android app. It is built for people who want a clear recurring-payment view without a PayClear account, a bank login, or transaction scanning.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does PayClear require an account to track subscriptions?",
        answer:
          "No. The core tracking experience is designed to work without creating a PayClear account.",
      },
      {
        question: "Can a no-login tracker automatically find all my subscriptions?",
        answer:
          "No. Without bank scanning, you add the subscriptions you want to track manually. Reviewing statements and receipts periodically helps keep the list complete.",
      },
      {
        question: "Does PayClear connect to Plaid or a bank account?",
        answer:
          "No. PayClear is a manual tracker and does not connect to Plaid, scan transactions, or ask for bank credentials.",
      },
    ],
  },
  {
    slug: "subscription-tracker-usa",
    eyebrow: "US subscription tracker",
    title: "Subscription Tracker App for the USA: Private and Simple",
    description:
      "Looking for a subscription tracker app in the USA? PayClear tracks streaming, free trials, bills, and recurring payments without a US bank connection.",
    intro:
      "PayClear is a subscription tracker app for people in the USA who want a clearer view of recurring costs without linking a bank account. Add the streaming, software, memberships, and free trials you use, then set local reminders before they renew or convert to paid plans.",
    breadcrumb: "Subscription tracker USA",
    cta: "Track US subscriptions without sharing a bank account or transaction history.",
    sections: [
      {
        title: "Track the services that shape a US subscription budget",
        body: [
          "A US subscription list can include much more than video streaming. Netflix, Hulu, Max, Disney+, Apple TV+, YouTube Premium, Spotify, Amazon Prime, cloud storage, mobile apps, gaming, fitness, meal services, and software can all renew independently. Adding them in one place makes the recurring commitment easier to understand than a sequence of unrelated card charges.",
          "Start with the services you know are active, then check app-store subscriptions, service account pages, email receipts, card statements, and payment wallets for the rest. Record the dollar amount, billing cycle, next renewal date, and whether the service is personal, work-related, or shared. This is more reliable than guessing from a vague monthly total.",
          "If a service bills in another currency, keep that fact visible instead of forcing an approximate dollar conversion. PayClear supports multiple currencies, which is useful for US users who pay for international software or share plans across borders. The goal is to see commitments accurately, not to produce a misleading single total.",
        ],
      },
      {
        title: "Why a tracker without a US bank connection can be useful",
        body: [
          "Many subscription tools depend on a connected US bank account and transaction aggregation to detect recurring charges. That can be convenient, but it may not fit someone who uses several cards, prepaid methods, app-store billing, or who simply prefers not to give another service access to their financial transaction history.",
          "With manual tracking, you add only the services you choose and keep the information limited to the details needed for planning. There is no need for a Plaid connection, online-bank credentials, or a US bank account. This can make it simpler to track subscriptions that are paid through different sources or shared with other people.",
          "The trade-off is that you are responsible for adding and updating entries. A quick monthly check keeps the list accurate, while local reminders give you notice before renewals. For many people, that small amount of maintenance is worthwhile for a more intentional and private view of recurring payments.",
        ],
      },
      {
        title: "Use free-trial and renewal reminders proactively",
        body: [
          "Add a free trial when you start it, not when the first charge arrives. Enter the trial end date, expected price, and a reminder that leaves enough time to review the service. This is useful for trials attached to streaming bundles, apps, software, and delivery memberships, where the cancellation window can be easy to miss.",
          "For monthly services, a reminder a few days ahead may be enough. For yearly renewals, set more notice because the charge is usually larger and may require a household conversation. You can also use reminders after price increases to decide whether a plan is still worth its new cost.",
          "A reminder is not a cancellation service. You still manage the subscription in the provider's account or through the place where you purchased it. The reminder gives you time and context to make that decision before a renewal, rather than discovering the charge only after it appears on a statement.",
        ],
      },
      {
        title: "Build a subscription system that stays useful",
        body: [
          "Use categories and profiles to separate personal entertainment, work tools, household costs, and shared plans. This helps answer practical questions: which category is growing, which services are duplicated, and which person should be included in a shared-bill review. A simple organization system makes a large list easier to maintain.",
          "Set a spending limit if you want an extra signal when recurring costs begin to creep upward. The limit is a prompt for a review, not a punishment. Combine it with a savings estimate for services you are considering canceling, then decide whether the money is better used elsewhere in your budget.",
          "PayClear is available on Google Play for Android users in the USA. It offers manual subscription tracking, local reminders, spending limits, shared-bill tools, and a privacy-first model with no bank connection required. Add the services that matter to you and keep renewal decisions visible.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a US bank account to use PayClear?",
        answer:
          "No. PayClear is a manual subscription tracker and does not require a US bank account, Plaid connection, or bank login.",
      },
      {
        question: "Can I track Netflix, Hulu, and other US streaming subscriptions?",
        answer:
          "Yes. You can manually add any recurring service, including streaming, music, software, memberships, and free trials.",
      },
      {
        question: "Is PayClear available in the USA?",
        answer:
          "PayClear is available for Android on Google Play. Availability can vary by Google Play country and device compatibility.",
      },
    ],
  },
];

export function getAdditionalSeoPage(slug: string) {
  return additionalSeoPages.find((page) => page.slug === slug);
}
