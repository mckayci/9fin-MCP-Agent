# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Context
This workspace is used for AI-assisted research and assessment of potential restructuring targets, leveraging 9fin's MCP.
The primary focus is to deliver a summary document Ciarán can share with his boss detailing potential targets, which he can then use to get up to speed on a target name in 5 minutes before speaking to a client.

All outputs should prioritise usefulness and assessment of the target against three key triggers: covenant trip, leverage / maturity walls that cannot be refinanced, or liquidity issues.

# About Ciarán
- Ciarán is a restructuring investment banking analyst at CMCK Associates
- Part of his weekly routine is screening for potential restructuring targets
- This requires him to use 9fin to screen for bonds or loans that have dropped in price, check whether they are a potential target, write a brief email summary and send this to his MD. This process is repeated every Sunday evening
- Key signals he looks out for are rising leverage, cash burn, or large maturity walls in the next 18-24 months
- When assessing a Company, he tries to understand: their capital structure, their business model (how they make money, who their customers are, their key products and end markets, and recent financial performance), key financials, key holders, pricing of instruments, and quotes from transcripts on current performance, outlook or refinancing activity
- Every output he produces should feel like it's written in his communication style: focused on key outcomes, professional, and with expertise on the subject matter

# Communication Style
* Write in clear, business-professional English - the register should match that of an equity / credit-research analyst
* Never use em dashes
* Avoid buzzwords, corporate jargon or vague statements
* Prioritise key messages over complex takes
* Avoid strong opinions but rather an objective assessment of the situation
* Assume the end-user and reader is a restructuring subject matter expert but has not seen the company or the situation before and only has 5 minutes to read it

# Rules

## For building or changing this workflow
* Always ask at least three clarifying questions before starting; you should be at least 95% sure of the task before beginning
* Always present a plan and wait for approval before execution of any multi-step task
* Never make assumptions if key information is missing; note it as further work is required / information source X is likely required
* If uncertain, ask before proceeding

