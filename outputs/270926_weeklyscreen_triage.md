# Weekly Restructuring Screen — Triage Table

**Date run:** 27-Sep-2026 (manually triggered, custom criteria)

## Screening Criteria Applied

| Criterion | Value |
|---|---|
| Country of Risk | United Kingdom, France, Germany |
| Minimum instrument size | >€500m (EUR-equivalent) |
| Rating (CFR, any agency) | BB or below (BB/BB-/B+/B/B-/CCC+/CCC/CCC-/CC/C/D) |
| Maturity | 27-Mar-2028 to 27-Sep-2028 (18–24 months from run date) |
| Status | Priced (default) |
| Borrower type | Corporate (default) |
| Sector | Full universe, no filter |
| Price move (YTD) | **Not applied.** The 9fin MCP connector has no access to Latest Price / Latest Price Date data (licensing restriction). This criterion needs to be checked manually in the 9fin terminal before any name is deprioritised on price grounds alone. |

**Universe:** 27 instruments returned, consolidating to 21 distinct issuers. **Totalenergies** (2 instruments) excluded from the workup as a data anomaly — an A+/Aa3-rated supermajor with no plausible restructuring relevance; it appears here only because of a subordinated-instrument CFR notch, not underlying credit quality. **20 issuers carried to triage.**

## Continuity Check Against Target List

Only one name overlaps with the existing target list (last updated 26-Sep-2026):

- **Cerba / Cerba Healthcare** — carried at "Further work" previously (B3/B-, ~7x leverage per prior note, EQT-sponsored). This screen's pull shows the CFR as **Caa3/CCC-** with no sponsor recorded, likely reflecting a different consolidation level (HoldCo vs OpCo) in 9fin's entity structure rather than a genuine overnight downgrade. **Flag for reconciliation** — confirm entity/notching basis before Phase 2. Recommendation carried forward as further work regardless, given both readings point the same direction.

No other target-list names (Inovie, Amedes, Ahlstrom-Munksjo, ERAMET, TeamSystem, Compleat Food Group, Ingenico) were returned by this week's filter set — they either fall outside the size/rating/country/maturity combination applied this run, or (for the "Pass" names) were correctly excluded.

## Triage Table

