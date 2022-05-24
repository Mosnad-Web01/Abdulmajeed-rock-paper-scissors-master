// $(document).ready(function(){

    // function to show rules and hiode rules
    function showRules(e) {
        if (e === true) { // if true is passed to the function, show choose-section
            return $("#modal").css('display', 'flex');
        } else { // else hide modal
            return $("#modal").css('display', 'none');
        }
    }

    let yourOption; //variable to store user option

    let computerOption; //variable to store computer option
    
    let options = ['rock', 'paper', 'scissors']; //varaibale to hold the options 
    // avaliable for computer to select from 

    // function to generate random integer between a min and a max number
    // both min and max inclusive in the selection
    function randomInteger(min, max) {
        return Math.round((Math.random() * (max - min)) + min);
    }

    // function to decide the winner
    function chooseOption(type) {
        yourOption = type;
        computerOption = options[randomInteger(0, 2)];
        
        // console.log(type);
        // if your option and computer option is equal
        if (yourOption === computerOption) {
            return displayResult('draw', yourOption, computerOption); //return draw
        } else {
            
            if (yourOption === 'paper') { // if your option is paper

                if (computerOption === 'scissors') { // if computer option is scissors
                    return displayResult('lose', yourOption, computerOption);
                } else { // if computer option is rock
                    return displayResult('win', yourOption, computerOption);
                }

            } else if (yourOption === 'scissors') { // if your option is scissors

                if (computerOption === 'rock') { // if computer option is rock
                    return displayResult('lose', yourOption, computerOption);
                } else { // if computer option is paper
                    return displayResult('win', yourOption, computerOption);
                }

            } else { // if your option is rock

                if (computerOption === 'paper') {  // if computer option is paper
                    return displayResult('lose', yourOption, computerOption);
                } else {  // if computer option is scissors
                    return displayResult('win', yourOption, computerOption);
                }

            }
        }
        
    }

    let indicate = false;
    function displayResult(result, yourOption, computerOption) {
        $("#choose-section").css('display', 'none');
        $("#scoring-section").css('display', 'flex');
        
        appendYourOption(result, yourOption);
        appendComputerOption(result, computerOption);

        console.log(result);
        
        $(".computer-pick-outer").css('visibility', 'hidden');
        $(".computer-inner-placeholder").css('visibility', 'visible');
        
        setTimeout(() => {
            $(".computer-pick-outer").css('visibility', 'visible');
            indicate = true;
        }, 1500);

        setTimeout(() => {
            appendResult(result);

            if (result === 'win') {
                signalWin(yourOption);
                updateScore();
            } else if (result === 'lose') {
                // signalLoss(computerOption);
            }
            
            // signifyResult(result, yourOption, computerOption);

        }, 2000);

    }

    let boxShadow = [];
    function signalWin(yourOption) {
        let element = $('.your-pick-outer');

        if (yourOption == 'rock') {
            primaryColor = 'hsla(349, 71%, 35%, 0.8)';
        } else if (yourOption == 'paper') {
            primaryColor = 'hsla(230, 89%, 45%, 0.8)';
        } else {
            primaryColor = 'hsla(39, 89%, 32%, 0.8)';
        }

        boxShadow = [
            `inset 0 -5px 2px 0px ${primaryColor}`,
            `inset 0 -5px 2px 0px ${primaryColor}, 0 0 0px 20px hsla(228, 25%, 31%, 0.75)`,
            `inset 0 -5px 2px 0px ${primaryColor}, 0 0 0px 20px hsla(228, 25%, 31%, 0.75), 0 0 0px 45px hsla(228, 25%, 31%, 0.4)`,
            `inset 0 -5px 2px 0px ${primaryColor}, 0 0 0px 20px hsla(228, 25%, 31%, 0.75), 0 0 0px 45px hsla(228, 25%, 31%, 0.4), 0 0 0px 75px hsla(228, 25%, 31%, 0.25)`
        ];
        let x = 0;
        
        // $(element).css('boxShadow', boxShadow[3]);
        setInterval(() => {
            let y = x % boxShadow.length;
            $(element).css('boxShadow', boxShadow[y]);
            x++;
        }, 500);

        // while (indicate === true) {
        //     // console.log('inside loop');
        //     console.log(boxShadow[y]);
        //     setTimeout(() => {
        //     }, 1000);
        // }
    }

    let content;
    function appendYourOption(result, yourOption) {
        content = `<div class="your-pick-outer select-${yourOption} "><div class="your-pick-inner"><img class="your-option" src="images/icon-${yourOption}.svg" alt="${yourOption}"></div></div><h3 class="h3">You picked</h3>`;
        $('#your-pick').append(content);
    }

    function appendComputerOption(result, computerOption) {
        // console.log(result)
        content = `<div class="computer-pick-outer select-${computerOption}">
            <div class="computer-pick-inner">
            <img class="computer-option" src="images/icon-${computerOption}.svg" alt="${result}">
            </div>
            <div class="computer-inner-placeholder"></div>
        </div><h3 class="h3">The house picked</h3>`;
        $('#computer-pick').append(content);
    }
    
    function appendResult(data) {
        $('#play-again').before(`<h2 id="win-lose">you ${data}</h2>`);
        $('#win-lose-prompt').css('visibility', 'visible');
    }
    
    let primaryColor;
    let secondaryColor;
    let mainElement;
    let otherElement;
    function signifyResult(result, yourOption, computerOption) {
        
        if (result != 'draw' && indicate === true) {
            setInterval(() => {
                
                setTimeout(() => {
                    $(mainElement).css('boxShadow', `inset 0 -5px 2px 0px ${primaryColor}`);
                }, 500);
                
                setTimeout(() => {
                    $(mainElement).css('boxShadow', `inset 0 -5px 2px 0px ${primaryColor}, 0 0 0px 20px hsla(228, 25%, 31%, 0.75)`);
                }, 1000);
                
                setTimeout(() => {
                    $(mainElement).css('boxShadow', `inset 0 -5px 2px 0px ${primaryColor}, 0 0 0px 20px hsla(228, 25%, 31%, 0.75), 0 0 0px 45px hsla(228, 25%, 31%, 0.4)`);
                }, 1500);
                
                setTimeout(() => {
                    $(mainElement).css('boxShadow', `inset 0 -5px 2px 0px ${primaryColor}, 0 0 0px 20px hsla(228, 25%, 31%, 0.75), 0 0 0px 45px hsla(228, 25%, 31%, 0.4), 0 0 0px 75px hsla(228, 25%, 31%, 0.25)`);
                }, 2000);
                
                $(otherElement).css('boxShadow', `inset 0 -5px 2px 0px ${secondaryColor}`);
                // console.log(mainElement);
                // console.log(primaryColor);
    
            }, 2000);
        }

    }

    let score = 0;
    function updateScore() {
        score = $('#scoreInput').val();
        score = parseInt(score);
        score += 1;
        $('#scoreInput').val(score);
        
    }

    function resetGame() {
        $('.your-pick-outer').remove();
        $('.h3').remove();
        $('.computer-pick-outer').remove();
        $('#win-lose').remove();
        $('#win-lose-prompt').css('visibility', 'hidden');
        $("#choose-section").css('display', 'flex');
        $("#scoring-section").css('display', 'none');
        indicate = false;
        clearInterval();
    }

// });