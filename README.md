# 2주차 미션: React-Todo

# 서론


안녕하세요 🙌🏻   
17기 프론트엔드 **김문기** 입니다!!   

왜인지 모르겠는데 하나의 파일에 작성하는 js가 약간은 그리웠던 프로젝트입니다.
useMemo나 useCallback등의 함수를 사용해본적이 없어서 이번에 todo를 만들면서 사용해보아야겠다!
고 했던 1주일전의 저와는 다르게 아무것도 사용하지 ~~않았~~ 못했습니다

!!! 사용법 !!!
구현이 완벽하지 않아서 사용법을 적어놓겠습니다 ㅜㅜㅜㅜ
- 바탕화면의 아이콘을 한번 누르면 아이콘이 focus됩니다
- 바탕화면의 아이콘을 더블클릭하면 창이 열리거나 닫힙니다
- 이후는 지난주와 동일합니다!
~~모바일에서는 더블클릭이 안된다고 하더라고요... 모바일은 다음부터 기능 구현해보겠습니다😢~~
데스크탑의 모바일뷰로는 안되는데 핸드폰으로는 잘 되네요 ㅎㅎ

추가 구현하고 싶은 기능들이 많았는데, 체력과 시간 이슈로 저번주 과제를 react로 옮기는 것에 집중하기로했습니다 ㅜㅜ
- swipe기능
- drag and drop 기능
의 기능을 시도해보고 싶은데, 관심 있으신 분들은 함께 얘기해보면 좋을 것 같아요!

# 미션

## 미션 목표

- VSCode, Prettier를 이용하여 개발환경을 관리합니다.
- React의 기초를 이해합니다.
- React를 통한 어플리케이션 상태 관리 방법을 이해합니다.
- React Hooks에 대한 기초를 이해합니다.
- Styled-Components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.

## 기한

- 2023년 3월 24일 금요일

## Key Questions

- Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?
-> Document Model 인데 Virtual하다. 즉, 가상의 Document Model으로, DOM에 state가 업데이트 될 경우, update되는 state의 갯수 만큼 DOM이 렌더링이 되어야 하는데, Virtual Dom을 사용하면 state가 update되는것을 기다렸다가, DOM이 새로이 생성되기 전, 이전 상태 값과 현재의 update값을 비교하여 '달라진 부분만'을 DOM에 전달하여 한번의 렌더링을 진행할 수 있게 됩니다.

- 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?
-> 앞으로 자주 쓸 혹은 자주 쓰는 구조의 경우 Component로 따로 제작하여 반복 호출할 수 있음. 각각의 page나 component에서 필요한 js를 나누어 사용함으로서 코드 관리가 용이하다. 정도를 느꼈습니다.

- React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?
-> React에서 상태는 data를 hold하고 있는 객체로, 컴포넌트의 현재 상태를 저장하고 있는 공간정도로 생각할 수 있을 것 같습니다. 상태 관리를 할 때 react에서는 useState에 자동으로 제공되는 get, set함수를 사용하기도 하지만, 프로젝트 폴더 전체에서 효율적으로 상태 관리를 하기 위해 `context-api` `redux` `recoil`등의 외부 라이브러리를 사용하기도 합니다.
- Styled-Components 사용 후기 (CSS와 비교)
-> css와 비교할 때 css에서는 태그에 className을 열거하여 해당 className이 있는 경우 다른 스타일을 주는 식으로 해야했지만, styled-component를 사용하면 props를 css로 넘겨 css안에서 props의 값에 대한 렌더링을 할 수 있습니다. 또한, 가상 클래스 선택자 또한 하나의 블락(`)안에 작성함으로서 보다 깔끔한 코드 작성이 가능합니다.

## 필수 요건

- 1주차 미션의 결과물을 **그대로** React로 구현합니다
- Functional Components를 사용합니다
- React Hooks만을 사용해 상태를 관리합니다 
- (이번주는 Redux, MobX, Recoil, SWR등의 외부 상태관리 라이브러리를 사용하지 않아도 미션 수행에 지장이 없습니다.)

## 선택 요건

- 기존 Todo-list에 여러분들이 추가하고 싶은 기능과 디자인을 자유롭게 추가해보세요.

# 링크 및 참고자료

[Vercel 배포 링크](https://react-todo-17th-seven.vercel.app/)   

[진행하면서 적은 내용](https://moong23.notion.site/2-React-todo-bc0cb4a2a2104dcaa6a8986a08601186)
