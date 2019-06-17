import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import {computed} from '@ember/object';
import {isBlank} from '@ember/utils';
import DS from 'ember-data';


export default Controller.extend({
	talleres: computed(function() {
	    return this.store.findAll('taller')
	  }),
	areas: ['Ingeniería Industrial', 'Tecnologías', 'Bioingeniería'],

	participantess: computed('selectedTaller', function() {
	    if (!isBlank(this.get('selectedTaller'))) {
	      return DS.PromiseArray.create({
	        promise: this.get('selectedTaller.participantes').then((participantesList) => {
	          return participantesList;
	        })
	      })
	    } else { return null }
	  }),
	  participantes: computed('participantess.content', function() {
	    return this.get('participantess.content')
	  }),

	firebase: service('firebaseApp'),
	actions:{
		guardar(nombre,tallerista,lugar,descripcion,selectedArea) {
	      this.store.createRecord('taller', {
	        nombre: nombre,
	        tallerista: tallerista,
	        lugar: lugar,
	        descripcion: descripcion,
	        area: selectedArea,
	      }).save().then(()=>{
	      	this.set('nombre',null)
	    	this.set('tallerista',null)
	    	this.set('lugar',null)
	    	this.set('descripcion',null)
	    	this.set('selectedArea',null)
	      	swal("Éxito", "El taller ha sido creado con éxito!", "success").then(()=>
	      		this.transitionToRoute('ingenious.superadmin.talleres'));
	      })
	    },


	}

});
