import DS from 'ember-data';

export default DS.Model.extend({
	uid: DS.attr('string'),
	nombre: DS.attr('string'),
});
