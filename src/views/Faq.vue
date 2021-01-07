<template>
  <div id="faq">
    <div class="row">
      <div id="imagenes" class="col-md-7 col-lg-8 bg-light">
        <div>
          <h2><strong>Sobre nosotros</strong></h2>
        </div>
        <hr />
        <div id="text">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-7 variant="info"
                  >Quienes somos</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Liga Tetris 99 México, es una Liga que tiene como objetivo
                    unificar la Comunidad de Tetris, en cualquiera de sus
                    modalidades y plataformas, Naciendo de un conjunto de ideas
                    de un grupo de amigos con un mismo sentido de buscar y
                    desarrollar el potencial de los jugadores a través de
                    competencias con el fin de encontrar a los mejores jugadores
                    de Tetris en México, enfocados principalmente en Tetris 99
                    sin dejar de lado otras versiones del juego, comprometidos a
                    tener un ambiente afable y familiar para todas las
                    generaciones que desean pasar un tiempo
                    agradable.</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-8 variant="info"
                  >Misión</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Buscar Jugadores que disfruten del juego y desarrollar sus
                    habilidades a través de partidas y eventos, tanto oficiales
                    como amistosos de un alto nivel competitivo para alcanzar el
                    Tetris Maximus Mexicano.</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-9 variant="info"
                  >Visión</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-9"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Ser la mejor opción de competencia en Liga Virtual y dar el
                    siguiente paso para posicionar este juego dentro de los
                    eSports de México.</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-10 variant="info"
                  >Cultura y Valores</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-10"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Dentro de la Liga además de siempre haber un espíritu
                    competitivo, nuestra gran comunidad te recibe como en casa
                    para que puedas disfrutar y tener una gran experiencia con
                    nosotros. Esto se logra con los valores que tratamos de
                    transmitir a todos y cada uno de los participantes.
                    <ul>
                      <li>Respeto</li>
                      <li>Tolerancia</li>
                      <li>Integridad</li>
                      <li>Confianza</li>
                      <li>Sentido del Humor</li>
                    </ul></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-11 variant="info"
                  >Código de conducta</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-11"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <img
                      src="../assets/conducta.jpeg"
                      class="img-fluid"
                      alt="Codigo de conducta"
                  /></b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-12 variant="info"
                  >Sistema de puntuaciones</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-12"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <img
                      src="../assets/puntuaciones.jpeg"
                      class="img-fluid"
                      alt="Sistema de puntuaciones"
                  /></b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>

        <div id="preguntas" class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info"
                >¿Cómo participo?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Para poder participar necesitas ser mexicano y estar
                  registrado (si no estas registrado puedes hacerlo aqui).
                  Después de estar registrado se te agregará a un grupo de
                  Whatsapp donde se te estará informando cuándo y cómo entrar al
                  torneo.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info"
                >¿Cuál es la diferencia entre la División A y División
                B?</b-button
              >
            </b-card-header>

            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  ><code> División A </code> En esta sala se jugará la
                  tradicional Liga como hasta ahora, donde el espíritu
                  competitivo por codearse con los mejores del país estará ahí.
                  Con el aliciente que en noviembre regresa un premio para el
                  primer lugar y otro que será rifado entre el top 10 mensual.
                  <br />
                  <code> División B </code> Si deseas jugar con el fin de
                  desarrollar tu nivel de una forma distinta sin la complejidad
                  de recibir ataques fuertes prematuramente durante las
                  partidas, o simplemente jugar por diversión tu lugar es
                  aquí.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="info"
                >¿Cómo le hago para saber el código?</b-button
              >
            </b-card-header>

            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  El código se estará mandando mediante Whatsapp, dependiendo de
                  tu división serás agregado a un grupo y ahi recibirás el
                  código.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="info"
                >¿Cuándo juegan?</b-button
              >
            </b-card-header>

            <b-collapse
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Los juegos tienden a llevarse los martes a las 21:30 horas.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-5 variant="info"
                >¿Puedo streamearlo/hacer directo de la Liga?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-5"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Sí puedes hacer stream/directo del evento, pero se les pide a
                  los streamers favor de no compartir los códigos
                  públicamente.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-6 variant="info"
                >¿Hay eventos presenciales?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-6"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Sí hay evento presenciales, por lo general son en Monterrey,
                  pero dado la situación del COVID-19 no se estaran llevando a
                  cabo.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>
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

#imagenes {
  padding-top: 1.4em;
}

h4 {
  font-weight: bold;
}

h5 {
  font-weight: bold;
}
</style>
