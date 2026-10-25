# Layout and content review

## Established visual language

The theme uses navy headings, blue rules, cyan accents, white backgrounds, pale blue cards, and Noto Sans Thai with Sarabun fallbacks. Slides are 16:9. A normal slide uses an h2 heading; h1 is for the cover. The cover logo uses equal top and right insets (40px by default) and a 130px square container; preserve its proportions when adapting the layout. Use `lead` for the cover, `divider` for a short break/section, and `highlight` for a discussion prompt. Do not make all content a wall of cards.

Use the bundled `visual-grid` with `two` or `four` only when the content is genuinely parallel. A three-column comparison normally fits three short concepts. A diagram should convey relationships, branches, feedback, and ownership accurately; a workflow overview must not imply that alternative tasks run sequentially.

`with-picture` reserves space for one portrait illustration on the right. Keep text and diagrams inside the left region using the bundled styles; longer tables normally need the full slide. Use an image caption to distinguish conceptual/generated imagery from real product or research evidence. Do not invent a product bundle, price, discount, interface capability, or result inside an image.

Avoid solving density by shrinking body text repeatedly. Condense wording, move explanation into speaker notes, use a clearer layout, or split a dense page when the user allows it. Keep Thai tone marks and long English terms clear of heading rules.

## Content continuity

For a lecture or lab, assess how the output of one concept/demo becomes the input of the next. Where needed, add a short bridge, a concrete worked output, or explicit expectations. Preserve student-led Discover/Design/Specification activities when requested. Explain what is an internal assistant output versus something sent to a customer. An architecture illustration does not mean integrations are implemented.

For metrics, label fictional numbers, define event/people counts and attribution windows, and distinguish revenue from profit. Match cost scope to the denominator. For code/skills workshops, preserve the distinction between expected pass criteria and observed test results.

## Visual coverage and parallel work

Map slide -> learning purpose -> appropriate visual -> distinct scene/diagram. Reuse an image deliberately for context, not as a substitute for requested variety. If the user asks for more pictures, report actual unique raster images; diagram boxes are a separate type of visual.

When image generation is authorized in parallel, assign disjoint asset filenames and a shared palette/composition. Review the returned files, copy them into project assets, and integrate them in the owning deck. Do not assume another agent's successful generation proves that the image is actually in the PDF.

## Final review

Inspect all slides in a new deck; for scoped updates, inspect changed/new pages and verify that unaffected pages retain their content. Review boundaries, image loads, overlaps, caption legibility, footer/page baseline, and PDF page count. A clean automated report does not exclude overlap or a conceptually misleading diagram. Retest only after changes or unresolved concerns justify it.
