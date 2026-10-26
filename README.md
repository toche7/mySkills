# mySkills — คลังสกิลสำหรับ AI Agent โดยเอก

คลังสกิลสำหรับ AI Agent ที่เอกจัดทำและเผยแพร่ เพื่อให้ผู้สนใจนำไปประยุกต์ใช้กับงานของตนเอง สกิลแต่ละชุดรวบรวมแนวทางการทำงาน เครื่องมือช่วย และทรัพยากรที่เกี่ยวข้องไว้ในโฟลเดอร์แยกภายใต้ `skills/`

เริ่มต้นด้วย **Mahidol Marp Slides** สำหรับสร้างสไลด์ตามธีมมหิดล และรองรับการเพิ่มสกิลในด้านอื่น ๆ ต่อไป

เปิดให้เข้าถึงและดาวน์โหลดโดยไม่มีค่าใช้จ่าย ทั้งนี้ การใช้งานทรัพยากรจากแหล่งภายนอกให้เป็นไปตามสิทธิ์และเงื่อนไขของเจ้าของทรัพยากรนั้น ๆ

## สกิลที่มี

- [Mahidol Marp Slides](skills/mahidol-marp-slides/SKILL.md): สไลด์ไทย/อังกฤษ ธีมมหิดล ภาพประกอบ และ PDF พร้อมตรวจการเรนเดอร์
- [Workflow Discovery Coach](skills/workflow-discovery-coach/SKILL.md): โค้ชผู้เรียนวิเคราะห์งานผ่านบทสนทนา สร้าง As-Is/To-Be Swimlane และเลือกแนวทางปรับปรุง โดยไม่ต้องกรอกใบงาน

## ติดตั้ง

คัดลอกทั้งโฟลเดอร์ `skills/mahidol-marp-slides/` พร้อมไฟล์ประกอบไปยังตำแหน่งสกิลของ Agent:

- Codex: `~/.agents/skills/mahidol-marp-slides/`
- Antigravity App / IDE: `~/.gemini/config/skills/mahidol-marp-slides/`
- สำหรับโปรเจกต์ของ Agent ที่รองรับ: `.agents/skills/mahidol-marp-slides/`

จากนั้นระบุชื่อ `mahidol-marp-slides` ในคำขอสร้างสไลด์ หาก Agent ยังไม่พบสกิล ให้เปิดแอปใหม่

สำหรับ Workflow Discovery Coach ให้คัดลอก `skills/workflow-discovery-coach/` ไปยังตำแหน่งสกิลเดียวกัน แล้วเรียก `workflow-discovery-coach` พร้อมกรณีศึกษาหรืองานจริงที่ต้องการวิเคราะห์

สกิลไม่ติดตั้ง Marp CLI เบราว์เซอร์ ฟอนต์ หรือบริการสร้างภาพให้อัตโนมัติ ดู [ข้อกำหนดและคำสั่งใช้งาน](skills/mahidol-marp-slides/references/runtime.md)

## เพิ่มสกิลอื่น

สร้าง `skills/<skill-name>/SKILL.md` พร้อมไฟล์ประกอบ แล้วเพิ่มรายการในหน้านี้ แต่ละสกิลอยู่คนละโฟลเดอร์

## ที่มา

ธีมและโลโก้มหิดลมาจาก [toche7/tempMarp](https://github.com/toche7/tempMarp) ตามรายละเอียดใน runtime reference ไม่มีการกำหนดใบอนุญาตใหม่ให้ assets ต้นทาง

ฉบับล่าสุดใช้ระยะโลโก้จากขอบบนและขอบขวาเท่ากัน 40px คงขนาด 130px และสัดส่วนเดิม
