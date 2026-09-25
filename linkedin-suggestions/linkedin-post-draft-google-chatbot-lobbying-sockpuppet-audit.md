# LinkedIn post draft — Google's chatbot-bill lobbying meets FuSo's sock-puppet platform auditing (Sept 2026)

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
Care law and the sock-puppet auditing paper, the California addictive-feed ban
and Florida's K-12 AI guidance (both with the Personalized Realities paper),
the IDScan.net breach and the privacy-by-design book, Meta's CSAM-ad failure
and Anthropic's "Pace the Frontier" pledges (both with the Article 40(12)
research-API audit paper), Anthropic's undisclosed safety incident and the
leaked EU Kids Act draft (both with the systemic-risks scoping review), two
Big Data & Society papers paired with an AI-drafted-legislation story, and
Spain's first autonomous-AI-agent breach with the gaze-based privacy-preserving
agent paper. This draft reuses the sock-puppet auditing paper (its one prior
use was for Australia's opt-out law, a different story) because it is the
single best fit for what this news is actually about, and picks a story none
of those prior drafts touched: not a breach or a new bill, but the lobbying
process that shapes bills before they're signed.

**Chosen news hook:** On 18 September 2026, NPR published "How Google is
drafting AI chatbot laws around the country," reporting that Google lobbyists
have supplied draft legislative language directly to state lawmakers across
at least 13 states (Colorado, Hawaii, Iowa, Arizona, Nebraska, Oregon,
Washington, Idaho, Georgia, New Jersey, Oklahoma, California and New York),
and that nearly identical exemption language shows up simultaneously across
multiple states' bills — evidence, sources say, of coordinated industry
drafting rather than independent legislative work. Colorado's HB 26-1263 (the
AI Companion Chatbot Safety Act, signed 1 July 2026, in force 1 January 2027 —
bill number independently verified against Colorado AI-law trackers, not just
the NPR piece) exempts 12 categories of chatbot, including "a feature within
another software application" — language that shows up near-identically in at
least 8 states and could shelter ChatGPT, Gemini, Copilot and Claude precisely
because they're embedded in larger products. A Hawaii state representative is
quoted saying the bill's framework "had been provided by Google early on
during the beginning of the session"; a Colorado lawmaker says a Google
lobbyist told them directly the company was "writing legislation that
specifically carves themselves out."

This is squarely FuSo's "Systemic Risk Mitigation" focus area, and the natural
publication to pair it with is Luka Bekavac, Jannis Strecker-Bischoff,
Kimberly Garcia, Simon Mayer and Aurelia Tamò-Larrieux's SOAP framework paper,
"Scrutinizing Systemic Risks in Personalized Recommender Systems Through
Sock-Puppet Auditing of VLOPs" (ACM Transactions on Recommender Systems,
2026). The story and the paper share one structural point: self-reported
compliance — a platform's own account of what its systems do, or a law
drafted with the regulated company's own language — cannot substitute for
independent, empirical verification. SOAP was built to check platform
behavior directly rather than take platform claims at face value; that is
exactly the check missing from a legislative process where the "input" is the
company's own draft text.

## Draft post text

A Hawaii lawmaker told NPR this week that the framework for the state's AI chatbot safety bill "had been provided by Google early on during the beginning of the session." A Colorado legislator says a Google lobbyist admitted the company was "writing legislation that specifically carves themselves out."

NPR's reporting, published 18 September, found the pattern repeats across at least 13 states: nearly identical exemption language — for chatbots "embedded" in another product, for search-engine assistants, for voice assistants — showing up in bills simultaneously, sheltering exactly the products (ChatGPT, Gemini, Copilot, Claude, Alexa) the laws were supposedly written to cover. Colorado's new Chatbot Safety Act alone carves out 12 categories. Parents whose children were harmed by companion chatbots are calling the exemptions "get-out-of-jail-free cards."

The deeper problem isn't any single loophole — it's that when the regulated company also authors the regulation, there's no independent check on the gap between what a platform claims its systems do and what they actually do. That gap is exactly what our Luka Bekavac, with Jannis Strecker-Bischoff, Kimberly Garcia, Simon Mayer and Aurelia Tamò-Larrieux, built tooling to close: SOAP, an open-source sock-puppet auditing framework for personalized recommender systems on VLOPs, published in ACM Transactions on Recommender Systems. It doesn't ask a platform what its algorithm does — it tests, empirically, what different simulated users actually get shown.

Chatbot safety needs the same discipline. Self-authored exemptions and self-reported compliance are not evidence. Independent, reproducible audits are. That's what Systemic Risk Mitigation means at @Future Society Hub — FuSo, hosted at the @University of St.Gallen — and it's why we build techno-legal tools that hold platforms like @Google, @OpenAI, @Microsoft and @Anthropic to what their systems do, not to what their lobbyists write into law.

If you're a state legislator, regulator, or child-safety advocate working on chatbot bills and want an independent read on what "technically feasible" exemption language actually shelters, we'd like to talk.

📄 Paper: https://doi.org/10.1145/3795516
🔗 Our Systemic Risk Mitigation work: https://futuresociety.ch/#focus

#AIGovernance #ChatbotSafety #SystemicRisk #AlgorithmicAccountability #TechPolicy #PlatformGovernance #DigitalDutyOfCare

## Sources checked
- https://futuresociety.ch (Focus Areas, incl. Systemic Risk Mitigation publications; Team page and llms.txt for author affiliations)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.npr.org/2026/09/18/nx-s1-5968878/ai-chatbots-safety-regulation-google
  ("How Google is drafting AI chatbot laws around the country," dated
  18 Sept 2026)
- https://www.wuga.org/national-news/2026-09-18/how-google-is-drafting-ai-chatbot-laws-around-the-country
  (same NPR story, syndicated mirror, used because the npr.org URL timed out
  on fetch — content matches the npr.org byline/date exactly)
- Colorado HB 26-1263 bill number and effective date cross-checked against
  independent trackers (consumerfinancialserviceslawmonitor.com,
  intellisee.com, regulations.ai, stackcyber.com) rather than trusting the
  NPR summary alone, per the caution in `.agent-notes.md` about verifying
  specific bill numbers/dates from a second source
- https://dl.acm.org/doi/10.1145/3795516 (Bekavac, Strecker-Bischoff, Garcia,
  Mayer & Tamò-Larrieux, ACM Transactions on Recommender Systems)
- Ruled out as news hooks after checking primary sources: an EU AI Act
  "first wave of inspections" story (CNIL/BfDI/AESIA, 3 named sectors) that
  repeated identically across multiple SEO/aggregator search hits but is
  **not** on the European Commission's own AI Act enforcement page — almost
  certainly fabricated, matching the exact pattern already flagged in
  `.agent-notes.md`; a UK JUSTICE-charity legal-chatbot survey (same story
  already identified as 2+ weeks old, not fresh, in a prior run); a UVA
  nutrition-expert AI diet-app review (published 1 Sept, 18 days old); the
  Japan Digital Agency VPN breach (disclosed 11 Sept, 8 days old); and the
  EU's Empowering Consumers for the Green Transition directive (takes effect
  27 Sept — a future date, not something that "occurred" yet). No fresh
  (≤2-day) news surfaced for FuSo's still-unused PermitBot or Solid/MPC
  circular-economy publications despite targeted searches.

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
