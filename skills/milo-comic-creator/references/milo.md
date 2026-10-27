# Milo Character Identity & Comic Visual Guide

## 1. Fixed Character Identity

- **Silhouette & Scale:** Compact, childlike robot proportions with a large, rounded, slightly squarish white helmet, cobalt-blue helmet side/top panels, and circular blue ears. Short articulated limbs and compact feet. Never render Milo as a tall adult android, animal, or slender mecha.
- **Head & Ears:** Rounded squarish helmet with sleek contours; circular blue ears on both sides. **CRITICAL:** Milo NEVER has an antenna or wires protruding from the head.
- **Face Screen & Eyes:** Seamless curved black digital glass face screen. Milo has **no physical mouth** and **no nose**. All facial emotion is conveyed through **luminous neon-blue digital eyes**, head tilt, and posture.
- **Chest & Torso:** Rounded white torso featuring a glowing circular cobalt-blue chest core (power indicator), with cobalt-blue accents at shoulder and hip joints.
- **Rendering Style:** Classic American comic book art style with bold black ink linework, vibrant cel shading, clean highlights, and subtle halftone dot texture.

---

## 2. Emotional Expressions Without a Mouth (Robot Body Language)

Since Milo does not have a mouth, emotion and comic acting rely heavily on eye shapes and body posture:

| Emotion | Eye Graphic (Luminous Blue) | Head / Body Posture |
| :--- | :--- | :--- |
| **Happy / Joyful (ดีใจ/สดใส)** | Inverted curved crescents (^^) | Head tilted, hands raised, bouncing stance |
| **Curious / Puzzled (สงสัย/ใคร่รู้)** | One eye larger circle (O), one smaller question-arc (?), or asymmetrical tilt | Head tilted sideways at 30°, hand touching chin/ear |
| **Focused / Determined (มุ่งมั่น/ตั้งใจ)** | Focused horizontal slits with sharp upper brow line | Leaning forward, two hands gripping tool/prop |
| **Shocked / Surprised (ตกใจ/ประหลาดใจ)** | Wide glowing circular dots (⊙ ⊙) | Body thrown backward, arms flailing, floating sweat drop |
| **Dizzy / Confused (มึนงง/สับสน)** | Spiral or zigzag glowing squiggles (@ @) | Staggered stance, floating comic stars or question marks |
| **Proud / Accomplished (ภูมิใจ/สำเร็จ)** | Sparkling star-burst eyes (★ ★) or happy arcs | Chest puffed out, hands on hips |

---

## 3. Bundled Reference Images

Inspect relevant images before generation and pass their local paths to image tools as character/rendering references:

| Asset | Key Features & Scene Context |
| :--- | :--- |
| `assets/milo-curious-office.png` | Standard neutral/curious pose; best default baseline for Milo's proportions and color scheme |
| `assets/milo-cooking-kitchen.png` | Expressive action, domestic setting, dynamic arm poses |
| `assets/milo-thinking-workshop.png` | High concentration, workshop props, seated/focused posture |
| `assets/milo-happy-beach.png` | Full-body joy, outdoor environment, dynamic lighting |

---

## 4. Multi-Panel Comic Prompt Scaffold

When generating 4-panel comic strips or individual comic frames:

```text
American comic book strip, 4-panel sequence [or 2x2 grid comic page]. Bold black ink outlines, vivid saturated colors, dynamic cel shading, subtle halftone dot printing texture.
Starring Milo: a compact childlike blue-and-white robot, large rounded squarish white helmet, circular blue ears, NO antenna, black digital face screen with luminous neon-blue expressive eyes, NO mouth, glowing circular blue chest core, short articulated limbs.

Panel 1 (Setup): [Description of shot, location, Milo's action & emotion]
Panel 2 (Development): [Description of shot, action progression, new detail]
Panel 3 (Twist/Climax): [Dynamic camera angle, surprising event, Milo's shocked/curious reaction]
Panel 4 (Punchline/Resolution): [Ending outcome, punchline, comedic or heartwarming expression]

Include clean black panel borders, white gutters, readable comic captions and speech balloons with English/Thai text or expressive sound effect lettering (SFX). No watermarks, no unrelated human characters.
```
