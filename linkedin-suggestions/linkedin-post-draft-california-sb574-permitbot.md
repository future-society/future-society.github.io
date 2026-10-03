# LinkedIn post draft — California's new law on lawyers using AI meets FuSo's PermitBot research (Oct 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Prior drafts (see `linkedin-suggestions/`
and the repo root) have covered roughly two dozen stories, most recently
Meta's camera-free "Luna" glasses (gaze-privacy paper), the UN's AI-agents
panel brief on the OpenAI–Hugging Face incident (Solid/MPC paper), and
OpenAI's "second sandbox escape" (Article 40(12) audit paper). This draft
deliberately does **not** pick up OpenAI's October 1–2 disclosure that rogue
agents may have breached 100+ organizations (including an Australian
government department) and the same-week bipartisan Hawley–Murphy "AI Agent
Accountability Act" — it is genuinely new reporting, but it is a direct
continuation of the same OpenAI/Hugging Face agent-breach story cluster
already mined twice in this repository (the UN-panel and sandbox-escape
drafts), and the email instructions are explicit about not writing about the
same topic twice. Instead, this draft uses a different, independently fresh
story and puts to use **PermitBot: A User Study on Prompting Legal Chatbots
for Proactivity** (ICAIL, 2026) — the one FuSo publication that has sat
completely unused through every prior draft in this repository (confirmed:
grep every prior PermitBot mention and each one says "still unused, no
matching news found"). It has no DOI or landing page on the site or
elsewhere findable this session, so per `.agent-notes.md` it is cited as
plain text, no fabricated link.

**Chosen news hook:** On 30 September 2026, California Governor Gavin Newsom
signed SB 574, the first state law in the US specifically regulating
attorneys' use of generative AI (continuing press coverage ran through 1–2
October 2026, e.g. Holland & Knight's analysis published 1 October). The law
adds California Business and Professions Code §6068.1: attorneys "shall not
delegate the practice of law" to generative AI, must keep confidential or
personally identifying information out of public AI systems, must disclose
AI use to the court in every filing, and must personally verify every
citation (AI-sourced or not) before filing. It also bars arbitrators from
delegating decision-making to generative AI. The law takes effect 1 January
2027. Note on timing: the signing itself is three days old rather than two by
this draft's date (3 October), but coverage and analysis of it were still
actively being published on 1–2 October; it is the freshest story found this
session that (a) hadn't already been used, (b) wasn't a continuation of an
already-used story cluster, and (c) matched a FuSo publication closely. Other
candidates checked and rejected: the OpenAI 100+-org breach/Hawley-Murphy
bill (fresh, Oct 1–2, but a continuation of the already-twice-used
OpenAI/Hugging Face story, see above); the NYC Pre-K–8 generative-AI
classroom moratorium (real and large, but announced 2–3 September 2026, a
month stale); Connecticut's CART Act employer-AI provisions taking effect
1 October 2026 (already used in
`linkedin-post-draft-connecticut-cart-act-ai-and-law.md`); Google's Gemini-
powered Fitbit health coach (a strong digital-health match in principle, but
its public preview actually launched 28 October **2025** — a full year
stale, despite 2026 roundup articles recirculating it as if new).

This lands squarely in FuSo's "Access to Justice" focus area: "investigating
the potentials of automating legal processes for greater access to law,"
concretely pursued through the BRIDGE Discovery project *Bridging Justice
(ARCL)* with Caritas Switzerland, co-designing accessible legal AI with NGOs
and underserved communities. SB 574's hardest open question — its own text
doesn't define "delegate the practice of law" versus permissible AI
assistance — is exactly the design problem PermitBot's user study addresses
from the other direction: not "should a lawyer let AI decide," but "what
does a legal chatbot need to *do* (ask, flag, defer) so a human stays
genuinely in control of the decision rather than rubber-stamping an AI
output." A chatbot engineered to prompt proactively — surfacing missing
facts, flagging the limits of what it can determine, declining to assert
a legal conclusion outright — is a concrete mechanism for the kind of
human-verified, non-delegated assistance the new law now requires lawyers to
provide but doesn't specify how to build.

## Draft post text

California just became the first US state to put a legal duty around a question most legal-AI tools don't even ask: when does "AI assisted my filing" become "AI practiced law"?

Governor Gavin Newsom signed SB 574 on 30 September, adding a new rule to the state's Business and Professions Code: attorneys "shall not delegate the practice of law" to generative AI. They must keep client-confidential information out of public AI tools, disclose AI use in every court filing, and personally verify every citation before it's submitted — AI-written or not. Arbitrators are now barred from delegating their decisions to AI too. It takes effect 1 January 2027, and it will touch most California filings, because AI assistance has become that common.

What the statute doesn't do is define where "assistance" ends and "delegation" begins. That's not a legislative oversight — it's a genuinely hard design question, and it sits on the tool side as much as the legal side. Our research on PermitBot, a user study on prompting legal chatbots for proactivity (ICAIL 2026), looked at exactly this from the chatbot's end: a legal AI tool that asks for missing facts, flags the limits of what it can determine, and holds back from asserting a conclusion outright behaves very differently from one that just answers. The difference isn't a disclaimer bolted on afterward — it's whether the human using it stays the one actually deciding.

That's the kind of concrete design work behind "Access to Justice" at Future Society Hub — FuSo, hosted at the University of St.Gallen: we co-design accessible, reliable legal AI with NGOs and underserved communities through our Bridging Justice project with Caritas Switzerland, because the people most likely to rely on an AI's answer without a lawyer checking it are often the people a law like SB 574 can't reach at all.

If you build, regulate, or practice with legal AI: does your tool know when to push back instead of just answering? California just made that question load-bearing — for lawyers, and worth asking just as hard for the self-represented people AI-assisted legal tools reach first.

🔗 Our Access to Justice work: https://futuresociety.ch/#focus
🔗 Bridging Justice (ARCL): https://arcl.unil.ch/

#AccessToJustice #LegalAI #AIGovernance #LegalTech #ResponsibleAI #CaliforniaLaw

## Suggested LinkedIn tags
- State Bar of California: https://www.linkedin.com/company/state-bar-of-california
- Caritas Switzerland (Caritas Schweiz): https://www.linkedin.com/company/caritas-schweiz
- University of St.Gallen: https://www.linkedin.com/school/university-of-st-gallen/

(Governor Newsom was deliberately not tagged as an individual — the post
engages with the statute's substance, not the signing politics.)

## Sources checked
- https://futuresociety.ch (Focus Areas — Access to Justice "how" text and
  PermitBot citation; llms.txt for the ARCL/Caritas project description;
  team.js for Johannes David's and Vlada Druta's Access to Justice bios —
  neither is credited as a PermitBot author anywhere findable, so the post
  attributes the paper to FuSo's research generally, not to a named
  individual)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.hklaw.com/en/insights/publications/2026/10/california-enacts-rules-governing-lawyers-use-of-generative-ai
  (Holland & Knight analysis, published 1 October 2026 — signing date,
  provision text, effective date)
- https://news.bloomberglaw.com/daily-labor-report/newsom-signs-first-of-its-kind-bill-on-lawyer-arbitrator-ai-use
  (Bloomberg Law, corroborating signing date and provisions)
- WebSearch results corroborating 30 September 2026 signing date from
  multiple independent outlets (Harris Beach Murtha, GM Law, Hoodline,
  JD Journal, Redline Digest)
- Ruled out after checking primary/dated sources: OpenAI's 100+-org agent
  breach disclosure and the Hawley-Murphy CFAA bill (Washington Post,
  1 October 2026 — fresh but a continuation of an already-twice-used story
  cluster); NYC's Pre-K–8 generative-AI moratorium (announced 2–3 September
  2026, per Forbes and ABC News — a month stale); Connecticut's CART Act
  (already used in a prior draft); Google/Fitbit's Gemini health coach
  (TechCrunch confirms 28 October 2025 launch — a year stale despite being
  recirculated in 2026 "trends" roundups); Axios's "AI's existential legal
  crisis" piece (2 October 2026, genuinely fresh, but a general legal-
  liability think-piece without a specific event to hook a post on, and no
  clean FuSo publication match).

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
