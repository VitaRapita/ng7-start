import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { services } from './services';
import { ConfigurationsContainerComponent } from './configurations-container/configurations-container.component';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ColorSketchModule } from 'ngx-color/sketch';

@NgModule({
  declarations: [ConfigurationsContainerComponent],
  imports: [SharedModule, ConfigurationsRoutingModule, ColorSketchModule],
  providers: [...services]
})
export class ConfigurationsModule {}
