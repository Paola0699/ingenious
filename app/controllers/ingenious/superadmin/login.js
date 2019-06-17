import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {computed} from "@ember/object";
import { buildValidations, validator } from 'ember-cp-validations';


export default Controller.extend({
	    firebase: service('firebaseApp'),
	    actions:{
	    	signin(){
			  let newemail = this.get("user") + "@ingenious.mx";
	          let pass = this.get("pass");
	          this.get('firebase').auth().signInWithEmailAndPassword(newemail, pass).then(()=>{
	          	this.transitionToRoute("ingenious.superadmin.dashboard")
	          })

			},
	    }
});
