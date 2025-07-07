function masterPage(){

    if(!isThisQuiz()){
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

<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true"
    class="hidden fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-zinc-900 text-white rounded-lg shadow-sm dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-xl font-semibold text-white dark:text-white">
                    Demo
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4" id="demoModalContainer">
            </div>

            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button"
                id="closeModalBtn"
                    onclick="closeModal()"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
            </div>
        </div>
    </div>
</div>



    ${document.body.innerHTML}
    <div style="top:0px; left: 0px; width:100%; padding:10px; z-index:1000; position:fixed;">
        <button class="wood-button" onclick="goToQuiz()">${isThisQuiz() ? 'Back To Note' : 'Go Quiz'}</button>
        <button class="wood-button hidden" id="demoBtnId" onclick="playDemo()">Demo</button>
        <button class="wood-button" onclick="window.location.href = 'chapter.html'">Home</button>
    </div>
    `;
    }else{
        let div = document.createElement('div');

        div.innerHTML += `
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

<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true"
    class="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-zinc-900 text-white rounded-lg shadow-sm dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-xl font-semibold text-white dark:text-white">
                    Demo
                </h3>
                <button type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4" id="demoModalContainer">
            <h1 class="text-5xl font-bold">ARE YOU READY?</h1>
            </div>

            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 text-center">
                <button data-modal-hide="default-modal" type="button"
                id="closeModalBtn"
                    onclick="closeModal(); playSound('sound/music_quiz.mp3');"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ready</button>
            </div>
        </div>
    </div>
</div>
    <div style="top:0px; left: 0px; width:100%; padding:10px; z-index:1000; position:fixed;">
        <button class="wood-button" onclick="goToQuiz()">${isThisQuiz() ? 'Back To Note' : 'Go Quiz'}</button>
        <button class="wood-button hidden" id="demoBtnId" onclick="playDemo()">Demo</button>
        <button class="wood-button" onclick="window.location.href = 'chapter.html'">Home</button>
    </div>
        `;

        document.body.append(div);
    }

    duringQuizMode();
}

function duringQuizMode(){

    if(!isThisQuiz()){

    }

}


setInterval(function(){
    if(!isThisQuiz()){
    let demoBtnId = document.getElementById('demoBtnId');
    if(isDemoAvailable()){
        demoBtnId.classList.remove('hidden');
    }else{
        demoBtnId.classList.add('hidden');
    }
    }
},1000);

function closeModal(){
    playSound('sound/click.wav');
    let modal = document.getElementById('default-modal');
    modal.classList.add('hidden');
}

function openModal(){
    playSound('sound/click.wav');
    let modal = document.getElementById('default-modal');
    modal.classList.remove('hidden');
}

function getPageName() {
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1);
  return pageName.replace('.html','') || 'index'; // fallback if path ends with a slash
}

function goToQuiz(){

    playSound('/sound/click.wav');

    setTimeout(function(){

    if(isThisQuiz()){

    let url = getPageName().replace('quiz','') + '.html';

    window.location.href = url;

    }else{

    let url = getPageName() + 'quiz.html';

    window.location.href = url;

    }

    },500);
}

function isThisQuiz(){
    return getPageName().includes('quiz');
}

function isDemoAvailable(){
    console.log(currentScene);
    return (getPageName() === 'c4_1' && currentScene == 3) || (getPageName() === 'c2_7' && currentScene == 13);
}

function playDemo(){
    openModal();
    let demoModalContainer = document.getElementById('demoModalContainer');

    demoModalContainer.innerHTML = `<h1 class="text-xl" id="discoverytxt">use W,A,S,D to move</h1>`;

    if(getPageName() === 'c4_1' && currentScene == 3){
        demoModalContainer.innerHTML += `
            <div class="relative w-[500px] h-[500px] bg-white border-4 border-gray-300">
                <div id="player" class="absolute w-10 h-10 bg-red-500" style="left: 0; top: 0;"></div>
            </div>
        `;

        syncDemoGame(1);
    }
    else if(getPageName() === 'c2_7' && currentScene == 13){
        demoModalContainer.innerHTML += `
    <h1 class="text-3xl font-bold mb-6">Lighting Simulation</h1>

    <!-- Control buttons -->
    <div class="flex space-x-4 mb-10">
        <button onclick="setLight('spotlight')" class="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition">Spotlight</button>
        <button onclick="setLight('ambient')" class="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition">Ambient</button>
        <button onclick="setLight('directional')" class="px-5 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 transition">Directional</button>
    </div>

    <!-- The simulated object -->
    <div id="object" class="w-52 h-52 rounded-3xl transition-all duration-700"></div>
        `;
        syncDemoGame(2);
    }
}


function playSound(src){

    let audio = new Audio(src);

    audio.play();

}

let start = true;
document.addEventListener("mousedown", function() {
    if(start){
        if(isThisQuiz()){
            //playSound('sound/music_quiz.mp3');
        }else{
            playSound('sound/music_dialog.mp3');
        }
        start = false;
    }
});

masterPage();

function setDiscovery(str){
    let discoverytxt = document.getElementById('discoverytxt');

    discoverytxt.textContent = `${str}`;
}

function syncDemoGame(id){

    if(id == 1){
        const player = document.getElementById('player');

    const containerSize = 500;
    const blockSize = 40;
    const speed = 5; // pixels per frame

    let position = { x: 0, y: 0 };
    const keys = { w: false, a: false, s: false, d: false };

    // Track key down
    window.addEventListener('keydown', e => {
        setDiscovery('Congratz, you just discover Input Handling, Graphics, and sound effect');
      const key = e.key.toLowerCase();
      if (keys.hasOwnProperty(key)) {
        keys[key] = true;
        e.preventDefault(); // prevent scrolling etc.
      }
    });

    // Track key up
    window.addEventListener('keyup', e => {
        setDiscovery('Congratz, you just discover Input Handling, Graphic and sound effect');
      const key = e.key.toLowerCase();
      if (keys.hasOwnProperty(key)) {
        keys[key] = false;
        e.preventDefault();
      }
    });

    function move() {
      if (keys.w) position.y = Math.max(0, position.y - speed);
      if (keys.a) position.x = Math.max(0, position.x - speed);
      if (keys.s) position.y = Math.min(containerSize - blockSize, position.y + speed);
      if (keys.d) position.x = Math.min(containerSize - blockSize, position.x + speed);

      player.style.left = position.x + 'px';
      player.style.top = position.y + 'px';

      requestAnimationFrame(move);
    }

    // Start the loop
    requestAnimationFrame(move);

    }

    if(id == 2){
        // Set default lighting
        setLight('ambient');
    }
}

        function setLight(type) {
            const obj = document.getElementById("object");
            if(type === "spotlight") {
                obj.style.background = "radial-gradient(circle at center, #ffffff 0%, #333333 80%)";
                obj.style.boxShadow = "0 0 0 transparent";
                obj.style.transform = "scale(1.05)";
            } else if(type === "ambient") {
                obj.style.background = "#999999";
                obj.style.boxShadow = "0 0 50px #ffffff88";
                obj.style.transform = "scale(1)";
            } else if(type === "directional") {
                obj.style.background = "linear-gradient(90deg, #ffffff 0%, #333333 100%)";
                obj.style.boxShadow = "-20px 20px 40px #00000055";
                obj.style.transform = "scale(1.02)";
            }
        }