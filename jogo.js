var altura = 0
var largura = 0
var vidas = 1
var tempo = 0
var pontos = 0

var criaMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'denteDeLeite'){
	//2000ms
	criaMosquitoTempo = 1800
}else if(nivel === 'facil') {
	//1500ms
	criaMosquitoTempo = 1500
}else if(nivel === 'normal'){
	//1000ms
	criaMosquitoTempo = 1100
}else if(nivel === 'dificil'){
	//1000ms
	criaMosquitoTempo = 900
}else if(nivel === 'chuckNorris'){
	//750ms
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo += 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function posicaoRandomica(){

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		}else{

			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 100
	var posicaoY = Math.floor(Math.random() * altura) - 100

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
		if(nivel === 'denteDeLeite'){
			pontos += 1
		}else if(nivel === 'facil'){
			pontos += 2
		}else if(nivel === 'normal'){
			pontos += 3
		}else if(nivel === 'dificil'){
			pontos += 4
		}else if(nivel === 'chuckNorris'){
			pontos += 5
		}

		document.getElementById('pontos').innerHTML = pontos
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}