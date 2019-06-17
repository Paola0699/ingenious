import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	apellidoP: DS.attr('string'),
	apellidoM: DS.attr('string'),
	edad: DS.attr('string'),
	empresa: DS.attr('string'),
	taller: DS.belongsTo('taller'),
	boleto: DS.belongsTo('boleto'),
});
