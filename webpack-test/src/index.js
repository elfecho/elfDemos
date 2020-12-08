import avator from './avatar.jpg';
import style from './index.scss';
import createAvatar from './avatar'


createAvatar()


var img = new Image();
img.src = avator;
img.classList.add(style.avatar);

var root = document.getElementById('root');
root.append(img);





