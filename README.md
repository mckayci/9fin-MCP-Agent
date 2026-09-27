# Restructuring Target Screener

An AI-powered weekly screening workflow that identifies potential European restructuring targets using [9fin](https://9fin.com) data, produces one-page company tearsheets, and emails the results to the team.

Built with [Claude Code](https://claude.com/claude-code) and the 9fin MCP server.

## Project Purpose

Restructuring investment banking teams need to stay on top of newly stressed European corporate credits. This workflow automates the repetitive parts of that process: screening for price drops, pulling financial data, assessing whether a company is a genuine restructuring candidate, and producing a formatted summary that a senior banker can read in five minutes before a client call.

The system screens for three key restructuring triggers:

1. **Covenant trip** - a company approaching or breaching financial covenants
2. **Maturity wall** - large debt maturities that cannot be refinanced at current leverage
3. **Liquidity shortfall** - insufficient cash and facilities to fund operations through the near term

## Use Cases

- **Weekly screening** - automated Sunday evening run that screens European corporates rated BB/B/CCC with meaningful price declines, triages the results, and waits for analyst input on which names to progress
- **Ad hoc screening** - manually triggered with custom criteria (different regions, rating bands, price thresholds, or sectors)
- **Company tearsheets** - one-page, print-ready summaries for selected targets covering business description, financials, capital structure, trading, holders, and a clear recommendation
- **Email delivery** - covering email with attached PDF sent to the team, summarising the week's findings

## Workflow Steps

### Phase 1: Weekly Screen

1. Query 9fin's screener (default: European corporates, BB/B/CCC rated, with >2.5pt weekly price decline)
2. Pull business description, key financials, leverage, trading levels, and credit rating for each result
3. Check each name against the running target list for continuity across weeks
4. Build a triage table with a recommendation for each name ("further work" or "pass") tied to the three triggers
5. Present the triage table and wait for the analyst to select which names to take forward

### Phase 2: One-Page Tearsheet

For each selected name, build a structured tearsheet covering:

- Header block with key stats (revenue, EBITDA, leverage, liquidity)
- Business description and situation overview
- Key catalysts and triggers to watch
- Summary financials (multi-year, including FCF build)
- Capital structure table with pricing and maturities
- Liquidity build and group structure chart
- Debt holdings (top holders by instrument)
- Trading chart with annotated credit events
- Final recommendation with rationale

### Phase 3: Delivery

1. Render tearsheets as A4 portrait PDFs using Puppeteer
2. Combine into a single PDF if multiple companies were assessed
3. Draft a covering email using the team template
4. Confirm content and recipients with the analyst, then send via Gmail

## Agent Architecture

The workflow uses four specialised Claude Code sub-agents:

| Agent | Role |
|---|---|
| `screener` | Phase 1: queries 9fin, pulls initial data, builds triage table |
| `researcher-financials` | Phase 2: business description, revenue splits, summary financials, FCF build |
| `researcher-capital` | Phase 2: capital structure, liquidity, org chart, trading, holders |
| `researcher-news` | Phase 2: news, 9fin analysis, management, situation overview, recommendation |

The financial and capital researchers run in parallel for each company, then the news researcher integrates their outputs into the final tearsheet.

## Example Outputs

### Tearsheet: Header and Key Stats

Company header with ratings, key financial metrics, business description, situation overview, and triggers to watch.

![Tearsheet header section](docs/screenshots/tearsheet_header.png)

### Tearsheet: Summary Financials and Capital Structure

Multi-year financials table (revenue through to leverage), capital structure with instrument-level detail, and liquidity build.

![Tearsheet financials section](docs/screenshots/tearsheet_financials.png)

### Tearsheet: Group Structure, Management, News, and Trading

Simplified ownership chart, management table, recent credit events, and annotated instrument trading chart.

![Tearsheet capital section](docs/screenshots/tearsheet_capital.png)

### Tearsheet: Debt Holdings and Recommendation

Top holders by instrument with cumulative percentages, and the final recommendation box with primary triggers identified.

![Tearsheet bottom section](docs/screenshots/tearsheet_bottom.png)

## Folder Structure

```
/workflows          Workflow SOP and agent definitions
/outputs            Generated tearsheets (HTML) and combined PDFs
/target_list        Running record of screened companies across weeks
/Templates          Email template and recipient mappings
/resources          Company-specific reference materials (holder data, pricing CSVs)
/drafts             Work in progress
/Precedent Emails   Archive of sent emails
/.claude/agents     Sub-agent definitions (screener, researchers)
```

## Data Sources

All company data is sourced via 9fin's MCP server:

- Company and bond/loan screener filters
- Business descriptions and financial statements
- Capital structure and covenant data
- Org charts and ownership structure
- News, analysis documents, and earnings transcripts
- Instrument pricing and holder data

## Limitations

- **9fin coverage only** - the screener and tearsheet content depend entirely on 9fin's data. Companies outside 9fin's coverage universe will return limited or no data and are flagged as requiring direct sourcing.
- **No real-time pricing** - instrument prices and trading data reflect 9fin's last available snapshot, not live market data. Tearsheets note the as-of date.
- **European corporates focus** - the default criteria target European leveraged credits. Other regions or asset classes (sovereigns, financials, EM) require manual criteria and may have sparser data.
- **Financial data gaps** - where 9fin does not have granular line items (e.g. detailed FCF builds, segment-level margins), the tearsheet flags these as "not available - further diligence required" rather than inferring figures.
- **Holder data availability** - debt holder data depends on regulatory filings and 9fin's aggregation. Coverage varies by instrument and jurisdiction; some instruments may show no holders.
- **No proprietary models** - the recommendation is a qualitative assessment against the three triggers, not a quantitative model. It is intended as a starting point for further analysis, not a standalone investment recommendation.
- **Email delivery** - requires Gmail MCP integration. The email is always confirmed with the analyst before sending.
