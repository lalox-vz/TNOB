/* SIDEBAR */

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("LOGO").style.marginLeft = "250px";
  document.getElementById("NAVBAR").style.marginLeft = "250px";
};

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("LOGO").style.marginLeft = "0";
  document.getElementById("NAVBAR").style.marginLeft = "0";
};


/* SIDEBAR OPTIONS*/

function myBody() {
  document.getElementById("myDropdown1").classList.toggle("show");

};

function myColor() {
  document.getElementById("myDropdown2").classList.toggle("show");

};

function myRoof() {
  document.getElementById("myDropdown3").classList.toggle("show");

};

function myTire() {
  document.getElementById("myDropdown4").classList.toggle("show");

};

function myAccessories() {
  document.getElementById("myDropdown5").classList.toggle("show");

};

function myTailgate() {
  document.getElementById("myDropdown6").classList.toggle("show");

};

function myLight() {
  document.getElementById("myDropdown7").classList.toggle("show");
	
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}; 


/* END SIDEBAR */




/* MAIN */

$(document).on('click', 'ul li' , function(){
			$(this).addClass('active').siblings().removeClass('active')
// FJ40 SIDE
		if (fj40.className === 'active'){
			$('#img1').addClass('show').removeClass('hide')
			$('#img3').addClass('show').removeClass('hide')
			$('#img4').addClass('show').removeClass('hide')
			$('#img5').addClass('show').removeClass('hide')
			$('#img6').addClass('show').removeClass('hide')
	//SIDEBAR
			$('#img1-side').addClass('show').removeClass('hide')
			$('#img3-side').addClass('show').removeClass('hide')
			$('#img4-side').addClass('show').removeClass('hide')
			$('#img5-side').addClass('show').removeClass('hide')
			$('#img6-side').addClass('show').removeClass('hide')
			$('#imgn-side').addClass('show').removeClass('hide')
	//FRONT SIDEBAR			
			$('#imgfj40frontSIDE-1').addClass('show').removeClass('hide')
			$('#imgfj40frontSIDE-2').addClass('show').removeClass('hide')
			$('#imgfj40frontSIDE-3').addClass('show').removeClass('hide')
			$('#imgfj40frontSIDE-4').addClass('show').removeClass('hide')
	//BACK SIDEBAR			
			$('#imgfj40backSIDE-1').addClass('show').removeClass('hide')
			$('#imgfj40backSIDE-2').addClass('show').removeClass('hide')
			$('#imgfj40backSIDE-3').addClass('show').removeClass('hide')
			$('#imgfj40backSIDE-4').addClass('show').removeClass('hide')
			$('#imgfj40backSIDE-5').addClass('show').removeClass('hide')
			$('#imgfj40backSIDE-6').addClass('show').removeClass('hide')


	//FJ44 HIDE
			$('#imgfj44-n').addClass('hide').removeClass('show')
			$('#imgfj44-o').addClass('hide').removeClass('show')
			$('#imgfj44-a').addClass('hide').removeClass('show')
			$('#imgfj44-ac').addClass('hide').removeClass('show')
			$('#imgfj44-v').addClass('hide').removeClass('show')
			$('#imgfj44-g').addClass('hide').removeClass('show')
			$('#imgfj44-bl').addClass('hide').removeClass('show')
			$('#imgfj44-oc').addClass('hide').removeClass('show')
		//COLORS
			$('#imgfj44-1').addClass('hide').removeClass('show')
			$('#imgfj44-2').addClass('hide').removeClass('show')
			$('#imgfj44-3').addClass('hide').removeClass('show')
			$('#imgfj44-4').addClass('hide').removeClass('show')
			$('#imgfj44-5').addClass('hide').removeClass('show')
			$('#imgfj44-n').addClass('hide').removeClass('show')
			$('#fj44-tc').addClass('hide').removeClass('show')
			$('#fj44-Wheel').addClass('hide').removeClass('show')
			$('#fj44-Tire').addClass('hide').removeClass('show')
			$('#fj44-PStep').addClass('hide').removeClass('show')
		//SIDE BAR
			$('#imgfj44-1SIDE').addClass('hide').removeClass('show')
			$('#imgfj44-2SIDE').addClass('hide').removeClass('show')
			$('#imgfj44-3SIDE').addClass('hide').removeClass('show')
			$('#imgfj44-4SIDE').addClass('hide').removeClass('show')
			$('#imgfj44-5SIDE').addClass('hide').removeClass('show')
			$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
			$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
			$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
			$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
			$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
			$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
			$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
			$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
			$('#fj44-tcSIDE').addClass('hide').removeClass('show')
			$('#fj44-TireSIDE').addClass('hide').removeClass('show')
			$('#fj44-WheelSIDE').addClass('hide').removeClass('show')
			$('#fj44-PStepSIDE').addClass('hide').removeClass('show')
		//FRONT
			$('#imgfj44front-1').addClass('hide').removeClass('show')
			$('#imgfj44front-2').addClass('hide').removeClass('show')
			$('#imgfj44front-3').addClass('hide').removeClass('show')
			$('#imgfj44front-4').addClass('hide').removeClass('show')
			$('#imgfj44front-n').addClass('hide').removeClass('show')
			$('#imgfj44front-n').addClass('hide').removeClass('show')
			$('#imgfj44front-a').addClass('hide').removeClass('show')
			$('#imgfj44front-ac').addClass('hide').removeClass('show')
			$('#imgfj44front-bl').addClass('hide').removeClass('show')
			$('#imgfj44front-g').addClass('hide').removeClass('show')
			$('#imgfj44front-oc').addClass('hide').removeClass('show')
			$('#imgfj44front-o').addClass('hide').removeClass('show')
			$('#imgfj44front-v').addClass('hide').removeClass('show')
			$('#fj44-frontTechocompleto').addClass('hide').removeClass('show')
			$('#fj44-frontTire').addClass('hide').removeClass('show')
			$('#fj44-frontHL').addClass('hide').removeClass('show')
			$('#fj44-frontLedbar').addClass('hide').removeClass('show')
		//FRONT BAR
			$('#imgfj44frontSIDE-1').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-2').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-3').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-4').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
			$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
			$('#fj44-frontTechocompletoSIDE').addClass('hide').removeClass('show')
			$('#fj44-frontTireSIDE').addClass('hide').removeClass('show')
			$('#fj44-frontHLSIDE').addClass('hide').removeClass('show')
			$('#fj44-frontLedbarSIDE').addClass('hide').removeClass('show')
		//BACK
			$('#imgfj44back-1').addClass('hide').removeClass('show')
			$('#imgfj44back-2').addClass('hide').removeClass('show')
			$('#imgfj44back-3').addClass('hide').removeClass('show')
			$('#imgfj44back-4').addClass('hide').removeClass('show')
			$('#imgfj44back-5').addClass('hide').removeClass('show')
			$('#imgfj44back-6').addClass('hide').removeClass('show')
			$('#imgfj44back-n').addClass('hide').removeClass('show')
			$('#imgfj44back-a').addClass('hide').removeClass('show')
			$('#imgfj44back-ac').addClass('hide').removeClass('show')
			$('#imgfj44back-bl').addClass('hide').removeClass('show')
			$('#imgfj44back-g').addClass('hide').removeClass('show')
			$('#imgfj44back-oc').addClass('hide').removeClass('show')
			$('#imgfj44back-o').addClass('hide').removeClass('show')
			$('#imgfj44back-v').addClass('hide').removeClass('show')
			$('#fj44-backTechocompleto').addClass('hide').removeClass('show')
			$('#fj44-backWheel').addClass('hide').removeClass('show')
			$('#fj44-backTire').addClass('hide').removeClass('show')
			$('#fj44-backTire2').addClass('hide').removeClass('show')
			$('#fj44-backLedbar').addClass('hide').removeClass('show')
			$('#fj44-backDoor').addClass('hide').removeClass('show')

		//BACK BAR
			$('#imgfj44backSIDE-1').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-2').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-3').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-4').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-5').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-6').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
			$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
			$('#fj44-backTechocompletoSIDE').addClass('hide').removeClass('show')
			$('#fj44-backWheelSIDE').addClass('hide').removeClass('show')
			$('#fj44-backTireSIDE').addClass('hide').removeClass('show')
			$('#fj44-backTire2SIDE').addClass('hide').removeClass('show')
			$('#fj44-backLedbarSIDE').addClass('hide').removeClass('show')
			$('#fj44-backDoorSIDE').addClass('hide').removeClass('show')


		


		// COLORS FJ40
				if ( orange.className === 'active' ){
				//SIDE
					$('#imgo').addClass('show').removeClass('hide')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#imgo-side').addClass('show').removeClass('hide')
					$('#imga-side').addClass('hide').removeClass('show')
					$('#imgac-side').addClass('hide').removeClass('show')
					$('#imgbl-side').addClass('hide').removeClass('show')
					$('#imgv-side').addClass('hide').removeClass('show')
					$('#imgoc-side').addClass('hide').removeClass('show')
					$('#imgg-side').addClass('hide').removeClass('show')
					$('#imgn-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-o').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
				//FRONT 
					$('#imgfj40front-o').addClass('show').removeClass('hide')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-o').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-o').addClass('show').removeClass('hide')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')


				}else if ( azul.className === 'active' ){
					$('#imga').addClass('show').removeClass('hide')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
				//SIDE
					$('#imga-side').addClass('show').removeClass('hide')
					$('#imgo-side').addClass('hide').removeClass('show')
					$('#imgac-side').addClass('hide').removeClass('show')
					$('#imgbl-side').addClass('hide').removeClass('show')
					$('#imgv-side').addClass('hide').removeClass('show')
					$('#imgoc-side').addClass('hide').removeClass('show')
					$('#imgg-side').addClass('hide').removeClass('show')
					$('#imgn-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-a').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
				// FRONT 
					$('#imgfj40front-a').addClass('show').removeClass('hide')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-a').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-a').addClass('show').removeClass('hide')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')

				}else if ( azulClaro.className === 'active' ){
					$('#imgac').addClass('show').removeClass('hide')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
				//SIDE
					$('#imgac-side').addClass('show').removeClass('hide')
					$('#imgo-side').addClass('hide').removeClass('show')
					$('#imga-side').addClass('hide').removeClass('show')
					$('#imgbl-side').addClass('hide').removeClass('show')
					$('#imgv-side').addClass('hide').removeClass('show')
					$('#imgoc-side').addClass('hide').removeClass('show')
					$('#imgg-side').addClass('hide').removeClass('show')
					$('#imgn-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-ac').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
				// FRONT 
					$('#imgfj40front-ac').addClass('show').removeClass('hide')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-ac').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-ac').addClass('show').removeClass('hide')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')

				}else if ( blanco.className === 'active' ){
					$('#imgbl').addClass('show').removeClass('hide')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
				//SIDE
					$('#imgbl-side').addClass('show').removeClass('hide')
					$('#imgo-side').addClass('hide').removeClass('show')
					$('#imgac-side').addClass('hide').removeClass('show')
					$('#imga-side').addClass('hide').removeClass('show')
					$('#imgv-side').addClass('hide').removeClass('show')
					$('#imgoc-side').addClass('hide').removeClass('show')
					$('#imgg-side').addClass('hide').removeClass('show')
					$('#imgn-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-bl').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
				// FRONT 
					$('#imgfj40front-bl').addClass('show').removeClass('hide')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-bl').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-bl').addClass('show').removeClass('hide')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')

				}else if ( verde.className === 'active' ){
					$('#imgv').addClass('show').removeClass('hide')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
				//SIDE
					$('#imgv-side').addClass('show').removeClass('hide')
					$('#imgo-side').addClass('hide').removeClass('show')
					$('#imgac-side').addClass('hide').removeClass('show')
					$('#imgbl-side').addClass('hide').removeClass('show')
					$('#imga-side').addClass('hide').removeClass('show')
					$('#imgoc-side').addClass('hide').removeClass('show')
					$('#imgg-side').addClass('hide').removeClass('show')
					$('#imgn-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-v').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
				// FRONT 
					$('#imgfj40front-v').addClass('show').removeClass('hide')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-v').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-v').addClass('show').removeClass('hide')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')

				}else if ( ocre.className === 'active' ){
					$('#imgoc').addClass('show').removeClass('hide')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
				//SIDE
					$('#imgoc-side').addClass('show').removeClass('hide')
					$('#imgo-side').addClass('hide').removeClass('show')
					$('#imgac-side').addClass('hide').removeClass('show')
					$('#imgbl-side').addClass('hide').removeClass('show')
					$('#imgv-side').addClass('hide').removeClass('show')
					$('#imga-side').addClass('hide').removeClass('show')
					$('#imgg-side').addClass('hide').removeClass('show')
					$('#imgn-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-oc').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
				// FRONT 
					$('#imgfj40front-oc').addClass('show').removeClass('hide')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-oc').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-oc').addClass('show').removeClass('hide')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')

				}else if ( gris.className === 'active' ){
					$('#imgg').addClass('show').removeClass('hide')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
				//SIDE
					$('#imgg-side').addClass('show').removeClass('hide')
					$('#imgo-side').addClass('hide').removeClass('show')
					$('#imgac-side').addClass('hide').removeClass('show')
					$('#imgbl-side').addClass('hide').removeClass('show')
					$('#imgv-side').addClass('hide').removeClass('show')
					$('#imgoc-side').addClass('hide').removeClass('show')
					$('#imga-side').addClass('hide').removeClass('show')
					$('#imgn-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-g').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
				// FRONT 
					$('#imgfj40front-g').addClass('show').removeClass('hide')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-g').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-g').addClass('show').removeClass('hide')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')

				}else if ( negro.className === 'active' ){
					$('#imgn').addClass('show').removeClass('hide')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
				//SIDE
					$('#imgn-side').addClass('show').removeClass('hide')
					$('#imgo-side').addClass('hide').removeClass('show')
					$('#imgac-side').addClass('hide').removeClass('show')
					$('#imgbl-side').addClass('hide').removeClass('show')
					$('#imgv-side').addClass('hide').removeClass('show')
					$('#imgoc-side').addClass('hide').removeClass('show')
					$('#imgg-side').addClass('hide').removeClass('show')
					$('#imga-side').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-n').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
				// FRONT 
					$('#imgfj40front-n').addClass('show').removeClass('hide')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-n').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
				//BACK 
					$('#imgfj40back-n').addClass('show').removeClass('hide')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
				}

		//ROOF FJ40
				if( techoCompleto.className === 'active'){
					$('#fj40-tc').addClass('show').removeClass('hide')
					$('#img5').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#fj40-tc-side').addClass('show').removeClass('hide')
					$('#img5-side').addClass('hide').removeClass('show')
				//FRONT
					$('#fj40-frontTechocompleto').addClass('show').removeClass('hide')
					$('#imgfj40front-4').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#fj40-frontTechocompletoSIDE').addClass('show').removeClass('hide')
					$('#imgfj40frontSIDE-4').addClass('hide').removeClass('show')
				//BACK
					$('#fj40-backTechocompleto').addClass('show').removeClass('hide')
					$('#imgfj40back-5').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj40-backTechocompletoSIDE').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-5').addClass('hide').removeClass('show')

				}else if( techoBikini.className === 'active' ){
					$('#img5').addClass('show').removeClass('hide')
					$('#fj40-tc').addClass('hide').removeClass('show')
				//SIDE
					$('#img5-side').addClass('show').removeClass('hide')
					$('#fj40-tc-side').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj40front-4').addClass('show').removeClass('hide')
					$('#fj40-frontTechocompleto').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj40frontSIDE-4').addClass('show').removeClass('hide')
					$('#fj40-frontTechocompletoSIDE').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj40back-5').addClass('show').removeClass('hide')
					$('#fj40-backTechocompleto').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-5').addClass('show').removeClass('hide')
					$('#fj40-backTechocompletoSIDE').addClass('hide').removeClass('show')
				}

		//TIRE/WHEEL FJ40
				if( oldschool.className === 'active' ){
					$('#fj40-Wheel').addClass('show').removeClass('hide')
					$('#img6').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#fj40-Wheel-side').addClass('show').removeClass('hide')
					$('#img6-side').addClass('hide').removeClass('show')
				//BACK
					$('#fj40-backWheel').addClass('show').removeClass('hide')
					$('#imgfj40back-6').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj40-backWheelSIDE').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-6').addClass('hide').removeClass('show')

						if( mt.className === 'active' ){
							$('#fj40-Tire').addClass('show').removeClass('hide')
						//SIDE
							$('#fj40-Tire-side').addClass('show').removeClass('hide')
						//BACK
							$('#fj40-backTire').addClass('show').removeClass('hide')
							$('#fj40-backTire2').addClass('show').removeClass('hide')
						//BACK BAR
							$('#fj40-backTireSIDE').addClass('show').removeClass('hide')
							$('#fj40-backTire2SIDE').addClass('show').removeClass('hide')
						//FRONT
							$('#fj40-frontTire').addClass('show').removeClass('hide')
						//FRONT BAR
							$('#fj40-frontTireSIDE').addClass('show').removeClass('hide')

						}else if( goodrich.className === 'active' ){
							$('#fj40-Tire').addClass('hide').removeClass('show')
						//SIDE
							$('#fj40-Tire-side').addClass('hide').removeClass('show')
						//BACK
							$('#fj40-backTire').addClass('hide').removeClass('show')
							$('#fj40-backTire2').addClass('hide').removeClass('show')
						//BACK BAR
							$('#fj40-backTireSIDE').addClass('hide').removeClass('show')
							$('#fj40-backTire2SIDE').addClass('hide').removeClass('show')
						//FRONT
							$('#fj40-frontTire').addClass('hide').removeClass('show')
						//FRONT BAR
							$('#fj40-frontTireSIDE').addClass('hide').removeClass('show')	
						}

				}else if( newschool.className === 'active' ){
					$('#img6').addClass('show').removeClass('hide')
					$('#fj40-Wheel').addClass('hide').removeClass('show')
				//SIDE
					$('#img6-side').addClass('show').removeClass('hide')
					$('#fj40-Wheel-side').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj40back-6').addClass('show').removeClass('hide')
					$('#fj40-backWheel').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-6').addClass('show').removeClass('hide')
					$('#fj40-backWheelSIDE').addClass('hide').removeClass('show')

						if( mt.className === 'active' ){
							$('#fj40-Tire').addClass('show').removeClass('hide')
						//SIDE
							$('#fj40-Tire-side').addClass('show').removeClass('hide')
						//BACK
							$('#fj40-backTire').addClass('show').removeClass('hide')
							$('#fj40-backTire2').addClass('show').removeClass('hide')
						//BACK BAR
							$('#fj40-backTireSIDE').addClass('show').removeClass('hide')
							$('#fj40-backTire2SIDE').addClass('show').removeClass('hide')
						//FRONT
							$('#fj40-frontTire').addClass('show').removeClass('hide')
						//FRONT BAR
							$('#fj40-frontTireSIDE').addClass('show').removeClass('hide')

						}else if( goodrich.className === 'active' ){
							$('#fj40-Tire').addClass('hide').removeClass('show')
						//SIDE
							$('#fj40-Tire-side').addClass('hide').removeClass('show')
						//BACK
							$('#fj40-backTire').addClass('hide').removeClass('show')
							$('#fj40-backTire2').addClass('hide').removeClass('show')
						//BACK BAR
							$('#fj40-backTireSIDE').addClass('hide').removeClass('show')
							$('#fj40-backTire2SIDE').addClass('hide').removeClass('show')
						//FRONT
							$('#fj40-frontTire').addClass('hide').removeClass('show')
						//FRONT BAR
							$('#fj40-frontTireSIDE').addClass('hide').removeClass('show')
						}
				}


		// ACCESSORIES FJ40
				if( poweredstep.className === 'active' ){
					$('#fj40-PStep').addClass('show').removeClass('hide')
				//SIDE
					$('#fj40-PStep-side').addClass('show').removeClass('hide')

				}else if( none.className === 'active' ){
					$('#fj40-PStep').addClass('hide').removeClass('show')
				//SIDE
					$('#fj40-PStep-side').addClass('hide').removeClass('show')
				}

		//TAILGATE FJ40
				if( dropdowndoor.className === 'active' ){
				//BACK
					$('#imgfj40back-2').addClass('show').removeClass('hide')
					$('#fj40-backDoor').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj40backSIDE-2').addClass('show').removeClass('hide')
					$('#fj40-backDoorSIDE').addClass('hide').removeClass('show')

				}else if( bifold.className === 'active' ){
				//BACK
					$('#fj40-backDoor').addClass('show').removeClass('hide')
					$('#imgfj40back-2').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj40-backDoorSIDE').addClass('show').removeClass('hide')
					$('#imgfj40backSIDE-2').addClass('hide').removeClass('show')
				}

		//LIGHTS HL
				if( milledheadlight.className === 'active' ){
				//FRONT
					$('#fj40-frontHL').addClass('show').removeClass('hide')

				//FRONT BAR
					$('#fj40-frontHLSIDE').addClass('show').removeClass('hide')

				}else if( newschoolheadlight.className === 'active' ){
				//FRONT
					$('#fj40-frontHL').addClass('hide').removeClass('show')

				//FRONT BAR
					$('#fj40-frontHLSIDE').addClass('hide').removeClass('show')
				}

		// LED BARS
				if( frontledbar.className === 'active' ){
				//FRONT
					$('#fj40-frontLedbar').addClass('show').removeClass('hide')
				//FRONT BAR
					$('#fj40-frontLedbarSIDE').addClass('show').removeClass('hide')

				}else if( noneledFRONT.className === 'active' ){
				//FRONT
					$('#fj40-frontLedbar').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#fj40-frontLedbarSIDE').addClass('hide').removeClass('show')
				}

				if( backledbar.className === 'active' ){
				//BACK
					$('#fj40-backLedbar').addClass('show').removeClass('hide')
				//BACK BAR
					$('#fj40-backLedbarSIDE').addClass('show').removeClass('hide')

				}else if( noneledBACK.className === 'active' ){
				//BACK
					$('#fj40-backLedbar').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj40-backLedbarSIDE').addClass('hide').removeClass('show')
				}


		//FRONT
				if( fj40front.className === 'active' ){
					$('#imgfj40front-1').addClass('show').removeClass('hide')
					$('#imgfj40front-2').addClass('show').removeClass('hide')
					$('#imgfj40front-3').addClass('show').removeClass('hide')
					$('#imgfj40front-4').addClass('show').removeClass('hide')
				//SIDE
					$('#img1').addClass('hide').removeClass('show')
					$('#img3').addClass('hide').removeClass('show')
					$('#img4').addClass('hide').removeClass('show')
					$('#img5').addClass('hide').removeClass('show')
					$('#img6').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#fj40-tc').addClass('hide').removeClass('show')
					$('#fj40-Wheel').addClass('hide').removeClass('show')
					$('#fj40-Tire').addClass('hide').removeClass('show')
					$('#fj40-PStep').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj40back-1').addClass('hide').removeClass('show')
					$('#imgfj40back-2').addClass('hide').removeClass('show')
					$('#imgfj40back-3').addClass('hide').removeClass('show')
					$('#imgfj40back-4').addClass('hide').removeClass('show')
					$('#imgfj40back-5').addClass('hide').removeClass('show')
					$('#imgfj40back-6').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#fj40-backWheel').addClass('hide').removeClass('show')
					$('#fj40-backTire').addClass('hide').removeClass('show')
					$('#fj40-backTire2').addClass('hide').removeClass('show')
					$('#fj40-backTechocompleto').addClass('hide').removeClass('show')
					$('#fj40-backDoor').addClass('hide').removeClass('show')
					$('#fj40-backLedbar').addClass('hide').removeClass('show')

		//SIDE		
				}else if( fj40side.className === 'active' ){
				//FRONT
					$('#imgfj40front-1').addClass('hide').removeClass('show')
					$('#imgfj40front-2').addClass('hide').removeClass('show')
					$('#imgfj40front-3').addClass('hide').removeClass('show')
					$('#imgfj40front-4').addClass('hide').removeClass('show')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
					$('#fj40-frontTire').addClass('hide').removeClass('show')
					$('#fj40-frontTechocompleto').addClass('hide').removeClass('show')
					$('#fj40-frontHL').addClass('hide').removeClass('show')
					$('#fj40-frontLedbar').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj40back-1').addClass('hide').removeClass('show')
					$('#imgfj40back-2').addClass('hide').removeClass('show')
					$('#imgfj40back-3').addClass('hide').removeClass('show')
					$('#imgfj40back-4').addClass('hide').removeClass('show')
					$('#imgfj40back-5').addClass('hide').removeClass('show')
					$('#imgfj40back-6').addClass('hide').removeClass('show')
					$('#imgfj40back-n').addClass('hide').removeClass('show')
					$('#imgfj40back-a').addClass('hide').removeClass('show')
					$('#imgfj40back-ac').addClass('hide').removeClass('show')
					$('#imgfj40back-bl').addClass('hide').removeClass('show')
					$('#imgfj40back-g').addClass('hide').removeClass('show')
					$('#imgfj40back-v').addClass('hide').removeClass('show')
					$('#imgfj40back-oc').addClass('hide').removeClass('show')
					$('#imgfj40back-o').addClass('hide').removeClass('show')
					$('#fj40-backWheel').addClass('hide').removeClass('show')
					$('#fj40-backTire').addClass('hide').removeClass('show')
					$('#fj40-backTire2').addClass('hide').removeClass('show')
					$('#fj40-backTechocompleto').addClass('hide').removeClass('show')
					$('#fj40-backDoor').addClass('hide').removeClass('show')
					$('#fj40-backLedbar').addClass('hide').removeClass('show')

		//BACK
				}else if( fj40back.className === 'active' ){
					$('#imgfj40back-n').addClass('show').removeClass('hide')
					$('#imgfj40back-1').addClass('show').removeClass('hide')
					$('#imgfj40back-2').addClass('show').removeClass('hide')
					$('#imgfj40back-3').addClass('show').removeClass('hide')
					$('#imgfj40back-4').addClass('show').removeClass('hide')
					$('#imgfj40back-5').addClass('show').removeClass('hide')
					$('#imgfj40back-6').addClass('show').removeClass('hide')
				//FRONT
					$('#imgfj40front-1').addClass('hide').removeClass('show')
					$('#imgfj40front-2').addClass('hide').removeClass('show')
					$('#imgfj40front-3').addClass('hide').removeClass('show')
					$('#imgfj40front-4').addClass('hide').removeClass('show')
					$('#imgfj40front-o').addClass('hide').removeClass('show')
					$('#imgfj40front-a').addClass('hide').removeClass('show')
					$('#imgfj40front-ac').addClass('hide').removeClass('show')
					$('#imgfj40front-bl').addClass('hide').removeClass('show')
					$('#imgfj40front-g').addClass('hide').removeClass('show')
					$('#imgfj40front-v').addClass('hide').removeClass('show')
					$('#imgfj40front-oc').addClass('hide').removeClass('show')
					$('#imgfj40front-n').addClass('hide').removeClass('show')
					$('#fj40-frontTire').addClass('hide').removeClass('show')
					$('#fj40-frontTechocompleto').addClass('hide').removeClass('show')
					$('#fj40-frontHL').addClass('hide').removeClass('show')
					$('#fj40-frontLedbar').addClass('hide').removeClass('show')
				//SIDE
					$('#img1').addClass('hide').removeClass('show')
					$('#img3').addClass('hide').removeClass('show')
					$('#img4').addClass('hide').removeClass('show')
					$('#img5').addClass('hide').removeClass('show')
					$('#img6').addClass('hide').removeClass('show')
					$('#imgn').addClass('hide').removeClass('show')
					$('#imgo').addClass('hide').removeClass('show')
					$('#imga').addClass('hide').removeClass('show')
					$('#imgbl').addClass('hide').removeClass('show')
					$('#imgv').addClass('hide').removeClass('show')
					$('#imgoc').addClass('hide').removeClass('show')
					$('#imgg').addClass('hide').removeClass('show')
					$('#imgac').addClass('hide').removeClass('show')
					$('#fj40-tc').addClass('hide').removeClass('show')
					$('#fj40-Wheel').addClass('hide').removeClass('show')
					$('#fj40-Tire').addClass('hide').removeClass('show')
					$('#fj40-PStep').addClass('hide').removeClass('show')

				}








