# Q Identity and Reference Selection

## Fixed Identity

- Use a cheerful Asian man with short neat dark black hair, a friendly rounded face, expressive dark brown eyes, and a warm, approachable smile.
- Preserve consistent facial likeness, jawline, and friendly expression across all scenes.
- Preserve American comic book rendering with confident dark ink outlines, vibrant cel shading, and subtle halftone texture.
- Allow topic-appropriate clothing and accessories without distorting the character's recognizable facial identity. Treat shirts, sports jerseys, aprons, hats, props, camera angles, backgrounds, and lighting as variable.

## Bundled Reference Images

Paths are relative to the skill root. Inspect relevant images and supply them to the image tool. Use likeness and rendering only; do not automatically copy their setting, layout, or props.

| Asset | Example action / emotion | Example context |
| --- | --- | --- |
| `assets/q-curious-office.jpg` | Curious, thoughtful, holding smart device | Modern tech office; primary identity reference |
| `assets/q-cooking-kitchen.jpg` | Experimenting, surprised, tasting soup | Cozy domestic kitchen |
| `assets/q-thinking-workshop.jpg` | Focused, inventive, assembling a gadget | Maker workshop / DIY studio |
| `assets/q-happy-beach.jpg` | Joyful, relaxed, holding tropical drink | Sunny beach vacation |

These images establish identity across diverse contexts, not a compulsory four-scene rotation. The user may request entirely different scenes.

## Generation Prompt Scaffold

“Use the supplied image only for Q’s identity and American comic rendering. Keep the exact same cheerful Asian man with short neat dark hair, friendly round face, expressive warm eyes, and engaging smile. Show Q [action] with [emotion] in [episode-specific location], using [relevant props], [camera angle], and [lighting]. Do not copy the reference background or composition. Full American comic style with bold ink outlines, vivid saturated colors, cel shading, and subtle halftone dots. No in-image text, speech bubbles, logos, or watermarks unless requested.”
