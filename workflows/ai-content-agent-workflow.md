# AI Content Agent Workflow — Standard Operating Procedure

**Process owner:** Ciarán
**Purpose:** This document is the process specification for the weekly distressed debt screening workflow. It describes what the agent is trying to achieve, the steps it follows, the exact output and format expected at each stage, and what happens when something goes wrong. It is written to be read on its own, without needing to open the agent's configuration file.

---

## 1. Goal

Automate the weekly distressed debt screening process so that Ciarán can:
1. See a short list of newly stressed European corporate names each week, with a clear recommendation on each
2. Choose which names deserve a full workup
3. Receive a one-page, boardroom-ready summary on each selected name, built to a consistent format
4. Have that summary emailed out, with a plain-English covering note on what the week's screen found

The end product should let Ciarán, or his MD, get up to speed on a target name in five minutes before speaking to a client.

---

## 2. Triggers

The workflow runs in one of two ways:

| Trigger | When | Screening criteria used |
|---|---|---|
| **Scheduled** | Every Sunday evening | Confirmed default criteria (Section 4), applied automatically, no questions asked |
| **Manual** | Whenever Ciarán asks for a run | Agent asks whether to use the defaults or a custom set for that run; suggests fields if Ciarán wants to customise |

A custom set of criteria used for a manual run applies to that run only. It does not become the new default unless Ciarán explicitly says so.

---

## 3. Process Flow

### Phase 1 — Weekly Screen

**Goal:** Identify which names, out of everything 9fin returns, are worth Ciarán's time this week.

**Steps:**
1. Confirm which criteria to use (scheduled = defaults; manual = ask, per Section 2).
2. Before delegating to the screener subagent, confirm the 9fin connector is live in this orchestrating session by making one direct 9fin call yourself (e.g. `get_company_screener_filters` or `get_bonds_loans_screener_filters`). Only launch the subagent once that call succeeds — see Section 6, "9fin connector not live for a subagent."
3. Use 9fin get bond loans screener filters to pull criteria options
4. Ask user to select available options
5. Query 9fin's company and bond/loan screeners against those criteria.
6. For each name returned, pull: business description, key financials, leverage, bond/loan trading levels, credit rating.
7. Check the name against `/target_list`. If it appeared in a prior week:
   - Carry forward the prior recommendation and note the date it was last assessed
   - Only redo the full assessment if something material has changed since (price move, rating action, news, new financials)
   - If nothing material has changed, note "no material change since [date]" instead of repeating the workup
8. Build a triage table (see output spec below).
9. Present the triage table to Ciarán and stop. Wait for his instruction on which names, if any, to progress to Phase 2.

**Output — Triage Table:**

| Column | Content |
|---|---|
| Company | Name |
| Description | One line on what the business does |
| Key stat | The single most relevant leverage or rating figure |
| Recommendation | "Further work" or "Pass," plus a 2-line rationale |

Recommendation logic: flag "further work" if at least one of the three key triggers is present or approaching:
- Covenant trip
- Leverage or maturity wall that cannot be refinanced
- Liquidity issue

If none apply, recommend "pass" and state why briefly. Every recommendation states which trigger drove it, or confirms none applied.

**Checkpoint:** Do not proceed to Phase 2 for any name until Ciarán has responded to the triage table.

---

### Phase 2 — One-Page Tearsheet

**Goal:** Produce a single-page, self-contained summary per selected name that a reader with no prior context can absorb in five minutes.

**Quality bar:** `/Templates/gold_standard_wagamama_tearsheet.html` is a real, fully worked-up tearsheet kept as the reference for depth and sourcing rigor — every figure attributed to its source, conflicting leverage bases called out rather than blended, data gaps stated with what would resolve them. Check it before writing content for a new company; it is a quality bar, not a template to copy from.

**Steps:**
1. Before launching the three parallel Phase 2 researcher subagents (capital, financials, news), confirm the 9fin connector is still live in this session by making one direct 9fin call yourself, per Phase 1 Step 2. Do this even if Phase 1 already confirmed it earlier in the same session, since the connection isn't guaranteed to still be live later on.
2. For each name Ciarán selects, pull the full data set from 9fin: financials, capital structure, covenants, ownership/org structure, holders, trading levels, news, transcripts.
3. Populate every section of the fixed output structure (below). Do not omit a section for lack of data; mark missing items per the Error Handling rules in Section 6.
4. Write commentary in Ciarán's communication style (Section 5).
5. Build the page to the fixed layout and colour scheme.

