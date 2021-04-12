class Question{
    constructor(){
    this.question1 = createElement('h3')
    this.title1 = createElement('h5')
    this.title2 = createElement('h5')
    this.input = createInput()
    this.input2 = createInput()
    this.button = createButton('Submit')
    }
    hide(){
    this.question1.hide()
    this.input.hide()
    this.input2.hide()
    this.button.hide()
    this.title1.hide();
    this.title2.hide();
    this
    }
    display(){
     this.question1.html('What do you think about this webpage?')
     this.question1.position(50,20)
     this.question1.style('color','teal')
     this.question1.style('font-family','century gothic')
     this.title1.html('enter your name: ')
     this.title1.position(50,60)
     this.title1.style('font-family','century gothic');
     this.title1.style('color','teal')
     this.input.position(50,100)
     this.input.style('background','lightgreen')
     this.input.style('font-family','century gothic');
     this.title2.html('your answer: ')
     this.title2.position(50,110)
     this.title2.style('color','teal')
     this.title2.style('font-family','century gothic');
     this.input2.position(50,150)
     this.input2.style('background','lightgreen')
     this.input2.style('font-family','century gothic');
     this.button.position(50,200)
     this.button.style('font-family','century gothic')
     this.button.style('background','lightgreen')
     this.button.style('color','teal')
     this.button.mousePressed(
         ()=>{
            this.question1.hide()
            this.input.hide()
            this.input2.hide()
            this.title1.hide()
            this.button.hide()
            this.title2.hide()
            this.greeting = createElement('h2')
            this.greeting.html('Thank you!')
            this.greeting.style('font-size','130px')
            this.greeting.style('font-family','century gothic')

            this.greeting.position(450,340);
            player.name = this.input.value()
            player.answer = this.input2.value()
            playerCount = playerCount+1
            player.index = playerCount;
            gameState = 1
            player.update()
            player.updateCount(playerCount);
         }
     )
    }
}