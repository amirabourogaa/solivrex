import React from 'react';
import $ from 'jquery'
import "./counter.css"
export default function Counter() {
    function inVisible(element) {
        //Checking if the element is
        //visible in the viewport
        var WindowTop = $(window).scrollTop();
        var WindowBottom = WindowTop + $(window).height();
        var ElementTop = element.offset().top;
        var ElementBottom = ElementTop + element.height();
        //animating the element if it is
        //visible in the viewport
        if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
          animate(element);
      }
      
      function animate(element) {
        //Animating the element if not animated before
        if (!element.hasClass('ms-animated')) {
          var maxval = element.data('max');
          var html = element.html();
          element.addClass("ms-animated");
          $({
            countNum: element.html()
          }).animate({
            countNum: maxval
          }, {
            //duration 5 seconds
            duration: 5000,
            easing: 'linear',
            step: function() {
              element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
              element.html(this.countNum + html);
            }
          });
        }
      
      }
      
      //When the document is ready
      $(function() {
        //This is triggered when the
        //user scrolls the page
        $(window).scroll(function() {
          //Checking if each items to animate are 
          //visible in the viewport
          $("h2[data-max]").each(function() {
            inVisible($(this));
          });
        })
      });
      
  return <div>
    
<div className="container-fluid text-center">
  <div className="row">
    <div className="col-sm-3">
      <i id='icon' className="fa fa-user-circle"></i>
      <h2 data-max="50">+ Clients satisfaits</h2>
    </div>
    <div className="col-sm-3">
      <i id='icon' className="fa fa-users"></i>
      <h2 data-max="100">+ Partenaires</h2>
    </div>
    <div className="col-sm-3">
      <i id='icon' className="fa fa-check"></i>
      <h2 data-max="100">+ Colis livrés</h2>
    </div>
    <div className="col-sm-3">
      <i id='icon' className="fa fa-briefcase"></i>
      <h2 data-max="2" id="test">+ Agences</h2>
    </div>
  </div>
</div>
  </div>;
}
