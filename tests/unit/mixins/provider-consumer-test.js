import EmberObject from '@ember/object';
import ProviderConsumerMixin from 'ember-provider-consumer/mixins/provider-consumer';
import { module, test } from 'qunit';

module('Unit | Mixin | provider-consumer', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ProviderConsumerObject = EmberObject.extend(ProviderConsumerMixin);
    let subject = ProviderConsumerObject.create();
    assert.ok(subject);
  });
});
