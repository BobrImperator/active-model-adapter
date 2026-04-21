// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import RouteTemplate from 'ember-route-template';
import type { TOC } from '@ember/component/template-only';
import type Car from '../models/car';

const ApplicationTemplate: TOC<{
  Args: { model: Car[] };
}> = <template>
  <ul>
    {{#each @model as |car|}}
      <li>{{car.brand}}</li>
    {{/each}}
  </ul>
</template>;

export default RouteTemplate(ApplicationTemplate);
