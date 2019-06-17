import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import {computed} from '@ember/object';
import {isBlank} from '@ember/utils';
import DS from 'ember-data';


export default Controller.extend({
	talleress: computed(function() {
	    return this.store.findAll('taller')
	}),

  talleres:computed('talleress.content',function() {
      let array =[]
      this.get('talleress').forEach((taller)=>{
        if(taller.get('participantes.length') <35)
          array.push(taller)      
      })
      return array
  }),

	boletos: computed(function(){
		return this.store.findAll('boleto')
	}),

	pases: computed('boletos.content', function(){
		let array =[]
		this.get('boletos').forEach((boleto)=>{
			if(boleto.get('serie')=="G97248")
				array.push(boleto)			
		})
		return array
	}),

   datos: computed('nombre','apellidoP','apellidoM','edad','empresa','boleto','selectedTaller', function() {
    if (!isBlank(this.get('nombre')) && !isBlank(this.get('apellidoP')) && !isBlank(this.get('apellidoM')) && !isBlank(this.get('edad')) && !isBlank(this.get('empresa')) && !isBlank(this.get('boleto')) && !isBlank(this.get('selectedTaller')) ) {
      return true;
    } else
      return false;

  }),


	firebase: service('firebaseApp'),
	actions:{
    guardar(nombre,apellidoP,apellidoM,edad,empresa, taller) {
      let newPar = this.store.createRecord('participante', {
      nombre: nombre,
	    apellidoP: apellidoP,
	    apellidoM: apellidoM,
	    edad: edad,
	    empresa:empresa,
	    taller:taller
      })
      	let codigo=this.get('boleto')
      	this.store.query('boleto',{
      	 	serie: codigo
      	 }).then((ticket)=>{
      	 	let hola= ticket.filterBy('serie',codigo)
          console.log(hola.length)
          debugger
          if(hola.length != 0){
            let perritos=hola.get('firstObject')
            let dueño = perritos.get('participante.id')
            console.log(dueño)
            debugger
            if(dueño==null){
              newPar.set('boleto',perritos)
              newPar.save()       
              perritos.set('participante',newPar)
              perritos.save().then(()=>{
                 taller.get('participantes').then((participantesList) => {
                  console.log(participantesList.length)
                  debugger
                  newPar.save().then(() => {
                  this.set('nombre',null)
                  this.set('apellidoP',null)
                  this.set('apellidoM',null)
                  this.set('edad',null)
                  this.set('empresa',null)
                  this.set('boleto',null)
                  this.set('selectedTaller', undefined)
                  participantesList.pushObject(newPar)
                  taller.save()
                  swal("Éxito", "Has sido registrado!", "success").then(()=>
                    this.transitionToRoute('ingenious.registro'));
                })
              })
           })

            }
            else{
              this.set('nombre',null)
              this.set('apellidoP',null)
              this.set('apellidoM',null)
              this.set('edad',null)
              this.set('empresa',null)
              this.set('boleto',null)
              this.set('selectedTaller', undefined)
              swal("Error", "El boleto ya ha sido registrado", "error")
            }
      }

      else{
        swal("Error", "Código de boleto invalido", "error")
      }
      })
    },
}
});

/*
      	let codigo=this.get('boleto')
      	this.store.query('boleto',{
      	 	serie: codigo
      	 }).then((ticket)=>{
      	 	let hola= ticket.filterBy('serie',codigo)
      	 	newPar.set('boleto',hola)
      	 	console.log(hola)
      	 	debugger
      	 })

      	 taller.get('participantes').then((participantesList) => {
          newPar.save().then(() => {
          this.set('nombre',null)
	      this.set('apellidoP',null)
	      this.set('apellidoM',null)
	      this.set('edad',null)
	      this.set('empresa',null)
          this.set('selectedTaller', undefined)
          participantesList.pushObject(newPar)
          taller.save()
          swal("Éxito", "Has sido registrado!", "success").then(()=>
	      		this.transitionToRoute('ingenious.index'));
        })
      })*/