## For a routine weekly run
* Execute Phase 1 through Phase 3 (including the Phase 2.5 audit) as scoped below, without re-asking the clarifying questions above
* Pause only at the one checkpoint defined in Phase 1 step 4 (triage table, waiting on Ciarán's input on which names to progress) and before sending the email in Phase 3
* If something in a given week doesn't fit the existing scope (a new data situation, a screener error, an ambiguous instruction from Ciarán), stop and ask rather than improvising

## Always
* Do not add filler content
* No line item, table cell or section should be left blank when data is missing. Mark it "not available - further diligence required" and say what source would likely resolve it, rather than leaving a gap or inferring a figure

# File Naming Rules
* format should be as follows: ddmmyy_companyname_content.filetype
* use underscores for file names
* avoid special characters

# Folder Structure
/workflows
Contains workflow instructions, agent definitions, and process documents. `/workflows/ai-content-agent-workflow.md` is the SOP for this project and, together with this file, is the source of truth. Read both at the start of every run.

/outputs
Contains work and generated deliverables

/target_list
A CSV file containing a list of identified targets, including key stats on sales, EBITDA, sponsor, liquidity, leverage, next maturity and recommended next steps. This is the running record across weeks - see "Continuity Across Weeks" below.

/resources
Reference materials, source documents, examples and research

/resources/companyname
Reference materials for a specific company you are researching

/drafts
Contains work in progress and temporary files

/Templates
Contains reusable templates and frameworks. `weekly_screen_email_template.md` is the template for the Phase 3 covering email. `recipient_names.csv` maps email addresses to first names for the email greeting.

/Precedent Emails
Saved list with emails that have been sent out

# Agent Behaviour (for build/change tasks)

Never skip planning for complex tasks.
Never prioritise speed over quality.

# Continuity Across Weeks
At the start of every run, read `/target_list` before querying 9fin. For any name that reappears on this week's screen:
- Note its prior recommendation and the date it was last assessed
- Only redo the full workup if something material has changed (price move, rating action, news, new financials); otherwise carry the prior view forward and note "no material change since [date]"
At the end of each run, update `/target_list` with this week's names, recommendations, and status, so the next run starts from a current record rather than from zero.

# Workflow

### Phase 1 — Weekly Screen

**Step 0 — Determine which criteria to run**
- **Scheduled Sunday-night run**: use the confirmed default criteria below without asking. Proceed straight to step 1.
- **Manually triggered run**: ask Ciarán whether to run the confirmed default criteria as-is, or supply his own criteria for this run. If he wants to specify criteria, offer the fields below as suggestions (any he doesn't set falls back to the default value) rather than requiring a full list from scratch:
  - Status (default: priced)
  - Borrower type (default: corporate)
  - Region (default: Europe)
  - Rating / CFR band (default: BB, B or CCC)
  - Prior week price move (default: worse than -2.5pts)
  - Sector / industry (no default - full universe unless specified)
  - Minimum instrument size (no default - unless specified)
  - Any other 9fin screener filter he wants applied for that run
- A one-off manual set of criteria applies to that run only; it does not overwrite the confirmed defaults unless Ciarán says to make it the new default.

**Step 0.5 — Confirm 9fin is live before delegating**
Before launching the screener subagent, make one direct 9fin call yourself (e.g. `get_company_screener_filters` or `get_bonds_loans_screener_filters`) in this orchestrating session. Only launch the subagent once that call succeeds. A subagent launched before the 9fin connector is confirmed live in this session can come up with no 9fin tools at all and will silently fail the entire pass rather than erroring loudly partway through. If the direct call fails, stop and tell Ciarán the connector isn't reachable rather than launching the subagent anyway.

1. Query 9fin's company screener using the criteria determined in Step 0.
2. For each company returned, pull via 9fin: business description, key financials, leverage, bond/loan trading levels, credit rating.
3. Check the name against `/target_list` per "Continuity Across Weeks" above.
4. Produce a short triage table: company name, one-line business description, key leverage/rating stat, and a 2-line recommendation.
   - Recommend "further work" if at least one of the three key triggers (covenant trip, an unrefinanceable leverage/maturity wall, or a liquidity issue) is present or approaching. Otherwise recommend "pass."
   - State which trigger(s) drove the call, or why none applied.
5. Present the triage table to Ciarán and wait for his input on which names to progress.

### Phase 2 — One-Page Tearsheet (per name Ciarán selects)

Before launching the three parallel Phase 2 researcher subagents (capital, financials, news), make one direct 9fin call yourself to confirm the connector is still live in this session, per Step 0.5 above. Do this even if Phase 1 already confirmed it in the same session, since the connection isn't guaranteed to still be live later on.

Build a one-page, printable output per company using this structure:

- **Header block**: company name, sector/industry, country, company type, ticker (if any), ownership/sponsor, last update date, coverage status
- **Business Description**: what the company does, its key end-markets and revenue mix, and any relevant corporate history (ownership changes, prior sale processes, etc.)
- **Situation Overview**: business and market drivers, recent financial performance and the reasons behind it, any deleveraging or restructuring actions taken, and near-term outlook
- **Key Catalysts**: liquidity position, upcoming maturities, and covenant headroom/tests, each stated against a level or date, not just narratively
- **Management & Sponsor Representation**: table of key individuals, role, and relevant experience
- **Recent News**: dated table of relevant news items and source. Each item should link to the original article (use 9fin document URL where available). Filter out routine press releases and focus on credit-relevant events: rating actions, refinancing, M&A, results, management changes.
- **Revenue splits**: by geography and by segment, each shown across the last several fiscal years
- **Summary Financials**: table across actual years plus latest twelve months, covering revenue, gross profit, EBITDA (and margins), free cash flow build, net debt and leverage. Where data permits, calculate FCF as: EBITDA - Cash Taxes +/- Changes in NWC - Capex = UFCF; then UFCF - Cash Interest - Lease Repayments = LFCF. Show FCF Conversion (UFCF/EBITDA and LFCF/EBITDA). If conversion is negative, display as "n.a." in italics using hex `#e74c3c`. If underlying line items are unavailable, use the most relevant FCF figures available and note the basis.
- **Capital Structure**: table of each debt instrument, amount outstanding, multiple of EBITDA, interest rate, maturity, price, yield to worst/maturity, and rating
- **Liquidity build**: cash, available facilities, minimum operating liquidity, and resulting headroom
- **Group structure chart**: simplified ownership/entity chart showing where debt sits
- **Debt Holdings**: table of known holders by instrument, amount held, % held, and cumulative %. Check the resources folder for the company name to see if the user has uploaded the holders
- **Trading chart**: instrument price over time. Check the resources folder for the company name to see if the user has uploaded the trading. Overlay annotated callouts for material credit events (rating actions, results, refinancing, M&A) sourced from the news/document search, positioned at the relevant date on the price curve. Ignore routine press releases. Show a labelled data point at the most recent price with date and value. Keep callouts concise (max 6 words) with connector lines.

Content for the tearsheet:
- **Commentary**: brief financial performance and outlook, drawing on earnings call transcripts where 9fin has them
- **9fin analysis integration**: where 9fin has published analysis pieces on the company (restructuring previews, A&E assessments, refinancing commentary), read the document content and integrate the key findings into the Situation Overview and/or Business Description. These are primary sources and should inform the narrative, not sit only in the news table.
- **Triggers to watch**: upcoming maturities, covenant headroom/tests, liquidity position, each stated explicitly
- **Recommendation**: add to restructuring watchlist or not, with rationale tied back to the three key triggers

Colour scheme: primary accent hex 7C77B9.

### Phase 2.5 — Audit (after the three researchers, before the tearsheet is built)
Once `researcher-capital`, `researcher-financials`, and `researcher-news` have all returned for a company, launch the `auditor` subagent before building that company's tearsheet HTML. The auditor cross-references the three JSON outputs against each other and against `/resources/{companyname}/` for the same fact stated inconsistently (debt amounts, maturities, EBITDA, leverage, liquidity, covenants). Full spec in `.claude/agents/auditor.md`.

Handling the auditor's report (`/drafts/{companyname}/audit_report.json`):
- `"status": "clean"` — proceed to build the tearsheet.
- `"auto_resolved"` items — the auditor already applied the standing "resources upload beats 9fin" priority rule; apply the noted correction to the named file and proceed. No need to involve the researcher.
- `"discrepancies"` needing reverification — you (the orchestrating session) relay each researcher's `clarification_question`(s) from `researchers_to_reverify` by resuming that specific researcher agent (it already has the 9fin and resources-folder access needed to re-check). Batch all questions for one researcher into a single resume rather than one round trip per question. Once every flagged researcher has responded and updated its file, re-invoke the auditor once to confirm.
- This is **one clarification round only**. If the auditor's second pass still shows a discrepancy as unresolved, do not loop again and do not pick a value yourself. Build the tearsheet showing both conflicting figures with their sources against the affected field (e.g. "EUR 810m (9fin) / EUR 840m (Fitch, 06-Jul-26) — unresolved, further diligence required"), styled the same way as the FCF "n.a." convention (italics, hex `#e74c3c`).
- If the auditor resolves everything cleanly (via the priority rule or a successful clarification round), the tearsheet shows only the correct figure — no visible trace of what was caught.

### Phase 3 — Delivery
1. Build each tearsheet as an HTML file styled for A4 portrait (as in Phase 2). Then convert to a single combined PDF:
   - Use Puppeteer (via `npx puppeteer`) or `wkhtmltopdf` to render each HTML tearsheet to PDF at A4 portrait (210mm x 297mm).
   - If multiple companies were taken to Phase 2, combine into one PDF with one page per company, using a page break between each. The combined PDF should be named `ddmmyy_weekly_screen.pdf` and saved to `/outputs`.
   - If only one company, the single tearsheet PDF is the attachment, named per the standard file convention.
   - The HTML artifact may still be published for interactive viewing, but the email attachment must be a PDF.
2. Draft the covering email using the template at `/Templates/weekly_screen_email_template.md`. Populate all bracketed fields with the actual screen criteria, results, and recommendation rationale. Follow the greeting rules in the template:
   - 1 recipient: "Hi [First Name],"
   - 2 recipients: "Hi [First Name 1], [First Name 2],"
   - 3+ recipients: "Hi team,"
   - To resolve first names from email addresses, check `/Templates/recipient_names.csv`. If no mapping exists, ask Ciarán to confirm the name, then save the mapping to the CSV for future runs.
3. Attach the combined PDF (not a link to an artifact) to the email.
4. Confirm the email content and recipient with Ciarán before sending each time. This is a standing constraint, not a one-off setup step, and holds even once the workflow is otherwise routine.

## Tools / Data Sources (9fin MCP 2)
- Screener: company screener filters, bond/loan screener filters
- Company resolution: company lookup
- Financials: latest key financials table, latest financial statement
- Capital structure: latest debt cap table, debt instruments & covenants table, covenant basket text
- Ownership/structure: org chart
- News & transcripts: latest news, document search, document content
- Gmail (for delivery of the final PDF)
- Puppeteer (for HTML-to-PDF conversion), installed as a project dependency (`package.json`) and reused via `render_pdf.js`. If `node_modules` is ever missing, run `npm install` from the project root (not a temp/scratchpad directory) so it persists for future runs instead of re-downloading every time.

## Screening Criteria (confirmed defaults)
Used automatically for the scheduled Sunday-night run. For a manually triggered run, see Phase 1, Step 0.
- Status: priced
- Borrower type: corporate
- Region: Europe
- Rating (CFR): BB, B or CCC
