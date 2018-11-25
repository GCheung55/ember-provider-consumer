import Component from '@ember/component';
import layout from '../templates/components/input-consumer-mixed-in';
import { ProviderConsumerMixin } from 'ember-provider-consumer';
import InputProviderComponent from './input-provider';

export default Component.extend(ProviderConsumerMixin, {
  layout,

  providerComponent: InputProviderComponent
});
