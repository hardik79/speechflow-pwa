# TopSpeech Health - Speech Therapy PWA Prototype

A mobile-first React PWA tailored for a speech therapy daily lesson experience, specifically focusing on a rhotacism program (fixing the "R" sound). 

## Task 01: Diverging from Duolingo

After auditing Duolingo's lesson UX, here is how this prototype deliberately diverges to support a speech therapy context:

- **What I kept:** The modular card-based lesson flow and the clear top progress bar. These elements successfully break down complex tasks and give the user a clear sense of progression.
- **What I changed:** 
  - **Removed "Lives/Hearts" and punitive sounds:** In speech therapy, struggling is part of the process. Instead of harsh buzzers or red "Wrong!" overlays, the feedback state is a warm, encouraging orange overlay that gently nudges the user to "Take a breath and try once more." 
  - **Color Palette & Tone:** Replaced hyper-vibrant, gamified colors with a therapeutic palette (soft teals, warm peaches, and gentle blues). The language used is supportive ("Your Daily Moment", "Wonderful Job") rather than purely competitive.
  - **Non-binary scoring:** Added a Confidence Reflection card. In healthcare, self-perception of difficulty is as important as binary correctness.

## Task 02: PWA Lesson Prototype

This prototype is built using React, Vite, Tailwind CSS v4, and Framer Motion.
It features a 4-card sequence:
1. Listen & Repeat
2. Word Selection
3. Mirror Coaching Mode
4. Confidence Reflection

**To run the project:**
```bash
npm install
npm run dev
```

## Task 03: The Innovation - Mirror Coaching Mode

**The Innovation:** I added a "Mirror Coaching Mode" card which simulates a front-facing camera interface with a breathing guide overlay. 

**Why I added it:** Duolingo focuses primarily on cognitive recall and audio playback. Speech therapy, particularly for rhotacism, is a deeply physical exercise requiring precise muscle coordination and breath control. This UI feature slows the user down, guides their breathing with an animated visual pulse, and provides specific physical cues (e.g., "Tongue stays wide and pulled back"). This transforms a digital screen into a supportive, physical therapy tool.
