# LinkedIn post draft — Meta's camera-free "Luna" glasses meet FuSo's gaze-based privacy-preserving agent research (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Prior drafts (see `linkedin-suggestions/`)
have covered: the AI Act RFIs and the GPAI public-summary paper, the
ChatGPT/Reddit/Roblox DSA designations, Australia's Digital Duty of Care law
and the sock-puppet auditing paper, the California addictive-feed ban and
Florida's K-12 AI guidance (both with the Personalized Realities paper), the
IDScan.net breach and the privacy-by-design book, Meta's CSAM-ad failure and
Anthropic's "Pace the Frontier" pledges (both with the Article 40(12)
research-API audit paper), Anthropic's undisclosed safety incident and the
leaked EU Kids Act draft (both with the systemic-risks scoping review), two
Big Data & Society papers paired with an AI-drafted-legislation story, Spain's
first autonomous-AI-agent breach with the gaze-based privacy-preserving agent
paper, and Google's chatbot-bill lobbying with the sock-puppet auditing paper.
This draft picks a story none of those touched (wearable-camera privacy
design, not platform regulation or a breach) and reuses the gaze-based
privacy-preserving paper a second time — justified here because the paper's
actual subject matter (gaze-scoped perception on AR/agent hardware) is a
direct technical match for this specific story, and the argument is different
from the Spain draft's (which was about scoping *data access* after an
agentic breach; this one is about scoping *sensing* on camera-equipped
wearables, the paper's literal application domain).

**Chosen news hook:** On 17–18 September 2026, The Information reported (via
tech-insider.org, theaiinsider.tech and other outlets citing that reporting)
that Meta is developing a camera-free smart-glasses model, codenamed "Luna,"
expected to launch around Meta Connect this fall. The camera-free design
follows sustained privacy backlash against Meta's existing Ray-Ban Meta
glasses — dubbed "pervert glasses" online after incidents of covert recording
in public — and a joint letter from the ACLU and 75+ partner organizations
calling the camera-equipped line a "dystopian privacy invasion" and demanding
Meta disavow adding facial recognition. Meta's public defense so far has
centered on the capture-indicator LED (CTO Andrew Bosworth: built "to be
noticed by the people around you," and it cannot be disabled) — an
after-the-fact signal, not a constraint on what the camera can see. Luna is
positioned as an additional SKU alongside the camera-equipped models, not a
replacement: Meta's actual fix for privacy-conscious buyers is to remove the
sensor outright and sell a separate product, rather than making the sensing
itself more scoped or consent-aware.

This lands in FuSo's "Infrastructure for the Future" focus area, and connects
directly to Jan Grau, Simon Mayer, Jannis Strecker-Bischoff, Kimberly Garcia
and Kenan Bektaş, "Gaze-based Opportunistic Privacy-preserving Human-Agent
Collaboration" (ACM CHI Extended Abstracts, 2024,
https://doi.org/10.1145/3613905.3651066) — work on exactly this class of
device (AR/wearable agents) that shows a third option between "record
everything with a blinking light" and "remove the camera." Their prototype
uses gaze and task context to continuously bound what an assisting agent
perceives and shares, so capability and privacy don't have to be a binary
trade-off resolved by cutting hardware.

## Draft post text

Meta's answer to its smart-glasses privacy backlash, reportedly: build a second pair of glasses without a camera.

The Information reports Meta is developing "Luna," a camera-free smart-glasses model expected around Meta Connect this fall — alongside, not instead of, its existing camera-equipped Ray-Ban Meta line. That line drew a joint letter from the ACLU and 75+ partner organizations calling it a "dystopian privacy invasion," after widely shared incidents of covert recording in public turned it into "pervert glasses" in online shorthand. Meta's defense of the camera version has rested on the capture LED — CTO Andrew Bosworth says it's built "to be noticed by the people around you" and can't be switched off. A light that tells bystanders they're being recorded is a notice. It is not a constraint on what gets recorded, by whom, or when.

Removing the sensor and selling it as a separate SKU is one way to resolve that tension. It isn't the only way. Our Jan Grau, Simon Mayer, Jannis Strecker-Bischoff, Kimberly Garcia and Kenan Bektaş worked on the alternative in "Gaze-based Opportunistic Privacy-preserving Human-Agent Collaboration" (ACM CHI Extended Abstracts 2024): a prototype for exactly this class of wearable, AR-agent hardware, where gaze and task context continuously bound what the device's sensing actually perceives and passes on — not an indicator light after the fact, but a scope built into the perception pipeline itself. The capability stays; what the system is even able to see doesn't extend past what the task in front of the wearer requires.

A market segmented into "has a camera, trust the light" and "has no camera, trust the removal" skips the harder and more useful design question: can a device see selectively, on purpose, by architecture? That's what Infrastructure for the Future means at Future Society Hub — FuSo, hosted at the University of St.Gallen — and it's a question worth putting to every company shipping always-on cameras onto people's faces, including Meta, Google and Snap.

If you're designing, regulating, or just wearing this next generation of hardware: would a scoped-by-design camera change how you feel about the light?

📄 Paper: https://doi.org/10.1145/3613905.3651066
🔗 Our Infrastructure for the Future work: https://futuresociety.ch/#focus

#SmartGlasses #PrivacyByDesign #AugmentedReality #WearableTech #DigitalInfrastructure #HCI #AIGovernance

## Suggested LinkedIn tags
- Meta: https://www.linkedin.com/company/meta/
- ACLU: https://www.linkedin.com/company/american-civil-liberties-union/
- University of St.Gallen: https://www.linkedin.com/school/university-of-st-gallen/

## Sources checked
- https://futuresociety.ch (Focus Areas — Infrastructure for the Future;
  llms.txt for Simon Mayer's AR/multi-agent-systems expertise and team
  affiliations for the CHI paper's authors)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://theaiinsider.tech/2026/09/18/meta-reportedly-developing-camera-free-smart-glasses-following-privacy-backlash/
  (18 Sept 2026, citing The Information)
- https://tech-insider.org/meta-camera-free-glasses-luna-privacy-backlash-2026/
  (17 Sept 2026 — ACLU coalition letter details, Bosworth LED quote, Luna
  positioning as additional SKU)
- https://www.foreignpolicyjournal.com/2026/09/17/meta-nasdaq-meta-to-launch-camera-free-smart-glasses-after-pervert-glasses-controversy/
  (17 Sept 2026, corroborating mirror)
- https://doi.org/10.1145/3613905.3651066 (Grau, Mayer, Strecker-Bischoff,
  Garcia & Bektaş, ACM CHI EA 2024)
- Ruled out after checking dates/primary sources: Pennsylvania's Character.AI
  lawsuit (filed May 2026, not fresh, despite recent recap coverage); a UK
  JUSTICE-charity legal-chatbot survey and a Washington Post/Malwarebytes
  piece on subpoenaed AI chat logs (published 2 Sept 2026, 18 days old);
  Google's AI-chatbot-bill lobbying (already used in the immediately prior
  draft, `linkedin-post-draft-google-chatbot-lobbying-sockpuppet-audit.md`);
  the Meta/states $17.1B child-safety settlement (announced 26 Aug 2026, not
  within the 2-day window). No fresh (≤2-day) news surfaced for FuSo's
  still-unused PermitBot, Solid/MPC circular-economy, FoodCoach or
  ShoppingCoach publications despite targeted searches.

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
