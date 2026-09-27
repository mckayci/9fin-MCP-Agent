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
2. Use 9fin get bond loans screener filters to pull criter as options
3. Ask user to select available options
4. Query 9fin's company and bond/loan screeners against those criteria.
5. For each name returned, pull: business description, key financials, leverage, bond/loan trading levels, credit rating.
6. Check the name against `/target_list`. If it appeared in a prior week:
   - Carry forward the prior recommendation and note the date it was last assessed
   - Only redo the full assessment if something material has changed since (price move, rating action, news, new financials)
   - If nothing material has changed, note "no material change since [date]" instead of repeating the workup
7. Build a triage table (see output spec below).
8. Present the triage table to Ciarán and stop. Wait for his instruction on which names, if any, to progress to Phase 2.

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

**Steps:**
1. For each name Ciarán selects, pull the full data set from 9fin: financials, capital structure, covenants, ownership/org structure, holders, trading levels, news, transcripts.
2. Populate every section of the fixed output structure (below). Do not omit a section for lack of data; mark missing items per the Error Handling rules in Section 6.
3. Write commentary in Ciarán's communication style (Section 5).
4. Build the page to the fixed layout and colour scheme.

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

### Phase 3 — Delivery

**Goal:** Get the finished output to Ciarán's inbox with enough context to act on immediately, without sending anything he hasn't reviewed.

**Steps:**
1. Build each tearsheet as an HTML file styled for A4 portrait (as in Phase 2).
2. Convert to PDF and combine:
   - Use Puppeteer (`npx puppeteer`) or `wkhtmltopdf` to render each HTML tearsheet to PDF at A4 portrait dimensions (210mm x 297mm).
   - If multiple companies were taken to Phase 2, combine into one PDF with one page per company, using a page break between each. Name the combined file `ddmmyy_weekly_screen.pdf`.
   - If only one company, save the single tearsheet PDF using the standard file convention (`ddmmyy_companyname_tearsheet.pdf`).
   - Save the PDF to `/outputs`. The HTML artifact may still be published for interactive viewing, but the email attachment must be a PDF.
3. Draft the covering email using the template at `/Templates/weekly_screen_email_template.md`. Populate all bracketed fields with the actual screen criteria, results, and recommendation rationale.
4. Resolve recipient first names for the greeting using `/Templates/recipient_names.csv`. If an email address has no mapping in the CSV, ask Ciarán to confirm the name, then save the new mapping to the CSV for future runs. Greeting rules: 1 recipient uses "Hi [First Name],"; 2 recipients uses "Hi [First Name 1], [First Name 2],"; 3+ recipients uses "Hi team,".
5. Present the draft email (recipient, subject, body, PDF attachment) to Ciarán for confirmation.
6. Only send once Ciarán confirms. This confirmation step applies every time, including once the workflow is routine — it is not a one-off setup requirement.
7. Update `/target_list` with this week's names, recommendations, and status.

**Output — Email:**
- Recipient: iemckayci@gmail.com (confirm before sending regardless)
- Subject: reflects the week's screen date
- Body: populated from `/Templates/weekly_screen_email_template.md`
- Attachment: single PDF (combined if multiple targets, one page per company), A4 portrait

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
| Before sending any email | Always confirm recipient and content with Ciarán first, every time, no exceptions. |

---

## 7. File & Folder Conventions

**Naming:** `ddmmyy_companyname_content.filetype`, underscores only, no special characters.

**Folders:**
- `/workflows` — workflow instructions, agent definitions, process documents
- `/outputs` — completed deliverables
- `/target_list` — running Excel record of identified targets: sales, EBITDA, sponsor, liquidity, leverage, next maturity, recommended next steps
- `/resources` — reference materials, source documents, research
- `/drafts` — work in progress
- `/Templates` — reusable templates and frameworks; `weekly_screen_email_template.md` is the covering email template for Phase 3; `recipient_names.csv` maps email addresses to first names for greetings
- `/Precedent Emails` — saved record of emails already sent

---

## 8. Relationship to CLAUDE.md

`CLAUDE.md` is the agent's operating configuration: the instructions Claude Code reads to run this workflow. This document is the process specification behind it, for a human reader. If the two ever diverge, `CLAUDE.md` should be updated to match this SOP, since this document reflects the agreed process.
