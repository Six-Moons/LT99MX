<template>
  <div id="faq">
    <div class="row">
      <div id="imagenes" class="col-md-7 col-lg-8 bg-light">
        <div><h2><strong>Preguntas Frecuentes</strong></h2></div>
        <hr />
        <div id="text">
            <h4> Quienes somos </h4> 
            <hr>
            <p>Liga Tetris 99 México, es una Liga que tiene como objetivo unificar la Comunidad de Tetris, en cualquiera de sus modalidades y plataformas, Naciendo de un conjunto de ideas de un grupo de amigos con un mismo sentido de buscar y desarrollar el potencial de los jugadores a través de competencias con el fin de encontrar a los mejores jugadores de Tetris en México, enfocados principalmente en Tetris 99 sin dejar de lado otras versiones del juego, comprometidos a tener un ambiente afable y familiar para todas las generaciones que desean pasar un tiempo agradable.</p>
          
          <h4> Misión </h4> 
            <hr>
            <p> Buscar Jugadores que disfruten del juego y desarrollar sus habilidades a través de partidas y eventos, tanto oficiales como amistosos de un alto nivel competitivo para alcanzar el Tetris Maximus Mexicano. </p>
          
          <h4> Visión </h4> 
            <hr>
            <p> Ser la mejor opción de competencia en Liga Virtual y dar el siguiente paso para posicionar este juego dentro de los eSports de México. </p>
          
          <h4> Cultura y Valores </h4> 
            <hr>
            <p>Dentro de la Liga además de siempre haber un espíritu competitivo, nuestra gran comunidad te recibe como en casa para que puedas disfrutar y tener una gran experiencia con nosotros. Esto se logra con los valores que tratamos de transmitir a todos y cada uno de los participantes. </p>
            <ul>
              <li> Respeto </li>
              <li> Tolerancia </li>
              <li> Integridad </li>
              <li> Confianza </li>
              <li> Sentido del Humor </li>
            </ul>
          
          </div>


        <div class="row">
          
          <div class="col">
            <div><h5>Código de conducta</h5></div>
            <hr />
            <img
              src="../assets/conducta.jpeg"
              class="img-fluid"
              alt="Codigo de conducta"
            />
            <hr />
          </div>

          <div class="col">
            <h5>Sistema de puntuaciones</h5>
            <hr />
            <img
              src="../assets/puntuaciones.jpeg"
              class="img-fluid"
              alt="Sistema de puntuaciones"
            />
            <hr />
          </div>
        </div>

        <div id="preguntas">
          <h5>¿Cómo participo?</h5>
          <hr>
          <p> Para poder participar necesitas ser mexicano y estar registrado (si no estas registrado puedes hacerlo aqui). Después de estar registrado se te agregará a un grupo de Whatsapp donde se te estará informando cuándo y cómo entrar al torneo.</p>
          <br>

          <h5>¿Cuál es la diferencia entre la División A y División B?</h5>
          <hr>
          <strong>División A</strong> 
          <p> En esta sala se jugará la tradicional Liga como hasta ahora, donde el espíritu competitivo por codearse con los mejores del país estará ahí. Con el aliciente que en noviembre regresa un premio para el primer lugar y otro que será rifado entre el top 10 mensual. </p>
          <strong>División B</strong> 
          <p> Si deseas jugar con el fin de desarrollar tu nivel de una forma distinta sin la complejidad de recibir ataques fuertes prematuramente durante las partidas, o simplemente jugar por diversión tu lugar es aquí. </p>
          <br>

          <h5>¿Cómo le hago para saber el código?</h5>
          <hr>
          <p> El código se estará mandando mediante Whatsapp, dependiendo de tu división serás agregado a un grupo y ahi recibirás el código.</p>
          <br>

          <h5>¿Cuándo juegan?</h5>
          <hr>
          <p> Los juegos tienden a llevarse los martes a las 21:30 horas. </p>
          <br>

          <h5>¿Puedo streamearlo/hacer directo de la Liga?</h5>
          <hr>
          <p> Sí puedes hacer stream/directo del evento, pero se les pide a los streamers favor de no compartir los códigos públicamente.</p>
          <br>

          <h5>¿Hay eventos presenciales?</h5>
          <hr>
          <p> Sí hay evento presenciales, por lo general son en Monterrey, pero dado la situación del COVID-19 no se estaran llevando a cabo.</p>
          <br>
          
        </div>
      </div>
      <right-panel class="col-5 col-lg-4 hide-sm"></right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from "../components/RightPanel.vue";

export default {
  name: "Faq",
  components: {
    RightPanel,
  },
};
</script>

<style scoped>
#faq {
  height: 100vh;
  overflow-y: scroll;
}

@media (max-width: 991px) {
  #faq {
    margin-top: 3em;
  }
}

#imagenes{
  padding-top: 1.4em;
}

h4{
  font-weight: bold;
}

h5{
  font-weight: bold;
}

</style>
