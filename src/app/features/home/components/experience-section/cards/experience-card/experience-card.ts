import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentTextList } from '../../../../../../shared/components/content/content-text-list/content-text-list';

@Component({
  selector: 'app-experience-card',
  imports: [ContentTextList],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCard {
  public readonly company = input.required<string>();
  public readonly highlights = input.required<readonly string[]>();
  public readonly period = input.required<string>();
  public readonly role = input.required<string>();
  public readonly summary = input.required<string>();
}
