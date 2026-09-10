# LinkedIn post draft — Meta's CSAM-ad failure meets FuSo's DSA data-access audit (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Four earlier email tasks already
produced drafts on the AI Act RFIs (`linkedin-post-draft.md`), the
ChatGPT/Reddit/Roblox DSA designations (`linkedin-post-draft-dsa-vlop-designation.md`),
GPT-6 Astra's monitorability drop (`linkedin-post-draft-gpt6-astra-monitorability.md`),
and Australia's algorithm opt-out law (`linkedin-post-draft-australia-algorithm-opt-out.md`,
which already used FuSo's SOAP sock-puppet-auditing paper); this one covers a
distinct, more recent story and a different FuSo publication so as not to
repeat any of them.

**Chosen news hook:** On 8 September 2026, the Tech Transparency Project
(research arm of the nonprofit watchdog Campaign for Accountability) published
findings that Meta ran more than 300 paid ads containing AI-generated child
sexual abuse material across Facebook, Instagram, Threads and Messenger
between November 2025 and August 2026 — many promoting "nudify" deepfake apps
built on real photos of real children, including a European royal and a
preteen influencer. The ads reached roughly 29,000–36,000 accounts, some in
the EU and UK. When researchers flagged 129 of the ads directly to Meta, the
company told them 57% did not violate its advertising standards; Meta only
pulled ads en masse after the report went public. This is a direct match for
FuSo's "Systemic Risk Mitigation" and "Education & Digital Literacy" focus
areas (techno-legal auditing of platforms; a safe digital environment for
young people, the mission behind FuSo's flag&safe schools project) — and it
connects to a FuSo publication that explains exactly why outside
researchers couldn't have caught this sooner: Luka Bekavac & Simon Mayer,
"Auditing Meta and TikTok Research API Data Access under Article 40(12) of
the Digital Services Act," ACM FAccT 2026 (arXiv:2601.12390). The paper finds
that Meta's own DSA-mandated research-data channels strip up to 83% of
contextual metadata and lose roughly half of platform activity — meaning
independent auditors are structurally blocked from seeing the very ad-delivery
patterns an investigative nonprofit had to uncover by hand.

## Draft post text

Meta didn't catch this. A nonprofit with a spreadsheet did.

On 8 September, the Tech Transparency Project reported that Meta ran 300+ paid ads containing AI-generated child sexual abuse material on Facebook, Instagram, Threads and Messenger — many for "nudify" apps built on real photos of real children — reaching tens of thousands of accounts, including in the EU and UK. When researchers flagged 129 of these ads directly to Meta, the company said 57% didn't violate its own advertising standards. Mass removals only followed once the findings went public.

Under the EU's Digital Services Act, platforms of Meta's size are required to give researchers structured access to exactly this kind of ad and ranking data, so independent oversight doesn't depend on a watchdog manually scraping an ad library. Our own Luka Bekavac and Simon Mayer put that promise to the test: auditing Meta's and TikTok's Article 40(12) research APIs against what's actually visible on the platforms. Their finding, published at ACM FAccT 2026: the official channels strip up to 83% of contextual metadata and miss roughly half of real platform activity — a structurally biased window that "falls short of supporting meaningful, independent auditing of systemic risks."

That's the throughline. A harm this serious shouldn't need an outside nonprofit to hand-verify it ad by ad — the DSA was built precisely so researchers could catch it systematically. If the access pipes themselves are broken, so is the safeguard. This is what Systemic Risk Mitigation means at Future Society Hub — FuSo, hosted at the University of St.Gallen: building and stress-testing the techno-legal tools that decide whether platform accountability is real or cosmetic. It's also why our flag&safe project works directly with schools on the ground — regulation and research access are necessary, but they're not sufficient without support for the young people using these platforms today.

We'd like to hear from people inside DSA enforcement teams, child-safety researchers, and anyone who has tried to use Meta's or TikTok's research APIs in practice: does this match what you're seeing?

📄 Paper: https://arxiv.org/abs/2601.12390
🔗 Our Systemic Risk Mitigation work: https://futuresociety.ch/#focus

#DigitalServicesAct #PlatformAccountability #ChildSafety #SystemicRisk #AIGovernance #TechPolicy #OnlineSafety

## Sources checked
- https://futuresociety.ch (Focus Areas, incl. Systemic Risk Mitigation and Education & Digital Literacy publications; llms.txt for flag&safe project and team affiliations)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.spokesman.com/stories/2026/sep/08/meta-ran-hundreds-of-ads-showing-ai-child-sexual-a/
- https://www.bloomberg.com/news/articles/2026-09-08/meta-ran-hundreds-of-ads-showing-ai-child-sexual-abuse-ngo-says
- https://campaignforaccountability.org/ttp-report-meta-ran-hundreds-of-ads-with-child-sexual-abuse-imagery/
- https://www.mediapost.com/publications/article/417726/
- https://arxiv.org/abs/2601.12390 (Bekavac & Mayer, ACM FAccT 2026)
- https://www.linkedin.com/company/tech-transparency-project (for tagging)

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
