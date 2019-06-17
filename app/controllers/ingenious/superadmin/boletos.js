import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import {computed} from '@ember/object';
import {isBlank} from '@ember/utils';
import DS from 'ember-data';

export default Controller.extend({
	boletos: computed(function(){
		return this.store.findAll('boleto')
	}),

	pases: computed('boletos.content', function(){
		debugger
		let array =[]
		this.get('boletos').forEach((boleto)=>{
			if(boleto.get('serie')=='G97248')
				array.push(boleto)			
		})
		return array
	}),

	firebase: service('firebaseApp'),
	actions:{
		guardarBoleto(folio){
			this.store.createRecord('boleto', {
	        serie: folio,
	      }).save().then(()=>{
	      	this.set('folio',null)
	      	swal("Éxito", "El boleto ha sido registrado con éxito!", "success").then(()=>
	      		this.transitionToRoute('ingenious.superadmin.boletos'));
	      })
		},
	}
});
