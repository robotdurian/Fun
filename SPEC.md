# Sorting Hat — Audio-Only Party Edition (4-Point Spec)

**Goal:** A talking Sorting Hat that runs from a phone, played out of a speaker, with no visuals needed. Each child gets a wizard alias, answers by voice, and is sorted by a rambling, funny Hat.

## 1. Voice-first loop (hands-free)
- Near-black screen. One button wakes the Hat, one starts the next child. Nothing to look at.
- Hat reads the question and options, **dings**, then listens. Child says "one/two/three/four" (or a keyword from the answer, or "repeat").
- Didn't catch it → re-asks twice, then the Hat picks for them ("Cat got your tongue?").
- **Discreet host keypad** (1–4 dots at the bottom): a grown-up taps the answer silently if the room is too loud or the mic fails. Also used automatically if mic permission is denied.

## 2. Aliases, by ear
- Hat announces a random wizard alias ("Professor Sparkly Biscuit"). Child says "yes" or "another" to re-roll (up to 3 times). No real names.

## 3. The Musing Ceremony
- Back-to-back speech that reads like one thought: notices answers, doubts itself, rules a house out, counts scores, decides, "Better be… HOUSE!" with whispered, slow and shouted delivery.
- Built from the child's own answers, so no two ceremonies match. Tie → child chooses between two houses by voice.
- Then a house dare to kick off party games, and "Next wizard, step forward!"

## 4. Phone setup
- One static HTML file; mic needs **HTTPS** (host on GitHub Pages / Netlify). Not file://.
- Best: Android + Chrome (voice input works well). iPhone Safari voice input is unreliable, so use the keypad there.
- Screen wake-lock keeps the phone awake. Pair with a Bluetooth speaker; keep the phone near the kids, speaker a few metres away to limit echo.
- Voice picker in ⚙ ranks British voices (Ryan, Arthur, Google UK Male, Oliver, Daniel, George); spoken scoreboard; length 5/6/8 questions.
- Unofficial fan-made party game; fine for a private party, check licensing before sharing publicly.
