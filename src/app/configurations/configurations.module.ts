import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { services } from './services';
import { ConfigurationsContainerComponent } from './configurations-container/configurations-container.component';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ColorChromeModule } from 'ngx-color/chrome';

@NgModule({
  declarations: [ConfigurationsContainerComponent],
  imports: [SharedModule, ConfigurationsRoutingModule, ColorChromeModule],
  providers: [...services]
})
export class ConfigurationsModule {}
