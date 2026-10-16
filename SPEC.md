# Sorting Hat Space — 4-Point Spec

**Goal:** Let a class of primary-school children take a short personality survey and be "sorted" into Gryffindor, Hufflepuff, Ravenclaw or Slytherin by a talking Sorting Hat, as a gateway to self-reflection.

## 1. The Survey (before the ceremony)
- 8 child-friendly, situational questions ("A new kid sits alone at lunch…"), 4 answers each, one per house, order shuffled so the pattern isn't guessable.
- Read-aloud by the Hat; large tap targets; works with no reading skill needed.
- Scoring: weighted tally per house. If the top two houses are within 1 point, the Hat asks the child to **choose** (canon: "Hmm… you could go either way — what do *you* want?"). This turns sorting into reflection rather than a verdict.
- Primary-safe: no scary or negative content, no "bad" house. Every house result is framed as a strength.

## 2. The Ceremony (audio + voicebot)
- Hat speaks using on-device text-to-speech, personalised with the child's first name ("Hmm… difficult, very difficult, {name}…").
- Synthesised ambient music, "thinking" murmur and house fanfare (Web Audio, zero asset files, mute button).
- Optional voice answers: child can say "one / two / red / the first one" via Web Speech; tapping always works. Voice is **off by default**, teacher-enabled.
- Reveal: dramatic pause, house crest/colours, house cheer.

## 3. Learning Alignment & Reflection
- Result card lists the house's strengths **and a "stretch" trait** from another house (growth framing).
- Each question maps to a Social-Emotional Learning competency (CASEL: self-awareness, social awareness, relationship skills, responsible decision-making).
- Reflection prompts after sorting support speaking & listening and writing standards (e.g. CCSS ELA SL.K–5, W.K–5 opinion/narrative), such as "Tell a partner about a time you were brave / kind / curious / determined."
- *Standards mapping is a starting point; confirm against your local curriculum.*

## 4. Class Management, Privacy & Safety
- Teacher view (`#teacher`): class list, house tallies, CSV export, clear-all. Used for house-team activities.
- Privacy by design: first name only, no accounts, all data in the browser (localStorage), no analytics, no audio recorded or stored.
- Accessibility: keyboard operable, high contrast, captions of everything the Hat says, reduced-motion respected.
- Disclaimer: unofficial fan/educational tool, not affiliated with or endorsed by the Harry Potter rights holders; **needs a licensing check before any public or commercial distribution**.

## Out of scope (v1)
LLM-generated free-form chat with the Hat. Worth adding later only behind a safe, moderated, no-retention backend.
