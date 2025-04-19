
import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import { ButtonTheme } from "@miraui/theme";

@Component({ 
  selector: "miraui-button",
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [attr.data-hover]="isHovered"
      [attr.data-focus]="isFocused"
      [attr.data-focus-visible]="isFocusVisible"
      [attr.data-pressed]="isPressed"
      [attr.data-loading]="loading"
      [class]="getClassesMap()"
      [disabled]="disabled || loading"
      (click)="onClick.emit($event)"
      (mouseenter)="isHovered = true"
      (mouseleave)="isHovered = false"
      (mousedown)="isPressed = true"
      (mouseup)="isPressed = false"
      (mouseleave)="isPressed = false"
      (focus)="handleFocus($event)"
      (blur)="handleBlur()"
    >
      <ng-container *ngIf="label">{{ label }}</ng-container>
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() label: string | undefined;
  @Input() color: keyof typeof ButtonTheme.color = "default";
  @Input() variant: keyof typeof ButtonTheme.color[keyof typeof ButtonTheme.color] = "solid";
  @Input() size: keyof typeof ButtonTheme.size = "md";
  @Input() radius: keyof typeof ButtonTheme.radius = "md";
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  @Output() onClick = new EventEmitter<MouseEvent>();

  @HostBinding(`class.w-full`) get fullWidthClass() {
    return this.fullWidth;
  }


  isHovered = false;
  isFocused = false;
  isFocusVisible = false;
  isPressed = false;

  @HostListener('focus', ['$event'])
  handleFocus(event: FocusEvent) {
    // วิธีที่ 1: ตรวจสอบกับ PointerEvent
    if ('pointerType' in event) {
      // ตรวจสอบว่า event มาจากการทัช
      this.isFocusVisible = event.pointerType !== 'touch';
    } else {
      // วิธีที่ 2: ใช้ matchMedia สำหรับทัช
      this.isFocusVisible = !window.matchMedia('(pointer: coarse)').matches;
    }
  }
  

  @HostListener("blur")
  handleBlur() {
    this.isFocused = false;
    this.isFocusVisible = false;
  }

  
  getClassesMap(): string {
    return [
      ...ButtonTheme.base,
      ...ButtonTheme.size[this.size],  // ขนาดจาก size (อาจจะมี rounded)
      ...(this.fullWidth ? ButtonTheme.fullWidth : []),
      ...(this.disabled ? ButtonTheme.disabled : []),
      ...(ButtonTheme.radius[this.radius] || []),  // รวบรวม radius หลัง size เพื่อให้ radius มีผล
      ...ButtonTheme.color[this.color][this.variant],  // ให้สีมาหลังสุด
    ].join(" ");
  }
  
}
