# LinkedIn post draft — Amazon opens Seller Central to AI agents (but not the storefront) meets FuSo's "AI and Law" (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Prior email tasks have already
produced many drafts (see `linkedin-suggestions/` and the repo root); none so
far used this news story or this publication — the closest prior piece, on
the UN's AI-agents warning (`linkedin-post-draft-un-ai-agents-panel-circular-
economy-mpc.md`, 22 September 2026), used the Solid/secure-multi-party-
computation paper on a *systemic-risk* angle (runaway multi-agent systems);
this draft instead uses a *platform-infrastructure* angle (who controls the
terms of agent access) and pairs it with a publication never used before in
this series, the "AI and Law" textbook.

**Chosen news hook:** On 23 September 2026, Amazon announced it is opening
Seller Central's APIs to outside AI agents — starting with Anthropic's Claude
(via Amazon Bedrock) and Amazon's own "Quick" assistant — so third-party
sellers can manage listings, pricing, inventory, and analytics, and even take
approved actions on their business, without logging into Seller Central at
all. Amazon VP Mary Beth Westmoreland: "Our vision was that they would never
have to log into Seller Central... We would just bring it to them where they
work." Sellers choose which data the plugin can reach and approve each
action before it executes.

The sharper detail, flagged by API-industry analyst Kin Lane (API Evangelist):
Amazon built real agent-permissioning infrastructure for this — OAuth
discovery, scoped "skills," and write-action approval on every call — but
built none of it for the *storefront* side. A shopper's own AI agent has no
equivalent way to discover permissions or act on their behalf when buying;
Amazon "publishes no agentic-commerce document, no consent or bot-identity
signal" for that direction. As Lane puts it: "What is missing is not the
technology but the willingness to let a buyer's agent fill the form in."
Where Amazon captures the revenue relationship (sellers, advertisers), it
built the governance. Where an agent might shift power toward the buyer, it
didn't.

This is a direct hit on FuSo's "Infrastructure for the Future" focus area —
"supporting the architecting, development, and regulation of future digital
infrastructure to benefit society" — and squarely inside Prof. Simon Mayer's
core expertise in autonomous multi-agent systems and W3C Web of Things
standards, whose entire premise is that agent-to-platform interoperability
should be governed by open, negotiated standards rather than decided
unilaterally by whichever platform holds the API keys. Amazon's move shows
that exact fork in miniature: identical agent technology, offered on one
side of a marketplace and withheld on the other, as a business decision
dressed up as a technical rollout. That is precisely the kind of shift co-
authors Aurelia Tamò-Larrieux, Clément Guitton, and Simon Mayer describe in
*AI and Law: How Automation is Changing the Law* (Routledge/CRC Press,
2024) — automation doesn't just get regulated by law after the fact; it
quietly rewrites who holds structural power in a relationship before any
regulator or court gets involved.

## Draft post text

Amazon just showed, in one announcement, exactly who gets to decide the rules of agentic commerce — and it isn't regulators.

On 23 September, Amazon opened Seller Central's APIs to outside AI agents: sellers can now run pricing, inventory, and listings through Anthropic's Claude (via Amazon Bedrock) or Amazon's own "Quick" assistant, approving each action without ever logging into Seller Central. VP Mary Beth Westmoreland's framing was disarmingly simple: "We would just bring it to them where they work."

But look at what Amazon actually built to make that safe: OAuth-based permission discovery, scoped access, and an approval step on every write action. Real agent governance. Now look at the other side of the same marketplace — the shopper's side. None of that exists there. A buyer's own AI agent has no way to discover what it's allowed to do or signal that it's an agent at all. As API-industry analyst Kin Lane put it: "What is missing is not the technology but the willingness to let a buyer's agent fill the form in." Where @Amazon captures the revenue relationship, it engineered trust. Where an agent might tilt power toward the buyer, it simply didn't build the door.

That's not a technical gap — it's a governance choice, made unilaterally, with no standard anyone outside Amazon had a vote on. It's exactly the fork @Future Society Hub studies under our "Infrastructure for the Future" work: whether the digital infrastructure agents run on gets shaped by open, negotiated interoperability (the premise behind W3C Web of Things standards) or by whichever platform happens to hold the API keys. Prof. Simon Mayer, Prof. Aurelia Tamò-Larrieux, and Clément Guitton make the same point at the legal layer in our book *AI and Law: How Automation is Changing the Law*: automation rewrites who holds structural power in a relationship long before any regulator or court weighs in on it.

The interesting question isn't whether AI agents will handle commerce — that's already happening. It's who writes the rulebook while they do.

We're at @University of St.Gallen building the techno-legal frameworks to make that rulebook a matter of open standards, not platform discretion. Who else is watching how selectively platforms are opening their doors to agents?

📖 Book: AI and Law: How Automation is Changing the Law — https://www.routledge.com/AI-and-Law-How-Automation-is-Changing-the-Law/Tamo-Larrieux-Guitton-Mayer/p/book/9781032464527
🔗 Our Infrastructure for the Future work: https://futuresociety.ch/#focus
📰 Amazon announcement: https://www.geekwire.com/2026/amazon-opens-its-seller-tools-to-outside-ai-agents-starting-with-anthropics-claude/
📰 Analysis: https://apievangelist.com/2026/09/24/amazon-opened-seller-central-to-agents-and-kept-the-storefront-closed/

#AgenticCommerce #WebOfThings #DigitalInfrastructure #AIGovernance #Interoperability #AIandLaw

## Sources checked
- https://futuresociety.ch (Focus Areas, incl. Infrastructure for the Future; llms.txt for team/publication details, incl. the "AI and Law" book listed there and in the site's structured data as a `workExample`)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.geekwire.com/2026/amazon-opens-its-seller-tools-to-outside-ai-agents-starting-with-anthropics-claude/ (primary coverage, dated 23 Sept 2026, confirms announcement details, Westmoreland quote, approval mechanism)
- https://apievangelist.com/2026/09/24/amazon-opened-seller-central-to-agents-and-kept-the-storefront-closed/ (Kin Lane's analysis, dated 24 Sept 2026, source of the "storefront left closed" angle and quote)
- https://www.routledge.com/AI-and-Law-How-Automation-is-Changing-the-Law/Tamo-Larrieux-Guitton-Mayer/p/book/9781032464527 (publisher landing page, confirms authors incl. Clément Guitton and 2024 date)
- Cross-checked this news story and the "AI and Law" book against every existing file in `linkedin-suggestions/` and the repo root — neither has been used before in this series.

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
