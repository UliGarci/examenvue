<template>
  <div>
    <p>Formulario</p>
    <b-form @submit.prevent="checkForm" method="post">
      <b-form-input type="text" id="ipmarca" v-model="form.ipmarca"></b-form-input>
      <p v-if="error.marca">{{error.marca}}</p>
      <b-form-input type="text" id="ipmodelo" v-model="form.ipmodelo"></b-form-input>
      <p v-if="error.modelo">{{error.modelo}}</p>
      <b-form-input type="date" id="ipanio" v-model="form.ipanio"></b-form-input>
      <p v-if="error.anio">{{error.anio}}</p>
      <b-form-input id="ipserie" v-model="form.ipserie"></b-form-input>
      <p v-if="error.serie">{{error.serie}}</p>
    </b-form>
  </div>
</template>

<script>
export default {
  data(){
    errors:{}
  },
  methods:{
    checkForm(){
      const caracteres = "|°¬!#$%&/()=?¡¿'´´+*¨´{}[].-:_,;";
      //VALIDACIÓN DE CARACTERES EN LA MARCA
      if(!this.ipmarca){
        this.errors.marca="Ingrese una marca de auto"
      }else{
        const marca = this.ipmarca;
        for(i=0;i<=marca.length;i++){
          for(j=0;j<=caracteres.length;j++){
            if(marca[0]===caracteres[j]){
              this.errors.marca="El nombre de la marca no debe contener caracteres especiales";
              break;
            }
          }
        }
      }

      //VALIDACIÓN DE CARACTERES EN LA MARCA
      if(!this.ipmodelo){
        this.errors.modelo="Ingrese un modelo de auto"
      }else{
        const modelo = this.ipmodelo;
        for(i=0;i<=modelo.length;i++){
          for(j=0;j<=caracteres.length;j++){
            if(modelo[0]===caracteres[j]){
              this.errors.modelo="El nombre del modelo no debe contener caracteres especiales";
              break;
            }
          }
        }
      }

      //VALIDACIÓN DE AÑO
      if(!this.ipanio){
        this.errors.anio="Ingrese una fecha"
      }else{
        const f = new Date(this.ipanio);
        const a = f.getFullYear();
        if(a>2024){
          this.errors.anio="La fecha no puede ser mayor a la actual";
        }
      }

      //VALIDACIÓN DE SERIE XXXX000-00XX
      if(!this.ipserie){
        this.errors.serie="Ingrese una serie";
      }else{
        const s = this.ipserie;
        
      }


    }
  }
}
</script>

<style>

</style>
