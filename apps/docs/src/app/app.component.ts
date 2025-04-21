import {Component} from "@angular/core";
import {ButtonModule} from "@miraui/button";
import {BadgeComponent} from "@miraui/badge";

@Component({
  selector: "app-root",
  imports: [ButtonModule, BadgeComponent],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "docs";
}
