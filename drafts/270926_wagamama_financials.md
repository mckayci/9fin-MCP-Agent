# Wagamama — Business Description, Revenue Splits & Summary Financials
Prepared 27-Sep-2026 for Phase 2 tearsheet. All figures in GBP unless stated. Sources: 9fin (company lookup, latest key financial table, latest financial statement, quarterly Financial Reports/Results Presentations, Q2 2026 bondholder call transcript, Credit/Financial/Legal QuickTakes, "Turning noodles into ramen" Analysis piece, and news/ratings feed), plus `/resources/wagamama/S&P Report.pdf` (S&P Global Ratings Research Update, 25-Jun-2026, uploaded by Ciarán). Each figure is tagged **[9fin]** or **[S&P upload]**. Cross-checked against `270926_wagamama_capital.md` (capital structure researcher's output) where relevant.

---

## 0. Perimeter clarification — read this before using any number below

**All financial figures in this note — from 9fin's "Wagamama" company record (company_id 943) and from the S&P report — represent the Wagamama restricted/financing group, not the full historical TRG consolidated group.**

Specifically:
- 9fin's "Wagamama" company record and the S&P report both cover **Wagamama (Holdings) Limited** and its subsidiaries (the entity group that guarantees the £330m 8.5% Senior Secured Notes due 2030, issued by Waga BondCo Limited). This is confirmed explicitly in S&P's recovery analysis: *"Waga BondCo Ltd. is the issuer of the notes, the parent guarantor is Wagamama (Holdings) Ltd., and the subsidiary guarantor is Wagamama Ltd."* **[S&P upload]**
- **The Restaurant Group (TRG)** is tracked separately in 9fin as company_id 8588, but **no financials are available for it in 9fin** (`get_latest_key_financial_table` and `get_latest_financial_statement` both returned "no data available"). This is consistent with TRG having delisted from the London Stock Exchange on 22 December 2023 when Apollo took it private **[9fin]** — TRG no longer files public consolidated accounts, and 9fin's financial data on this credit is sourced from Wagamama's own bondholder reporting (which only started once Wagamama was carved into its own restricted group in Jan-2025) and its Companies House-filed statutory accounts.
- Prior to January 2025, Wagamama sat inside TRG's group cash pool and TRG-level treasury (see FCF section below — historic working-capital and interest figures reflect large intercompany balances with TRG, not Wagamama's standalone cash generation). As part of the January 2025 refinancing, **TRG split into three standalone financing silos** — Wagamama, Pubs (Brunning & Price), and Concessions/TRG-legacy — each separately financed and non-cross-guaranteed. Wagamama's FY2023–FY2024 numbers as presented by 9fin appear to already reflect the Wagamama-only trading segment (IFRS 8 note in the Mar-2025 Offering Memorandum states the group has one operating segment: "the operation of Wagamama-branded restaurants"), but the interest, tax and working-capital lines for those years reflect TRG-era intercompany funding arrangements rather than a standalone capital structure.
- **TRG still exists above/alongside Wagamama and continues to affect the restricted group's cash flow** via ongoing arm's-length service agreements: TRG Holdings (the shared-services entity, also Apollo-owned) charges Wagamama for head-office/central costs on a revenue-share basis — £9.0m (FY22), £11.9m (FY23), £11.9m (LTM to Jan-2025), £9.4m (LTM to Jun-2025) **[9fin]**. In 2026, TRG sold its Concessions business, and management indicated on the Q2 2026 call that group central-cost recharges will be reviewed downward as a result **[9fin, transcript]**.
- **Bottom line:** every revenue/EBITDA/margin/leverage figure below is for the Wagamama financing perimeter (Wagamama (Holdings) Limited group), not a TRG-wide consolidated figure. Where "TRG" and "Wagamama" appear interchangeably in older press coverage (pre-2025), this reflects the fact that Wagamama was then TRG's largest reporting segment, not that the two are now the same entity or perimeter. This aligns with the capital structure researcher's finding in `270926_wagamama_capital.md` that the Restricted Group is confined to Wagamama (Holdings) Ltd / Waga BondCo / Wagamama Ltd, with TRG's Pubs and Concessions/TRG-legacy silos entirely separate and unguaranteed.

---

## 1. Business Description

