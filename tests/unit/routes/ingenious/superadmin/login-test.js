import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ingenious/superadmin/login', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ingenious/superadmin/login');
    assert.ok(route);
  });
});
