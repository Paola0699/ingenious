import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | ingenious/superadmin/login', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:ingenious/superadmin/login');
    assert.ok(controller);
  });
});
