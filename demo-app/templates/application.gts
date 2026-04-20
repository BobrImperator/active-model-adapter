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
