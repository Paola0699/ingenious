import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {computed} from "@ember/object";

export default Controller.extend({
	firebase: service('firebaseApp'),
	actions:{
		guardar(){
		  let newemail = this.get("usuario") + "@ingenious.mx";
          let nombre = this.get("nombre");
          let pass = this.get("contrasena");
          this.get('firebase').auth().createUserWithEmailAndPassword(newemail, pass).then((usuario)=>{
          	  this.get('store').createRecord('superadministrador',{
          	  	uid: usuario.uid,
                nombre: nombre,
          	  }).save().then(()=>{
          	  	swal("Éxito", "Has sido registrado!", "success")
          	  })

          })

		}

	}
});
