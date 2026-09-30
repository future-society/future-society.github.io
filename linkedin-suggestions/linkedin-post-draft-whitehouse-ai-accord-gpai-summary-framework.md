# LinkedIn post draft — the White House's "self-police" AI accord meets FuSo's GPAI summary framework (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn,
match a current world-news topic (within the last two days) to FuSo's focus
areas, and draft a LinkedIn post text tagging relevant entities and
connecting to a recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Prior email tasks have already
produced drafts (see `linkedin-suggestions/` and the repo root) on a wide
range of stories, most recently Florida's injunction motion against OpenAI
(29 Sept, with the privacy-by-design book). This draft is a distinct,
brand-new story from the following day and returns to the GPAI
public-summary quality-assessment paper — last used on 24 September for a
story about Senate staff being denied access to agentic AI tools — rather
than reaching for the Article 40(12) research-API audit paper again, which
has already anchored six earlier drafts in this repository (the "kill
switch" order, Meta's CSAM-ad failure, "Pace the Frontier", the US DOJ/X
intervention, OpenAI's sandbox-escape disclosure, and California's audit
order — see `linkedin-suggestions/`). Article 40(12) is about platforms
granting researchers data access; this story is specifically about frontier
AI *labs* promising to audit their *own* models, which is the exact terrain
of the GPAI summary paper instead.

**Chosen news hook:** On 29 September 2026, President Trump hosted a group of
AI industry leaders at the White House — Anthropic's Dario Amodei, Meta's
Mark Zuckerberg, Google's Sundar Pichai, OpenAI's Greg Brockman, Nvidia's
Jensen Huang, and Elon Musk among them, with House Speaker Mike Johnson also
present — where the companies signed a voluntary "accord" to self-regulate AI
development. The accord's four steps: implement "robust internal controls,"
partner with independent external auditors to assess those controls,
establish board-level committees to review the internal and external audit
reports, and — vaguely — note that "these measures may make sense to codify
into laws and regulations" at some future point. Trump: "I think I'm seeing
tremendous self-policing. And they understand that they have to self-police."
He also said he is considering a 10-person committee to oversee the industry
but described the accord itself as only "morally" binding. Amodei struck a
more cautious note: "The technology has very real risks." Critics were quick
to push back — USC computer science professor Robin Jia questioned putting
"so much faith in self-policing" given recent AI security incidents, and
Georgetown's Alex Pascal dismissed the accord's "vague, broad language,"
calling instead for "robust legal liability, regulation."

This is squarely FuSo's "Technology Assessment" focus area. The accord's own
structure — providers write internal audit reports, providers' own boards
review them — is precisely the self-disclosure problem Dick Blankvoort,
Harshvardhan J. Pandit, and Maximilian Gahntz's "Quality Assessment of Public
Summary of Training Content for GPAI models required by AI Act Article
53(1)(d)" (ACM FAccT, 2026) was built to address: a structured way to judge
whether a provider's own mandated disclosure is rigorous or just reassuring
paperwork, rather than taking "we're auditing ourselves" on faith. Where
Pascal wants "robust legal liability, regulation" instead of vague pledges,
the paper is a concrete example of what a non-vague, checkable disclosure
standard actually looks like in practice, under a law (the EU AI Act) that
already requires it rather than merely inviting it.

## Draft post text

Yesterday at the White House, the CEOs of Anthropic, Meta, Google, OpenAI, and Nvidia signed a voluntary accord to "self-police" AI development. President Trump: "I think I'm seeing tremendous self-policing. And they understand that they have to self-police." He called the accord only "morally" binding.

The accord's actual mechanism: companies build "internal controls," hire independent auditors to check those controls, and have their own boards review the audit reports. Critics moved fast — one computer science professor questioned putting "so much faith in self-policing" after recent AI security incidents; a Georgetown researcher dismissed the "vague, broad language" and called for "robust legal liability, regulation" instead.

That criticism names a real gap: a promise to be audited is not the same as a way to check whether the audit was any good. Dick Blankvoort, Harshvardhan J. Pandit, and Maximilian Gahntz built exactly that missing piece — a quality assessment framework for the public training-content summaries GPAI providers must already file under EU AI Act Article 53(1)(d), turning "trust our disclosure" into a structured, checkable standard instead of a paperwork exercise.

That's the difference between self-policing as a press-conference pledge and self-policing as something a regulator, journalist, or researcher can actually verify. It's what Technology Assessment means at Future Society Hub — FuSo, hosted at the University of St.Gallen: not asking companies to promise more, but building the tools to check what they already claim.

📄 Paper: https://doi.org/10.1145/3805689.3806755
🔗 Our Technology Assessment work: https://futuresociety.ch/#focus

#AIGovernance #AIAct #GPAI #TechPolicy #AISafety #Regulation #SelfRegulation

Suggested tags: @The White House @Anthropic @Meta @Google @OpenAI @NVIDIA @Future Society Hub @University of St.Gallen

## Sources checked
- https://futuresociety.ch (Focus Areas incl. Technology Assessment
  publications; Team page and llms.txt for author affiliations)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.news4jax.com/business/2026/09/29/trump-vows-to-never-stifle-ai-as-leading-executives-urge-caution/
  (full accord mechanism, Trump/Amodei quotes, Jia and Pascal criticism)
- https://www.washingtonpost.com/technology/2026/09/29/trump-is-selling-an-ai-golden-age-fears-about-perils-spiral/,
  https://www.cnbc.com/2026/09/29/tech-white-house-ai-lunch-trump.html,
  https://www.washingtontimes.com/news/2026/sep/29/donald-trump-says-top-tech-firms-signed-accord-self-police-ai/,
  https://www.axios.com/2026/09/29/trump-ai-voluntary-safety-white-house-zuckerberg
  (corroborating date/attendee/attendee-list detail; several blocked on
  direct fetch but consistent in search-result summaries)
- https://api.crossref.org/works/10.1145/3805689.3806755 (author list,
  title, venue, publication date for the GPAI public-summary
  quality-assessment paper)
- assets/team.js (Dick Blankvoort's FuSo role: PhD candidate, researcher)
- linkedin-suggestions/linkedin-post-draft-congress-ai-tools-gpai-summary-framework.md
  and linkedin-post-draft-florida-openai-injunction-privacy-by-design.md
  (checked to confirm this is a distinct news story and to pick an
  under-used anchor publication rather than repeating Article 40(12))

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
