class PrjectLister {
  constructor(data = null, target = "project-list") {
    this.target = target;
    if (data) {
      this.data = data;
    } else {
      this.data = [
        {
          title:
            "Comparison of Daily COVID-19 Cases Prediction Spatial Models based on Architecture and Features",
          description:
            "This project implements various models to predict daily COVID-19 cases primarily using spatial data provided by Facebook's (Meta's) Data For Good program. Various machine learning and deep learning models are compared based on the accuracy of predicted values. This project also justifies the importance of several features, such as daily COVID testing and vaccination statistics.",
          image:
            "https://airg-nsut.netlify.app/_next/image?url=%2Fproject-images%2FProject-1.jpeg&w=1080&q=75",
          url: "https://github.com/AI-Research-Group-NSUT/Analysing-and-Comparing-Facebook-Movement-Data",
        },
        {
          title: "Generating Handwriting using LSTMs.",
          description:
            "handwritten databases of Arabic and Bengali language, this project implements a recurrent neural network using LSTM layers that predicts one data point at a time. The trained neural network is capable of generating human-like handwriting based on text input. This is the next step toward handwriting and document analysis.",
          image:
            "https://airg-nsut.netlify.app/_next/image?url=%2Fproject-images%2FProject-2.jpeg&w=1080&q=75",
          url: "https://github.com/AI-Research-Group-NSUT/Handwriting-Synthesis",
        },
        {
          title:
            "DistilmBERT and XLM RoBERTa for Multilingual Toxic Comment Classification.",
          description:
            "We studied how to use pre-trained language model-based methods for toxic comment classification and the performances of different pre-trained language models on these tasks. This study introduces an ensemble approach, where we have used pre-trained models - DistilmBert and xlm-Roberta-large-xnli to perform the toxic comment classification task. We trained our model on an English dataset, tested it on Wikipedia talk page comments in several languages, and achieved an accuracy of over 93%.",
          image:
            "https://airg-nsut.netlify.app/_next/image?url=%2Fproject-images%2FProject-3.jpeg&w=1080&q=75",
          url: "https://github.com/AI-Research-Group-NSUT/Multilingual-Toxic-Comment-Classification",
        },
      ];
    }
  }

  addProject(elem) {
    let content = `
        <a href="${elem.url}" target="_blank" class="projectLink">
            <div class="card">
				<i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
              <img
                class="card-img-top"
                src="${elem.image}"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${elem.title}
                </h5>
                <p class="card-text">
                    ${elem.description}
                </p>
              </div>
            </div>
          </a>
        `;
    $(`#${this.target}`).append(content);
  }
}

$('.btn-team').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    $('section').addClass('d-none');
    $('footer').addClass('d-none');
    $('#team').removeClass('d-none');
    }

);
$('.nav-link:not(.btn-team)').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    $('section').removeClass('d-none');
    $('footer').removeClass('d-none');
    $('#team').addClass('d-none');
    }

);

$(document).ready(function () {
  let projectLister = new PrjectLister();
  $("#project-list").empty();
  projectLister.data.forEach((elem) => {
    projectLister.addProject(elem);
  });
});
