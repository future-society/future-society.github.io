# LinkedIn post draft — US DOJ intervenes for Musk against EU's X fine meets FuSo's Article 40(12) research-access audit (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Prior email tasks have already
produced drafts (see `linkedin-suggestions/` and the repo root) covering,
among others: three earlier stories with this same Article 40(12) research-API
audit paper (California's AI "kill switch" order, Meta's CSAM-ad failure, and
Anthropic's "Pace the Frontier" pledges — see
`linkedin-post-draft-california-ai-kill-switch-article40-audit.md`), and,
separately, the original €120m X/DSA fine and the OpenAI–Hugging Face
autonomous-agent incident were *not* used here even though both surfaced in
this session's research — the fine itself is stale news (imposed 5 December
2025) and the autonomous-agent incident was already the news hook for
`linkedin-post-draft-un-ai-agents-panel-circular-economy-mpc.md` (21 September
2026). This draft instead centers on a distinct, very fresh development: the
US Department of Justice's court filing yesterday, which reuses the Article
40(12) audit paper but from a new angle (US–EU jurisdictional conflict over
the DSA's researcher-data-access mandate, rather than platform-compliance
audits or "kill switch" proposals).

**Chosen news hook:** On 24 September 2026 (yesterday), the U.S. Department
of Justice filed applications to intervene in two cases before the EU's
General Court in Luxembourg — *X Internet and X Holdings v. Commission*
(Case T-114/26) and *Musk v. Commission* (Case T-121/26) — backing Elon Musk
and X Corp.'s bid to annul the European Commission's 5 December 2025 decision
fining them €120 million (the first-ever fine issued under the Digital
Services Act). Assistant Attorney General Brett A. Shumate said "the European
Commission inappropriately attempted to expand its regulatory authority to
reach American companies not present or operating within its jurisdiction."
The Commission's original decision cited three DSA violations: breach of
transparency obligations, deceptive design of the "blue checkmark" verified-
account system, and — most relevant here — X's failure to provide required
access to public platform data for independent researchers.

This is a direct hit on FuSo's "Systemic Risk Mitigation" focus area, which
is explicitly about "implementing techno-legal tools to identify and mitigate
systemic risks of emerging technologies and online platforms at global
scale." The DOJ's filing puts the DSA's Article 40(12) researcher-data-access
mandate itself at the center of a US–EU jurisdictional fight — the exact
legal mechanism Luka Bekavac and Simon Mayer empirically audited in "Auditing
Meta and TikTok Research API Data Access under Article 40(12) of the Digital
Services Act" (pre-print, 2026). Their finding gives the story a sharper edge
than "X refused to comply": platforms that *do* comply, via the DSA's
official Article 40(12) channels, still hand researchers data streams that
strip up to 83% of contextual metadata and miss roughly half of real platform
activity. So the case now before the General Court isn't just about whether
X must open its data — even if it loses and complies, FuSo's own audit
suggests the resulting access could still fall far short of the "independent,
ongoing scrutiny" Article 40(12) is meant to guarantee.

## Draft post text

Yesterday, the US government asked an EU court for permission to fight on Elon Musk's side — against the European Commission.

The US Department of Justice filed to intervene in two cases now before the EU's General Court in Luxembourg, backing X Corp. and Musk's appeal of the €120 million fine the Commission imposed in December 2025 — the first fine ever issued under the Digital Services Act. Assistant Attorney General Brett A. Shumate argued the Commission "inappropriately attempted to expand its regulatory authority to reach American companies not present or operating within its jurisdiction." The underlying fine, worth remembering, wasn't just about content moderation: one of the three violations cited was X's failure to give independent researchers the platform-data access Article 40(12) of the DSA requires.

Here's the twist our own research surfaces: refusing access, as X did, isn't the only way that mandate can fail. @Future Society Hub's Luka Bekavac and Prof. Simon Mayer audited how @Meta and @TikTok — platforms that *do* comply with Article 40(12) — actually deliver on it, and found their official research-API channels strip up to 83% of contextual metadata and miss roughly half of real platform activity. A legal requirement for "independent, ongoing" oversight, met on paper, can still leave researchers working from a structurally incomplete picture.

So even if the General Court eventually orders X back into compliance, that alone won't settle what compliance should actually look like. Jurisdiction is the fight in Luxembourg right now — but the harder, less visible question is whether the access researchers get once a platform says "yes" is real access at all.

We're at @University of St.Gallen building the techno-legal tools to answer that question empirically rather than by assertion. Who else is measuring what "researcher access" actually delivers once the legal fight is over?

📄 Paper: https://arxiv.org/abs/2601.12390 (Bekavac & Mayer)
🔗 Our Systemic Risk Mitigation work: https://futuresociety.ch/#focus
📰 DOJ filing: https://www.justice.gov/opa/pr/united-states-files-request-intervene-case-brought-x-corp-and-elon-musk-seeking-annul

#DigitalServicesAct #PlatformGovernance #AIGovernance #ResearcherAccess #TechPolicy #SystemicRisk #EUvsUS

## Sources checked
- https://futuresociety.ch (Focus Areas, incl. Systemic Risk Mitigation publications; llms.txt for paper venue/authors)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.justice.gov/opa/pr/united-states-files-request-intervene-case-brought-x-corp-and-elon-musk-seeking-annul (DOJ press release, primary source, dated 24 Sept 2026, confirms filing date, case numbers, AAG quote)
- https://www.courthousenews.com/x-appeals-eus-142-million-fine-over-digital-content-violations/ (confirms the three DSA violations cited in the original Dec 2025 Commission decision, incl. researcher-data-access failure)
- https://www.malaymail.com/news/money/2026/09/25/us-asks-eu-court-to-let-it-back-musk-in-xs-120m-appeal-over-digital-rules/236417 (secondary confirmation, dated 25 Sept 2026)
- https://arxiv.org/abs/2601.12390 (Bekavac & Mayer, Article 40(12) audit paper — findings figures reused from a prior verified draft in this repo, `linkedin-post-draft-california-ai-kill-switch-article40-audit.md`)

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
