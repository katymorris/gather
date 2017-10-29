/* -------------------- GLOBALS -------------------- */
/* ------------------------------------------------ */

/* ----------- BROWSER SUPPORT ---------- */
//IE9 transit fallback
if (!$.support.transition) {
   $.fn.transition = $.fn.animate;
}
//check if user's browser is Chrome
var isChrome = !!window.chrome && !!window.chrome.webstore;
var windowWidth;
var vpWidth;
/* -------------------- PLUGINS -------------------- */
/* ------------------------------------------------ */

/* -------------------- AJAX -------------------- */
/* -------------------------------------------------- */

// //create friendship/follow
// function createFriendship(groupSubheader) {
//   	var data = {
//     friendship: {
//             'user_id': 
//         }
//     }
//   $.ajax({
//     type: "PUT",
//     beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
//     url: "/friendships",
//     data: data,
//     dataType: "json",
//     success: function(response) {
//         alert('success')

//     }, error: function(err) {
//         alert('error')
// 	}
//   });
// }

/* -------------------- FUNCTIONS -------------------- */
/* -------------------------------------------------- */
//we need to treat the window width variable differently depending on
//whether the user is using Chrome or not. Chrome interprets the window width
//larger than css does, so without treating them differently, there would be gaps
//in responsive breakpoints. Other browsers wth this issue should be added as noticed.
//Make sure to use the windowWidth variable rather than using $(window).width()
function setWindowWidth() {
	if (isChrome === true) {
		vpWidth = viewport().width;
   		windowWidth = vpWidth;
	} else {
		windowWidth = $(window).width();
	}
}
//get viewport size (do we need this? something they had in previous version)
function viewport() {
   var e = window, a = 'inner';
   if (!('innerWidth' in window )) {
       a = 'client';
       e = document.documentElement || document.body;
   }
   return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
/* --------------------- DOCUMENT READY ---------------------- */
/* ---------------------------------------------------------- */
$(document).ready(function(){
	setWindowWidth();

	// /* ---------- EVENT LISTENERS ------------- */
    // $('body').on('click', '.results-box > #search > .search-box > .add', function() {

    // });


	/* ----- HOVER EVENTS ------ */


}); // end document ready

$(window).resize(function() {
	setWindowWidth();

});