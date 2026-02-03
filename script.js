// 모바일 네비게이션 토글
const navBtn = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navBtn) {
  navBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// 합격자 명단 더보기 토글
function toggleSuccess() {
  const hidden = document.getElementById('success-hidden');
  const btn = document.querySelector('.btn-toggle-success');
  hidden.classList.toggle('open');
  btn.textContent = hidden.classList.contains('open')
    ? '접기'
    : '더보기 (6명 더)';
}
