import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  providerComponent: null,

  /**
   * Returns for a parent component that matches the `providerComponent`.
   *
   * The parent component acts as a provider of data and is yielded.
   */
  provider: computed('providerComponent', function() {
    const klass = this.get('providerComponent');

    // Taken from `Component.nearestOfType` because it is a deprecated method.
    let view = this.parentView;
    let isOfType =
      klass instanceof Mixin ? view => klass.detect(view) : view => klass.detect(view.constructor);

    while (view) {
      if (isOfType(view)) {
        return view;
      }
      view = view.parentView;
    }
  })
});
