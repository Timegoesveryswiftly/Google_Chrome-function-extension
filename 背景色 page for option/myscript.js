var colors = document.getElementsByName('colors');

document.getElementById('save').onclick = function(){
  if (colors[0].checked){
    localStorage['color'] = '#cae5cd';
  } else if (colors[1].checked){
    localStorage['color'] = '#a4c2a9';
  } else if (colors[2].checked){
    localStorage['color'] = '#e0e7aa';
  } else if (colors[3].checked){
    localStorage['color'] = '#e8ec98';
  } else if (colors[4].checked){
    localStorage['color'] = '#00a497';
  } else if (colors[5].checked){
    localStorage['color'] = 'green';
  } else {
    localStorage['color'] = 'brown';
  }
}

document.body.onload = function(){
  switch(localStorage['color']){
    case '#cae5cd':
      colors[0].checked = true;
      break;
    case '#a4c2a9':
      colors[1].checked = true;
      break;
    case '#e0e7aa':
      colors[1].checked = true;
      break;
    case '#e8ec98':
      colors[1].checked = true;
      break;
    case '#00a497':
      colors[1].checked = true;
      break;
    case 'yellow':
      colors[2].checked = true;
      break;
    case 'brown':
      colors[2].checked = true;
      break;
    default:
      colors[0].checked = true;
      break;
  }
}
