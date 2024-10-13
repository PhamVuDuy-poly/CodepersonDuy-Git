
let user = localStorage.getItem('user')
// console.log('Thông tin user: ',user);
const body = document.querySelector('body')
// Chuyển user từ tring sang dạng json
if(user){
  user = JSON.parse(user)
  console.log('Thông tin user: ',user.user);
  if(user.user.role!=='admin'){
      body.innerHTML = 'Bạn ko có quyền truy cập  '
  }
}else{
    body.innerHTML = 'Bạn ko có quyền truy cập'
}
