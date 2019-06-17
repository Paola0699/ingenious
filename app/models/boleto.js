import DS from 'ember-data';

export default DS.Model.extend({
	serie: DS.attr('string'),
	participante: DS.belongsTo('participante'),
});
