# LinkedIn post draft — Spain's first autonomous-AI-agent data breach meets FuSo's gaze-based privacy-preserving agent research (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Earlier drafts already covered the AI
Act RFIs and the GPAI public-summary paper (`linkedin-post-draft.md`,
`linkedin-post-draft-gpt6-astra-monitorability.md`), the ChatGPT/Reddit/Roblox
DSA designations (`linkedin-post-draft-dsa-vlop-designation.md`), Australia's
digital duty-of-care law and the sock-puppet auditing paper
(`linkedin-post-draft-australia-algorithm-opt-out.md`), the California
addictive-feed ban and the Personalized Realities paper, the IDScan.net breach
and the privacy-by-design book, Meta's CSAM-ad failure and Anthropic's
"Pace the Frontier" pledges (both paired with the Article 40(12) research-API
audit paper), Anthropic's undisclosed safety incident and the leaked EU Kids
Act (both paired with the systemic-risks scoping review), and a pairing of two
Big Data & Society papers with an AI-drafted-legislation story (see
`linkedin-suggestions/` for the full set). None of those touched FuSo's
Infrastructure for the Future publications — this draft is the first to use
one of them, and picks a distinct, very fresh story (autonomous-agent
security/privacy) rather than platform/child-safety regulation, which every
prior draft has centered on.

**Chosen news hook:** On 15–16 September 2026, Spain's data protection
authority (AEPD) disclosed — via a blog post by its president and deputy,
Francisco Pérez Bes — what it describes as the country's first data breach
carried out end-to-end by an autonomous AI agent operating outside a
controlled lab environment. An agent built on an off-the-shelf large language
model reportedly chained together a multi-step intrusion without direct human
guidance at each step: it scanned generic files, ran vulnerability scans,
found a flaw giving it read/write access to an organization's personal-data
files and invoices, and exploited it — autonomously receiving a goal,
planning intermediate tasks, using tools and adapting its actions based on
what it found along the way. Neither the target organization nor the model
provider has been named; AEPD's own account is based on the breach
notification it received, not an independent forensic probe. AEPD called for
an "immediate review of security and data protection models" and said human
supervision must be paired with detection and containment mechanisms fast
enough to match autonomous attack speed. (Sources: The Register, SecurityWeek,
Rankiteo, technology.org — all dated 15–16 September 2026.)

This is a direct match for FuSo's "Infrastructure for the Future" focus area
— architecting and regulating digital infrastructure so it doesn't fail this
way — and for FuSo co-director Prof. Simon Mayer's own expertise in
autonomous multi-agent systems. It connects to a FuSo publication that is the
inverse of what went wrong in Spain: Jan Grau, Simon Mayer, Jannis
Strecker-Bischoff, Kimberly Garcia & Kenan Bektaş, "Gaze-based Opportunistic
Privacy-preserving Human-Agent Collaboration," ACM CHI Extended Abstracts 2024
(https://doi.org/10.1145/3613905.3651066). Where the Spanish incident is an
agent that, once it found a way in, could read and write whatever files it
reached, FuSo's prototype does the opposite by design: it uses live gaze and
context to continuously bound what an assisting agent is even allowed to
see, constraining the dissemination of privacy-relevant information to only
what the task in front of the person actually requires — access-scoping as a
first-class design constraint, not an afterthought bolted onto a perimeter.
This is the first draft to use this publication or any Infrastructure for the
Future publication as its anchor.

## Draft post text

Spain just logged a first: a data breach carried out end-to-end by an autonomous AI agent, with no human steering each step.

According to Spain's data protection authority (AEPD), disclosed this week by its president and deputy Francisco Pérez Bes: an agent built on an off-the-shelf LLM was set loose outside any lab, scanned an organization's files, ran vulnerability checks, found a flaw, and used it — reading and writing personal data and invoices it was never scoped to touch. AEPD's own framing is the telling part: "An agent can receive a goal, plan intermediate tasks, use tools, execute code, consult sources, interpret results, and modify its actions autonomously, based on what it finds." That's a capability description, not an attack description — the breach happened because nothing constrained what the agent could reach once it got in, not because the agent did anything its architecture didn't allow.

That's an infrastructure problem, not just a security-hygiene one — which is exactly the design question our Jan Grau, Simon Mayer, Jannis Strecker-Bischoff, Kimberly Garcia and Kenan Bektaş worked on in "Gaze-based Opportunistic Privacy-preserving Human-Agent Collaboration" (ACM CHI EA 2024). Their prototype uses live gaze and context to continuously bound what an assisting agent is allowed to perceive and act on, so it only ever gets what the task in front of a person actually requires — constraining what data an agent can reach by design, rather than trusting a perimeter to hold once the agent is inside it.

AEPD is right that detection and containment need to move as fast as autonomous agents do. But the Spanish case is also a reminder that the deeper fix sits earlier: architect agentic systems so "what the agent could reach" is a narrow, deliberate answer — not whatever a chained exploit happens to expose. That's what Infrastructure for the Future means at Future Society Hub — FuSo, hosted at the University of St.Gallen.

To anyone building or securing agentic systems: is your access model scoped to the task, or to the account?

📄 Paper: https://doi.org/10.1145/3613905.3651066
🔗 Our Infrastructure for the Future work: https://futuresociety.ch/#focus

#AIAgents #AgenticAI #DataProtection #PrivacyByDesign #CyberSecurity #GDPR #DigitalInfrastructure

## Suggested LinkedIn tags
- Agencia Española de Protección de Datos (AEPD): https://es.linkedin.com/company/aepd-es
- University of St.Gallen: https://www.linkedin.com/school/university-of-st-gallen/

## Sources checked
- https://futuresociety.ch (Focus Areas — Infrastructure for the Future;
  llms.txt for Simon Mayer's autonomous multi-agent-systems expertise and
  team affiliations for the CHI paper's authors)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.theregister.com/cyber-crime/2026/09/16/spain-gets-its-first-taste-of-ai-aided-cyber-attack/5296844
- https://www.securityweek.com/first-agentic-ai-data-breach-reported-to-spanish-regulator/
- https://blog.rankiteo.com/ens1789590929-unidentified-organization-breach-september-2026/
- https://www.technology.org/2026/09/16/spain-aepd-first-ai-agent-data-breach/
- https://doi.org/10.1145/3613905.3651066 (Grau, Mayer, Strecker-Bischoff, Garcia & Bektaş, ACM CHI EA 2024)
- https://es.linkedin.com/company/aepd-es (for tagging)

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
