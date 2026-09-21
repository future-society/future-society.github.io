# LinkedIn post draft — California's AI "kill switch" order meets FuSo's DSA research-access audit (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Prior drafts (see `linkedin-suggestions/`
and the repo root) have covered: the AI Act RFIs and the GPAI public-summary
paper, the ChatGPT/Reddit/Roblox DSA designations, Australia's Digital Duty of
Care law and the sock-puppet auditing paper, the California addictive-feed
ban and Florida's K-12 AI guidance (both with the Personalized Realities
paper), the IDScan.net breach and the privacy-by-design book, Meta's CSAM-ad
failure and Anthropic's "Pace the Frontier" pledges (both with the Article
40(12) research-API audit paper), Anthropic's undisclosed safety incident and
the leaked EU Kids Act draft (both with the systemic-risks scoping review),
Google's chatbot-bill lobbying and Australia's opt-out law (both with the
sock-puppet VLOP-auditing paper), and Meta's camera-free "Luna" glasses and a
Spain AI-agent data breach (both with the gaze-based privacy-preserving-agent
paper). One search for a EU AI Office "first wave of inspections" story
(CNIL/BfDI/AESIA reportedly targeting HR, credit-scoring and healthcare-triage
AI) had to be discarded: it only turned up on SEO-aggregator blogs
(cubbbix.com, blog.mean.ceo), not on the European Commission's own AI Act
enforcement pages (404), matching the exact fabrication pattern flagged in
`.agent-notes.md` — don't use it without an independent primary source. The
still-unused FuSo publications (PermitBot, the Solid/MPC circular-economy
paper, FoodCoach, ShoppingCoach) don't speak to what this story is about, so
this draft revisits the Article 40(12) paper — a third use, but from a
genuinely new angle: not platform compliance with an existing DSA mandate,
but whether a *government-designed* emergency mechanism can replace the kind
of *independent, ongoing* oversight that paper tested.

**Chosen news hook:** On 18 September 2026, California Governor Gavin Newsom
signed an executive order directing the state's Government Operations Agency
to accelerate a possible "kill switch" — an emergency shutoff mechanism — for
frontier AI models, convene an expert panel within two months to recommend
how to strengthen state AI law, and consider embedding independent
verification organizations on-site at frontier labs for regular audits. The
order followed his veto of a tougher legislative proposal and came amid
"apocalyptic" safety warnings from AI companies themselves. Coverage
(CNBC, Yahoo News, Washington Examiner, Fox Business, 10News) was still
running as of 19–20 September. The sharpest pushback came from the Center for
Democracy & Technology: policy counsel Travis Hall said CDT remains
"concerned that proposals for 'kill switches' will prove ineffective in
reducing risk while introducing new security risks and serious potential for
government abuse," and argued real oversight has to be "meaningful,
independent, and ongoing" rather than a binary switch. This is a direct match
for FuSo's "Systemic Risk Mitigation" focus area — and CDT's own prescription
is exactly what Luka Bekavac & Simon Mayer tested empirically in "Auditing
Meta and TikTok Research API Data Access under Article 40(12) of the Digital
Services Act" (pre-print, 2026, https://arxiv.org/abs/2601.12390): does a
*legally mandated* channel for independent, ongoing oversight actually
deliver, once it exists? Their answer — Meta's and TikTok's official research
APIs strip up to 83% of contextual metadata and miss roughly half of real
platform activity — is a warning for anyone treating "embed independent
verifiers" as a solved design problem rather than a mechanism that itself
needs auditing.

## Draft post text

An AI "kill switch" sounds decisive. Whether it's real oversight is a different question.

On 18 September, California Governor Gavin Newsom signed an executive order pushing the state to accelerate work on an emergency shutoff mechanism for frontier AI models, convene an expert panel to recommend stronger state AI rules within two months, and consider putting independent verification organizations on-site at frontier labs for regular audits.

The Center for Democracy & Technology's response cuts right to the design question: policy counsel Travis Hall said CDT is "concerned that proposals for 'kill switches' will prove ineffective in reducing risk while introducing new security risks and serious potential for government abuse" — and that what's actually needed is oversight that is "meaningful, independent, and ongoing," not a binary switch.

That's not a hypothetical ask. It's testable — and our own research has tested exactly this kind of mechanism. Luka Bekavac and Simon Mayer didn't evaluate a proposal; they audited a mechanism that already exists. Under Article 40(12) of the EU's Digital Services Act, Meta and TikTok are legally required to give independent researchers real-time access to platform data. Bekavac & Mayer's finding: the official channels strip up to 83% of contextual metadata and miss roughly half of real platform activity — a legal mandate for "independent, ongoing" oversight that still leaves auditors working from a structurally incomplete picture.

"Embed independent verifiers" is the right instinct. But instincts aren't audits. Before any jurisdiction leans on on-site verification as the safety backstop behind an AI kill switch, someone needs to check whether the access those verifiers actually get matches the access they're promised — the same question we've already had to answer for platform researchers under the DSA. This is what Systemic Risk Mitigation means at Future Society Hub — FuSo, hosted at the University of St.Gallen: building the techno-legal tools to test whether an oversight mechanism works, not just whether it sounds like it should.

To policymakers drafting the next version of California's AI safety framework, and to the EU AI Office watching how Article 55 systemic-risk obligations play out in parallel: what would it take to make "independent verification" a measurable, enforceable property of a mechanism, rather than a label attached to it?

📄 Paper: https://arxiv.org/abs/2601.12390 (Bekavac & Mayer)
🔗 Our Systemic Risk Mitigation work: https://futuresociety.ch/#focus

#AISafety #AIGovernance #SystemicRisk #FrontierAI #DigitalServicesAct #TechPolicy #KillSwitch

Suggested tags: @Gavin Newsom @Center for Democracy & Technology @Future Society Hub @University of St.Gallen

## Sources checked
- https://futuresociety.ch (Focus Areas, incl. Systemic Risk Mitigation publications; llms.txt Team/Key People for author roles)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.gov.ca.gov/2026/09/18/governor-newsom-issues-executive-order-to-accelerate-independent-oversight-and-advance-the-creation-of-an-ai-kill-switch/ (primary source: EO text/summary, quote)
- https://www.yahoo.com/news/politics/articles/ai-kill-switch-real-thing-203133945.html (CDT/Travis Hall quotes, other expert reactions)
- https://www.washingtontimes.com/news/2026/sep/18/gavin-newsom-orders-review-ai-kill-switch-advanced-models/ (headline/date corroboration; body blocked by 403)
- https://www.cnbc.com/2026/09/19/ai-kill-switch-explained.html (headline/date corroboration; body blocked by 403)
- https://digital-strategy.ec.europa.eu/en/policies/ai-act-enforcement (404 — used to rule out the unverifiable "first wave of AI Act inspections" story before discarding it)
- https://arxiv.org/abs/2601.12390 (Bekavac & Mayer, Article 40(12) audit paper, findings figures)

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
