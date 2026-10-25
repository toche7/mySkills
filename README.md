# mySkills — สกิลของเอก

แหล่งรวมสกิลสำหรับ AI Agent ที่เอกจัดทำและแบ่งปันให้คนอื่นนำไปใช้กับงานของตัวเองได้ โดยแยกแต่ละสกิลไว้ใน `skills/`

เริ่มจาก Mahidol Marp Slides สำหรับสร้างสไลด์ตามธีมมหิดล และสามารถเพิ่มสกิลด้านอื่น ๆ ในที่เก็บนี้ได้ต่อไป

## สกิลที่มี

- [Mahidol Marp Slides](skills/mahidol-marp-slides/SKILL.md): สไลด์ไทย/อังกฤษ ธีมมหิดล ภาพประกอบ และ PDF พร้อมตรวจการเรนเดอร์

## ติดตั้ง

คัดลอกทั้งโฟลเดอร์ `skills/mahidol-marp-slides/` พร้อมไฟล์ประกอบไปยังตำแหน่งสกิลของ Agent:

- Codex: `~/.agents/skills/mahidol-marp-slides/`
- Antigravity App / IDE: `~/.gemini/config/skills/mahidol-marp-slides/`
- สำหรับโปรเจกต์ของ Agent ที่รองรับ: `.agents/skills/mahidol-marp-slides/`

จากนั้นระบุชื่อ `mahidol-marp-slides` ในคำขอสร้างสไลด์ หาก Agent ยังไม่พบสกิล ให้เปิดแอปใหม่

สกิลไม่ติดตั้ง Marp CLI เบราว์เซอร์ ฟอนต์ หรือบริการสร้างภาพให้อัตโนมัติ ดู [ข้อกำหนดและคำสั่งใช้งาน](skills/mahidol-marp-slides/references/runtime.md)

## เพิ่มสกิลอื่น

สร้าง `skills/<skill-name>/SKILL.md` พร้อมไฟล์ประกอบ แล้วเพิ่มรายการในหน้านี้ แต่ละสกิลอยู่คนละโฟลเดอร์

## ที่มา

ธีมและโลโก้มหิดลมาจาก [toche7/tempMarp](https://github.com/toche7/tempMarp) ตามรายละเอียดใน runtime reference ไม่มีการกำหนดใบอนุญาตใหม่ให้ assets ต้นทาง

ฉบับล่าสุดใช้ระยะโลโก้จากขอบบนและขอบขวาเท่ากัน 40px คงขนาด 130px และสัดส่วนเดิม