// FJ44
		}else if( fj44.className === 'active' ){
			$('#imgfj44-1').addClass('show').removeClass('hide')
			$('#imgfj44-2').addClass('show').removeClass('hide')
			$('#imgfj44-3').addClass('show').removeClass('hide')
			$('#imgfj44-4').addClass('show').removeClass('hide')
			$('#imgfj44-5').addClass('show').removeClass('hide')
			$('#imgfj44-n').addClass('show').removeClass('hide')
		//SIDE BAR
			$('#imgfj44-1SIDE').addClass('show').removeClass('hide')
			$('#imgfj44-2SIDE').addClass('show').removeClass('hide')
			$('#imgfj44-3SIDE').addClass('show').removeClass('hide')
			$('#imgfj44-4SIDE').addClass('show').removeClass('hide')
			$('#imgfj44-5SIDE').addClass('show').removeClass('hide')
			$('#imgfj44-nSIDE').addClass('show').removeClass('hide')
		//FRONT BAR
			$('#imgfj44frontSIDE-1').addClass('show').removeClass('hide')
			$('#imgfj44frontSIDE-2').addClass('show').removeClass('hide')
			$('#imgfj44frontSIDE-3').addClass('show').removeClass('hide')
			$('#imgfj44frontSIDE-4').addClass('show').removeClass('hide')
			$('#imgfj44frontSIDE-n').addClass('show').removeClass('hide')
		//BACK BAR
			$('#imgfj44backSIDE-1').addClass('show').removeClass('hide')
			$('#imgfj44backSIDE-2').addClass('show').removeClass('hide')
			$('#imgfj44backSIDE-3').addClass('show').removeClass('hide')
			$('#imgfj44backSIDE-4').addClass('show').removeClass('hide')
			$('#imgfj44backSIDE-5').addClass('show').removeClass('hide')
			$('#imgfj44backSIDE-6').addClass('show').removeClass('hide')
			$('#imgfj44backSIDE-n').addClass('show').removeClass('hide')

	// HIDE FJ40
		//SIDE
			$('#img1').addClass('hide').removeClass('show')
			$('#img3').addClass('hide').removeClass('show')
			$('#img4').addClass('hide').removeClass('show')
			$('#img5').addClass('hide').removeClass('show')
			$('#img6').addClass('hide').removeClass('show')
			$('#imgn').addClass('hide').removeClass('show')
			$('#imgo').addClass('hide').removeClass('show')
			$('#imga').addClass('hide').removeClass('show')
			$('#imgbl').addClass('hide').removeClass('show')
			$('#imgv').addClass('hide').removeClass('show')
			$('#imgoc').addClass('hide').removeClass('show')
			$('#imgg').addClass('hide').removeClass('show')
			$('#imgac').addClass('hide').removeClass('show')
			$('#fj40-tc').addClass('hide').removeClass('show')
			$('#fj40-Wheel').addClass('hide').removeClass('show')
			$('#fj40-Tire').addClass('hide').removeClass('show')
			$('#fj40-PStep').addClass('hide').removeClass('show')
		//SIDEBAR
			$('#img1-side').addClass('hide').removeClass('show')
			$('#img3-side').addClass('hide').removeClass('show')
			$('#img4-side').addClass('hide').removeClass('show')
			$('#img5-side').addClass('hide').removeClass('show')
			$('#img6-side').addClass('hide').removeClass('show')
			$('#imgn-side').addClass('hide').removeClass('show')
			$('#imgo-side').addClass('hide').removeClass('show')
			$('#imga-side').addClass('hide').removeClass('show')
			$('#imgbl-side').addClass('hide').removeClass('show')
			$('#imgv-side').addClass('hide').removeClass('show')
			$('#imgoc-side').addClass('hide').removeClass('show')
			$('#imgg-side').addClass('hide').removeClass('show')
			$('#imgac-side').addClass('hide').removeClass('show')
			$('#fj40-tc-side').addClass('hide').removeClass('show')
			$('#fj40-Wheel-side').addClass('hide').removeClass('show')
			$('#fj40-Tire-side').addClass('hide').removeClass('show')
			$('#fj40-PStep-side').addClass('hide').removeClass('show')
		//FRONT
			$('#imgfj40front-n').addClass('hide').removeClass('show')
			$('#imgfj40front-1').addClass('hide').removeClass('show')
			$('#imgfj40front-2').addClass('hide').removeClass('show')
			$('#imgfj40front-3').addClass('hide').removeClass('show')
			$('#imgfj40front-4').addClass('hide').removeClass('show')
			$('#imgfj40front-a').addClass('hide').removeClass('show')
			$('#imgfj40front-ac').addClass('hide').removeClass('show')
			$('#imgfj40front-bl').addClass('hide').removeClass('show')
			$('#imgfj40front-o').addClass('hide').removeClass('show')
			$('#imgfj40front-oc').addClass('hide').removeClass('show')
			$('#imgfj40front-g').addClass('hide').removeClass('show')
			$('#imgfj40front-v').addClass('hide').removeClass('show')
			$('#fj40-frontTire').addClass('hide').removeClass('show')
			$('#fj40-frontTechocompleto').addClass('hide').removeClass('show')
			$('#fj40-frontHL').addClass('hide').removeClass('show')
			$('#fj40-frontLedbar').addClass('hide').removeClass('show')
		//FRONT BAR
			$('#imgfj40frontSIDE-n').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-1').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-2').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-3').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-4').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-a').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-ac').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-bl').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-o').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-oc').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-g').addClass('hide').removeClass('show')
			$('#imgfj40frontSIDE-v').addClass('hide').removeClass('show')
			$('#fj40-frontTireSIDE').addClass('hide').removeClass('show')
			$('#fj40-frontTechocompletoSIDE').addClass('hide').removeClass('show')
			$('#fj40-frontHLSIDE').addClass('hide').removeClass('show')
			$('#fj40-frontLedbarSIDE').addClass('hide').removeClass('show')
		//BACK
			$('#imgfj40back-1').addClass('hide').removeClass('show')
			$('#imgfj40back-2').addClass('hide').removeClass('show')
			$('#imgfj40back-3').addClass('hide').removeClass('show')
			$('#imgfj40back-4').addClass('hide').removeClass('show')
			$('#imgfj40back-5').addClass('hide').removeClass('show')
			$('#imgfj40back-6').addClass('hide').removeClass('show')
			$('#imgfj40back-o').addClass('hide').removeClass('show')
			$('#imgfj40back-a').addClass('hide').removeClass('show')
			$('#imgfj40back-ac').addClass('hide').removeClass('show')
			$('#imgfj40back-bl').addClass('hide').removeClass('show')
			$('#imgfj40back-g').addClass('hide').removeClass('show')
			$('#imgfj40back-v').addClass('hide').removeClass('show')
			$('#imgfj40back-oc').addClass('hide').removeClass('show')
			$('#imgfj40back-n').addClass('hide').removeClass('show')
			$('#fj40-backWheel').addClass('hide').removeClass('show')			
			$('#fj40-backTire').addClass('hide').removeClass('show')
			$('#fj40-backTire2').addClass('hide').removeClass('show')
			$('#fj40-backTechocompleto').addClass('hide').removeClass('show')
			$('#fj40-backDoor').addClass('hide').removeClass('show')
			$('#fj40-backLedbar').addClass('hide').removeClass('show')
		// BACK SIDEBAR
			$('#imgfj40backSIDE-1').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-2').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-3').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-4').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-5').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-6').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-o').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-a').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-ac').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-bl').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-g').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-v').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-oc').addClass('hide').removeClass('show')
			$('#imgfj40backSIDE-n').addClass('hide').removeClass('show')
			$('#fj40-backWheelSIDE').addClass('hide').removeClass('show')
			$('#fj40-backTireSIDE').addClass('hide').removeClass('show')
			$('#fj40-backTire2SIDE').addClass('hide').removeClass('show')
			$('#fj40-backTechocompletoSIDE').addClass('hide').removeClass('show')
			$('#fj40-backDoorSIDE').addClass('hide').removeClass('show')
			$('#fj40-backLedbarSIDE').addClass('hide').removeClass('show')


		//COLORS FJ44
				if ( orange.className === 'active' ){
				//SIDE
					$('#imgfj44-o').addClass('show').removeClass('hide')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-oSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-o').addClass('show').removeClass('hide')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-o').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-o').addClass('show').removeClass('hide')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-o').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
				}else if ( azul.className === 'active' ){
				//SIDE
					$('#imgfj44-a').addClass('show').removeClass('hide')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-aSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-a').addClass('show').removeClass('hide')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-a').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-a').addClass('show').removeClass('hide')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-a').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
				}else if ( azulClaro.className === 'active' ){
				//SIDE
					$('#imgfj44-ac').addClass('show').removeClass('hide')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-acSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-ac').addClass('show').removeClass('hide')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-ac').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-ac').addClass('show').removeClass('hide')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-ac').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
				}else if ( blanco.className === 'active' ){
				//SIDE
					$('#imgfj44-bl').addClass('show').removeClass('hide')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-blSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-bl').addClass('show').removeClass('hide')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-bl').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-bl').addClass('show').removeClass('hide')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-bl').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
				}else if ( verde.className === 'active' ){
				//SIDE
					$('#imgfj44-v').addClass('show').removeClass('hide')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-vSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-v').addClass('show').removeClass('hide')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-v').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-v').addClass('show').removeClass('hide')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-v').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
				}else if ( ocre.className === 'active' ){
				//SIDE
					$('#imgfj44-oc').addClass('show').removeClass('hide')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-ocSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-oc').addClass('show').removeClass('hide')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-oc').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-oc').addClass('show').removeClass('hide')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-oc').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
				}else if ( gris.className === 'active' ){
				//SIDE
					$('#imgfj44-g').addClass('show').removeClass('hide')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-gSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-nSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-g').addClass('show').removeClass('hide')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-g').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-g').addClass('show').removeClass('hide')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-g').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-n').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
				}else if ( negro.className === 'active' ){
				//SIDE
					$('#imgfj44-n').addClass('show').removeClass('hide')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
				//SIDE BAR
					$('#imgfj44-nSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-aSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-acSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-blSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-gSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-ocSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-oSIDE').addClass('hide').removeClass('show')
					$('#imgfj44-vSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-n').addClass('show').removeClass('hide')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-n').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44frontSIDE-v').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-n').addClass('show').removeClass('hide')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-n').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-a').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-ac').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-bl').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-g').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-oc').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-o').addClass('hide').removeClass('show')
					$('#imgfj44backSIDE-v').addClass('hide').removeClass('show')
				}

		//ROOF FJ44
				if( techoCompleto.className === 'active'){
				//SIDE
					$('#fj44-tc').addClass('show').removeClass('hide')
					$('#fj44-4').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#fj44-tcSIDE').addClass('show').removeClass('hide')
					$('#fj44-4').addClass('hide').removeClass('show')
				//FRONT
					$('#fj44-frontTechocompleto').addClass('show').removeClass('hide')
					$('#imgfj44front-4').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#fj44-frontTechocompletoSIDE').addClass('show').removeClass('hide')
					$('#imgfj44frontSIDE-4').addClass('hide').removeClass('show')
				//BACK
					$('#fj44-backTechocompleto').addClass('show').removeClass('hide')
					$('#imgfj44back-5').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj44-backTechocompletoSIDE').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-5').addClass('hide').removeClass('show')

				}else if( techoBikini.className === 'active' ){
				//SIDE
					$('#fj44-4').addClass('show').removeClass('hide')
					$('#fj44-tc').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#fj44-4').addClass('show').removeClass('hide')
					$('#fj44-tcSIDE').addClass('hide').removeClass('show')
				//FRONT
					$('#imgfj44front-4').addClass('show').removeClass('hide')
					$('#fj44-frontTechocompleto').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#imgfj44frontSIDE-4').addClass('show').removeClass('hide')
					$('#fj44-frontTechocompletoSIDE').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-5').addClass('show').removeClass('hide')
					$('#fj44-backTechocompleto').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-5').addClass('show').removeClass('hide')
					$('#fj44-backTechocompletoSIDE').addClass('hide').removeClass('show')
				}

		//TIRE/WHEEL FJ44
				if( oldschool.className === 'active' ){
				//SIDE
					$('#fj44-Wheel').addClass('show').removeClass('hide')
					$('#imgfj44-5').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#fj44-WheelSIDE').addClass('show').removeClass('hide')
					$('#imgfj44-5SIDE').addClass('hide').removeClass('show')
				//BACK
					$('#fj44-backWheel').addClass('show').removeClass('hide')
					$('#imgfj44back-6').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj44-backWheelSIDE').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-6').addClass('hide').removeClass('show')

						if( mt.className === 'active' ){
						//SIDE
							$('#fj44-Tire').addClass('show').removeClass('hide')
						//SIDEBAR
							$('#fj44-TireSIDE').addClass('show').removeClass('hide')
						//FRONT
							$('#fj44-frontTire').addClass('show').removeClass('hide')
						//FRONT BAR
							$('#fj44-frontTireSIDE').addClass('show').removeClass('hide')
						//BACK
							$('#fj44-backTire').addClass('show').removeClass('hide')
							$('#fj44-backTire2').addClass('show').removeClass('hide')
						//BACK BAR
							$('#fj44-backTireSIDE').addClass('show').removeClass('hide')
							$('#fj44-backTire2SIDE').addClass('show').removeClass('hide')

						}else if( goodrich.className === 'active' ){
						//SIDE
							$('#fj44-Tire').addClass('hide').removeClass('show')
						//SIDEBAR
							$('#fj44-TireSIDE').addClass('hide').removeClass('show')
						//FRONT
							$('#fj44-frontTire').addClass('hide').removeClass('show')
						//FRONT BAR
							$('#fj44-frontTireSIDE').addClass('hide').removeClass('show')
						//BACK
							$('#fj44-backTire').addClass('hide').removeClass('show')
							$('#fj44-backTire2').addClass('hide').removeClass('show')
						//BACK BAR
							$('#fj44-backTireSIDE').addClass('hide').removeClass('show')
							$('#fj44-backTire2SIDE').addClass('hide').removeClass('show')

						}
				}else if( newschool.className === 'active' ){
				//SIDE
					$('#imgfj44-5').addClass('show').removeClass('hide')
					$('#fj44-Wheel').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#imgfj44-5SIDE').addClass('show').removeClass('hide')
					$('#fj44-WheelSIDE').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-6').addClass('show').removeClass('hide')
					$('#fj44-backWheel').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-6').addClass('show').removeClass('hide')
					$('#fj44-backWheelSIDE').addClass('hide').removeClass('show')

						if( mt.className === 'active' ){
						//SIDE
							$('#fj44-Tire').addClass('show').removeClass('hide')
						//SIDEBAR
							$('#fj44-TireSIDE').addClass('show').removeClass('hide')
						//FRONT
							$('#fj44-frontTire').addClass('show').removeClass('hide')
						//FRONT BAR
							$('#fj44-frontTireSIDE').addClass('show').removeClass('hide')
						//BACK
							$('#fj44-backTire').addClass('show').removeClass('hide')
							$('#fj44-backTire2').addClass('show').removeClass('hide')
						//BACK BAR
							$('#fj44-backTireSIDE').addClass('show').removeClass('hide')
							$('#fj44-backTire2SIDE').addClass('show').removeClass('hide')

						}else if( goodrich.className === 'active' ){
						//SIDE
							$('#fj44-Tire').addClass('hide').removeClass('show')
						//SIDEBAT
							$('#fj44-TireSIDE').addClass('hide').removeClass('show')
						//FRONT
							$('#fj44-frontTire').addClass('hide').removeClass('show')
						//FRONT BAR
							$('#fj44-frontTireSIDE').addClass('hide').removeClass('show')
						//BACK
							$('#fj44-backTire').addClass('hide').removeClass('show')
							$('#fj44-backTire2').addClass('hide').removeClass('show')
						//BACK BAR
							$('#fj44-backTireSIDE').addClass('hide').removeClass('show')
							$('#fj44-backTire2SIDE').addClass('hide').removeClass('show')
						}
				}

		// ACCESSORIES FJ40
				if( poweredstep.className === 'active' ){
				//SIDE
					$('#fj44-PStep').addClass('show').removeClass('hide')
				//SIDEBAR
					$('#fj44-PStepSIDE').addClass('show').removeClass('hide')
				}else if( none.className === 'active' ){
				//SIDE
					$('#fj44-PStep').addClass('hide').removeClass('show')
				//SIDEBAR
					$('#fj44-PStepSIDE').addClass('hide').removeClass('show')
				}

		//LIGHTS HL
				if( milledheadlight.className === 'active' ){
				//FRONT
					$('#fj44-frontHL').addClass('show').removeClass('hide')

				//FRONT BAR
					$('#fj44-frontHLSIDE').addClass('show').removeClass('hide')

				}else if( newschoolheadlight.className === 'active' ){
				//FRONT
					$('#fj44-frontHL').addClass('hide').removeClass('show')

				//FRONT BAR
					$('#fj44-frontHLSIDE').addClass('hide').removeClass('show')
				}

		// LED BARS
				if( frontledbar.className === 'active' ){
				//FRONT
					$('#fj44-frontLedbar').addClass('show').removeClass('hide')
				//FRONT BAR
					$('#fj44-frontLedbarSIDE').addClass('show').removeClass('hide')

				}else if( noneledFRONT.className === 'active' ){
				//FRONT
					$('#fj44-frontLedbar').addClass('hide').removeClass('show')
				//FRONT BAR
					$('#fj44-frontLedbarSIDE').addClass('hide').removeClass('show')
				}

				if( backledbar.className === 'active' ){
				//BACK
					$('#fj44-backLedbar').addClass('show').removeClass('hide')
				//BACK BAR
					$('#fj44-backLedbarSIDE').addClass('show').removeClass('hide')

				}else if( noneledBACK.className === 'active' ){
				//BACK
					$('#fj44-backLedbar').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj44-backLedbarSIDE').addClass('hide').removeClass('show')
				}

		//TAILGATE FJ40
				if( dropdowndoor.className === 'active' ){
				//BACK
					$('#imgfj44back-2').addClass('show').removeClass('hide')
					$('#fj44-backDoor').addClass('hide').removeClass('show')
				//BACK BAR
					$('#imgfj44backSIDE-2').addClass('show').removeClass('hide')
					$('#fj44-backDoorSIDE').addClass('hide').removeClass('show')

				}else if( bifold.className === 'active' ){
				//BACK
					$('#fj44-backDoor').addClass('show').removeClass('hide')
					$('#imgfj44back-2').addClass('hide').removeClass('show')
				//BACK BAR
					$('#fj44-backDoorSIDE').addClass('show').removeClass('hide')
					$('#imgfj44backSIDE-2').addClass('hide').removeClass('show')
				}



		//FRONT
				if( fj44front.className === 'active' ){
					$('#imgfj44front-1').addClass('show').removeClass('hide')
					$('#imgfj44front-2').addClass('show').removeClass('hide')
					$('#imgfj44front-3').addClass('show').removeClass('hide')
					$('#imgfj44front-4').addClass('show').removeClass('hide')
					$('#imgfj44front-n').addClass('show').removeClass('hide')
				//SIDE
					$('#imgfj44-1').addClass('hide').removeClass('show')
					$('#imgfj44-2').addClass('hide').removeClass('show')
					$('#imgfj44-3').addClass('hide').removeClass('show')
					$('#imgfj44-4').addClass('hide').removeClass('show')
					$('#imgfj44-5').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
					$('#fj44-tc').addClass('hide').removeClass('show')
					$('#fj44-Wheel').addClass('hide').removeClass('show')
					$('#fj44-Tire').addClass('hide').removeClass('show')
					$('#fj44-PStep').addClass('hide').removeClass('show')
				//BACK
					$('#imgfj44back-1').addClass('hide').removeClass('show')
					$('#imgfj44back-2').addClass('hide').removeClass('show')
					$('#imgfj44back-3').addClass('hide').removeClass('show')
					$('#imgfj44back-4').addClass('hide').removeClass('show')
					$('#imgfj44back-5').addClass('hide').removeClass('show')
					$('#imgfj44back-6').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
					$('#fj44-backTechocompleto').addClass('hide').removeClass('show')
					$('#fj44-backWheel').addClass('hide').removeClass('show')
					$('#fj44-backTire').addClass('hide').removeClass('show')
					$('#fj44-backTire2').addClass('hide').removeClass('show')
					$('#fj44-backLedbar').addClass('hide').removeClass('show')
					$('#fj44-backDoor').addClass('hide').removeClass('show') 
				}
		//SIDE
				if( fj44side.className === 'active' ){
				//FRONT
					$('#imgfj44front-1').addClass('hide').removeClass('show')
					$('#imgfj44front-2').addClass('hide').removeClass('show')
					$('#imgfj44front-3').addClass('hide').removeClass('show')
					$('#imgfj44front-4').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
					$('#fj44-frontTechocompleto').addClass('hide').removeClass('show')
					$('#fj44-frontTire').addClass('hide').removeClass('show')
					$('#fj44-frontHL').addClass('hide').removeClass('show')
					$('#fj44-frontLedbar').addClass('hide').removeClass('show')

				//BACK
					$('#imgfj44back-1').addClass('hide').removeClass('show')
					$('#imgfj44back-2').addClass('hide').removeClass('show')
					$('#imgfj44back-3').addClass('hide').removeClass('show')
					$('#imgfj44back-4').addClass('hide').removeClass('show')
					$('#imgfj44back-5').addClass('hide').removeClass('show')
					$('#imgfj44back-6').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-n').addClass('hide').removeClass('show')
					$('#imgfj44back-a').addClass('hide').removeClass('show')
					$('#imgfj44back-ac').addClass('hide').removeClass('show')
					$('#imgfj44back-bl').addClass('hide').removeClass('show')
					$('#imgfj44back-g').addClass('hide').removeClass('show')
					$('#imgfj44back-oc').addClass('hide').removeClass('show')
					$('#imgfj44back-o').addClass('hide').removeClass('show')
					$('#imgfj44back-v').addClass('hide').removeClass('show')
					$('#fj44-backTechocompleto').addClass('hide').removeClass('show')
					$('#fj44-backWheel').addClass('hide').removeClass('show')
					$('#fj44-backTire').addClass('hide').removeClass('show')
					$('#fj44-backTire2').addClass('hide').removeClass('show')
					$('#fj44-backLedbar').addClass('hide').removeClass('show')
					$('#fj44-backDoor').addClass('hide').removeClass('show')

				}

		//BACK
				if( fj44back.className === 'active' ){
					$('#imgfj44back-1').addClass('show').removeClass('hide')
					$('#imgfj44back-2').addClass('show').removeClass('hide')
					$('#imgfj44back-3').addClass('show').removeClass('hide')
					$('#imgfj44back-4').addClass('show').removeClass('hide')
					$('#imgfj44back-5').addClass('show').removeClass('hide')
					$('#imgfj44back-6').addClass('show').removeClass('hide')
					$('#imgfj44back-n').addClass('show').removeClass('hide')
				//FRONT
					$('#imgfj44front-1').addClass('hide').removeClass('show')
					$('#imgfj44front-2').addClass('hide').removeClass('show')
					$('#imgfj44front-3').addClass('hide').removeClass('show')
					$('#imgfj44front-4').addClass('hide').removeClass('show')
					$('#imgfj44front-n').addClass('hide').removeClass('show')
					$('#imgfj44front-a').addClass('hide').removeClass('show')
					$('#imgfj44front-ac').addClass('hide').removeClass('show')
					$('#imgfj44front-bl').addClass('hide').removeClass('show')
					$('#imgfj44front-g').addClass('hide').removeClass('show')
					$('#imgfj44front-oc').addClass('hide').removeClass('show')
					$('#imgfj44front-o').addClass('hide').removeClass('show')
					$('#imgfj44front-v').addClass('hide').removeClass('show')
					$('#fj44-frontTechocompleto').addClass('hide').removeClass('show')
					$('#fj44-frontTire').addClass('hide').removeClass('show')
					$('#fj44-frontHL').addClass('hide').removeClass('show')
					$('#fj44-frontLedbar').addClass('hide').removeClass('show')
				//SIDE
					$('#imgfj44-1').addClass('hide').removeClass('show')
					$('#imgfj44-2').addClass('hide').removeClass('show')
					$('#imgfj44-3').addClass('hide').removeClass('show')
					$('#imgfj44-4').addClass('hide').removeClass('show')
					$('#imgfj44-5').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-o').addClass('hide').removeClass('show')
					$('#imgfj44-a').addClass('hide').removeClass('show')
					$('#imgfj44-ac').addClass('hide').removeClass('show')
					$('#imgfj44-bl').addClass('hide').removeClass('show')
					$('#imgfj44-g').addClass('hide').removeClass('show')
					$('#imgfj44-oc').addClass('hide').removeClass('show')
					$('#imgfj44-n').addClass('hide').removeClass('show')
					$('#imgfj44-v').addClass('hide').removeClass('show')
					$('#fj44-tc').addClass('hide').removeClass('show')
					$('#fj44-Wheel').addClass('hide').removeClass('show')
					$('#fj44-Tire').addClass('hide').removeClass('show')
					$('#fj44-PStep').addClass('hide').removeClass('show')
				}


		}

});

		
		
			
		

/* END MAIN */

