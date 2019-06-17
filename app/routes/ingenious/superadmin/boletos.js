import Route from '@ember/routing/route';
import { hash } from 'rsvp'

export default Route.extend({
	model(){
		return Ember.RSVP.hash({
			participantes: this.store.findAll('participante'),

		}) 
	}
});