Wagamama is the UK's leading pan-Asian casual dining chain, operating under a single "wagamama" brand across noodle- and rice-based dishes, small plates and drinks, positioned as an affordable, health-focused alternative within UK casual dining **[9fin, S&P upload]**. The first restaurant opened in Bloomsbury, London in 1992 (per Wagamama's own FY2025 Annual Report **[9fin]**; S&P's report separately states 1991 as the founding year **[S&P upload]** — minor date discrepancy between sources, not material to the credit).

**Scale and footprint (as at FY2025 year-end, 28-Dec-2025) [9fin]:** 165 company-operated restaurants in the UK and Ireland, plus 62 restaurants across 18 other countries, including 7 (later reduced to 5–6, see below) company-operated sites in the US, roughly 54–56 franchised sites (primarily Europe and the Middle East), and a small number of joint-venture sites in India. S&P's company description independently corroborates this footprint: "166 owned sites and an international footprint that includes six owned sites in the U.S. and 54 franchised sites primarily across Europe and the Middle East" **[S&P upload]**.

**End markets and revenue mix:**
- Overwhelmingly UK-weighted: 95–98% of revenue is generated by UK & Ireland company-operated restaurants, depending on period (98% per the Jan-2025 Credit QuickTake covering LTM to Sep-2024; 95% per the Nov-2025 9fin Analysis piece covering LTM to Jun-2025) **[9fin]**.
- Channel mix: dine-in remains the largest channel; delivery (exclusively via Deliveroo in the UK since 2016, with Uber Eats added from Q2 2026) has represented c.19–21% of UK sales historically, guided by management to reach c.25% of total sales on a run-rate basis by end-2026 following the Uber Eats rollout **[9fin, transcript]**.
- International: a small, loss-making company-operated US business (fully consolidated only from May-2024, when Wagamama acquired the remaining stake in its former JV with CVC Ramen) plus a growing but currently small franchise royalty stream (new franchise markets added in 2026 include Saudi Arabia, Azerbaijan and the Philippines) and an early-stage 50%-owned India JV. Under IFRS 8, the group discloses only one reportable operating segment ("the operation of Wagamama-branded restaurants"), so there is no statutory business-line segment split beyond the UK & Ireland / International geographic split shown in Section 2 **[9fin, Final OM]**.
- Average price of a main meal was £15.49 (FY2024), positioned below most casual-dining peers, reflecting a deliberate value/volume strategy aimed at price-sensitive, younger UK consumers **[9fin]**.