**Output — Tearsheet Structure (one page, in this order):**
1. Header block — company name, sector/industry, country, company type, ticker, ownership/sponsor, last update date, coverage status
2. Business Description — what the company does, key end-markets, revenue mix, relevant corporate history
3. Situation Overview — business/market drivers, recent financial performance and why, deleveraging or restructuring actions taken, near-term outlook
4. Key Catalysts — liquidity position, upcoming maturities, covenant headroom, each stated against a level or date
5. Management & Sponsor Representation — table of key individuals, role, experience
6. Recent News — dated table of relevant items and source. Each news item should be a clickable link to the original article (use the 9fin document URL where available). Filter out routine press releases (product launches, minor corporate announcements) and focus on credit-relevant news: rating actions, refinancing activity, M&A, financial results, management changes, regulatory actions.
7. Revenue splits — by geography and by segment, across the last several fiscal years
8. Summary Financials — actuals plus LTM: revenue, gross profit, EBITDA and margins, free cash flow build, net debt, leverage. Where data permits, calculate FCF as follows:
   - EBITDA - Cash Taxes +/- Changes in NWC - Capex = Unlevered Free Cash Flow (UFCF)
   - UFCF - Cash Interest - Lease Repayments = Levered Free Cash Flow (LFCF)
   - Show FCF Conversion for both: UFCF / EBITDA and LFCF / EBITDA. If conversion is negative, display as "n.a." in italics using hex `#e74c3c`.
   - If the underlying line items are not available to compute this build, use the most relevant FCF or operating cash flow figures 9fin provides and note the basis.
9. Capital Structure — instrument, amount outstanding, x EBITDA, interest rate, maturity, price, yield, rating
10. Liquidity build — cash, available facilities, minimum operating liquidity, resulting headroom
11. Group structure chart — simplified ownership/entity chart showing where debt sits
12. Debt Holdings — holder, instrument, amount held, % held, cumulative %. Check the resources folder for the specific company name to see if the user has uploaded the holders
13. Trading chart — instrument price over time. Check the resources folder for the specific company name to see if the user has uploaded the trading. The chart must:
    - Overlay annotated callouts for material credit events: rating actions (upgrades/downgrades/outlook changes), results announcements, refinancing activity, M&A, covenant breaches, or any other event that may have driven a price move. Ignore routine press releases (product launches, marketing announcements).
    - Source these events from the Recent News and 9fin document search; cross-reference the date of each event against the price chart to position the callout.
    - Show a labelled data point at the most recent price with the date and price value.
    - Each callout should be concise (max 6 words) with a connector line to the relevant point on the price curve.

**Format:** HTML dashboard, one page per company, styled to print as A4 PDF, portrait (210mm x 297mm). Each tearsheet must include a CSS page-break rule (`page-break-after: always`) so that when multiple tearsheets are combined into a single PDF, each company starts on a new page. Colour scheme: primary accent hex `7C77B9`.

**Content rules:**
- Commentary draws on earnings call transcripts where 9fin has them
- Triggers to watch are stated explicitly against a level or date, never just narratively
- Recommendation section states watchlist or not, tied back to the three key triggers
- Where 9fin has published analysis pieces on the company (e.g. restructuring previews, A&E assessments, refinancing commentary), read the document content and integrate the key findings into the Situation Overview and/or Business Description. These are primary sources and should inform the narrative, not sit only in the news table.

---

### Phase 2.5 — Audit

**Goal:** Catch a fact stated inconsistently across the three parallel Phase 2 researchers, or against an uploaded resources file, before it reaches the tearsheet.

**Why this exists:** the three Phase 2 researchers (capital, financials, news) run in parallel and write independently. On a real run this produced a live conflict — 9fin showed one TLB size and maturity date, an uploaded rating agency report showed another — that only got caught by chance on a manual follow-up pass. Nothing checked the three outputs against each other before that point.

**Steps:**
1. Once all three Phase 2 researchers have returned for a company, launch the `auditor` subagent (spec: `.claude/agents/auditor.md`) before building that company's tearsheet. It reads `capital.json`, `financials.json`, `news.json`, and every file in `/resources/{companyname}/`, and cross-references any fact stated in more than one place.
2. The auditor writes `/drafts/{companyname}/audit_report.json` with one of three outcomes:
   - **Clean** — nothing inconsistent found.
   - **Auto-resolved** — a mismatch existed but the standing priority rule (an uploaded resources file outweighs a 9fin-sourced figure) resolved it cleanly. Apply the correction to the named file.
   - **Needs reverification** — a mismatch the priority rule can't resolve on its own (e.g. two 9fin-sourced figures disagree, or two uploads disagree).
3. For anything needing reverification, the orchestrating session relays the auditor's specific question to the specific researcher that produced the disputed figure (resuming that subagent — the auditor cannot contact it directly, since it wasn't the one who launched it). Batch all questions for one researcher into a single round trip.
4. Once the flagged researcher(s) respond and update their file, re-invoke the auditor once to confirm. This is one clarification round only — do not loop further.
5. If a discrepancy is still unresolved after that one round, do not pick a value. Build the tearsheet showing both conflicting figures with their sources against the affected field, styled the same way as the FCF "n.a." convention (italics, hex `#e74c3c`).
6. If everything is resolved (auto or via reverification), the tearsheet shows only the correct figure — no visible trace of what the auditor caught.

---

### Phase 3 — Delivery

**Goal:** Get the finished output to Ciarán's inbox with enough context to act on immediately, without sending anything he hasn't reviewed.

**Steps:**
1. Build each tearsheet as an HTML file styled for A4 portrait (as in Phase 2).
   - If multiple companies were taken to Phase 2, combine into one HTML file with one page per company, using a page break between each. Name it `ddmmyy_weekly_screen.html`.
   - If only one company, use that company's tearsheet HTML directly, named per the standard file convention.
