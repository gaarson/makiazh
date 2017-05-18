function Common() {
  console.log('common');
    $(".articles-slider").slick({
      dots: true
    });
    $(".skin-slider").slick({
      dots: true
    });
    $(".cosmetic-slider").slick({
      dots: true
    });
    $(".make-up-slider").slick({
      dots: true
    });
    $(".lessons-sider").slick({
      dots: true
    });

  var list_ques = document.getElementsByClassName('ask');
  var r_buts = document.getElementsByTagName('input');
  var last_ques = document.getElementsByName('ques6')
  var n_ques = 0;
  for ( var i = 1; i < r_buts.length; i++ ){
    r_buts[i].addEventListener('click', nextQues.bind(this,i));
  }
  function nextQues(id,e){
    list_ques[n_ques].className = 'ask off';
    n_ques++;
    list_ques[n_ques].className = 'ask active';
  }
  for ( var i = 0; i < last_ques.length; i++ ){
    last_ques[i].addEventListener('click', quesRes.bind(this,i));
  }
  function quesRes(){
    document.getElementById('button').className = 'active';
  }

  document.getElementById('button').onclick = function() {

    document.getElementById('button').className = 'off';

    document.getElementById('fat').className='';
    document.getElementById('combo').className='';
    document.getElementById('normal').className='';
    document.getElementById('dry').className='';

    var one = document.getElementsByClassName('one');
    var two = document.getElementsByClassName('two');
    var thee = document.getElementsByClassName('three');
    var four = document.getElementsByClassName('for');
    var ball = 0;
    var i = 0;

    for(i=0; i < one.length; i++ ){
      if(one[i].checked) ball++;
    }
    for(i=0; i < two.length; i++ ){
      if(two[i].checked) ball += 2;
    }
    for(i=0; i < thee.length; i++ ){
      if(thee[i].checked) ball += 3;
    }
    for(i=0; i < four.length; i++ ){
      if(four[i].checked) ball += 4;
    }

    if ( ball >= 6 && ball <= 9 ){
      document.getElementById('fat').className='active';
    }
    if ( ball >= 10 && ball <= 14 ){
      document.getElementById('combo').className='active';
    }
    if ( ball >= 15 && ball <= 19 ){
      document.getElementById('normal').className='active';
    }
    if ( ball >= 20 && ball <= 24 ){
      document.getElementById('dry').className='active';
    }
  }
}
