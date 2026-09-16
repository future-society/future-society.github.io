# LinkedIn post draft — the IDScan.net breach meets FuSo's privacy-by-design work (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Five earlier email tasks already
produced drafts on the AI Act RFIs (`linkedin-post-draft.md`), the
ChatGPT/Reddit/Roblox DSA designations (`linkedin-post-draft-dsa-vlop-designation.md`),
GPT-6 Astra's monitorability drop (`linkedin-post-draft-gpt6-astra-monitorability.md`),
Australia's algorithm opt-out law (`linkedin-post-draft-australia-algorithm-opt-out.md`),
and Meta's CSAM-ad failure (`linkedin-suggestions/linkedin-post-draft-meta-csam-ads-dsa-audit.md`).
Those five used FuSo's GPAI-summary-quality paper (twice), the sock-puppet
VLOP-auditing paper, and the Article 40(12) research-API audit paper. This
draft covers a distinct, more recent story — a data breach rather than a
platform-conduct or regulatory-filing story — and connects it to a different
part of FuSo's work (privacy-by-design) that none of the five touched, so as
not to repeat any of them.

**Chosen news hook:** On 10 September 2026, TechCrunch reported that identity-
verification vendor IDScan.net confirmed a breach in which more than 150
million driver's licenses (and other government IDs, including passports)
were stolen — front-and-back images plus infrared and ultraviolet scans,
exfiltrated continuously for over a year via what researchers described as a
"live feed" of every ID the company scanned. The FBI has opened an
investigation; the exposed dataset reportedly includes a U.S. cabinet
official's license. IDScan.net's business is exactly the kind of
age-verification pipeline that regulators are now mandating at scale: France's
new under-15 social media ban took effect 1 September 2026, Australia's
under-16 platform law and "algorithm opt-out" rules are rolling out, and the
EU's DSA and AI Act both lean on age-assurance as a compliance mechanism. The
breach lands squarely in FuSo's "Privacy & AI Transparency" expertise
(privacy-by-design, GDPR compliance) and its "Systemic Risk Mitigation" and
"Education & Digital Literacy" focus areas (a safe digital environment for
young people online) — and connects directly to Prof. Dr. Aurelia
Tamò-Larrieux's field-defining book, *Designing for Privacy and its Legal
Framework: Data Protection by Design and Default for the Internet of Things*
(Springer, 2018, https://doi.org/10.1007/978-3-319-98624-1). The book argues
that legally mandated privacy-by-design — data minimisation, purpose
limitation, limited retention — has to be engineered in from the start,
precisely because after-the-fact trust in a vendor's security practices isn't
a substitute. A verification company holding a year-plus, unminimised archive
of raw ID scans "just in case" is the failure mode the book warns against,
now playing out at 150-million-record scale.

## Draft post text

Regulators worldwide are telling platforms: verify your users' age, or face
fines. Nobody is asking the obvious follow-up: verify it *how*, and stored
*where*?

On 10 September, TechCrunch confirmed that IDScan.net — an identity-
verification vendor whose business is exactly this kind of age and ID
checking — was breached. More than 150 million driver's licenses and other
government IDs were stolen: full front-and-back images, infrared and
ultraviolet scans, apparently exfiltrated continuously for over a year
through what looked like a live feed of every document the company scanned.
The FBI has opened an investigation.

This lands in the middle of a global wave of age-assurance mandates that all
assume verification pipelines like this one are trustworthy: France's ban on
under-15s on social media took effect 1 September, Australia is rolling out
its own under-16 platform rules, and the EU's DSA and AI Act both increasingly
lean on age verification as a compliance mechanism. Every one of those laws
now has to answer a question IDScan.net's breach just made unavoidable: what
happens to the ID scan after it's checked?

Our Co-Director Prof. Dr. Aurelia Tamò-Larrieux wrote the book on this —
literally: *Designing for Privacy and its Legal Framework* (Springer, 2018)
lays out why privacy-by-design and data minimisation can't be a policy
promise bolted on after deployment; they have to be engineered into a system
from day one, including strict, provable limits on how long identity data is
kept and who can reach it. A verification vendor sitting on a year-plus,
unminimised archive of raw government ID images is the exact failure mode the
book was written to prevent — at a scale (150M+ records) that makes the
stakes impossible to wave away.

At @Future Society Hub — FuSo, hosted at the @University of St.Gallen — this
is what Privacy & AI Transparency means in practice: age-assurance and
child-safety rules are necessary, but only as good as the data architecture
enforcing them. Mandating verification without mandating how the data is
minimised and retained just creates a new, juicier target.

To regulators drafting the next age-assurance rule, and to any platform or
vendor building the pipes behind it: are data-minimisation and retention
limits part of your compliance checklist, or an afterthought?

📚 Book: https://doi.org/10.1007/978-3-319-98624-1
🔗 Our Focus Areas: https://futuresociety.ch/#focus

#PrivacyByDesign #DataProtection #AgeVerification #GDPR #DigitalSafety #AIGovernance #TechPolicy

## Sources checked
- https://futuresociety.ch (Focus Areas and Core Expertise, incl. Privacy &
  AI Transparency; llms.txt for Key People and Publications)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://techcrunch.com/2026/09/10/id-verification-giant-idscan-confirms-data-breach-with-more-than-150-million-drivers-licenses-stolen/
- https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/
- https://www.techdirt.com/2026/09/03/hackers-had-a-live-feed-of-every-id-this-verification-company-scanned-for-over-a-year/
- https://xident.io/blog/france-social-media-age-ban-2026/ (France under-15
  ban, effective 1 September 2026)
- https://link.springer.com/book/10.1007/978-3-319-98624-1 (Tamò-Larrieux,
  *Designing for Privacy and its Legal Framework*, Springer, 2018)
- https://www.linkedin.com/company/idscan-net (for reference; not tagged in
  the post itself, since the draft criticises the company's security
  practices rather than promoting them)

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
