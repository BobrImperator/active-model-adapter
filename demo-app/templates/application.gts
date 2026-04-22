// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import RouteTemplate from 'ember-route-template';

export default RouteTemplate(
  <template>
    <ul>
      {{#each @model as |car|}}
        <li>{{car.brand}}</li>
      {{/each}}
    </ul>
  </template>,
);