**Relevant corporate history:**
- **1992 (or 1991 per S&P):** first Wagamama restaurant opens in Bloomsbury, London.
- **2018:** The Restaurant Group plc (TRG), then a London-listed multi-brand operator (Frankie & Benny's, Chiquito, Coast to Coast, and a leisure/concessions estate), acquires Wagamama for an enterprise value implying a c.12.2x EBITDA multiple, making Wagamama TRG's largest and highest-quality brand **[9fin]**.
- **2019 onward:** TRG progressively rationalised its legacy casual-dining estate, exiting/divesting underperforming brands (including its leisure business, referenced in 9fin's Jan-2025 Credit QuickTake as "the leisure business, which has been divested") as it refocused the group around Wagamama, pubs (Brunning & Price) and airport/travel concessions. TRG's brand mix at the time of the 2023/24 Apollo transaction included Wagamama, Frankie & Benny's, Firejacks, Chiquito, Brunning and Price, TRG Concessions, and Coast to Coast, per 9fin's company record for TRG (company_id 8588) **[9fin]** — precise closure/divestment dates for individual legacy brands are **not available - further diligence required** (likely source: TRG's pre-2023 LSE-filed annual reports and RNS disposal announcements, not held in 9fin's coverage of the now-private Wagamama entity).
- **22 December 2023:** Apollo Global Management completes the take-private of TRG, delisting it from the London Stock Exchange, at a reported enterprise value of c.£701m (c.9x EBITDA, including the Pubs and Concessions businesses, which then accounted for roughly 35% of TRG's EBITDA based on H1 2023 results) **[9fin]**.
- **January 2025:** As part of a refinancing, Apollo split TRG into three standalone, separately financed divisions/silos — **Wagamama**, **Pubs** (Brunning & Price brand) and **Concessions** (including airport units) — each now sitting under Rock BidCo Limited but financed independently. Wagamama's restricted group issued £330m of 8.5% Senior Secured Notes due 2030 (via Waga BondCo Limited) to refinance a prior sterling unitranche facility, and entered arm's-length service agreements with TRG Holdings for shared central functions. The OM valued the standalone Wagamama business at a 10x EV/EBITDA multiple (c.£785m EV on an ambitious FY25 adjusted EBITDA of £78.5m) **[9fin]**.
- **2026:** TRG sold its Concessions business (referenced by management on the Q2 2026 bondholder call as "the sale of our concessions business earlier this year"), further narrowing the residual TRG group and triggering a planned review of the central overhead still recharged to Wagamama **[9fin, transcript]**.
- Wagamama is rated B2 (Moody's, first assigned Jan-2025) / B (S&P, affirmed 25-Jun-2026 with outlook revised to Negative from Stable) at the Wagamama (Holdings) Limited level **[9fin, S&P upload]**.

---

## 2. Revenue Splits

### 2a. By geography

Wagamama reports revenue divisionally as **UK & Ireland** vs **International** (the latter comprising the US company-operated business, franchise royalty income, and the India JV). There is no further published geographic breakdown within "International." Figures below are as reported in Wagamama's quarterly bondholder Financial Reports and FY2025 Annual Report **[9fin]**.

| Period | UK & Ireland (£m) | International (£m) | Group Total (£m) | UK & Ireland % of total |
|---|---|---|---|---|
| FY2024 (52 weeks to 29-Dec-2024) | 487.2 | ~14.3 (incl. US £10.3m) | 501.5 | 97.1% |
| FY2025 (52 weeks to 28-Dec-2025) | 461.7 | ~18.8 (incl. US £14.4m) | 480.5 | 96.1% |
| H1 2025 (26 weeks to Jun-2025) | 224.9 | 9.8 | 234.7 | 95.8% |
| H1 2026 (26 weeks to Jun-2026) | 232.3 | 7.2 | 239.5 | 97.0% |
| Q3 2025 YTD (39 weeks) | 342.6 | 14.0 | 356.6 | 96.1% |

Notes:
- The FY2025 UK & Ireland figure includes the effect of transferring four Wagamama airport sites to TRG's Concessions business during the year — this alone reduced reported UK revenue by c.£25–30m (S&P estimate) / c.£28.2m (company disclosure); excluding this transfer, underlying UK revenue grew modestly **[9fin, S&P upload]**.
- US revenue rose from £10.3m (FY2024) to £14.4m (FY2025), reflecting a full year of consolidated trading following the May-2024 acquisition of the remaining US JV stake; the International division as a whole remains loss-making at the divisional EBITDA line (see Section 3) due to US investment costs and, more recently, Middle East conflict-related disruption to franchise revenue **[9fin, transcript]**.
- No separate revenue-by-country split (e.g. individual European or Middle Eastern franchise markets) is disclosed; franchise revenue is royalty-only (Wagamama does not consolidate franchisee-level sales), so its absolute contribution is small relative to the International total. **Franchise/royalty revenue is not separately quantified in disclosure — not available - further diligence required** (likely source: a direct data request to management/IR, as it is not broken out in the quarterly Financial Reports or Annual Report reviewed).

### 2b. By segment

Wagamama discloses **one IFRS 8 operating segment** ("the operation of Wagamama-branded restaurants") — there is no statutory segmental P&L split by business line **[9fin, Final OM, page 391]**. In practice, the business is best understood by the following non-statutory splits, both disclosed in bondholder materials:

| Channel/format split | Basis | Value |
|---|---|---|
| Delivery as % of total sales | Historical run-rate, per management commentary | c.19–21% (pre-Uber Eats rollout); guided to reach c.25% of total sales run-rate by end-2026 following Uber Eats rollout |
| Dine-in / takeaway | Residual of the above | c.75–81% |

| Estate mix (site count) | Q2 2025 | Q2 2026 |
|---|---|---|
| UK & Ireland (owned) | 162 | 169 |
| US (owned) | 7 | 6 |
| Total owned sites | 169 | 175 |
| Franchise sites | 56 | 56 |
| JV sites (India) | 1 | 2 |

Data gap: **no revenue-by-segment table is available from 9fin's `Sales by Segment` tool** (`get_latest_financial_statement` returned "No Annual Sales by Segment data is available for this company") — consistent with the single-segment IFRS 8 disclosure above, so this is expected rather than a missing data point.

---

## 3. Summary Financials

**Basis:** figures are as reported by Wagamama (Holdings) Limited in its bondholder financial reporting and Companies House-filed statutory accounts, sourced via 9fin's `get_latest_key_financial_table` (Annual, GBP millions) **[9fin]**, cross-checked against S&P's Research Update **[S&P upload]** and the capital structure researcher's cap-table pull (`270926_wagamama_capital.md`). "Pre-IFRS16" EBITDA (excludes lease/rent add-back; i.e. rent is treated as an operating cost) is the basis management, the RCF covenant and this week's screen use; "IFRS16" EBITDA adds back rent under the lease-accounting standard. Both are shown as they are used inconsistently across sources and both matter for different purposes (covenant testing uses a further-adjusted "PF adjusted EBITDA" — see capital structure researcher's note).

| (£m, pre-IFRS16 basis unless stated) | FY2023 | FY2024 | FY2025 | LTM (28-Jun-2026) |
|---|---|---|---|---|
| Revenue | 463.5 | 501.5 | 480.5 | 485.4 |
| Gross profit | 76.9 | 81.1 | 88.7 | 88.6 |
| Gross profit margin | 16.6% | 16.2% | 18.5% | 18.3% |
| Adjusted EBITDA (pre-IFRS16) | 55.4 | 60.8 | 53.7 | 45.3 |
| Adjusted EBITDA margin (pre-IFRS16) | 12.0% | 12.1% | 11.2% | 9.3% |
| Adjusted EBITDA (IFRS16) | 55.9 | 83.0 | 83.1 | 73.7 |
| Adjusted EBITDA margin (IFRS16) | 12.1% | 16.6% | 17.3% | 15.2% |
| Capex (net, per cash flow) | (24.6) | (35.9) | (26.0) | (31.3) |
| Net debt (pre-IFRS16, i.e. excl. lease liabilities) | 421.3 | 472.9 | 610.5 | 341.3 |
| Net leverage (pre-IFRS16) | 7.6x | 7.8x | 11.4x | **7.5x** |
| Net debt (IFRS16, incl. lease liabilities) | 630.9 | 693.6 | 523.6 | 527.0 |
| Net leverage (IFRS16) | 11.3x | 8.4x | 6.3x | 7.2x |

The LTM (28-Jun-2026) pre-IFRS16 net leverage of **7.5x on £45.3m EBITDA** matches exactly the figure given in this week's screen brief. Note the FY2025 pre-IFRS16 net leverage of 11.4x looks like an outlier against the IFRS16 figure of 6.3x for the same period — this is a 9fin-reported data quirk around the Jan-2025 refinancing (large one-off debt issuance proceeds sitting on the balance sheet at the FY2025 print before being applied) rather than a genuine step-change in underlying leverage; treat the LTM (Jun-2026) columns as the most reliable current read.

**Leverage cross-check (three distinct, non-comparable bases — do not blend):**
1. This week's screen / 9fin unadjusted pre-IFRS16 basis: **7.5x** net leverage on LTM EBITDA of £45.3m.
2. Company's own pro forma adjusted basis (per 9fin cap table, 30-Jun-2026): **5.19x net / 5.25x gross** on PF adjusted EBITDA of £65.7m (add-backs include £10.0m TRG Group costs, £9.4m pro forma cost savings, £4.3m full-year impact of new sites, £5.4m delivery dual-aggregator model, and a rent adjustment) — this is the basis that governs the RCF's 8.3x springing covenant.
3. S&P-adjusted (post-IFRS16) basis: **6.9x FY2025 actual**, forecast **6.2x–6.5x FY2026**, improving to **5.7x–6.1x FY2027**, on S&P's own EBITDAR-inclusive adjusted EBITDA (£79.6m FY2025a) **[S&P upload]**.

See `270926_wagamama_capital.md` Section 1 for full detail on these three bases and why they should not be averaged.

**Quarterly EBITDA trend (9fin earnings flashes) [9fin]:**
| Quarter | Sales YoY | EBITDA YoY | Net leverage (PF adj. basis) |
|---|---|---|---|
| Q4 2025 | n/a | -25.1% | 6.2x (+1.9x vs prior period) |
| Q1 2026 | -0.6% | -35.6% | 4.9x (-1.3x vs prior period) |
| Q2 2026 | +4.7% | **-23.5%** | 5.2x (+0.3x vs prior period) |

The **-23.5% Q2 2026 EBITDA figure matches the screen brief exactly** and is a total-company (LTM-comparative) figure including the loss-making US business and TRG central-cost recharges. It is a wider decline than the +/-16% UK & Ireland + International **divisional** EBITDA-only decline disclosed on the Q2 2026 bondholder call (H1 2026 divisional adjusted EBITDA ex-US £24.9m vs £31.5m H1 2025, itself split UK & Ireland £27.5m vs £32.5m and International £(2.6)m vs £(1.0)m) — the two are consistent but measure different scopes (total group LTM vs H1 divisional), and both point the same direction: management guides to a **return to EBITDA growth in Q3 2026, strengthening further in Q4 2026**, as FY2025's value-reset investment annualises **[9fin, transcript]**.

---

## 4. Free Cash Flow Build

**Basis note (per CLAUDE.md FCF formula: EBITDA − Cash Taxes ± ΔNWC − Capex = UFCF; UFCF − Cash Interest − Lease Repayments = LFCF):** 9fin's pulled cash-flow statement does not disclose a clean, separately-itemised cash tax or working-capital-change line for FY2023–FY2025/LTM (these rows were blank in the data returned, a **data gap** — likely source: full Companies House-filed cash flow statement notes, not captured in 9fin's summarised pull). The cleanest fully-reconciled dataset available covering exactly this framework is **S&P's own adjusted FCF build [S&P upload]**, which is internally consistent (EBITDA − cash interest − cash tax ± ΔNWC = FFO; FFO ± ΔNWC-only residual = CFO; CFO − capex = FOCF; FOCF − lease repayments = FOCF after leases). The table below reconstructs the UFCF/LFCF framework from S&P's published inputs; the "S&P-adjusted" EBITDA figures differ from 9fin's pre/IFRS16 figures in Section 3 because S&P makes its own EBITDAR and other rating-agency adjustments, so **do not mix this table's EBITDA base with Section 3's**.

| (£m, S&P-adjusted basis) | FY2023 | FY2024 | FY2025 |
|---|---|---|---|
| EBITDA (S&P-adjusted) | 96.4 | 88.5 | 79.6 |
| less: Cash taxes paid | (0.7) | 0.0 | 0.0 |
| +/- Change in net working capital | (36.5) | (13.9) | (14.5)¹ |
| less: Capex | (26.8) | (40.2) | (27.2) |
| **Unlevered FCF (UFCF)** | **32.4** | **34.4** | **37.8** |
| less: Cash interest paid | (10.0) | (11.3) | (40.8)² |
| less: Lease (principal) repayments | (7.1) | (4.9) | (17.8)³ |
| **Levered FCF (LFCF)** | **15.3** | **18.2** | **(20.8)** |
| UFCF / EBITDA (conversion) | 33.6% | 38.9% | 47.5% |
| LFCF / EBITDA (conversion) | 15.9% | 20.6% | *n.a.* (negative)⁴ |

¹ Large negative NWC swings in FY2023–FY2025 substantially reflect TRG-era intercompany balance movements (Wagamama sat inside TRG's central cash pool until the Jan-2025 refinancing) rather than pure trading working capital; the FY2025 figure specifically includes a one-off £14.6m intercompany cash-sweep settlement and £2.6m of restructuring-related outflows tied to the refinancing and airport-site transfer **[S&P upload]**. Not representative of a normalised run rate.
² FY2025 cash interest of £40.8m reflects a part-year mix of legacy TRG intercompany interest (pre-refinancing, priced at SONIA+800bps) and the new £330m 8.5% bond coupon (post-31-Jan-2025 refinancing), plus RCF drawings — it is not representative of the go-forward run rate. **This differs materially from management's own FY2026 cash interest guidance of ~£28m given on the Q2 2026 bondholder call**, and from S&P's own FY2026e/FY2027f forecast of £40.1m/£39.9m. The gap between management's ~£28m guidance and S&P's ~£40m forecast is not fully reconciled from the sources reviewed — possible explanations include S&P including lease-interest (IFRS16 imputed interest) within "cash interest paid," or a difference in RCF-drawdown assumptions; **flagged as a data point requiring clarification, likely resolved by a direct question to management/IR or by re-running the FY2026e number against the Q3/Q4 2026 Financial Reports once published**.
³ Implied from the reported gap between S&P's FOCF and FOCF-after-leases lines; broadly consistent with the company-disclosed £17.7m total FY2025 principal lease payment figure.
⁴ Per CLAUDE.md formatting convention, negative FCF conversion should display as "n.a." in italic red (hex `#e74c3c`) in the final HTML tearsheet — flagged here for the build step; FY2025 LFCF/EBITDA is mathematically -26.1% but should render as *n.a.*

**Company/management-guided FY2026 cash items (pre-IFRS16 basis, per Q2 2026 bondholder call, 08-Sep-2026) [9fin, transcript]** — provided as the most current forward view, consistent with the screen brief:
- Cash interest: **~£28m** (matches screen brief exactly)
- Capex: **~£28–30m** (matches screen brief exactly; also matches S&P's independent FY2026e/FY2027f capex forecast of £28–30m)
- Cash tax: ~£3–3.5m
- Exceptional cash items: ~£2.5–3m
- Working capital: modestly negative for FY2026 as a whole (positive at H1 due to the 53-week accounting year timing, reverting negative in Q4)
- RCF: expected to remain drawn at year-end FY2026 due to the working-capital timing effect described above

S&P's own FY2026e/FY2027f FCF forecast **[S&P upload]**: EBITDA £84–87m (2026e)/£90–95m (2027f); FOCF (before leases) £8–13m (2026e)/£19–25m (2027f); **FOCF after leases £(10)m to £(6)m (2026e)**, improving to roughly neutral £(4)m to £1.0m (2027f). This implies **levered FCF remains negative through FY2026**, turning only marginally positive/breakeven in FY2027 under S&P's base case — consistent with management's own framing on the Q2 2026 call of a "turning point" reached only in H2 2026, with the balance-sheet benefit only flowing through from FY2027.

**Liquidity implication (cross-ref to capital structure researcher's note):** with LFCF negative through FY2026 on both S&P's and the implied company basis, the £55m RCF (£15.2m drawn as at 30-Jun-2026, per `270926_wagamama_capital.md`) is the primary buffer; S&P assesses liquidity as "adequate" but flags this could come under pressure if negative FOCF after leases does not improve, and its 31-Mar-2026 snapshot already looks more favourable than 9fin's more recent 30-Jun-2026 cap-table position (see capital structure researcher's note for the quarter-on-quarter deterioration detail).

---

## 5. Data Gaps

- **TRG standalone/consolidated financials** — not available in 9fin (company_id 8588 returns no financial data). Likely source: pre-Dec-2023 LSE-filed TRG plc annual reports/RNS filings for historical consolidated figures (would only be useful for pre-take-private history, not current credit assessment).
- **Precise dates of Frankie & Benny's / Chiquito / other legacy TRG brand divestments** — not available - further diligence required. Likely source: TRG's pre-2023 annual reports and disposal RNS announcements.
- **Franchise/royalty revenue, quantified separately from US company-operated revenue within "International"** — not available - further diligence required. Likely source: direct management/IR data request; not broken out in quarterly Financial Reports or the FY2025 Annual Report reviewed.
- **Cash tax paid and working-capital change, itemised for FY2023–FY2025/LTM directly from 9fin's cash-flow statement pull** — blank/not available from `get_latest_financial_statement`. Used S&P's independently-reported equivalent figures instead (see Section 4 basis note). Likely source: full Companies House-filed cash flow statement notes for Wagamama (Holdings) Limited.
- **Reconciliation of management's ~£28m FY2026 cash interest guidance against S&P's ~£40m FY2026e forecast** — not resolved from sources reviewed. Likely source: direct management/IR clarification, or the Q3/Q4 2026 Financial Reports once published.
- **Exact founding year (1991 vs 1992)** — immaterial discrepancy between Wagamama's own Annual Report (1992) and S&P's report (1991); not resolved, not material to credit.

---

*Most recent financials used: LTM to 28-Jun-2026 (9fin) and S&P's 25-Jun-2026 Research Update — both within the two-year currency threshold, no disclaimer required.*
