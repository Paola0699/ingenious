import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ingenious/superadmin/dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ingenious/superadmin/dashboard');
    assert.ok(route);
  });
});
