---
name: milo-story-creator
description: Create short Thai fictional stories and matching American comic illustrations featuring Milo, the consistent blue-and-white robot. Use for Milo Story Creator, ไมโลเล่าเรื่อง, Milo Tries Something New, ไมโลลองสิ่งใหม่, or classroom character storytelling activities using Milo. Support text-only, image-only, and revisions. Do not use for general Facebook educational research posts without Milo or for live agent operations.
---

# Milo Story Creator — ไมโลเล่าเรื่อง

## Defaults

- Create one short Thai story and one matching square illustration. Honor explicit requests for text only, image only, another language, length, or image count.
- Use the campaign “Milo Tries Something New — ไมโลลองสิ่งใหม่” as a flexible starting point, not mandatory text on every output.
- Make Milo the only recurring character. Do not include Ake, Hermi, Lina, CBTU logos, or other branding unless explicitly requested. Add supporting characters only when the user asks or the story requires them.
- Write warm, accessible, lightly humorous fiction for general readers. Use roughly 600–1,000 Thai characters, a short title, 3–5 short paragraphs, and one natural takeaway. Avoid compulsory hashtags, promotional copy, moral lectures, repeated catchphrases, or manufactured personal experiences.
- Let Milo encounter something unfamiliar, try an approach, notice a recoverable problem or discovery, and learn something useful. Vary the narrative; do not force mistakes into every story.
- Present Milo as curious, friendly, careful, willing to experiment, and occasionally gently funny. Treat personality and events as fiction, not verified behavior of a real agent or integration.

## Workflow

1. **Frame the episode.** Reuse the supplied topic, audience, situation, and preferences. If no topic is given, choose a concrete everyday first-time experience and proceed. Ask only when an essential detail blocks the requested result.
2. **Load identity.** Read [references/milo.md](references/milo.md). Inspect the most relevant bundled image with an available image viewer before generation. Use its local path as a reference-image input; do not rely on prose alone. Use a second reference only when needed to clarify a visible identity detail.
3. **Write the story.** Choose a specific setting, goal, action, emotion, and discovery. Keep one clear takeaway and match vocabulary to the audience. Research only factual claims that require verification; no browsing is necessary for purely fictional everyday storytelling. Avoid unsupported medical, legal, financial, or technical advice.
4. **Plan the illustration.** Select the story’s clearest visual moment. Define location, action, relevant props, emotion, camera angle, and lighting from this episode. Keep the core character identity fixed while allowing clothes, accessories, poses, emotions, and setting to change.
5. **Generate.** Use the available image-generation tool and its applicable instructions. Name each input’s role explicitly: identity/style reference, not background or composition template. Create a full American comic scene with bold ink outlines, vivid colors, cel shading, and subtle halftone. Keep Milo’s face and defining features readable. Default to no in-image text, logos, borders, or watermarks; add a headline or comic layout only when requested. For multiple distinct images, use separate calls and prompts with the same identity constraints.
6. **Check.** Inspect identity, blue/white color scheme, no antenna, childlike proportions, hands, expression, relevant props, and agreement between image and story. Check that the setting and composition suit the episode and do not merely copy a reference. Correct material errors. If image generation fails, deliver usable text and a clearly labeled image brief; do not claim an image was generated.
7. **Deliver.** Present the complete Thai story in a social-post writing block when available, or ordinary clean text. Show generated images through their native display mechanism without duplicating them. Keep production notes outside the story and brief. Follow environment persistence rules.

## Revision and classroom use

- Revise only the requested component while preserving accepted identity and story details.
- Treat the four bundled scenes as examples, not the complete list of permitted backgrounds or actions. Explore new contexts such as gardens, museums, trains, markets, sports, or libraries when relevant.
- For an explicit classroom explanation, briefly identify “fixed” elements (identity and rendering) and “variable” elements (story, setting, pose, emotion, accessories). Do not attach this explanation to every normal story.
- Use [references/classroom-examples.md](references/classroom-examples.md) for sample prompts and comparison activities when requested.
- Do not edit this skill for a one-off episode and do not publish or send content without an explicit request.
