ember-provider-consumer
==============================================================================

An addon to support the provider pattern in Ember.js via components, enabling properties to be passed to components without having to pass properties down the whole component tree.

Demo: https://ember-twiddle.com/22af9684d040d4c130080ef5c6e3e30f

Installation
------------------------------------------------------------------------------

```
ember install ember-provider-consumer
```


Usage
------------------------------------------------------------------------------

1. Create two components, a provider and consumer. The provider component will contain the properties that the consumer component will access.

    Here we will use `my-provider` and `my-consumer` as an example of the two components.

    ```
    ember generate component my-provider
    ember generate component my-consumer
    ```

2. Import the `Consumer` component from `ember-provider-consume` and the generated provider component into the generated consumer component.

    Subclass the `Consumer` component and set the provider component as the `providerComponent` property. The `providerComponent` property will be used to locate the provider component up the component tree.

    **Note** `Consumer` has a `layout` property, aka template, so `my-consumer` does not have the `layout` property defined. `my-consumer` component's corresponding template can be removed.

    ```javascript
    // app/components/my-consumer.js

    import ConsumerComponent from 'ember-provider-consumer';
    import MyProviderComponent from './my-provider';

    export default Consumer.extend({
      providerComponent: InputProviderComponent
    });

    ```

3. Use the components! Any property set on the provider will be availalbe to the consumer, yielded as `provider`. The provider component must be a parent to the consumer component, but the consumer does not have to be a direct descendent.

    ```handlebars
    {{! example application.hbs }}

    {{textarea value=userInput}}

    {{#my-provider textInput=userInput}}
      {{outlet}}
    {{/my-provider}}
    ```

    ```handlebars
    {{! example index.hbs - rendered inside `application.hbs` outlet, assuming an index route was created }}

    {{#my-consumer as | provider |}}
      <p>
        {{provider.textInput}}
      </p>
    {{/my-consumer}}
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
