const widthEl=document.getElementById('width');
const heightEl=document.getElementById('height');
const assembleEl=document.getElementById('assemble');
const totalEl=document.getElementById('total');
const detailEl=document.getElementById('detail');
const copyBtn=document.getElementById('copyBtn');
const buyBtn=document.getElementById('buyBtn');

/* 아래 구매 링크를 실제 카페24 상품 주소로 바꿔주세요. */
buyBtn.href='https://kdjavara.cafe24.com/';

function comma(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');}
function priceOf(type,size){return KD_PRICE[type][size-KD_PRICE.min]||0;}

function makeOptions(){
  for(let i=KD_PRICE.min;i<=KD_PRICE.max;i++){
    const wp=priceOf('width',i), hp=priceOf('height',i);
    widthEl.add(new Option(`${i}cm +${comma(wp)}원`, i));
    heightEl.add(new Option(`${i}cm +${comma(hp)}원`, i));
  }
}

function calc(){
  const w=Number(widthEl.value), h=Number(heightEl.value);
  const asm=assembleEl.checked;
  const total=KD_PRICE.base+priceOf('width',w)+priceOf('height',h)+(asm?KD_PRICE.assemble:0);
  totalEl.textContent=comma(total)+'원';
  detailEl.textContent=`가로 ${w}cm / 세로 ${h}cm / 조립요청 ${asm?'있음':'없음'}`;
  return {w,h,asm,total};
}

copyBtn.addEventListener('click', async ()=>{
  const r=calc();
  const text=`알루미늄 방범창 견적 문의\n가로: ${r.w}cm\n세로: ${r.h}cm\n조립요청: ${r.asm?'있음':'없음'}\n예상금액: ${comma(r.total)}원`;
  try{
    await navigator.clipboard.writeText(text);
    alert('견적내용이 복사되었습니다.');
  }catch(e){
    prompt('아래 내용을 복사해주세요.', text);
  }
});

widthEl.addEventListener('change',calc);
heightEl.addEventListener('change',calc);
assembleEl.addEventListener('change',calc);
makeOptions();
calc();
