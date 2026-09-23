# LinkedIn post draft — Americans trust AI recipes less the more they use them, meets FuSo's FoodCoach trial (Sept 2026)

Prepared per email request: check futuresociety.ch, check FuSo's LinkedIn, match
a current world-news topic (within the last two days) to FuSo's focus areas,
and draft a LinkedIn post text tagging relevant entities and connecting to a
recent FuSo publication.

**Note:** the LinkedIn company page
(https://www.linkedin.com/company/future-society-hub/) is login-walled and
could not be reviewed from this environment, so the post below is grounded in
the public website's stated focus areas and publications, not in the
account's actual recent posting style. Prior email tasks have already
produced drafts (see `linkedin-suggestions/` and the repo root) on a wide
range of stories, none touching digital health or nutrition. This draft puts
to use a FuSo publication that has sat unused through many earlier rounds —
"FoodCoach: Fully Automated Diet Counseling" (IEEE Journal of Biomedical and
Health Informatics, 2025), co-authored by FuSo Co-Director Prof. Dr. Simon
Mayer — after repeated targeted searches for news matching its angle had
previously come up empty (per prior agents' notes).

**Chosen news hook:** On 22 September 2026 (yesterday), a national news
story — syndicated across outlets including the Washington Times, Yahoo
Lifestyle, and dozens of local papers — reported on a survey of over 2,000
Americans by recipe site Inspired Taste. Only 12% of home cooks deliberately
turn to AI for recipe inspiration; the rest are 300% more likely to reach for
a food blog and 125% more likely to grab a physical cookbook instead. The
underlying reason, per the survey and the cooks it quotes: AI-generated
recipes look polished — complete with instructions and a convincing photo —
but are frequently untested in an actual kitchen, so measurements, timings,
and ingredient lists can simply be wrong. The article's concrete example:
Google's AI Overview added ingredients to a birria recipe that the food
blogger whose work it was drawing on "would never use." The core finding is
a trust gap that widens with exposure: the more people actually use AI for
food guidance, the less they trust it.

This lands squarely in FuSo's "Inclusive and Healthy Society" focus area,
which promotes "resilient, healthy, and inclusive society through Ubiquitous
Computing at scale." The recipe-trust story is a generative-AI failure mode —
plausible-sounding text with no grounding in what a real kitchen (or a real
body) needs. FuSo's own FoodCoach system, published with Simon Mayer as
co-author, takes the opposite design path for a harder problem than recipe
suggestions: automated diet counseling for people managing diet-related
non-communicable disease. Instead of generating advice from a language
model's guess, FoodCoach reads people's actual food purchases from digital
loyalty-card receipts and turns that real behavioral data into structured
dietary recommendations — and the system was tested where it counts, in a
two-arm randomized controlled trial with 61 participants, which is exactly
the "does it hold up outside the demo" scrutiny the recipe-trust story finds
consumer-facing AI food tools skipping.

## Draft post text

Only 12% of Americans deliberately ask AI for recipe help. The rest are 300% more likely to trust a food blog instead, and 125% more likely to reach for a printed cookbook. That's the finding from a new @Inspired Taste survey of 2,000+ home cooks, out yesterday (22 September) — and the reason cooks give is simple: AI recipes look finished, but nobody actually tested them in a kitchen. One example in the coverage: @Google's AI Overview added ingredients to a birria recipe that the food blogger it was drawing on says they'd never use.

The pattern behind that trust gap — confident-sounding output standing in for a system that was actually validated on real behavior — is exactly what our FoodCoach research was built to avoid, in a domain where getting it wrong matters more than a bad taco. Co-authored by our own Prof. Dr. Simon Mayer, FoodCoach is a fully automated diet counseling system for people managing diet-related non-communicable disease. Instead of generating dietary advice from scratch, it reads real food purchases from digital loyalty-card receipts and turns that behavioral data into structured recommendations — and we didn't stop at a demo: it was evaluated in a two-arm randomized controlled trial with 61 participants.

Recipe apps and health-counseling tools sit on the same spectrum of "AI-generated guidance about what you eat." The recipe-trust story shows what happens when that guidance skips real-world testing. Our answer, at @Future Society Hub — FuSo, hosted at the @University of St.Gallen: build the grounding and the evaluation in from the start, especially wherever AI is advising on health, not just dinner.

Where else is AI-generated food or health guidance reaching people without the kind of validation this deserves? We'd like to hear from people working on digital health, nutrition tech, or trustworthy AI evaluation.

📄 Paper: https://doi.org/10.1109/JBHI.2025.3540899
🔗 Our Inclusive and Healthy Society work: https://futuresociety.ch/#focus
📰 Coverage of the survey: https://fooddrinklife.com/ai-recipes/

#DigitalHealth #AITrust #Nutrition #TrustworthyAI #HealthTech #AIGovernance

## Sources checked
- https://futuresociety.ch (Focus Areas, incl. Inclusive and Healthy Society
  publications and "how" text; Team page for Simon Mayer's role/bio)
- https://www.linkedin.com/company/future-society-hub/ (blocked by login wall)
- https://www.linkedin.com/company/inspiredtaste (confirmed Inspired Taste has
  an active LinkedIn company page, for the @-tag)
- https://fooddrinklife.com/ai-recipes/ (fullest available account of the 22
  September Inspired Taste survey: sample size, stats, quotes, Google AI
  Overview birria example)
- https://www.washingtontimes.com/news/2026/sep/22/not-trusted-americans-use-ai-recipes-less-trust/
  (original syndication point, dated 22 Sept 2026; blocked by a 403 from this
  environment but corroborated by the same story appearing dated 22 Sept
  across multiple independent outlets — Yahoo, Purdue Exponent, Odessa
  American, etc.)
- https://ieeexplore.ieee.org/document/10882919/ and
  https://pubmed.ncbi.nlm.nih.gov/40031602/ (FoodCoach publication record;
  IEEE page itself was unreadable from this environment, abstract and author
  list — Jing Wu, Simon Mayer, et al., DOI 10.1109/JBHI.2025.3540899 —
  confirmed via search-engine indexing of the PubMed/ResearchGate records)
- `linkedin-suggestions/*.md` and root `linkedin-post-draft*.md` (checked for
  prior topics/publications used, to avoid repeating a news story; FoodCoach
  had not been used in any prior draft)

## Email delivery status
**Not sent.** No email-sending tool is available in this session — Gmail
access requires OAuth authorization the user must grant via claude.ai
connector settings (or `claude mcp` / `/mcp` interactively) before it can be
used, and this session cannot run that flow. The draft above is saved here
so the user can copy it into an email or post it directly.
