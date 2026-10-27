# Milo identity and reference selection

## Fixed identity

- Use a compact childlike robot with a large slightly squarish rounded white helmet, cobalt-blue helmet panels, and circular blue ears. Never add an antenna.
- Keep a black digital face screen with expressive luminous blue eyes; express emotion through eyes, head angle, and pose. Do not require a mouth: the approved references primarily use eyes.
- Keep a rounded white torso, circular blue chest core, cobalt-blue joint accents, short articulated arms and legs, and compact feet. Preserve the same robot family and silhouette; do not change Milo into a human, adult-sized android, animal, or unrelated robot.
- Preserve American comic rendering with confident dark outlines, vibrant cel shading, and restrained halftone texture.
- Allow topic-appropriate clothing and accessories without hiding essential identity features. Treat aprons, backpacks, props, camera angles, backgrounds, and lighting as variable.

## Bundled reference images

Paths are relative to the skill root. Inspect relevant images and supply them to the image tool. Use likeness and rendering only; do not automatically copy their setting, layout, or props.

| Asset | Example action / emotion | Example context |
| --- | --- | --- |
| `assets/milo-curious-office.png` | Curious, puzzled, checking a list | First day in an office; useful default identity reference |
| `assets/milo-cooking-kitchen.png` | Experimenting, surprised, stirring batter | Domestic kitchen |
| `assets/milo-thinking-workshop.png` | Thinking, carefully assembling a toy | Maker workshop |
| `assets/milo-happy-beach.png` | Joyful, proud, arms raised | Beach with a sandcastle |

These images establish identity across contexts, not a compulsory four-scene rotation. The user may request entirely different scenes.

## Generation prompt scaffold

“Use the supplied image only for Milo’s identity and American comic rendering. Keep the same blue-and-white childlike robot, large rounded slightly squarish helmet, circular blue ears, black face with luminous blue eyes, circular blue chest core, and short articulated limbs. No antenna. Show Milo [action] with [emotion] in [episode-specific location], using [relevant props], [camera angle], and [lighting]. Do not copy the reference background or composition. No Ake, red/green robot companions, logos, or text unless requested.”