2. Render a PDF from that same HTML using `render_pdf.js` and save it to `/outputs` (`ddmmyy_weekly_screen.pdf` for multiple companies, or the standard single-company filename). This is no longer emailed; it stays as the durable local record of what was sent.
3. Publish the HTML file as a Claude artifact and turn on link sharing for it, since artifacts are private by default. A recipient without access to the underlying account cannot open an unshared artifact. If sharing cannot be turned on in the current session, stop and ask Ciarán to do it before the email is confirmed. Once shared, the link should still be treated as internal-use-only, the same as the PDF was — it carries licensed 9fin data and rating-agency content.
4. Draft the covering email using the template at `/Templates/weekly_screen_email_template.md`. Populate all bracketed fields with the actual screen criteria, results, recommendation rationale, and the artifact link from step 3.
5. Resolve recipient first names for the greeting using `/Templates/recipient_names.csv`. If an email address has no mapping in the CSV, ask Ciarán to confirm the name, then save the new mapping to the CSV for future runs. Greeting rules: 1 recipient uses "Hi [First Name],"; 2 recipients uses "Hi [First Name 1], [First Name 2],"; 3+ recipients uses "Hi team,".
6. Present the draft email (recipient, subject, body, artifact link, confirmation that sharing is on) to Ciarán for confirmation.
7. Only send once Ciarán confirms. This confirmation step applies every time, including once the workflow is routine — it is not a one-off setup requirement.
8. Update `/target_list` with this week's names, recommendations, and status.

**Output — Email:**
- Recipient: iemckayci@gmail.com (confirm before sending regardless)
- Subject: reflects the week's screen date
- Body: populated from `/Templates/weekly_screen_email_template.md`, including the artifact link
- Attachment: none — the report is a shared artifact link, not a file attachment

---

## 4. Screening Criteria (confirmed defaults)

| Field | Default |
|---|---|
| Status | Priced |
| Borrower type | Corporate |
| Region | Europe |
| Rating (CFR) | BB, B or CCC |
| Prior week price move | Worse than -2.5pts |

Optional fields available for a custom manual run: sector/industry, minimum instrument size, or any other 9fin screener filter.

---

## 5. Communication Style

All written output (triage table commentary, tearsheet commentary, email copy) follows:
- Clear, business-professional English, matching the register of an equity/credit-research analyst
- No em dashes
- No buzzwords, corporate jargon, or vague statements
- Key messages stated ahead of supporting detail
- Objective assessment, not strong opinion
- Written for a restructuring subject-matter expert who has not seen this name before and has five minutes to read it

---

## 6. Error Handling & Escalation

| Situation | Rule |
|---|---|
| A data field is missing or 9fin returns nothing for it | Mark it "not available - further diligence required" and note the likely source that would resolve it. Never leave a blank cell and never infer a figure. |
| A name repeats from a prior week with no material change | Carry forward the prior view; note "no material change since [date]." Do not silently redo full diligence. |
| The screener returns an error, or an unusual/ambiguous result | Stop and ask Ciarán rather than improvising or guessing at intent. |
| Ciarán gives an instruction that doesn't fit the existing scope of a given week's run | Stop and ask, rather than extending the process on the fly. |
| 9fin connector not live for a subagent | Confirmed by a failed direct 9fin call in the orchestrating session before delegating (Phase 1 Step 2, Phase 2 Step 1). Do not launch the screener or researcher subagents until the connector is confirmed live — a subagent launched too early can get no 9fin tools at all and will silently fail its whole pass rather than erroring loudly. |
| The Phase 2.5 auditor flags a discrepancy between researchers, or against a resources upload | Apply the priority-rule resolution if the auditor supplied one. Otherwise relay its question to the specific researcher for one round of reverification (Phase 2.5). If still unresolved after that round, show both figures with sources on the tearsheet rather than picking one. |
| Before sending any email | Always confirm recipient and content with Ciarán first, every time, no exceptions. |

---

## 7. File & Folder Conventions

**Naming:** `ddmmyy_companyname_content.filetype`, underscores only, no special characters.

**Folders:**
- `/workflows` — workflow instructions, agent definitions, process documents
- `/outputs` — completed deliverables
- `/target_list` — running CSV record of identified targets: sales, EBITDA, sponsor, liquidity, leverage, next maturity, recommended next steps
- `/resources` — reference materials, source documents, research
- `/drafts` — work in progress
- `/Templates` — reusable templates and frameworks; `weekly_screen_email_template.md` is the covering email template for Phase 3; `recipient_names.csv` maps email addresses to first names for greetings; `gold_standard_wagamama_tearsheet.html`/`.pdf` is the reference tearsheet for depth and sourcing rigor
- `/Precedent Emails` — saved record of emails already sent

---

## 8. Relationship to CLAUDE.md

`CLAUDE.md` is the agent's operating configuration: the instructions Claude Code reads to run this workflow. This document is the process specification behind it, for a human reader. If the two ever diverge, `CLAUDE.md` should be updated to match this SOP, since this document reflects the agreed process.
