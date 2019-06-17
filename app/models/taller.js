import DS from 'ember-data';

export default DS.Model.extend({
	participantes: DS.hasMany('participante'),
	nombre: DS.attr('string'),
	tallerista: DS.attr('string'),
	lugar:DS.attr('string'),
	descripcion: DS.attr('string'),
	area:DS.attr('string')
});
