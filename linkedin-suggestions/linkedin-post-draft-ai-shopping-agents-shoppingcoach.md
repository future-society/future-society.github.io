# LinkedIn post draft — Banks' AI shopping-agent warning meets FuSo's ShoppingCoach (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. This session's search for a genuinely
≤2-day story turned up nothing usable that wasn't already covered by a prior
draft in this repository: the "second OpenAI sandbox escape" training pause
(disclosed 26 September) is the exact hook already used in
`linkedin-post-draft-openai-sandbox-escape-article40-audit.md` (also dated 26
September); the "Standards Authority for Frontier AI" (SAFA) self-regulation
story, despite aggregators dating it to 25–26 September, traces back to
Bloomberg/CNBC reporting from 15 September and is a staleness-trap resurface,
not fresh; Oregon's AI "kill switch"/third-party-review executive order
(Gov. Kotek, EO 26-26, 23 September) and Illinois's new AI Cabinet
(Gov. Pritzker, EO 2026-07, 22 September) are both real and undupe'd, but
thematically repeat the "government kill switch / oversight order" angle
already used for California's order.

**Chosen news hook instead:** a joint paper published around 22–24 September
2026 by six major banks — Bank of America, Capital One, ING, NatWest, ASB
Bank (NZ), and Commonwealth Bank of Australia — warning that AI shopping
agents are outpacing consumer protections. It's six days old rather than two,
but it is the most current *undupe'd* story with a substantive, well-sourced
FuSo tie-in found this session, and it finally gives a home to ShoppingCoach
(ACM CHI EA 2024), one of only two FuSo publications that had gone completely
unused across eighteen prior drafts in this repository (the other,
PermitBot, still has no findable URL and no matching news this session
either). Rejected as the news hook for the same reason as SAFA/Oregon/
Illinois above: too close to previously-used stories, or too stale on
inspection (Amex's AI-agent purchase-protection program, widely recirculated
this week, actually launched in April 2026).

The banks' paper (covered by CNBC, Fox Business, Bitdefender, Business
Standard, and others) argues that when an AI agent shops and pays on a
consumer's behalf, nobody — least of all the consumer — can be sure whose
interest it's actually serving: it may enter card details into unfamiliar
sites, steer purchases toward payment rails with weaker protections, log and
expose sensitive purchase-intent data, or simply buy the wrong thing, with
no clear answer for who's liable. Their own framing: "Consumers are unclear
if AI will act in their interests... They are not sure whether they will be
protected or who they will need to go to if things go wrong."

That is precisely the design question Jannis Strecker-Bischoff, Simon Mayer,
Kenan Bektaş, and colleagues built and user-tested an answer to *before* the
current agentic-commerce wave existed: ShoppingCoach (ACM CHI EA 2024) is a
diminished-reality system that intervenes for the shopper's own stated
health interest inside a real supermarket — visually suppressing unhealthy
items from view rather than deciding and transacting on the shopper's
behalf — evaluated for whether the intervention actually served the person
using it, with the person still doing the choosing and paying. It's a
concrete existence proof that "AI helps you shop" and "AI shops instead of
you, and you hope it's on your side" are different designs with very
different answers to the trust question the banks are now raising at
industry scale.

## Draft post text

Six major banks just told the world that when an AI agent shops for you, nobody can promise it's actually on your side.

Bank of America, Capital One, ING, @NatWest, ASB Bank, and Commonwealth Bank of Australia published a joint paper this week warning that AI shopping agents are moving faster than consumer protections. Their agents can enter your card details into sites you've never seen, steer you toward payment methods with weaker fraud protection, quietly log your purchase intentions and preferences, or just buy the wrong thing — with no settled answer for who's liable when it goes wrong. Their own words: "Consumers are unclear if AI will act in their interests... They are not sure whether they will be protected or who they will need to go to if things go wrong."

We had the same question years before "agentic commerce" was an industry term — and built a different kind of answer. @Future Society Hub's Jannis Strecker-Bischoff, Prof. Simon Mayer, Kenan Bektaş and colleagues designed ShoppingCoach: a diminished-reality system that helps shoppers eat healthier not by shopping *for* them, but by softly hiding less healthy items from view as they browse a real supermarket aisle — tested with real shoppers, real products, real choices. The person still decides. The person still pays. The system's only job is to serve the interest the person already told it to serve.

That distinction — an AI that assists a decision you stay inside of, versus an AI that makes the decision and hopes you're happy with it — is exactly the gap the banks are now flagging at trillion-dollar scale. Good interface design isn't a side note to agentic commerce's trust problem; it's the actual variable that decides whether the answer to "will AI act in my interest" is yes.

Who else is designing AI shopping tools that keep the human inside the loop, not just informed after the fact?

📄 Paper: https://doi.org/10.1145/3613905.3650795 (Strecker-Bischoff, Wu, Bektaş, Vaslin & Mayer, ACM CHI EA 2024)
🔗 Our Inclusive and Healthy Society work: https://futuresociety.ch/#focus
📰 Banks' warning: https://www.foxbusiness.com/technology/banks-warn-ai-shopping-agents-could-increase-risk-scams-fraud-data-privacy-breaches

#AgenticCommerce #AIShopping #ConsumerProtection #DiminishedReality #HCI #ResponsibleAI #DigitalHealth

## Sources checked
- https://futuresociety.ch (Focus Areas, incl. Inclusive and Healthy Society publications; llms.txt for focus-area wording)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.foxbusiness.com/technology/banks-warn-ai-shopping-agents-could-increase-risk-scams-fraud-data-privacy-breaches (24 Sept 2026, banks named, key quote, proposed solutions)
- https://www.bitdefender.com/en-us/blog/hotforsecurity/ai-agent-online-shopping-banks-scams-privacy (23 Sept 2026, joint-paper framing, specific risk categories, liability-ambiguity quote)
- https://www.cnbc.com/2026/09/22/banks-warn-ai-shopping-bots-raise-scam-fraud-data-privacy-risks.html (origin date, 22 Sept 2026; fetch blocked, corroborated via other coverage)
- ShoppingCoach authors/venue cross-checked via web search (Strecker, Wu, Bektaş, Vaslin, Mayer, ACM CHI EA 2024) against the site's own citation and `assets/team.js` (confirms Jannis Strecker-Bischoff and Simon Mayer as current team members; Bektaş not currently listed on the team page, cited as co-author only, consistent with how prior drafts handle him)
- Checked and rejected: OpenAI second sandbox escape (already used, 26 Sept, `linkedin-post-draft-openai-sandbox-escape-article40-audit.md`); SAFA self-regulatory body (traced to 15 Sept Bloomberg/CNBC origin, stale despite 25-26 Sept aggregator recirculation); Oregon EO 26-26 kill-switch/third-party-review order (23 Sept, real but thematically repeats California's kill-switch order already used); Illinois AI Cabinet EO 2026-07 (22 Sept, real but no clear FuSo publication tie beyond generic systemic-risk framing already covered); Amex AI-agent purchase protection (recirculating this week but originally launched April 2026, confirmed via Fortune's original 14 April 2026 report)

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
