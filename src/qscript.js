function masterPage(){
    document.body.innerHTML = `
    <style>
    .wood-button {
      background-color: #d18836;
      border: 4px solid #a8561c;
      color: black;
      padding: 10px;
      text-align: center;
      box-shadow: 3px 3px #6b3a0c;
    }

    button{
        transform: translateY(0px) scale(1) !important;
        transition: 0.5s;
    }

    button:hover{
        transform: translateY(-10px) scale(1.3) !important;
    }
    </style>
    ${document.body.innerHTML}
    <div style="top:0px; left: 0px; width:100%; padding:10px; z-index:1000; position:fixed;">
        <button class="wood-button" onclick="goToQuiz()">${isThisQuiz() ? 'Back To Note' : 'Go Quiz'}</button>
        <button class="wood-button" onclick="window.location.href = 'chapter.html'">Home</button>
    </div>
    `;
}

function getPageName() {
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1);
  return pageName.replace('.html','') || 'index'; // fallback if path ends with a slash
}

function goToQuiz(){
    if(isThisQuiz()){

    let url = getPageName().replace('quiz','') + '.html';

    window.location.href = url;

    }else{

    let url = getPageName() + 'quiz.html';

    window.location.href = url;

    }
}

function isThisQuiz(){
    return getPageName().includes('quiz');
}

masterPage();