# Mira UI

Angular UI Library ที่ใช้งานได้ใน production พร้อมกับการรองรับ TailwindCSS v3, Storybook, และการสร้าง monorepo สำหรับการจัดการ UI components.

## การติดตั้ง

```bash
# ติดตั้ง dependencies
npm install

# เริ่มต้นพัฒนา
npm start

# สร้าง build
npm run build

# เปิด Storybook
npm run storybook
```

## โครงสร้างโปรเจกต์

โครงสร้างของโปรเจกต์แบ่งออกเป็น:

- **apps/** - สำหรับแอปตัวอย่างและเอกสาร
- **packages/** - สำหรับ UI components และ utilities
- **tools/** - เครื่องมือสำหรับการพัฒนาและการ build

## การพัฒนา Components

1. แต่ละ component จะอยู่ใน `packages/component/` ในโฟลเดอร์ของตัวเอง
2. ทุก component มี module ของตัวเอง
3. การสร้าง component ใหม่ควรใช้ TailwindCSS classes เพื่อความสะดวกในการปรับแต่ง

## การใช้งาน

ตัวอย่างการใช้งาน Button component:

```typescript
import { ButtonModule } from "@mira-ui/button";

@NgModule({
  imports: [ButtonModule],
})
export class AppModule {}
```

ใช้งานใน template:

```html
<mira-button variant="primary" size="md" (onClick)="handleClick()">
  Click Me
</mira-button>
```
