import { writable } from 'svelte/store';

// Store: 중앙 집중식 데이터 저장소

// 쓰기 가능한 형태의 함수를 초깃값과 함께 실행하면
// 어디서나 읽고 쓸 수 있는 외부에서 수정이 가능한 스토어 객체가 반환됨
export const storeName = writable('hello');

// 데이터처럼 사용할 수 있는 $ 표시가 붙어있으면, 무조건 store 객체의 데이터라고 볼 수 있음
