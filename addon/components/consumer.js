import Component from '@ember/component';
import ProviderConsumerMixin from '../mixins/provider-consumer';
import layout from '../templates/components/consumer';

export default Component.extend(ProviderConsumerMixin, {
  layout,

  providerComponent: null
});
