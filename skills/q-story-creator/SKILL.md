---
name: q-story-creator
description: Create short Thai everyday stories and matching American comic illustrations featuring Q (คิว), the curious, friendly, and tech-savvy character based on his reference identity. Use for Q Story Creator, คิวเล่าเรื่อง, Q Tries Something New, คิวลองสิ่งใหม่, or character storytelling activities featuring Q. Support text-only, image-only, and revisions.
---

# Q Story Creator — คิวเล่าเรื่อง

## Defaults

- Create one short Thai story and one matching square illustration. Honor explicit requests for text only, image only, another language, length, or image count.
- Use the theme “Q Tries Something New — คิวลองสิ่งใหม่” as a flexible starting point, not mandatory text on every output.
- Make Q the main recurring character. Add supporting characters only when the user asks or the story requires them.
- Write warm, accessible, lightly humorous stories for general readers. Use roughly 600–1,000 Thai characters, a short title, 3–5 short paragraphs, and one natural takeaway. Avoid compulsory hashtags, promotional copy, moral lectures, repeated catchphrases, or forced personal experiences.
- Let Q encounter something unfamiliar (a new hobby, sport, gadget, recipe, or daily challenge), try an approach, notice a recoverable problem or discovery, and learn something useful. Vary the narrative; do not force mistakes into every story.
- Present Q as curious, friendly, tech-savvy, eager to learn, willing to experiment, and gently funny.

## Workflow

1. **Frame the episode.** Reuse the supplied topic, audience, situation, and preferences. If no topic is given, choose a concrete everyday first-time experience and proceed. Ask only when an essential detail blocks the requested result.
2. **Load identity.** Read [references/q.md](references/q.md). Inspect the most relevant bundled image in `assets/` with an available image viewer before generation. Use its local path as a reference-image input; do not rely on prose alone.
3. **Write the story.** Choose a specific setting, goal, action, emotion, and discovery. Keep one clear takeaway and match vocabulary to the audience. Research only factual claims that require verification; no browsing is necessary for purely fictional everyday storytelling. Avoid unsupported medical, legal, financial, or technical advice.
4. **Plan the illustration.** Select the story’s clearest visual moment. Define location, action, relevant props, emotion, camera angle, and lighting from this episode. Keep the core character identity fixed (facial features, dark neat hair, round friendly face, warm smile) while allowing clothes, accessories, poses, emotions, and setting to change.
5. **Generate.** Use the available image-generation tool and its applicable instructions. Name each input’s role explicitly: identity/style reference, not background or composition template. Create a full American comic scene with bold ink outlines, vivid colors, cel shading, and subtle halftone. Keep Q's face and expressive features recognizable. Default to no in-image text, logos, borders, or watermarks; add a headline or comic layout only when requested.
6. **Check.** Inspect facial identity, hair, warm smile, natural proportions, expression, relevant props, and agreement between image and story. Check that the setting and composition suit the episode and do not merely copy a reference. Correct material errors.
7. **Deliver.** Present the complete Thai story in a clean text block. Show generated images through their native display mechanism without duplicating them. Keep production notes outside the story and brief.

## Revision and Classroom Use

- Revise only the requested component while preserving accepted identity and story details.
- Treat the four bundled scenes as examples, not the complete list of permitted backgrounds or actions. Explore new contexts such as cafes, markets, camping, running, coding, photography, or bookstores when relevant.
- For an explicit classroom explanation, briefly identify “fixed” elements (character facial features and American comic rendering) and “variable” elements (story, outfit, setting, pose, emotion, accessories). Do not attach this explanation to every normal story.
- Use [references/classroom-examples.md](references/classroom-examples.md) for sample prompts and comparison activities when requested.
- Do not edit this skill for a one-off episode and do not publish or send content without an explicit request.
