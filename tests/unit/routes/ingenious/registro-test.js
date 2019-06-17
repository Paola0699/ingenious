import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ingenious/registro', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ingenious/registro');
    assert.ok(route);
  });
});
