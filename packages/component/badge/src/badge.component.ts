import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: "miraui-badge",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold" [ngClass]="badgeClass">
      <ng-content />
    </span>
  `,
})
export class BadgeComponent {
  @Input() color: "gray" | "blue" | "green" | "red" = "gray";

  get badgeClass() {
    const base = "text-white";
    const colorMap: Record<string, string> = {
      gray: "bg-gray-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      red: "bg-red-500",
    };

    return `${base} ${colorMap[this.color] ?? colorMap["gray"]}`;
  }
}
