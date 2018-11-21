ember-provider-consumer
==============================================================================

A mixin to support the provider pattern in Ember.js, enabling properties to be passed to components without having to pass properties down the whole component tree.

Installation
------------------------------------------------------------------------------

```
ember install ember-provider-consumer
```


Usage
------------------------------------------------------------------------------

1. Create two components, a provider and consumer. The provider component will contain the properties that the consumer component will access.

    ```
    ember generate component <name-of-provider-component>
    ember generate component <name-of-consumer-component>
    ```

2. Import `ember-provider-consumer` mixin and the provider component into the consumer component. Extend the consumer component with the mixin and set the provider component as the `providerComponent` property.

    The `providerComponent` will be used to locate the provider component.

    ```javascript
    import Component from '@ember/component';
    import ProviderConsumerMixin from 'ember-provider-consumer';
    import InputProviderComponent from './input-provider';
    import layout from '../templates/components/input-consumer';

    export default Component.extend(ProviderConsumerMixin, {
      layout,

      providerComponent: InputProviderComponent
    });

    ```

3. Use the components! Any property set on the provider will be availalbe to the consumer, yielded as `provider`. The provider component must be a parent to the consumer component, but the consumer does not have to be a direct descendent.

    ```handlebars
    {{! example application.hbs }}

    {{textarea value=userInput}}

    {{#example-provider textInput=userInput}}
      {{outlet}}
    {{/example-provider}}
    ```

    ```handlebars
    {{! example index.hbs - rendered inside `application.hbs` outlet, assuming an index route was created }}

    {{#example-consumer as | provider |}}
      <p>
        {{provider.textInput}}
      </p>
    {{/example-consumer}}
    ```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/GCheung55/ember-provider-consumer.git`
* `cd ember-provider-consumer`
* `yarn install`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
