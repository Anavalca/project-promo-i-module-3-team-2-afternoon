/* eslint-disable no-useless-constructor */
import React from 'react';

class PreviewCard extends React.Component {
    constructor(props) {
        super(props);
      }


    render() {
      return (
        <div class="page__preview" id="page__preview">
        <div class="preview__card--container">
          <button class="button_reset button__hover--styles" onclick="resetForm()" value="Reset form">
            <i class="far fa-trash-alt"></i>
            RESET
          </button>
          <div class="preview__card--box preview__card--box--palette1">
            <div class="preview__card--header">
              <h2 class="font__preview--title">Nombre Apellido</h2>
              <h3 class="font__preview--subtitle">Front-end developer</h3>
              <div class="preview__style--color"></div>
            </div>
      
            <div class="preview__card--picture"><canvas id="canvas" class="hiddenCanvas" width="220" height="200"></canvas>
            </div>
      
            <div class="preview__card--links">
              <button class="preview__card--icon preview__card--iconEmail opacity">
                <i class="far fa-envelope"></i>
              </button>
              <button class="preview__card--icon opacity" id="preview__card--iconPhone">
                <i class="fas fa-mobile-alt "></i>
              </button>
              <button class="preview__card--icon preview__card--iconLinkedin opacity">
                <i class="fab fa-linkedin-in"></i>
              </button>
              <button class="preview__card--icon preview__card--iconGitHub opacity">
                <i class="fab fa-github-alt"></i>
              </button>
            </div>
          </div>
          <div class="loop__background--preview">
            <img src="https://media.giphy.com/media/3oxRmkKSBxU6i60qsM/giphy.gif" alt="Gif por defecto"/>
          </div>
        </div>
      </div>
      


      );
    }
}


export default PreviewCard;