| Company | Description | Key Stat | Recommendation |
|---|---|---|---|
| **Cerba** | French clinical pathology laboratory operator | Caa3/CCC- CFR; leverage not returned this pull, prior note ~7x | **Further work.** Leverage/maturity wall trigger — distressed-range rating with EUR 1,525m TLB due May-2028. Rating basis needs reconciliation against prior B3/B- reading (see continuity note above). |
| **Emeria (Foncia)** | French property management and transaction services | Caa1/CCC+/CCC+ CFR; leverage not available — further diligence required (source: 9fin latest key financials) | **Further work.** Leverage/maturity wall trigger — CCC-range rating across two TLB tranches (EUR 550m Mar-2028, EUR 1,275m Mar-2028) in a real estate sector facing structurally higher refinancing costs. |
| **Rodenstock** | Ophthalmic lenses and eyewear manufacturer | B-/B- CFR; Net Leverage 6.3x | **Further work.** Leverage/maturity wall trigger — leverage above 6x against a EUR 660m TLB due May-2028, at the weaker end of the single-B band. |
| **Cheplapharm Arzneimittel** | Acquirer/monetiser of off-patent legacy pharmaceutical products | B2/B/B CFR; Net Leverage 6.0x | **Further work.** Leverage trigger — leverage approaching 6x against a EUR 695m RCF maturing Apr-2028; RCF (not term debt) somewhat eases refinancing mechanics but still needs headroom confirmation. |
| **Worldline** | Global payments processing and digital transaction services | BB CFR (S&P only); Adj. EBITDA margin ~19%; downgraded from BBB | **Further work.** Leverage/liquidity trigger — public multi-notch downgrade trajectory and known guidance/turnaround issues warrant a 9fin news pull to confirm current liquidity position ahead of EUR 600m Sep-2028 maturity. |
| **Vivion Investments** | UK commercial real estate investment company | BB CFR (S&P only); instrument is Senior Secured **PIK** Notes | **Further work.** Liquidity trigger — PIK note structure typically signals pre-existing cash-pay constraints; compounded by CRE sector stress ahead of EUR 608.6m Aug-2028 maturity. |
| **ION Trading Technologies** | Trading, risk management and financial operations software | B3/B CFR; financials not available — further diligence required (source: 9fin latest key financials) | **Further work.** Maturity wall trigger — EUR 1,750m TLB due Apr-2028 is a large single maturity against a weak B3/B rating; data gap on leverage needs closing before a firmer call. |
| **Tarkett** | Flooring and wall covering manufacturer (vinyl, linoleum) | B2/B+/B+ CFR; leverage not available — further diligence required (source: 9fin latest key financials) | **Further work.** Maturity wall trigger (provisional) — mid-single-B rating against EUR 889m TLB due Jun-2028; recommend pulling leverage/liquidity data before Phase 2 to confirm. |
| **Inizio (UDG Healthcare)** | Outsourced healthcare advisory, communications and packaging services | B3/B CFR; **LTM financials dated 31-Dec-2021 — more than two years stale, flagged per data-quality rule** | **Further work.** Maturity wall trigger — c. EUR 2.3bn-equivalent combined TLB maturing Aug-2028 against a weak rating and financials that need refreshing (from 9fin or a resources upload) before any firm view. |
| **GfK** | Market research and consumer data provider | B+/BB- CFR; financials not available — further diligence required (source: 9fin latest key financials) | **Further work.** Structural/maturity trigger — EUR 650m TLB due Apr-2028 in a sector facing secular demand pressure from digital/data disruption; needs a financials and news pull to confirm severity. |
| **ZF** | Diversified automotive systems and components supplier | BB-/Ba2 CFR; financials not available — further diligence required (source: 9fin latest key financials) | **Further work.** Sector-stress flag — known market-wide restructuring activity across European auto suppliers (EV transition capex, margin pressure); USD 600m Apr-2028 maturity warrants a full 9fin pull to confirm company-specific leverage and liquidity. |
| **Forvia** | Global automotive equipment supplier | BB-/Ba3/BB+ CFR; financials not available — further diligence required (source: 9fin latest key financials) | **Further work.** Sector-stress flag — one of the more levered large-cap auto suppliers per market commentary; EUR 700m Jun-2028 maturity in a structurally challenged sector needs a full leverage/liquidity check. |
| Schaeffler | Automotive and industrial components supplier | BB+/BB CFR (Ba1); Net Leverage 2.4x | **Pass.** No trigger — low leverage and a fresh Apr-2025 primary issuance (not a refinancing of stressed debt) evidence full capital markets access ahead of the Apr-2028 maturity. |
| MAHLE | Automotive development partner and component supplier | BB- CFR (Ba2); Net Leverage 1.3x | **Pass.** No trigger — very low leverage for the rating band; no near-term stress signal. |
| Cegid | SaaS business management software provider | B2/B CFR; Net Leverage 4.7x | **Pass.** No trigger — moderate leverage and a Jan-2025 debt repricing (margin reduction, not distressed refinancing) point to healthy lender demand. |
| Solina | Food ingredient and culinary solutions manufacturer | B2/B CFR; leverage not available — further diligence required (source: 9fin latest key financials) | **Pass.** No trigger evident — Jan-2025 repricing indicates market access; recommend confirming leverage figure if this name is revisited. |
| New Immo Holdings | Commercial real estate developer/manager (shopping centres, mixed-use) | Ba1 CFR (BB+ equivalent); leverage not available — further diligence required (source: 9fin latest key financials) | **Pass.** No trigger — sits at the stronger end of the rating band screened; no distress signal identified. |
| Idemia Group | Biometrics and digital identity technology provider | B3/B/B CFR; leverage not available — further diligence required (source: 9fin latest key financials) | **Pass.** No trigger currently — 2024 debt repricing (not an extension) suggests adequate market access despite the weaker rating; monitor given data gap. |
| ZPG | Holding company for Zoopla and related UK property digital businesses | B2/B CFR; LTM financials dated 31-Dec-2021 — stale, flagged per data-quality rule | **Pass.** No trigger — Oct-2025 repricing completed on the Term Loan B evidences current market access notwithstanding stale underlying financial disclosure. |
| Valeo | Global automotive components supplier | BB CFR (Ba1); leverage not available — further diligence required (source: 9fin latest key financials) | **Pass.** No trigger identified from available data; BB rating and no adverse signal, though leverage figure should be confirmed if revisited. |

## Summary

- 20 issuers triaged (1 excluded as a screener data anomaly)
- **12 recommended for further work**, 8 recommended to pass
- Leverage/maturity wall is the dominant trigger, consistent with how this screen was constructed
- Several further-work names carry a genuine data gap (leverage/EBITDA/liquidity not returned by 9fin in this pass) rather than a confirmed distress signal — these need a targeted 9fin pull (or resources-folder upload) before Phase 2, not just a maturity-window coincidence
- YTD price move was not screened (data licensing gap) — recommend a manual 9fin terminal check on final shortlisted names before sign-off
