import Component from '@ember/component';
import ProviderConsumerMixin from 'ember-provider-consumer';
import InputProviderComponent from './input-provider';
import layout from '../templates/components/input-consumer';

export default Component.extend(ProviderConsumerMixin, {
  layout,

  providerComponent: InputProviderComponent
});
